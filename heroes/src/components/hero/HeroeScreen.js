import React, { useMemo } from 'react';
import { useParams, Navigate, useNavigate} from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroeScreen = () => {

  const {heroeId} = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

  const handleReturn = () =>{
      navigate(-1)
  }

  const {publisher,alter_ego,first_appearance,characters} = hero

  if(!hero){
    return <Navigate to = "/"/>
  }

  const imagePath = `/assets/${hero.id}.jpg`;

  return (<div className='row mt-5'>

              <div className='col-4 animate__animated animate__fadeInLeft'>

                  <img 
                    src={imagePath}
                    alt={hero.superhero}
                    className='img-thumbnail'
                  />

              </div>

              <div className='col-8 animate__animated animate__fadeInRight'>
                  <h3> {hero.superhero} </h3>
                    <ul className='list-group list-group-flush'>

                        <li className='list-group-item'> <b>Alter Ego: </b> {alter_ego} </li>
                        <li className='list-group-item'> <b>publisher: </b> {publisher} </li>
                        <li className='list-group-item'> <b>first Appearance </b> { first_appearance} </li>
                      
                    </ul>
                  <h5> characters</h5>
                  <p>{characters}</p>

                  <button className='btn btn-primary' onClick={handleReturn}>
                        regresar
                  </button>

              </div>
      
          </div>);
};
