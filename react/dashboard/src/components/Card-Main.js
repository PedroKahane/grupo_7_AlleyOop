import '../App.css';


function CardMAin(props) {
    return(
            <div className="Card">
                <div className="flex_column">
                <p className="title_card">{props.titulo}</p>
                <p className="info_card">{props.number}</p>
                </div>
                <div className="icon">
                    <i className={props.svg}></i>
                </div>
            </div>
            

    )
}
export default CardMAin