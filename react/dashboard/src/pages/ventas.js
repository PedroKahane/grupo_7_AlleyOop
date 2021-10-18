
import React, {Component} from 'react'
import '../App.css';

import CardMAin from '../components/Card-Main';
import Ultimas5Ventas from '../components/tarjetaUltimas5Ventas';
import VerticalBar from '../components/Chart';


class Ventas extends Component {
    constructor(props){
        super(props)
        this.state = {
            countVentas: 0,
            Ingresos: 0,
            Ultimas5Ventas: []
        }
    }
    apiCall(url, consecuencia){
        fetch(url)
        .then(response => response.json())
        .then(data => consecuencia(data))
        .catch(error => console.log(error))
    }
    componentDidMount(){
        this.apiCall(`http://localhost:3001/ventas`, this.mostrarCountVentas)
        this.apiCall(`http://localhost:3001/ventas`, this.mostrarIngresos)
        this.apiCall(`http://localhost:3001/ventas`, this.Ultimas5Ventas)
    }
    mostrarCountVentas = (data) => {
        this.setState({
            countVentas : data.count
        })
    }
    mostrarIngresos = (data) => {
        this.setState({
            Ingresos : '$ ' + data.TotalIngresos
        })
    }
    Ultimas5Ventas = (data) => {
        this.setState({
            Ultimas5Ventas : data.ultimas5Ventas
        })
        console.log(this.state.Ultimas5Ventas);
    }
    componentDidUpdate(){

    }
    
    render() {
        return(
            <div className="flex">
             <CardMAin
             titulo = "Cantidad de ventas: "
             number = {this.state.countVentas}
             svg="fas fa-truck"
             ></CardMAin>
             <CardMAin
             titulo = "Total de Ingresos: "
             number = {this.state.Ingresos}
             svg ="fas fa-wallet"
             ></CardMAin>
             <div className="ultimas5Ventas">
                 <div className="flex_center_5">
                 <i className="fas fa-clock"></i>
                 <p className="tituloVentas">Ultimas Cinco Ventas: </p>
                 </div>
                {this.state.Ultimas5Ventas.map((element) => {
                    return <Ultimas5Ventas
                    precio ={element.precio_total}
                    cantidad ={element.cantidad}
                    jugador ={element.producto.jugador}
                    equipo ={element.producto.equipo}
                    ></Ultimas5Ventas>
                })}
             </div>
             <VerticalBar></VerticalBar>
            </div>
        )
    }
    
}


export default Ventas