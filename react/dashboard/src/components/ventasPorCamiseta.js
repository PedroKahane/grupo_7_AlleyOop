import '../App.css';

function VentasPorCamiseta(props) {
    return (
        <div className="content_ventas">
            <p className="titulo"><span className="negrita"> {props.titulo}</span> : {props.cantidad}</p>
        </div>
    )
}

export default VentasPorCamiseta