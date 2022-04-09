import React,{useState,useEffect} from 'react';
import './App.css';
import Header from "./Commonn/Header";
import Footer from './Commonn/Footer';
import Cart from './Commonn/Cart';
import Checkout from './Commonn/Checkout';
import Home from './Component/Home';
import Blog from './Component/Blog';
import About from './Component/About';
import Contact from './Component/Contact';
import Allproduct from './Component/Allproduct';
import Women from './Component/Women';
import Men from './Component/Men';
import Watches from './Component/Watches';
import showes from './Component/Showes';
import beg from './Component/Beg';
// product ALL
import ProductBeg from './Component/Products/ProductBeg';
import ProductMen from './Component/Products/ProductMen';
import ProductShoes from './Component/Products/ProductShoes';
import ProductWatches from './Component/Products/ProductWatches';
import Productwomen from './Component/Products/ProductWomen';
import Productdetail from './Component/Products/Productdetail';
import TotalProduct from './Commonn/TotalProduct';
// Auth
import Login from './Auth/Login';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';


function App() {
  const [user, setUser] = useState({});
    const [item,setItem]=useState([]);
    useEffect(() => {
        axios.get('/GetUser')
        .then(function (response) {
           setUser(response.data);
        })
        .catch(function (error) {
           
            console.log(error);
        })
    }, [])
    

    function userSet(User){
        setItem({item:User});
    }
    console.log(user.id)
   
  return (
    <>
       <Header user={user} userSet={userSet}/>
        <br /><br />
      <Switch>
        {/* Auth */}
        <Route exact path="/login" component={Login} />
       
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/abouts" component={About} />
        <Route exact path="/shops" component={TotalProduct} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/productdetail:id" component={Productdetail} />
        {/* <Route exact path="/" component={Allproduct}/> */}
        <Route exact path="/women" component={Women} />
        <Route exact path="/men" component={()=><Men user={user} userSet={userSet}/>} />
        <Route exact path="/Watches" component={Watches} />
        <Route exact path="/showes" component={showes} />
        <Route exact path="/beg" component={beg} />

        {/* shops Products */}
        <Route exact path="/Productwomen" component={Productwomen} />
        <Route exact path="/Productmen" component={ProductMen} />
        <Route exact path="/ProductWatches" component={ProductWatches} />
        <Route exact path="/Productshowes" component={ProductShoes} />
        <Route exact path="/Productbeg" component={ProductBeg} />
        {/* Cart */}
        <Route exact path="/cart" component={()=><Cart user={user} userSet={userSet}/>}/>
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
      <br />
        <Footer />
    </>
  );
}

export default App;
