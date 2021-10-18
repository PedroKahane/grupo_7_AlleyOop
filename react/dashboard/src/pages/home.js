
import React, {Component,} from 'react'
import '../App.css';
import PieChart from '../components/Pie';
import VerticalBar from '../components/Chart';


import CardMAin from '../components/Card-Main';


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : 0,
            countProducts: 0,
            countVentas: 0,
            Ingresos: 0 
        }
    }
    apiCall(url, consecuencia){
        fetch(url)
        .then(response => response.json())
        .then(data => consecuencia(data))
        .catch(error => console.log(error))
    }
    componentDidMount(){
        this.apiCall(`http://localhost:3001/users`, this.mostrarCount)
        this.apiCall(`http://localhost:3001/products`, this.mostrarCountProducts)
        this.apiCall(`http://localhost:3001/ventas`, this.mostrarCountVentas)
        this.apiCall(`http://localhost:3001/ventas`, this.mostrarIngresos)
    }
    mostrarCount = (data) => {
        this.setState({
            count: data.count
        })
    }
    mostrarCountProducts = (data) => {
        this.setState({
            countProducts : data.count
        })
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
    componentDidUpdate(){

    }
    
      
    render() {
        return(
            <div className="flex">
             <CardMAin
             titulo = "Numero de usuarios: "
             number = {this.state.count}
             svg ="fas fa-user"
             ></CardMAin>
             <CardMAin
             titulo = "Cantidad de productos: "
             number = {this.state.countProducts}
             svg="fas fa-archive"
             ></CardMAin>
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
             <VerticalBar></VerticalBar>
             <PieChart></PieChart>
            </div>
        )
    }
    
}

export default Home