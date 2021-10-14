import '../App.css';
import CardMAin from '../components/Card-Main';

function Home(props) {
    return(
        <div className="flex">
         <CardMAin
         titulo = "Numero de usuarios: "
         number = "40"
         svg ="fas fa-user"
         background="icon blue"
         ></CardMAin>
         <CardMAin
         titulo = "Cantidad de productos: "
         number = "18"
         svg="fas fa-archive"
         background="icon red"
         ></CardMAin>
         <CardMAin
         titulo = "Ventas: "
         number = "9"
         svg="fas fa-truck"
         background="icon green"
         ></CardMAin>
        </div>
    )
}

export default Home