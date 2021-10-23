
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
            Ultimas5Ventas: [],
            countByproduct: [],
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
            countVentas : data.count,
            countByproduct: data.countByProduct
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
        const data = {
            labels: this.state.countByproduct.map((element) => element.nombre),
            datasets: [
              {
                label: 'Ventas',
                data: this.state.countByproduct.map((element) => element.cantidad),
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 0.5,
              },
            ],
          };
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
             <div className="ultimasVentas">
                 <div className="flex_center">
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
             <VerticalBar
             data = {data}
             ></VerticalBar>
            </div>
        )
    }
    
}


export default Ventas