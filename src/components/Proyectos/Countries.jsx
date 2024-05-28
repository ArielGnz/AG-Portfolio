
import React from 'react';
import countries from '../../assets/countries.jpg';

export default function Countries() {
  return (
    <>
        <div className='m-5 w-[90%] h-[300px] lg:my-10 lg:w-[75%] lg:h-[100%] lg:content-center'>
            <img src={countries} alt="" className='w-full h-full lg:w-full lg:h-[370px] rounded-lg' />
        </div>
        <div className='text-white lg:h-[300px] w-[80%] m-auto lg:w-[80%] '>
            <h1 className='text-2xl text-sky-500 text-center font-bold tracking-widest pb-6'> Countries </h1>
            <p className='text-white text-xl lg:w-[90%] lg:m-auto '>El proyecto de countries es una página web donde se pueden visualizar todos los países en su home Page,
             además se puede hacer una búsqueda por distintos tipos de filtros y también poder ordenar de manera alfabética o por cantidad de población.
             También hay una sección donde a través de un formulario se pueden crear actividades y asignarla a los países. Podes visitar la pagina haciendo click aqui 
             <button className='mx-4 p-1 rounded-md transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'> Ver Pagina </button></p>
        </div>
        
    </>
  )
}
