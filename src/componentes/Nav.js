import "./_Nav.scss";
import { Link } from "react-router-dom";

const Nav =()=>{
    return (
    <nav>
         <Link to={`/`}>
            <h1>FakeMeli</h1>
        </Link>
        <article className="botonera-nav">
            <p className="botones-nav">algo 1 </p>
            <p className="botones-nav">algo 2</p>
            <p className="botones-nav">algo 3</p>
        </article>
    </nav>
        
    )
}
export default Nav