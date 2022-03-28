import React, { useState } from 'react';




export const Divide = () => {

    const [cuenta, setCuenta] = useState("");

    const [propina, setPropina] = useState("");

    const [personas, setPersonas] = useState("");

    const [individual, setIndividual] = useState("");

    const [final, setFinal] = useState("");

    function calcularCuenta(){

        if(propina === ''){

            let total1 = Number(cuenta);
            let ResultadoIndividual = Number(total1/personas).toFixed(3)
    
        setFinal(total1);
        setIndividual(ResultadoIndividual);
        }
        else{

            let total1 = Number(cuenta) + Number(cuenta)*(Number(propina)/100).toFixed(3);
            let ResultadoIndividual = Number(total1/personas).toFixed(3)
    
        setFinal(total1);
        setIndividual(ResultadoIndividual);

        }


        

        
        
        

    }



  return (

        <div className='mt-10 mx-10 '>

                    <h1> Divide la cuenta</h1>
                    <div className="w-full max-w-xs ">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                         <label className="block text-gray-700 text-sm font-bold mb-2" for="TotalCuenta">
                        Total de la cuenta
                         </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                         id="total" type="text" placeholder="Total de la cuenta" value={cuenta} onChange={(e) => setCuenta(e.target.value)}/>
                        <p className="text-black-500 text-xs italic">Porfavor pon el total a pagar.</p>
                    </div>
                    
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="PropinaCuenta">
                         % de propina
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="Propina" type="text" placeholder="Propina" value={propina} onChange={(e) => setPropina(e.target.value)}/>
                        <p className="text-black-500 text-xs italic">Porfavor pon el porcentaje que deseas pagar de propina</p>
                    </div>

                    <div className="mb-4">
                         <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Numero de personas
                         </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                         id="Personas" type="text" placeholder="Numero de personas" value={personas} onChange={(e) => setPersonas(e.target.value)}/>
                        <p className="text-black-500 text-xs italic">Porfavor ingrese el numero de personas</p>
                    </div>

                    <div className="flex items-center justify-center">
                    <button className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={calcularCuenta}>
                        Calcular
                    </button>
                    
                    </div>

                        <div className='mt-5 text-x italic justify-center'>
                                  <p>Importe final {final}</p>
                            <p>Por persona: {individual}</p>
                            
                        </div>
                    </form>
                    </div>


  </div>);
};
