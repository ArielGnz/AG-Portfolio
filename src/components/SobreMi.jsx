import React from 'react'
import perfil from '../assets/perfil.png';

export default function SobreMi() {
  return (
    <div id='sobreMi' className='bg-slate-900 lg:h-[700px]'>
        <section className='flex flex-col lg:flex-row lg:h-[850px] lg:w-[80%] lg:m-auto'>
            
            <div className='p-10 lg:w-[90%] lg:h-[850px] lg:self-center lg:content-center'>
                <h1 className='text-sky-300 text-2xl font-bold tracking-widest leading-10 lg:text-4xl'> Acerca de Mi </h1>
                <p className='py-2 text-3xl font-bold text-slate-300 lg:text-5xl mt-5'> Quien Soy </p>
                <p className='mt-5 text-base text-slate-200'> ¡Hola! Mi nombre es Ariel Gonzalez, soy desarrollador FullStack radicado en Argentina.
                Soy capaz colaborar en todas las áreas del desarrollo. Con una combinación de experiencia trabajando tanto de forma autónoma como dentro de equipos ágiles,
                he acumulado una amplia comprensión del proceso de desarrollo, perfeccionado mis habilidades a través de proyectos reales.
                Me perfilo como un profesional proactivo, dedicado, resiliente, creativo y empático. Abordo cada proyecto con tenacidad y mentalidad de crecimiento y colaboración.
                Creo en el poder de la colaboración y la importancia del aprendizaje continuo. Mi objetivo no es sólo contribuir con mi experiencia a proyectos interesantes,
                sino también aprender de cada experiencia, mejorando mi oficio a lo largo del camino.
                </p>
                <h2 className='text-sky-300 text-2xl font-bold mt-4 '>Tecnologías</h2>
                <ul className='flex flex-col lg:flex-row text-slate-300 text-xl font-medium mt-2'>
                  <li className='lg:mr-4 lg:border-1 lg:px-2 lg:rounded-lg lg:bg-slate-800'>React</li>
                  <li className='lg:mr-4 lg:border-1 lg:px-2 lg:rounded-lg lg:bg-slate-800'>JavaScript</li>
                  <li className='lg:mr-4 lg:border-1 lg:px-2 lg:rounded-lg lg:bg-slate-800'>Node.JS</li>
                  <li className='lg:mr-4 lg:border-1 lg:px-2 lg:rounded-lg lg:bg-slate-800'>Express</li>
                  <li className='lg:mr-4 lg:border-1 lg:px-2 lg:rounded-lg lg:bg-slate-800'>PostgreSQL</li>
                  <li className='lg:mr-4 lg:border-1 lg:px-2 lg:rounded-lg lg:bg-slate-800'>Tailwind</li>
                </ul>
                <div className='mt-5'>
                    <button className='mt-3 border-2 rounded border-sky-500 p-4 w-[250px] text-white text-lg tracking-widest hover:bg-sky-900'> Contratame </button>
                    
                </div>
                                
            </div>

            <div className='my-10 w-full lg:content-center'>
                    <img className='w[300px] h-[320px] m-auto
                    lg:w-[400px] lg:h-[70%] lg:bg-center lg:bg-no-repeat rounded-full lg:rounded-full' src={perfil}/>
            </div>
        </section>
    </div>
  )
}
