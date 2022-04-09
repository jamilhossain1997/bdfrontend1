import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductContext from './Global/ProductContext';
import Mainmeun from './component/Mainmeun';
import Cart from './component/Cart';
import NotFound from './component/NotFound';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
        <Mainmeun/>
      
      <Switch>
             <Route exact path='/' component={ProductContext}/>
             <Route  path='/cart' component={Cart}/>
             <Route component={NotFound} />
      </Switch>
    
    </div>
  );
}

export default App;
