
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Component/Login';
import AddProduct from './Component/AddProduct';
import UpdateProduct from './Component/UpdateProduct';
import Proceted from './Component/Proceted';
// import Header from './Component/Header';
import Register from './Component/Register';
import ListProduct from './Component/ListProduct';
import SearchProduct from './Component/SearchProduct';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
          {/* <Header/> */}
          <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/add" ><Proceted Cmp={AddProduct}/></Route>
              <Route exact path="/search" ><Proceted Cmp={SearchProduct}/></Route>
              <Route exact path="/login" component={Login} />
              <Route exact path="/update/:id" ><Proceted Cmp={UpdateProduct}/></Route>
              <Route exact path="/"><Proceted Cmp={ListProduct}/></Route>
            </Switch>
       </BrowserRouter>
    </>
  );
}

export default App;
