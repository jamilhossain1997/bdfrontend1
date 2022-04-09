import React,{useEffect,useState} from 'react';
import Nav from './Nav';
import Home from './Home';
import Login from './Auth/Login';
import Reset from './Auth/Reset';
import Forget from './Auth/Forget';
import Register from './Auth/Register';
import Profile from './Auth/Profile';
import { Switch,Route} from "react-router-dom";
import axios from 'axios';

const Header = () => {

    const [user, setUser] = useState({});
    const [item,setItem]=useState([]);
    useEffect(() => {
        axios.get('/User')
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
    return (
        <div>
            <Nav user={user} userSet={userSet}/>
          
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Profile" component={()=><Profile user={user} userSet={userSet}/>} />

                    {/* ******Auth**** */}
                    <Route path="/login" component={()=><Login user={user} userSet={userSet}/>} />
                    <Route path="/register" component={()=><Register user={user} userSet={userSet}/>} />
                    <Route path="/Forget" component={Forget} />
                    <Route path="/reset/:id" component={Reset} />
                    
                </Switch>
           
        </div>
    )
}

export default Header
