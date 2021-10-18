import '../App.css';

function listadoProductos(props) {
    return (
        <div className="content_productos_listado">
            <div className="flex_ventas_listado">
            <p className="titulo">{props.id}</p>
            <p className="titulo">{props.jugador}</p>
            <p className="titulo">{props.color}</p>
            </div>
        </div>
    )
}

export default listadoProductos