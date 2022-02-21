import "./App.scss";
import Nav from "./componentes/Nav"
import Busqueda from "./componentes/Busqueda"
import Main from "./componentes/Main"
import ModalTarjeta from "./componentes/ModalTarjeta"
import Footer from "./componentes/Footer"
import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"


const App = () => {

  
const [valorDelInput, setValorDelInput] = useState("")
const [busqueda, setBusqueda] = useState("Motorola")

const handleChange = (e) => setValorDelInput(e.target.value);  
const handleClick = () =>{
    setBusqueda(valorDelInput)
}  


  return (
    <div className="conteiner">
      <BrowserRouter>
        <Nav/>
        <Busqueda actualizarInput={handleChange}
            escucharClickDelBoton={handleClick}/>
            <Routes>
              <Route path="/" element={<Main busqueda={busqueda}/>}/>   
                 <Route path="/:idProducto" element={<ModalTarjeta/>} />     
            </Routes>
        
        <Footer/> 
       </BrowserRouter>
    </div>
  )
}

export default App;
