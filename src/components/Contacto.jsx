
const Contacto = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:h-[500px] lg:w-[85%] m-auto mt-[300px] mb-10">
            <div id='contacto' className="mx-auto mt-4 w-[90%] h-[450px] lg:w-[40%] lg:h[400px] lg:m-10 ">
                <h1 className="text-7xl text-sky-500 font-bold m-10">Contactame!</h1>
                <p className="mx-10 text-white text-xl">Actualmente estoy buscando nuevas oportunidades. </p>
                <p className="mx-10 text-white text-xl">Quiero escuchar tu idea y averiguar cómo podemos trabajar juntos!</p>
                <div className='mt-6 mx-8'>
                    <a href="" className='pr-2 text-4xl text-white hover:text-sky-600'><i className='bi bi-linkedin px-2'></i></a>
                    <a href="" className='pr-2 text-4xl text-white hover:text-sky-600'><i className='bi bi-github px-2'></i></a>
                </div>
            </div>
            <div className="mx-auto mt-4 mb-4 w-[90%] h-[450px] lg:w-[60%] lg:h[400px] lg:m-10 border-2">

            </div>
        </div>
    )
}

export default Contacto;