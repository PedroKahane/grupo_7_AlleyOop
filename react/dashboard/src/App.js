import './App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/home';
import Ventas from './pages/ventas';
import Usuarios from './pages/usuarios';
import Productos from './pages/productos';
import NotFound from './pages/NotFound';

import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Sidebar/>
      <div className="main">
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route exact path = "/Sales" component = {Ventas} />
          <Route exact path = "/Users" component = {Usuarios} />
          <Route exact path = "/Products" component = {Productos} />
          <Route component = {NotFound} />
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
