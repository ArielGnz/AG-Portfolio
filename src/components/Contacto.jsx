import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contacto = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_rjylbsd', 'template_zlqbhyr', form.current, {
            publicKey: 'xG_nxmaU6LUIH3K6j',
        })
        .then(
            () => {
                console.log('SUCCESS!');
                form.current.reset();
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
     };


    return (
        <div className="flex flex-col lg:flex-row lg:h-[500px] lg:w-[75%] m-auto mt-[300px] mb-10">
            <div id='contacto' className="mx-auto mt-4 w-[90%] h-[450px] lg:w-[40%] lg:h[400px] lg:m-10 ">
                <h1 className="text-6xl text-sky-500 font-bold m-10">Contactame!</h1>
                <p className="mx-10 text-white text-xl">Actualmente estoy buscando nuevas oportunidades. </p>
                <p className="mx-10 text-white text-xl">Quiero escuchar tu idea y averiguar cómo podemos trabajar juntos!</p>
                <div className='mt-6 mx-8'>
                    <a href="" className='pr-2 text-4xl text-white hover:text-sky-600'><i className='bi bi-linkedin px-2'></i></a>
                    <a href="" className='pr-2 text-4xl text-white hover:text-sky-600'><i className='bi bi-github px-2'></i></a>
                </div>
            </div>
            <div className="mx-auto mt-4 mb-4 w-[90%] h-[450px] lg:w-[60%] lg:h[400px] lg:m-10">
                <form ref={form} onSubmit={sendEmail} className="flex flex-col text-white m-6">
                    <span className="text-xl pb-2">Nombre</span>
                    <input type="text" name="user_name" className="bg-transparent h-[35px] outline-none border-b-2 rounded-lg border-slate-600" />
                    
                    
                    <span className="text-xl mt-4 py-2">Email</span>
                    <input type="email" name="user_email" className="bg-transparent h-[35px] outline-none border-b-2 rounded-lg border-slate-600" />
                    
                    
                    <span className="text-xl mt-4 py-2">Mensaje</span>
                    <textarea name="message" id="" cols="30" rows="4" className="bg-transparent outline-none border-b-2 rounded-lg border-slate-600"></textarea>

                    <button type='submit' value='Send' className="bg-sky-500 py-2 mt-4 rounded-lg text-xl"> Enviar Mensaje </button>
                </form>

            </div>
        </div>
    )
}

export default Contacto;