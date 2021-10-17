import '../App.css';

function UltimoProducto(props) {
    return (
        <div className="content_ventas">
            <div className="flex_ventas">
            <p className="datos_product"><span>Jugador: </span>{props.jugador}</p>
            <p className="datos_product"> <span>Equipo: </span>{props.equipo}</p>
            </div>
            <div className="flex_ventas">
            <p className="datos_product"><span>Precio: </span>{props.precio}</p>
            <p className="datos_product"><span>Color: </span>{props.color}</p>
            </div>
        </div>
    )
}

export default UltimoProducto