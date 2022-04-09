import React,{useState,useEffect} from 'react';
import { Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom'; 

import axios from 'axios';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);
    const history=useHistory();
    useEffect(() => {
        if(localStorage.getItem('token')){
            history.push('/Profile')
       }
     }, [])
   function handlelogin(e){
       e.preventDefault();
       let item={email,password}
       
       axios.post('/login',item)
        .then(function (response) {
           localStorage.setItem('token', response.data.token);
           setMessage(response.data.message);
           history.push('/profile');
           props.userSet(response.data.user);
        })

     
        .catch(function (error) {
           
            setMessage(error.response.data.message);
        })
       
    }

    
    return (
        <div><br/><br /><br />
            <div className='container'>
                <div className='row'>
                    <div className='login-bg col-lg-4 offset-lg-4 bg-Secondary mt-4'>
                        <h1 className='text-center text-white'>Login Account</h1>
                        <form onSubmit={handlelogin}>
                        {message && <div class="alert alert-primary" role="alert">
                                 {message}
                                </div>}
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
                                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label text-white">Password</label>
                                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" />
                            </div>

                            <button type="submit"  class="btn btn-large btn-success btn-block" style={{ width: "357px" }}>Login</button><br />
                            <span className='text-white'>Forget My Password</span><Link to='/Forget' >Click Here</Link><br />
                            <span className='text-white'>I don't have an account</span><Link to='/register' >Register Now</Link>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
