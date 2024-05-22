import uuid from '../../assets/uuid.png'

const UuidStore = () => {
    return (
        <>
            <div className='m-5 w-[90%] h-[300px] lg:my-10 lg:w-[75%] lg:h-[100%] lg:content-center'>
                <img src={uuid} alt="" className='w-full h-full lg:w-full lg:h-[370px] rounded-lg' />
            </div>
            <div className='text-white lg:h-[300px] w-[80%] m-auto lg:w-[80%] '>
                <h1 className='text-2xl text-sky-500 text-center font-bold tracking-widest pb-6'> Uuid-store </h1>
                <p className='text-white text-xl lg:w-[90%] lg:m-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus, veniam molestias voluptate corporis quaerat iusto nisi rerum accusantium porro aperiam ut, reprehenderit iure error fugit dolorum eius culpa similique.</p>
            </div>
        </>
    )
}

export default UuidStore;