
import './App.css';
import Home from './Component/Home';
import Login from './Component/Login';
import category from './Component/Category/Category';
import CatUpdate from './Component/Category/Update';
import Subcategory from './Component/Category/Subcategory';
import SubcategoryUpdate from './Component/Category/SubcategoryUpdate';
import Brand from './Component/Products/Brand';
import BrandUpdate from './Component/Products/BrandUpdate';
import ProductsAdd from './Component/Products/ProductsAdd';
import ProductsUpdate from './Component/Products/ProductsUpdate';
import ProductsView from './Component/Products/ProductsView';

import {Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/category" component={category} />
          <Route  path="/subcategory" component={Subcategory}/>
          <Route  path="/Login" component={Login} />
          <Route  path="/update:id" component={CatUpdate}/>
          <Route  path="/subcatupdate:id" component={SubcategoryUpdate}/>
          <Route  path="/brand" component={Brand}/>
          <Route  path="/brand_update:id" component={BrandUpdate}/>
          <Route  path="/productadd" component={ ProductsAdd }/>
          <Route  path="/productview" component={ProductsView}/>
       </Switch>
    </div>
  );
}

export default App;
