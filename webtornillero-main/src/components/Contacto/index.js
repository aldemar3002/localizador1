import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./styles.css"

const Contacto = () => {

    const form = useRef();

    const sendEmail = (e) => {
        toast('Cargando...')
        e.preventDefault();
    
        emailjs.sendForm('service_1twye69', 'template_hhm8pcv', form.current, 'z5OjS3KJIHi-8AIA4')
          .then((result) => {
              console.log(result.text);
              toast.success('Mensaje Enviado')
          }, (error) => {
              console.log(error.text);
              toast.error('Un error a ocurrido')
          });
      };

    return (
        <>
        <div className='form-container'>
        <div className="contact-form">

        <ToastContainer />
        <h2 className="h1-responsive font-weight-bold text-center my-4">Contáctanos</h2>
        <p className="text-center w-responsive mx-auto mb-5">¿Buscas algo en específico o cotizaciones personalizadas? No dudes en contaactarnos.</p>

        <div className="row g-0">

        <div>
        <form id="contact-form" name="contact-form" ref={form} onSubmit={sendEmail}>

            <div className="row">

                <div className="col-md-6">
                    <div className="md-form mb-0">
                        <input type="text" id="name" name="user_name" className="form-control"/>
                        <label htmlFor="name" className="">Nombre</label>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="md-form mb-0">
                        <input type="text" id="email" name="user_email" className="form-control"/>
                        <label htmlFor="email" className="">Correo Electrónico</label>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="md-form mb-0">
                        <input type="text" id="subject" name="subject" className="form-control"/>
                        <label htmlFor="subject" className="">Asunto</label>
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col-md-12">

                    <div className="md-form">
                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                        <label htmlFor="message">Mensaje</label>
                    </div>

                </div>
            </div>

            <div className="text-center text-md-left">
                <button className="btn btn-primary" type='submit'>Envíar Mensaje</button>
            </div>
        </form>
        <div className="status"></div>
        </div>

        <div className="row row-cols-1 plus-section-plus my-3 text-center">
            <div className="col solsis2">
                <div><i className="bi bi-geo-alt fa-2x"></i>
                    <p>PLAZA ESTRELLA, Av. Paseo Constituyentes 1690, PUEBLITO VILLA, 76900 El Pueblito, Qro.</p>
                </div>
            </div>
            <div className="col solsis2">
                <div><i className="bi bi-telephone mt-4 fa-2x"></i>
                    <p>+52 1 442 717 7372</p>
                </div>
            </div>
            <div className="col solsis2">
                <div><i className="bi bi-whatsapp mt-4 fa-2x"></i>
                    <p>+52 1 442 207 6173</p>
                </div>
            </div>
            <div className="col solsis2">
                <div><i className="bi bi-envelope mt-4 fa-2x"></i>
                    <p style={{marginLeft:"-16px"}}>yaelrvherrera@grupcomhp.com</p>
                </div>
            </div>
        </div>


        </div>

        </div>
        </div>
        </>
    )
}

export default Contacto;