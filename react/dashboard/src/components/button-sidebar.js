import './App.css';
import {Link} from 'react-router-dom'
function Button(props) {
    return(
        <fragment>
            <Link to={props.Link} exact="true" className="selector_menu">
                <i className={props.svg}></i>
                <p name_menu>{props.nombre}</p>
            </Link>
        </fragment>
    )
}

export default Button