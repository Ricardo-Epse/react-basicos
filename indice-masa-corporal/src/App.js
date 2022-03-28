import React, { useState } from 'react';

export const App = () => {


const [altura, setAltura] = useState("");

const [peso, setPeso] = useState("");

const [resultado, setResultado] = useState("");

const [estado, setEstado] = useState("");

function calcularImc() {
    let imc = Number(peso / (altura / 100)**2).toFixed(3);
    setResultado(imc);

    let Resultado1 = getEstado(imc);

    setEstado(Resultado1);
}

function getEstado(imc){
  if(imc < 18.5){
    return 'Bajo de peso';
  }
  else if(imc <= 24.9 && imc > 18.5){
    return 'Normal';
  }
  else if(imc >= 25 && imc <= 29.9){
    return 'Sobrepeso';
  }
  else if (imc>=30){
    return 'obesidad'
  }
}

  return <div className='mt-10 mx-10'>

            <h1> Calculadora IMC</h1>
              <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                Altura (cm)
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="altura" type="text" placeholder="Altura" value={altura} onChange={(e) => setAltura(e.target.value)}/>
              <p className="text-black-500 text-xs italic">Porfavor pon tu altura.</p>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                Peso (kg)
              </label>
              <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Peso" type="text" placeholder="peso" value={peso} onChange={(e) => setPeso(e.target.value)}/>
              <p className="text-black-500 text-xs italic">Porfavor pon tu peso.</p>
            </div>
            <div className="flex items-center justify-center">
              <button className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={calcularImc}>
                Calcular
              </button>
              
            </div>

            <div className='mt-5 text-x italic justify-center'>
                <p>Tu estado: {estado}</p>
                <p>Tu Imc: {resultado}</p>
              </div>
          </form>
        </div>
  </div>;
};
