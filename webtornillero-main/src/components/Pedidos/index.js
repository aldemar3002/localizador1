import React, { useRef } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import emailjs from '@emailjs/browser';
import ReactDOMServer from 'react-dom/server'
import "./styles.css"
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Pedidos = ({handleCount, handleMCount, nivelateCount}) => {

  const [nameInput, setNameInput] = useState('')
  const [mailInput, setMailInput] = useState('')
  const [phoneInput, setPhoneInput] = useState('')
  const [items, setItems] = useState([])
  const [productInput, setProductInput] = useState('')
  const [quantityInput, setQuantityInput] = useState('')
  const [address1Input, setAddress1Input] = useState('')
  const [address2Input, setAddress2Input] = useState('')
  const [cityInput, setCityInput] = useState('')
  const [stateInput, setStateInput] = useState('')
  const [zipInput, setZipInput] = useState('')
  const [searchParams] = useSearchParams();

  const [cartItems, setCartItems] = useState([])

  const form = useRef();

  useEffect(() => {
    document.getElementById("phoneNumberInput").classList.add("form-control")
    let param = searchParams.get("producto")
    if (param) {
      setProductInput(param)
    }
    if (localStorage.getItem("cart") !== undefined && localStorage.getItem("cart") !== null){
      localStorage.setItem("cart", localStorage.getItem("cart"));
      setCartItems(JSON.parse(localStorage.getItem("cart")))
    }
    if (localStorage.getItem("items") !== undefined && localStorage.getItem("items") !== null){
      localStorage.setItem("items", localStorage.getItem("items"));
      setItems(JSON.parse(localStorage.getItem("items")))
    }
  }, [searchParams])

  useEffect(() => {
    if (cartItems.length > 0){
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems])

  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("items", JSON.stringify(items));
    }
  }, [items])
  
  

  const addProduct = () => {
    if (productInput !== "" && quantityInput > 0) {
      if(items.findIndex(item => item.product === productInput) !== -1) {
        setItems(
          items.map(item => {
            if (item.product === productInput ){
              nivelateCount(item.quantity, quantityInput)
              return {...item, "quantity": quantityInput}
            }
            else {
              return item 
  
            }
          }))
      }
      else{
        setItems([...items, {"product": productInput, "quantity": quantityInput}])
        handleCount(quantityInput);
      }
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const deleteProduct = (index) => {
    handleMCount(items[index].quantity)
    items.splice(index, 1);
    setItems([...items])
    localStorage.setItem("items", JSON.stringify(items));
  }

  const subsctractProduct = (index) => {
    if (items[index].quantity - 1 > 0) {
      items[index].quantity--;
    }
    else {
      deleteProduct(index);
    }
    handleMCount()
    setItems([...items])
  }

  const increaseProduct = (index) => {
    items[index].quantity++;
    handleCount();
    setItems([...items])
  }

  const deleteProductCart = (index) => {
    handleMCount(cartItems[index][1])
    cartItems.splice(index, 1);
    setCartItems([...cartItems])
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  const subsctractProductCart = (index) => {
    if (cartItems[index][1] - 1 > 0) {
      cartItems[index][1]--;
    }
    else {
      deleteProductCart(index);
    }
    handleMCount()
    setCartItems([...cartItems])
  }

  const increaseProductCart = (index) => {
    handleCount();
    cartItems[index][1]++;
    setCartItems([...cartItems])
  }

  const sendEmail = (e) => {
    const load = toast('Cargando...')
    e.preventDefault();

    const textTo0 = ReactDOMServer.renderToString(<>
        <h3>
          Datos de Contacto
        </h3>
        <p>Nombre: {nameInput}</p>
        <p>Correo: {mailInput}</p>
        <p>Celular: {phoneInput}</p>
    </>)

    const textTo1 = ReactDOMServer.renderToString(<>
    <h3>
      Datos de Pedido
    </h3>
    {cartItems.map((ele, index) => {
      if (ele[0] !== "0") {
        return (
          <div style={{"display":"flex","alignItems":"center","justifyContent":"space-around","backgroundColor":"aliceblue"}} key={ele[0]}>
            <div style={{"width":"40%","display":"flex","alignItems":"center","justifyContent":"center"}}>
              <p className='product-desc'>{ele[2]}</p>
            </div>
            <div style={{"width":"40%","display":"flex","alignItems":"center","justifyContent":"center"}}>
              <p className='product-desc'>{ele[1]}</p>
            </div>
          </div>
        )
      }
      return(<></>);
    })}
    </>)

  const textTo2 = ReactDOMServer.renderToString(items.map((ele, index) => (
    <div style={{"display":"flex","alignItems":"center","justifyContent":"space-around","backgroundColor":"antiquewhite"}} key={index}>
      <div style={{"width":"40%","display":"flex","alignItems":"center","justifyContent":"center"}}>
        <p className='product-desc'>{ele.product}</p>
      </div>
      <div style={{"width":"40%","display":"flex","alignItems":"center","justifyContent":"center"}}>
        <p className='product-desc'>{ele.quantity}</p>
      </div>
    </div>
  )))

  const textTo3 = ReactDOMServer.renderToString(
        <>
        <h3>
          Datos de Envío
        </h3>
        <p>Dirección: {address1Input}</p>
        <p>Dirección 2: {address2Input}</p>
        <p>Ciudad: {cityInput}</p>
        <p>Estado: {stateInput}</p>
        <p>C.P.: {zipInput}</p>
        </>)

  const textTo = textTo0 + textTo1 + textTo2 + textTo3;

  const templateParams = {
      user_name: nameInput,
      user_mail: mailInput,
      text: textTo
  };

  emailjs.send('service_1twye69', 'template_bs489bb', templateParams, 'z5OjS3KJIHi-8AIA4')
    .then((result) => {
        console.log(result.text);
        toast.dismiss(load);
        toast.success('Mensaje Enviado')
    }, (error) => {
        console.log(error.text);
        toast.dismiss(load);
        toast.error('Un error a ocurrido')
    });
  };
  

    return (
        <>
        <ToastContainer />
        <div className='contact-container'>
        <form className="row g-3" ref={form} onSubmit={sendEmail}>
          <div className='col-12'>
            <h4>Datos de Pedido</h4>
          </div>
  <div className="col-md-12">
    <label htmlFor="nameTextInput" className="form-label">Nombre</label>
    <input required type="text" className="form-control" id="nameTextInput" placeholder='Nombre Completo' value={nameInput} onChange={e=>setNameInput(e.target.value)}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="mailTextInput" className="form-label">Correo Electrónico</label>
    <input required type="email" className="form-control" id="mailTextInput" placeholder='ejemplo@correo.com' value={mailInput} onChange={e=>setMailInput(e.target.value)}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="phoneNumberInput" className="form-label">Teléfono</label>
    <PhoneInput
      placeholder="(222) 222 2222"
      defaultCountry='MX'
      id="phoneNumberInput"
      required
      value={phoneInput}
      onChange={setPhoneInput}/>
  </div>

  <div>
    <p className='desc-section'>*Si no encontrase algún producto, agrégalo, nosotros nos encargamos</p>
  </div>

  <div className='col-md-6'>
    <label htmlFor="inputEmail4" className="form-label">Producto</label>
    <input type="text" className="form-control" id="inputEmail4" value={productInput} onChange={e=>setProductInput(e.target.value)} placeholder="Ingrese Producto"/>
  </div>
  <div className='col-md-4'>
    <label htmlFor="inputEmail4" className="form-label">Cantidad</label>
    <input type="text" className="form-control" id="inputEmail4" value={quantityInput} onChange={e=>setQuantityInput(e.target.value)} placeholder="Ingrese Cantidad"/>
  </div>
  <div className='col-md-2'>
    <button type="button" className="btn btn-primary add-product" onClick={() => addProduct()}>Añadir</button>
  </div>


  <div className='product-view'>
    <div className='product-section'>
      <p className='product-desc'>Producto</p>
    </div>
    <div className='product-section'>
      <p className='product-desc'>Cantidad</p>
    </div>
    <div className='product-section2'>
    </div>
  </div>
  {cartItems.map((ele, index) => {
    if (ele[0] !== "0") {
      return (
        <div className='product-view' key={ele[0]}>
          <div className='product-section'>
            <p className='product-desc'>{ele[2]}</p>
          </div>
          <div className='product-section'>
            <p className='product-desc'>{ele[1]}</p>
          </div>
          <div className='product-section2'>
            <button type="button" className="btn" onClick={() => deleteProductCart(index)}><i className="bi bi-x-lg"></i></button>
            <button type="button" className="btn" onClick={() => subsctractProductCart(index)}><i className="bi bi-dash-lg"></i></button>
            <button type="button" className="btn" onClick={() => increaseProductCart(index)}><i className="bi bi-plus-lg"></i></button>
          </div>
        </div>
      )
    }
    return(<></>);
  })}
  {items.map((ele, index) => (
    <div className='item-view' key={index}>
      <div className='product-section'>
        <p className='product-desc'>{ele.product}</p>
      </div>
      <div className='product-section'>
        <p className='product-desc'>{ele.quantity}</p>
      </div>
      <div className='product-section2'>
        <button type="button" className="btn" onClick={() => deleteProduct(index)}><i className="bi bi-x-lg"></i></button>
        <button type="button" className="btn" onClick={() => subsctractProduct(index)}><i className="bi bi-dash-lg"></i></button>
        <button type="button" className="btn" onClick={() => increaseProduct(index)}><i className="bi bi-plus-lg"></i></button>
      </div>
    </div>
  ))}

  <div className='col-12'>
            <h4>Datos de Envío</h4>
          </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Dirección</label>
    <input required type="text" className="form-control" id="inputAddress" placeholder="Calle" value={address1Input} onChange={e=>setAddress1Input(e.target.value)}/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Dirección 2 (Opcional)</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Casa, Apartamento o Estudio" value={address2Input} onChange={e=>setAddress2Input(e.target.value)}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">Ciudad</label>
    <input required type="text" className="form-control" id="inputCity" value={cityInput} onChange={e=>setCityInput(e.target.value)}/>
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">Estado</label>
    <input required type="text" className="form-control" id="inputState" value={stateInput} onChange={e=>setStateInput(e.target.value)}/>
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">C.P.</label>
    <input required type="text" className="form-control" id="inputZip" value={zipInput} onChange={e=>setZipInput(e.target.value)}/>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary" onClick={scrollToTop}>Enviar Pedido</button>
  </div>
</form>
        </div>
        </>
    )
}

export default Pedidos;