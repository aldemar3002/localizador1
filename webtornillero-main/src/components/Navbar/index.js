import React from 'react';
import { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import Logo from '../imgs/Logo_tornillero-1-removebg (1).png'
import "./styles.css"
import Footer from '../Footer';

const Navbar = ({itemsCount = 0}) => {

    const [searchInput, setsearchInput] = useState('')

    /* const location = useLocation(); */

    /* const loadTab = (path) => {
        switch (path) {
            case 'order':
                setIsActiveOrder(true)
                setIsActiveDashboard(false)
                setIsActiveInventory(false)
                break;
            case 'inventory':
                setIsActiveOrder(false)
                setIsActiveDashboard(false)
                setIsActiveInventory(true)
                break;
            default:
                setIsActiveOrder(false)
                setIsActiveDashboard(true)
                setIsActiveInventory(false)
                break;
      }
    }

    useEffect(() => {
        loadTab(location.pathname.slice(1));
    }, []) */

   /*  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  } */

  const handleSearch = (e) => {
    e.preventDefault()
    let action = "http://localhost:3000/pedidos?producto=" + searchInput;
    window.location.replace(action)
  }

    return (
        <>
        <nav>
        <div className="top-container">
        <div className="navbar">
                    <div className="navbar-container container">
                        <label for="burgir" id='burger' style={{position:'absolute'}}></label>
                        <input type="checkbox" name="burgir" id="burgir" aria-labelledby="burger"/>
                        <div className="hamburger-lines">
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div>
                        <ul className="menu-items">
                            <li><Link to="/webtornillero" className="nav-link px-2">Inicio</Link></li>
                            <li><Link to="/contact" className="nav-link px-2">Contacto</Link></li>
                            <li><Link to="/catalogo" className="nav-link px-2">Catálogo</Link></li>
                            <li><Link to="/pedidos" className="nav-link px-2">Carrito</Link></li>
                        </ul>
                    </div>
                </div>

            <div className="top-trapezoid"></div>

        </div>
        <div className="align-items-center header g-0 columns">
            <div className="column complements">
                <ul className="nav justify-content-center links-list">
                    <li><Link to="/webtornillero" className="nav-link px-2">Inicio</Link></li>
                    <li><Link to="/contact" className="nav-link px-2">Contacto</Link></li>
                    <li><Link to="/catalogo" className="nav-link px-2">Catálogo</Link></li>
                </ul>
            </div>
            
            <div className="column">
                <Link to="/webtornillero" className="align-items-center text-decoration-none">
                    <img className="logo" src={Logo} alt="Sr Tornillero Logo"/>
                </Link>
                <div className='search-base'>
                    <form onSubmit={(e) => handleSearch(e)} className="align-items-center">
                        <div className="input-group rounded search-section">
                            <input className="inp" placeholder="¿Qué necesitas hoy?" value={searchInput} onChange={(e) => setsearchInput(e.target.value)}/>
                        </div>
                    </form>   
                    <div className="bottom-design">
                        <div className="trapezoid"></div>
                        <div className="mini-trapezoid"></div>
                    </div>
                </div>
            </div>

            <div className="column complements">
                <div className='user-section'>
                    <Link to="/pedidos" type="button" className="btn btn-cart position-relative">
                        <i className="bi bi-cart right-icons"></i>
                        <span className="position-absolute start-100 translate-middle badge rounded-pill notification-badge">
                            {itemsCount ? itemsCount : 0}
                        </span>
                    </Link>
                </div>
            </div>
        </div>
        </nav>
        <div className="containerb">
            <Outlet/>
            <Footer/>
        </div>
        </>
    )
}

export default Navbar;