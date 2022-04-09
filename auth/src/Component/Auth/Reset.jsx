import React, { useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Reset = () => {
    const [token, setToken] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPassword_confirmation] = useState('');
    const [message, setMessage] = useState(null);
    const history = useHistory();

    function handleSingUp(e) {

        e.preventDefault();
        const item = { token, email, password, password_confirmation };
        axios.post('/RessetPassword', item)
            .then(function (response) {
                setMessage(response.data.message);
                document.getElementById("forgotform").reset();
            })
            .catch(function (error) {
                setMessage(error.response.data.message);
            })

    }


    useEffect(()=>{
         if(localStorage.getItem('token')){
               history.push('/Profile');
         }
    },[]);
    return (
        <div><br />
        <div className='container'>
            <div className='row'>
                <div className='register-bg col-lg-4 offset-lg-4 bg-Secondary mt-4'>
                    <h1 className='text-center text-white'>Reset Password</h1>
                    <form onSubmit={handleSingUp} id='forgotform'>

                    {message && <div class="alert alert-primary" role="alert">
                                 {message}
                                </div>}
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label text-white">PIN CODE</label>
                            <input type="name" value={token} onChange={(e) => setToken(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label text-white">Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label text-white">Confirmation Password</label>
                            <input type="password" value={password_confirmation} onChange={(e) => setPassword_confirmation(e.target.value)} class="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" class="btn btn-large btn-success btn-block" style={{ width: "357px" }}>SUBMIT</button>
                    </form>

                </div>
            </div>
        </div>
    </div>
    )
}

export default Reset
