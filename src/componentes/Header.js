import "./_Header.scss";

const Header = ()=>{
    return(
        <header>
            <form>
                <label>
                    Buscar
                    <input type="text" placeholder="búsqueda de productos"/>
                    <input type="submit"/>
                </label>
            </form>
        </header>
    )
}
export default Header