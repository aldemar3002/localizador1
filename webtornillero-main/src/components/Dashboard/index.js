import React from 'react';
import { Link } from "react-router-dom";
import "./styles.css"
import Safe from '../imgs/99665.png'
import Support from '../imgs/839961.png'
import Discount from '../imgs/879757.png'
import Contacto from '../Contacto';

const Dashboard = () => {

    return (
        <>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
            </div>
            <div className="carousel-inner">

            <div className="carousel-item active">
                <img className='bd-placeholder-img backgorund-image' focusable="false" src="https://images.pexels.com/photos/936594/pexels-photo-936594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Screws Background'/>

                <div className="container">
                <div className="carousel-caption text-end">
                    <h1>Encuentra todo lo que necesites</h1>
                    <p>Nuestro catálogo tiene todo lo que buscas, aquí podras encontrar lo que necesites.</p>
                    <p><Link className="btn btn-lg btn-primary" to="/catalogo">Catálogo</Link></p>
                </div>
                </div>
            </div>

            <div className="carousel-item">
                <img className='bd-placeholder-img backgorund-image' focusable="false" src="https://images.pexels.com/photos/259988/pexels-photo-259988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Screws Background'/>

                <div className="container">
                <div className="carousel-caption">
                    <h1>¿Tienes dudas?</h1>
                    <p>No dudes en contactarnos, envíanos un mensaje por la web o llámanos.</p>
                    <p><Link className="btn btn-lg btn-primary" to="/contact">Contacto</Link></p>
                </div>
                </div>
            </div>


            <div className="carousel-item">
                <img className='bd-placeholder-img backgorund-image' focusable="false" src="https://images.pexels.com/photos/259968/pexels-photo-259968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Screws Background'/>

                <div className="container">
                <div className="carousel-caption text-start">
                    <h1>¿Buscas comprar en gran cantidad?</h1>
                    <p>Da click para obtener una cotización instantanea.</p>
                    <p><Link className="btn btn-lg btn-primary" to="/pedidos">Cotizar</Link></p>
                </div>
                </div>
            </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </button>
        </div>

        <div className="row row-cols-1 row-cols-lg-1 row-cols-md-1 row-cols-sm-1 plus-section my-3">
            <div className="col sols">
                <img alt="Secure Icon" src={Safe} className="plus-section-icons m-3"></img><span className='plus-section-text'>100% Seguro</span>
            </div>
            <div className="col sols">
                <img alt="Discount Icon" src={Discount} className="plus-section-icons m-3"></img><span className='plus-section-text'>Descuento Mayorista</span>
            </div>
            <div className="col sols">
                <img alt="Support Icon" src={Support} className="plus-section-icons m-3"></img><span className='plus-section-text'>Soporte 24/7</span>
            </div>
        </div>

        <div className='row row-cols-1 row-cols-md-2 plus-section m-0'>
            <div className='solsis p-0 values-container' style={{backgroundColor: "#000", position: "relative"}}>
                <img className='mission-picture' alt='Mission' src='https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'/>
                <div className='img-text'>
                        <h2 style={{color: "#fff"}} >Misión</h2>
                    </div>
            </div>
            <div className='solsis p-0 values-container' style={{position: "relative"}}>
                <div className='img-text'>
                <p>Nuestra misión es proporcionar el mejor y mayor surtido en tornillería, basado en el mejor precio del mercado, calidad y servicio. La cultura de nuestro grupo proporciona soluciones para todos nuestros clientes, generando una buena experiencia de compra.</p>
                </div>
            </div>
        </div>

        <div className='row row-cols-1 row-cols-md-2 plus-section m-0'>
            <div className='solsis p-0 values-container' style={{position: "relative"}}>
                <div className='img-text'>
                <p>Nuestra visión es ser una empresa con alta calidad de servicio al cliente, que cuente con la mayor cantidad de socios comerciales, logrando así ser una de las mejores opciones en el mercado de tornillería a nivel nacional.</p>
                </div>
            </div>
            <div className='solsis p-0 values-container' style={{backgroundColor: "#000", position: "relative"}}>
                <img className='mission-picture' alt='Vision' src='https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'/>
                <div className='img-text'>
                        <h2 style={{color: "#fff"}} >Visión</h2>
                    </div>
            </div>
        </div>

        <div>
            <Contacto/>
        </div>

        <div className='maps-container'>
            <iframe title='Maps Embeeded' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119561.90599859795!2d-100.52015897969135!3d20.53451123592089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d345c704ffdf87%3A0x74a0054d0a1fde09!2sSE%C3%91OR%20TORNILLERO!5e0!3m2!1ses-419!2smx!4v1693664902716!5m2!1ses-419!2smx" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>        
        </>
    )
}

export default Dashboard;