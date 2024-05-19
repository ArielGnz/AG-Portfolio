import React from 'react'

import {useState } from "react";
import Countries from './Countries';
import RickAndMorty from './RickAndMorty';
import UuidStore from './Uuid-store';
import Social from './Social';


export default function Proyectos() {

    const [view, setView] = useState("countries");

    const handleView = (option) => {
        setView(option);
      };

  return (
    <div id='proyectos' className='lg:h-[600px]'>
        <h2 className='text-3xl text-white font-bold tracking-widest w-[85%] m-auto text-center pt-[160px] '> Mis Proyectos</h2>
        <section id='proyectos' className='my-2 flex flex-col w-[90%] m-auto lg:flex-row lg:w-[80%] lg:my-16 lg:h-screen lg:content-center'>
            <div className='flex lg:flex-col lg:w-[20%] text-white lg:text-xl mt-6 '> 

                <button  className='border-b-2 mx-1 hover:border-sky-500 lg:border-2 bg-slate-700 w-[90%] px-4 py-5 mb-4 lg:rounded-lg' 
                        onClick={() => handleView("countries")}>
                    Countries
                </button>
                <button className='border-b-2 mx-1 hover:border-sky-500 lg:border-2 bg-slate-700 w-[90%] px-4 py-5 mb-4 lg:rounded-lg'
                        onClick={() => handleView("rick")}>
                    Rick and Morty
                </button>
                <button className='border-b-2 mx-1 hover:border-sky-500 lg:border-2 bg-slate-700 w-[90%] px-4 py-5 mb-4 lg:rounded-lg'
                        onClick={() => handleView("uuid")}>
                    uuid-store
                </button>
                <button className='border-b-2 mx-1 hover:border-sky-500 lg:border-2 bg-slate-700 w-[90%] px-4 py-5 mb-4 lg:rounded-lg'
                        onClick={() => handleView("social")}>
                    Red Social
                </button>

            </div>
            <div className='w-[100%] h-[600px] lg:w-[75%] lg:h-[380px] lg:ml-2 border border slate-200 rounded-lg'>
                <div className='flex flex-col lg:flex-row'>
                    {view === "countries" && (<Countries />)}
                </div>
                <div className='flex flex-col lg:flex-row'>
                    {view === "rick" && (<RickAndMorty />)}
                </div>
                <div className='flex flex-col lg:flex-row'>
                    {view === "uuid" && (<UuidStore />)}
                </div>
                <div className='flex flex-col lg:flex-row'>
                    {view === "social" && (<Social />)}
                </div>
            </div>
       </section>
    </div>
    
  )
}
