import React from 'react'
import perfil from '../assets/perfil.png';

export default function SobreMi() {
  return (
    <div id='sobreMi' className='bg-slate-900 lg:h-screen'>
        <section className='flex flex-col lg:flex-row lg:h-[850px] lg:w-[80%] lg:m-auto'>
            
            <div className='p-10 lg:w-[90%] lg:h-[850px] lg:self-center lg:content-center'>
                <h1 className='text-sky-300 text-2xl font-bold tracking-widest leading-10 lg:text-4xl'> Acerca de Mi </h1>
                <p className='py-2 text-3xl font-bold text-slate-300 lg:text-5xl mt-5'> Quien Soy </p>
                <p className='mt-5 text-lg text-slate-200'> ¡Hola! Mi nombre es Ariel Gonzalez, soy desarrollador FullStack radicado en Argentina.
                Puedo colaborar en todas las áreas del desarrollo. Con una combinación de experiencia trabajando tanto de forma autónoma como dentro de equipos ágiles,
                he acumulado una amplia comprensión del proceso de desarrollo, perfeccionado mis habilidades a través de proyectos reales.
                Me perfilo como un profesional proactivo, dedicado, resiliente, creativo y empático. Abordo cada proyecto con tenacidad y mentalidad de crecimiento y colaboración.
                Creo en el poder de la colaboración y la importancia del aprendizaje continuo. Mi objetivo no es sólo contribuir con mi experiencia a proyectos interesantes,
                sino también aprender de cada experiencia, mejorando mi oficio a lo largo del camino.
                </p>
                <div className='mt-5'>
                    <button className='mt-3 border-2 rounded border-sky-500 p-4 w-[250px] text-white text-lg tracking-widest hover:bg-sky-900'> Contratame </button>
                    
                </div>
                                
            </div>

            <div className='my-10 w-full lg:content-center'>
                    <img className='w[300px] h-[320px] m-auto
                    lg:w-[400px] lg:h-[70%] lg:bg-center lg:bg-no-repeat ' src={perfil}/>
            </div>
        </section>
    </div>
  )
}
