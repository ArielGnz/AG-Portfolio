import logo from '../assets/Logo.png'


export default function Header(){
    return(
        <div>
            <nav className="flex justify-between py-10 m-auto px-10 text-lg font-medium tracking-widest md:items-center">
                <a href=""><img src={logo} alt="" width="28" /></a>
                <div id="menu" className='bg-white dark:bg-slate-800 p-7 h-[380px] w-[320px] flex flex-col items-start justify-around rounded-lg text-dark 
                dark:text-white md:flex-row md:w-full md:py-0 md:h-[50px] md:dark:bg-primary'> 
                    <ul className='flex h-5/6 flex-col justify-around md:flex-row md:justify-center w-full'>
                        <li className='md:px-5 hover:text-sky-600'><a href=""> Quien Soy </a></li>
                        <li className='md:px-5 hover:text-sky-600'><a href=""></a> Experiencia </li>
                        <li className='md:px-5 hover:text-sky-600'><a href=""></a> Proyectos </li>
                        <li className='md:px-5 hover:text-sky-600'><a href=""></a> Contactame </li>
                    </ul>

                    <button id="darkButton">
                        <i className="bi bi-moon-stars-fill text-sky-600 text-2xl"></i>
                    </button>
                </div>
                <button id="menu-button">
                        <i class="bi bi-list"></i>
                </button>
            </nav>
        </div>
    )
}