import React from 'react';
import { Link } from "react-router-dom";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "./styles.css"

const Footer = () => {

    return (
        <>
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>También puedes encontrarnos en estas redes:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/profile.php?id=61550671479537' rel="noreferrer" target="_blank" className='me-4 text-reset' aria-label="Ir a Facebook">
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='https://www.instagram.com/sr.tornillero' rel="noreferrer" target="_blank" className='me-4 text-reset' aria-label="Ir a Instagram">
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <p className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Señor Tornillero
              </p>
              <p>
              Nuestra amplia selección de tornillos de alta calidad está diseñada para satisfacer todas tus necesidades, desde pequeñas reparaciones hasta grandes construcciones.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <p className='text-uppercase fw-bold mb-4'>Productos</p>
              <p>
                <Link to='tienda' className='text-reset' aria-label="Tornillos">
                  Tornillos
                </Link>
              </p>
              <p>
                <Link to='tienda' className='text-reset' aria-label="Varillas">
                  Varillas
                </Link>
              </p>
              <p>
                <Link to='tienda' className='text-reset' aria-label="Tuercas">
                  Tuercas
                </Link>
              </p>
              <p>
                <Link to='tienda' className='text-reset' aria-label="Todo">
                  Ver Todo
                </Link>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <p className='text-uppercase fw-bold mb-4'>Navegación</p>
              <p>
                <Link to='tienda' className='text-reset' aria-label="Tienda">
                  Tienda
                </Link>
              </p>
              <p>
                <Link to='mayoristas' className='text-reset' aria-label="Mayoristas">
                  Mayoristas
                </Link>
              </p>
              <p>
                <Link to='catalogo' className='text-reset' aria-label="Catalogo">
                  Catálogo
                </Link>
              </p>
              <p>
                <Link to='nosotros' className='text-reset' aria-label="Nosotros">
                  Nosotros
                </Link>
              </p>
            </MDBCol>

            <MDBCol md='5' lg='4' xl='4' className='mx-auto mb-md-0 mb-4'>
              <p className='text-uppercase fw-bold mb-4'>Contacto</p>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                76900 El Pueblito, Qro, México
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                yaelrvherrera@grupcomhp.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' />+52 1 (442) 717-7372
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright: 
        <Link className='text-reset fw-bold px-1' to='/webtornillero' aria-label="Sr Tornillero">
          Señor Tornillero
        </Link>
      </div>
    </MDBFooter>
        </>
    )
}

export default Footer;