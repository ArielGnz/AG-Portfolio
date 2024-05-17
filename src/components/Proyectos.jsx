import React from 'react'

export default function Proyectos() {
  return (
    <div id='proyectos' className='lg:h-screen'>
        <h2 className='text-3xl text-white font-bold tracking-widest w-[85%] m-auto text-center pt-[160px] '>Proyectos</h2>
        <section id='proyectos' className='my-12 flex flex-col w-[90%] m-auto lg:flex-row lg:w-[90%] lg:my-28 lg:h-screen lg:content-center'>
            <div className='flex lg:flex-col lg:w-[20%] text-white lg:text-xl mt-12 '> 

                <button className='border-b-2 mx-1 hover:border-sky-500 lg:border-2 bg-slate-700 w-[90%] px-4 py-5 mb-4 lg:rounded-lg'>
                    Countries
                </button>
                <button className='border-b-2 mx-1 hover:border-sky-500 lg:border-2 bg-slate-700 w-[90%] px-4 py-5 mb-4 lg:rounded-lg'>
                    Rick and Morty
                </button>
                <button className='border-b-2 mx-1 hover:border-sky-500 lg:border-2 bg-slate-700 w-[90%] px-4 py-5 mb-4 lg:rounded-lg'>
                    uuid-store
                </button>
                <button className='border-b-2 mx-1 hover:border-sky-500 lg:border-2 bg-slate-700 w-[90%] px-4 py-5 mb-4 lg:rounded-lg'>
                    Red Social
                </button>

            </div>
            <div className='w-[100%] h-[600px] lg:w-[75%] lg:h-[500px] lg:ml-2 border-2 rounded-lg'>

            </div>
       </section>
    </div>
    
  )
}
