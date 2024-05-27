
import { useState } from 'react';

export default function Header(){

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return(
        <div className='w-full m-auto mt-0 border-b-4 border-slate-800 lg:fixed bg-slate-900'>
            <nav className="flex justify-between py-6 m-auto px-10 text-lg font-medium tracking-widest md:items-center lg:w-[85%]">
                <div><h1 className='font-serif italic text-3xl text-white bg-slate-700 rounded-full border-4 border-sky-500 p-2 ml-4 hover:text-sky-400'>AG</h1></div>
                <div id="menu" className={`p-5 h-[220px] w-[220px] flex flex-col items-center lg:justify-end rounded-lg  
                    text-white md:flex-row md:w-full md:py-0 md:h-[50px] ${menuVisible ? 'flex' : 'hidden'} md:flex `}> 
                    <ul className='flex h-5/6 flex-col justify-around md:flex-row md:justify-end w-full '>
                        <li className='md:px-8 hover:text-sky-600'><a href="#inicio"> Inicio </a></li>
                        <li className='md:px-8 hover:text-sky-600'><a href="#sobreMi"> Quien Soy </a></li>
                        <li className='md:px-8 hover:text-sky-600'><a href="#proyectos"> Proyectos </a></li>
                        <li className='md:px-8 hover:text-sky-600'><a href="#contacto"> Contactame </a></li>
                    </ul>
                </div>
                <button id="menu-button" className="absolute top-8 right-12 md:hidden" onClick={toggleMenu}>
                    <span
                        className="br-1 block bg-white my-2 rounded-md h-[3px] w-[28px]"
                    ></span>
                    <span
                        className="br-2 block bg-white my-2 rounded-md h-[3px] w-[28px]"
                    ></span>
                    <span
                        className="br-3 block bg-white my-2 rounded-md h-[3px] w-[28px]"
                    ></span>
                </button>
            </nav>
        </div>
    )
}