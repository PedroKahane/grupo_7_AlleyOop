import '../App.css';

function Listado(props) {
    return (
        <div className="content_ventas">
            <div className="flex_ventas_listado">
            <p className="titulo"><span>ID: </span>{props.id}</p>
            <p className="titulo"> <span>Jugador: </span>{props.jugador}</p>
            <p className="titulo"> <span>Color: </span>{props.color}</p>
            </div>
        </div>
    )
}

export default Listado