import React from 'react'
import dev from '../assets/dev.jpg'


export default function Titulo() {

    const handleDownload = () => {
        const pdfUrl = 'ArielGonzalezCV.pdf';
        window.open(pdfUrl, '_blank');
    }

    // <div className='mt-8 w-[350px]'>
    //             <a className='border-2 rounded border-sky-500 p-4 w-[350px] text-white text-lg tracking-widest hover:bg-sky-900' href="ArielGonzalezCV.pdf"> Descargar CV </a>
    //         </div>
  return (
    <section id='inicio' className='flex flex-col mt-[120px] lg:flex-row lg:h-screen lg:w-[80%] lg:m-auto lg:content-center border-b border-slate-800 '>
        <div  className='p-10 lg:w-[90%] my-10 w-full lg:h-[700px] lg:self-center lg:content-center '>
            <h1 className='text-sky-300 text-2xl font-bold tracking-widest leading-10 lg:text-4xl'> Hola, soy </h1>
            <p className='py-2 text-3xl font-bold text-slate-300 lg:text-7xl'> Ariel Gonzalez </p>
            <p className='text-3xl font-bold text-slate-600'> Full Stack Developer </p>
            <p className='mt-5 text-lg text-slate-200'> Bienvenido a mi Portfolio. Soy diseñador y desarrollador de aplicaciones 
                web, enfocado en crear productos accesibles para el mercado de la tecnología
            </p>
            <div className='mt-6'>
                <a href="" className='pr-2 text-4xl text-white hover:text-sky-600'><i className='bi bi-linkedin px-2'></i></a>
                <a href="" className='pr-2 text-4xl text-white hover:text-sky-600'><i className='bi bi-github px-2'></i></a>
            </div>
            <button className='mt-6 border-2 rounded border-sky-500 p-4 w-[200px] text-white text-lg tracking-widest hover:bg-sky-900'
                    onClick={handleDownload}>
                Descargar
            </button>
            
           
        </div>
        <div className='my-10 w-full lg:content-center'>
                <img className='w[300px] h-[320px] m-auto
                 lg:w-[500px] lg:h-[60%] lg:bg-center lg:bg-no-repeat rounded-lg ' src={dev}/>
        </div>
    </section>
  )
}
