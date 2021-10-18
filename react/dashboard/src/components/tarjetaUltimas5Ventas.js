import '../App.css';

function Ultimas5Ventas(props) {
    return (
        <div className="content_ventas">
            <div className="flex_ventas">
            <p className="datos_product"><span>Jugador: </span>{props.jugador}</p>
            <p className="datos_product"><span>Equipo: </span>{props.equipo}</p>
            </div>
            <div className="flex_ventas">
            <p className="datos_product"><span>Precio: </span>{props.precio}</p>
            <p className="datos_product"> <span>Cantidad: </span>{props.cantidad}</p>
            </div>
        </div>
    )
}

export default Ultimas5Ventas