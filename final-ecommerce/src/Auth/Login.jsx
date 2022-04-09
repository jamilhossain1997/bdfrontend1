import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const histroy=useHistory();

    if(localStorage.getItem('token')){
        histroy.push('/');
    }
    function handleLogin(e){
        e.preventDefault();
       let item={email,password}
        axios.post("/userlogin",item)
        .then(function (response) {
            localStorage.setItem('token', response.data.token);
            histroy.push('/');
            props.userSet(response.data.user);
          })
          .catch(function (error) {
            console.log(error);
          })
    }
    return (
        <>
            <div id="login">
                <h3 class="text-center text-white pt-5">Login form</h3>
                <div class="container">
                    <div id="login-row" class="row justify-content-center align-items-center">
                        <div id="login-column" class="col-md-6">
                            <div id="login-box" class="col-md-12">
                                <form id="login-form" class="form" onClick={handleLogin}>
                                    <h3 class="text-center text-info">Login</h3>
                                    <div class="form-group">
                                        <label for="username" class="text-info">Username:</label><br />
                                        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} id="username" class="form-control" />
                                    </div>
                                    <div class="form-group">
                                        <label for="password" class="text-info">Password:</label><br />
                                        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} id="password" class="form-control" />
                                    </div>
                                    <div class="form-group">

                                        <input type="submit" name="submit" class="btn btn-info btn-md" value="submit" />
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Login;
