import './App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/home';
import Ventas from './pages/ventas';
import Usuarios from './pages/usuarios';
import Productos from './pages/productos'

import {BrowserRouter as Router ,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Sidebar/>
      <div>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/Sales" component = {Ventas} />
        <Route exact path = "/Users" component = {Usuarios} />
        <Route exact path = "/Products" component = {Productos} />
      </div>
    </div>
    </Router>
  );
}

export default App;
