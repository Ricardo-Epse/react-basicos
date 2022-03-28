import React, { useMemo } from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

  const location = useLocation();

  const navigate = useNavigate();

  const {q = ''} = queryString.parse(location.search);
  

  const [formValues, handleInputChange] = useForm({
    searchText:  q,
  });

  const {searchText} = formValues;
  
  const heroesFiltrado = useMemo(() => getHeroesByName(q), [q]); 

  const handleSearch= (e) =>{
      e.preventDefault();
      console.log(searchText)
      navigate(`?q=${searchText}`)
  }


  return <>

    <hr/>

    <div className='row'>
        <div className='col-5'>
              <h4> Buscar </h4>
              <hr/>

              <form onSubmit={handleSearch}>

                <input type="text" placeholder='Busca un heroe' className='form-control' name="searchText" autoComplete='off' value={searchText} onChange={handleInputChange}/>
                <button type="submit" className="btn btn-primary mt-2">
                    buscar
                </button>
              </form>

        </div>

        <div className='col-7'>
          <h3> Resultados de tu busqueda </h3>
          <hr/>

          {
            (q === '') ? <div className='alert alert-info'> Buscar un heroe </div>
            : (heroesFiltrado.length === 0) && <div className='alert alert-danger'> No hay resultados : {q} </div>
          }

          {
            heroesFiltrado.map(hero => (
              <HeroCard 
              key={hero.id} {...hero}/>
              
            ))
          }

        </div>

    </div>
  </>;
};
