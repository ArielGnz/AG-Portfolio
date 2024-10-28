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
                <p className='text-white text-xl lg:w-[90%] lg:m-auto '>Proyecto final del bootcamp junto con otros 6 compañeros donde realizamos una e-commerce de zapatillas.
                Te dejo el link para que veas el repositorio
                <br/>
                <button className='pt-2'><span onClick={github} className='hover:text-sky-600'>https://github.com/Agus-Albarracin/uuid-store</span></button>
                </p>

            </div>
        </>
    )
}

export default UuidStore;