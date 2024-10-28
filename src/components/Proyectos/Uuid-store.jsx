import uuid from '../../assets/uuid.png'

const UuidStore = () => {

    const github = () => {
        const url = "https://github.com/Agus-Albarracin/uuid-store";
        window.open(url, '_blank');
    }

    return (
        <>
            <div className='m-5 w-[90%] h-[300px] lg:my-10 lg:w-[75%] lg:h-[100%] lg:content-center'>
                <img src={uuid} alt="" className='w-full h-full lg:w-full lg:h-[370px] rounded-lg' />
            </div>
            <div className='text-white lg:h-[300px] w-[80%] m-auto lg:w-[80%] '>
                <h1 className='text-2xl text-sky-500 text-center font-bold tracking-widest pb-6'> Uuid-store </h1>
                <p className='text-white text-xl lg:w-[90%] lg:m-auto '>Proyecto final del bootcamp junto con otros 6 compañeros donde realizamos una e-commerce de zapatillas.</p>
                
                {/* <span className='text-white text-xl lg:w-[90%] lg:m-auto '>https://github.com/Agus-Albarracin/uuid-store</span> */}

                <button onClick={github} className='pr-2 text-4xl text-white hover:text-sky-600'><i className='bi bi-github px-2'></i></button>
            </div>
        </>
    )
}

export default UuidStore;