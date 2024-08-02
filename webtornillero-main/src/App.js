import {Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Mayoristas from './components/Mayoristas';
import Catalogo from './components/Catalogo';
import Nosotros from './components/Nosotros';
import Pedidos from './components/Pedidos';
import { useEffect, useState } from 'react';
import Contacto from './components/Contacto';

function App() {
  const user = localStorage.getItem("token");
  const [itemsCount, setItemsCount] = useState(0)

  useEffect(() => {
    if (!localStorage.getItem("count") || isNaN(localStorage.getItem("count"))) {
      setItemsCount(0)
    }else{
      setItemsCount(parseInt(localStorage.getItem("count")))
    }
  }, [])
  

  const handleCount = (p=1) => {
    setItemsCount(itemsCount + parseInt(p))
    localStorage.setItem("count", itemsCount + parseInt(p))
  }

  const handleMCount = (m=1) => {
    setItemsCount(itemsCount - parseInt(m))
    localStorage.setItem("count", itemsCount - parseInt(m))
  }

  const nivelateCount = (prevVal, newVal) => {
    setItemsCount(itemsCount + parseInt(newVal - prevVal))
    localStorage.setItem("count", itemsCount - parseInt(newVal - prevVal))
  }

  return (
    <div className="App">
      <Routes>
      {!user && <Route path="/" element={<Navbar itemsCount={itemsCount}/>} >
        <Route path='/webtornillero' exact element={<Dashboard/>}/>
        <Route path='/mayoristas' exact element={<Mayoristas/>}/>
        <Route path='/catalogo' exact element={<Catalogo handleCount={handleCount}/>}/>
        <Route path='/pedidos' exact element={<Pedidos handleCount={handleCount} handleMCount={handleMCount} nivelateCount={nivelateCount}/>}/>
        <Route path='/nosotros' exact element={<Nosotros/>}/>
        <Route path='/contact' exact element={<Contacto/>}/>
      </Route>}
    </Routes>
    </div>
  );
}

export default App;
