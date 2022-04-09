import React,{useEffect,useState} from 'react';
import Header from './Header';
import {useHistory} from 'react-router-dom'; 
const Login = () => {
    useEffect(() => {
        if( localStorage.getItem('user-info')){
            navigate.push("/");
        }
     }, [])
    const [email, setEmil] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useHistory();
    async function login() {
      const item={email,password}
        let result= await fetch("http://127.0.0.1:8000/api/login",{
            method:"POST",
            body:JSON.stringify(item),
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        });

        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate.push("/add");
    }
    return (
        <> 
            <Header/>
            <div className="col-sm-6 offset-sm-3">
                <h1 className="text-center">Login Page</h1>
                <input type="text" value={email} onChange={(e)=>setEmil(e.target.value)} className="form-control" placeholder="Enter your Email"/><br/>
                <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Enter your password"/>
                <br/>
                <button onClick={login} className="btn btn-success">Login</button>
            </div>
        </>
    )
}

export default Login
