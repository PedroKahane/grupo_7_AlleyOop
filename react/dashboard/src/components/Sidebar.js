import Button from './button-sidebar';
import logo from './../assets/alley-oop-logo.png'
import './App.css';

function Sidebar() {
    return(
        <fragment>
            <div className="sidebar">
                <img className="logo-sidebar" src={logo} alt="Alley-oop"></img>
                <Button 
                nombre = "Home"
                svg = "fas fa-home"
                Link="/"
                />
                <Button 
                nombre = "Usuarios"
                svg = "fas fa-user"
                Link="/Users"
                />
                 <Button 
                nombre = "Ventas"
                svg = "fas fa-truck"
                Link="/Sales"
                />
                <Button 
                nombre = "Productos"
                svg = "fas fa-archive"
                Link="/Products"
                />
            </div>
        </fragment>
    )
}

export default Sidebar