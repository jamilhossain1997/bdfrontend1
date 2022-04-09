
import './App.css';
import Header from './Common/Header';
import Home from './Home';
import Productde from './Common/Productde';
import Cardid from './Common/Cardid';
import Allproview from './Allproview';
import {Route,Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Header/>
       
        <Switch>
              <Route exact path="/" component={Home} />
              <Route  path="/productdetail:id" component={Productde}/>
              <Route  path="/Cardid:id" component={Cardid}/>
              <Route exact path="/Allproview" component={Allproview} />
        </Switch>
        
    </div>
  );
}

export default App;
