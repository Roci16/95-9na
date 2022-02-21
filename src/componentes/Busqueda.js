import "./_Busqueda.scss";

const Busqueda = ({ actualizarInput, escucharClickDelBoton })=>{

    return(
        <header>
            <form>
                <label >
                    Buscar
                    <input  onChange={actualizarInput} type="text" placeholder="búsqueda de productos"/> 
                </label> 
            </form>
            <input type="submit" onClick={escucharClickDelBoton}/> 
        </header>
    )
}
export default Busqueda;