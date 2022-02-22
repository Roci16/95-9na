import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ModalTarjeta = () =>{

    const params = useParams()
    const [producto, setPoducto] = useState([])

    useEffect(()=>{
        fetch(`https://api.mercadolibre.com/items/${params.idProducto}`)
        .then(res=> res.json())
        .then(data => setPoducto(data))
    },[params.idProducto])

    console.log(producto);
    return(

        <article>
            <h2>{producto.title}</h2>
            <img src={producto.thumbnail }alt={producto.title}/>
            <span>${producto.price}</span>
            <p>{producto.condition}</p>
            <p>{producto.warranty}</p>
        </article>

    )
}
export default ModalTarjeta;
// http://localhost:3000/home/MLA864512442