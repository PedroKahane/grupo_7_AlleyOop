import '../App.css';

function UltimoUsuario(props) {
    return (
        <div className="content_ventas">
            <div className="flex_ventas">
            <p className="titulo_5"><span>Nombre: </span>{props.nombre}</p>
            <p className="titulo_5"> <span>Apellido: </span>{props.apellido}</p>
            </div>
            <div className="flex_ventas">
            <p className="datos_product"><span>ID: </span>{props.id}</p>
            <p className="datos_product"><span>E-mail: </span>{props.email}</p>
            </div>
        </div>
    )
}

export default UltimoUsuario