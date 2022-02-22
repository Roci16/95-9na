import "./_Card.scss";

const Card = ({image, title}) =>{
    return(
        <article className="tarjetas">
            <img src={image} alt={title}/>
            <h2>{title}</h2> 
        </article>
    )
}
export default Card 