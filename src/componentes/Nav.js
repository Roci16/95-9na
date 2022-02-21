import "./_Nav.scss";
import { Link } from "react-router-dom";

const Nav =()=>{
    return (
    <nav>
         <Link to={`/`}>
            <h1>FakeMeli</h1>
        </Link>
        <article className="botonera-nav">
            <a className="botones-nav">algo 1 </a>
            <a className="botones-nav">algo 2</a>
            <a className="botones-nav">algo 3</a>
        </article>
    </nav>
        
    )
}
export default Nav