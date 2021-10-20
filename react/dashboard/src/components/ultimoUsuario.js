import '../App.css';

function UltimoUsuario(props) {
    return (
        <div className="content_ventas">
            <div className="flex_ventas_listado">
            <p className="titulo">{props.id}</p>    
            <p className="titulo">{props.nombre}</p>
            <p className="titulo">{props.apellido}</p>
            <p className="titulo email">{props.email}</p>
            </div>
        </div>
    )
}

export default UltimoUsuario