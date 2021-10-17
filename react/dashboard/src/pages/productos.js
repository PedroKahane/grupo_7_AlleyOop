import React, {Component} from 'react'
import '../App.css';
import CardMAin from '../components/Card-Main';
import UltimoProducto from '../components/ultimoProducto';

class Productos extends Component {
    constructor(props){
        super(props)
        this.state = {
            countProducts: 0,
            lastProduct: []
    
        }
    }
    apiCall(url, consecuencia){
        fetch(url)
        .then(response => response.json())
        .then(data => consecuencia(data))
        .catch(error => console.log(error))
    }
    componentDidMount(){
        this.apiCall(`http://localhost:3001/products`, this.mostrarCountProducts)
        this.apiCall(`http://localhost:3001/products`, this.mostrarLastProduct)
        
        
    }
    mostrarCountProducts = (data) => {
        this.setState({
            countProducts : data.count
        })
    }
    mostrarLastProduct = (data) => {
        this.setState({
            lastProduct : data.lastProduct
        })
        console.log(this.state.lastProduct);
    }
    componentDidUpdate(){

    }
    
    render() {
        return(
            <div className="flex">
                <CardMAin
                titulo = "Cantidad de productos: "
                number = {this.state.countProducts}
                svg="fas fa-archive"
                ></CardMAin>
                <div className="ultimasVentas">
                    <div className="flex_center">
                    <i className="fas fa-basketball-ball"></i>
                    <p className="tituloVentas">Último producto creado: </p>
                    </div>
                    {this.state.lastProduct.map((element) => {
                        return <UltimoProducto
                        jugador ={element.jugador}
                        equipo ={element.equipo}
                        precio ={element.precio}
                        color ={element.Color.nombre}
                        ></UltimoProducto>
                    })}
                </div>
            </div>
        )
    }
    
}


export default Productos