const Card = (props) => {
    console.log({props});
    return (
        <div className="card">
            <img src={props.cardInfo.imgUrl} alt={props.cardInfo.name} className="card-img"/>
            <div className="card-body">
                <h3>{props.cardInfo.name}</h3>
                <p>{props.cardInfo.text}</p>
                <a className="btn btn-primary" href={props.cardInfo.link}>Read More</a>
            </div>
        </div>
    )
}; 
 
export default Card;