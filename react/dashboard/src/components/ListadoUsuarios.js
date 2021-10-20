import '../App.css';

function listadoUsuarios(props) {
    return (
        <div className="content_ventas">
            <div className="flex_ventas_listado">
            <p className="titulo">{props.id}</p>
            <p className="titulo">{props.firstName}</p>
            <p className="titulo email_lista">{props.email}</p>
            </div>
        </div>
    )
}

export default listadoUsuarios