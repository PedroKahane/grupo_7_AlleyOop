import React, {Component} from 'react'
import '../App.css';
import CardMAin from '../components/Card-Main';
import UltimoUsuario from '../components/ultimoUsuario';

class Usuarios extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            countAdmins: 0,
            lastUser:[]
    
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
        this.apiCall(`http://localhost:3001/users`, this.mostrarCountAdmins)
        this.apiCall(`http://localhost:3001/users`, this.mostrarLastUser)
        
    }
    mostrarCount = (data) => {
        this.setState({
            count: data.count
        })
    }
    mostrarCountAdmins = (data) => {
        this.setState({
            countAdmins: data.countAdmins
        })
    }
    mostrarLastUser = (data) => {
        this.setState({
            lastUser : data.lastUser
        })
        console.log(this.state.lastUser);
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
                titulo = "Numero de administradores: "
                number = {this.state.countAdmins}
                svg ="fas fa-user-cog"
                ></CardMAin>
                <div className="ultimasVentas">
                    <div className="flex_center">
                    <i className="fas fa-user-plus"></i>
                    <p className="tituloVentas">Último usuario registrado: </p>
                    </div>
                    {this.state.lastUser.map((element) => {
                        return <UltimoUsuario
                        nombre ={element.first_name}
                        apellido ={element.last_name}
                        id ={element.id}
                        email ={element.email}
                        ></UltimoUsuario>
                    })}
                </div>
            </div>
        )
    }
    
}


export default Usuarios