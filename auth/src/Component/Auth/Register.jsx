import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPassword_confirmation] = useState('');
    const history = useHistory();

    function handleSingUp() {
        const item = { name, email, password, password_confirmation };
        axios.post('/Register', item)
            .then(function (response) {
                localStorage.setItem('token', response.data.token);
                history.push('/Profile');
                props.userSet(response.data.user);
            })
            .catch(function (error) {
                console.log(error);
            })

    }
    return (
        <div><br />
            <div className='container'>
                <div className='row'>
                    <div className='register-bg col-lg-4 offset-lg-4 bg-Secondary mt-4'>
                        <h1 className='text-center text-white'>Register Account</h1>

                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label text-white">User Nmae</label>
                            <input type="name" value={name} onChange={(e) => setName(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text text-white">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label text-white">Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label text-white">Confirmation Password</label>
                            <input type="password" value={password_confirmation} onChange={(e) => setPassword_confirmation(e.target.value)} class="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" onClick={handleSingUp} class="btn btn-large btn-success btn-block" style={{ width: "357px" }}>Register</button><br />
                        <span className='text-white'>I already have an account </span><Link to='/login' >Login</Link>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Register)
