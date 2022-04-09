import React,{useState} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const Forget = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(null);
    
    

    function handelForgetPassword(e){
        e.preventDefault();
       
        const item={email}
        setMessage(null);
        axios.post('/Forgetpassword', item)
            .then(function (response) {
                setMessage(response.data.message);
                document.getElementById("forgotform").reset();
            })
            .catch(function (error) {
                setMessage(error.response.data.message);
            })
    }

    

   
    return (
        <div><br /><br /><br />
            <div className='container'>
                <div className='row'>
                    <div className='login-bg col-lg-4 offset-lg-4 bg-Secondary mt-5'>
                        <h1 className='text-center text-white'>Forget Password</h1>
                        
                          <form onSubmit={handelForgetPassword} id='forgotform'>
                          {message && <div class="alert alert-primary" role="alert">
                                 {message}
                                </div>}
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
                                <input type="email" value={email}  onChange={(e)=>setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                            <button type="submit" class="btn btn-large btn-success btn-block" style={{ width: "357px" }}>SUBMIT</button><br />
                       
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Forget)
