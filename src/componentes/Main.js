import { useState, useEffect } from "react";
import "./_Main.scss";
import Card from "./Card"
import { Link } from "react-router-dom";

const Main =({ busqueda })=>{ 
    
    const [productos, setProductos] = useState([]);
    useEffect(()=>{
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`)
        .then((res) => res.json())
       .then((data)=>{
        setProductos(data.results)
       })
    }, [busqueda])


    return(
        <main>
            <section className="coleccion-tarjetas">
             { productos.map(producto=>(
                 <Link to={`/${producto.id}`} key={producto.id}>
                <Card
                    title={producto.title}
                    image={producto.thumbnail}>
                </Card>
                </Link>
            ))}
             </section>
        </main>
    )
}

export default Main