
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
            Ingresos: 0,
            countByproduct: [],
            countByColor: []
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
            countProducts : data.count,
            countByColor: data.countByColor
        })
    }
    mostrarCountVentas = (data) => {
        this.setState({
            countVentas : data.count
        })
    }
    mostrarIngresos = (data) => {
        console.log(data);
        this.setState({
            Ingresos : '$ ' + data.TotalIngresos,
            countByproduct: data.countByProduct
        })
        console.log(this.state.countByproduct);
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
          const data2 = {
            labels: this.state.countByColor.map((element) => element.nombre),
            datasets: [
              {
                label: 'Cantidad de productos',
                data :  this.state.countByColor.map((element) => element.cantidad),
                backgroundColor: this.state.countByColor.map((element) => element.paletaRgba),
                borderColor: this.state.countByColor.map((element) => element.paleta),
                borderWidth: 1,
              },
            ],
          };
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
             <VerticalBar
             data = {data}
             ></VerticalBar>
             <PieChart
             data = {data2}
             ></PieChart>
            </div>
        )
    }
    
}

export default Home