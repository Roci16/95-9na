import { useState, useEffect } from "react";
import "./_Main.scss";
import Card from "./Card"
import Header from "./Header"

const Main =()=>{ 
    
    const [productos, setProductos] = useState([]);
    useEffect(()=>{
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=Cartuchera")
        .then((res) => res.json())
        .then((data) => setProductos(data.results))
    },[])

    return(
        <main>
            <Header/>
            <section className="coleccion-tarjetas">
             { productos.map(producto=>(
                <Card
                    key={producto.id} 
                    title={producto.title}
                    image={producto.thumbnail}>
                </Card>
            ))}
             </section>
        </main>
    )
}

export default Main