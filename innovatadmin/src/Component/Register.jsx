import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom'; 
import Header from './Header';




const Register = () => {
 
    const [name, setName] = useState("");
    const [email, setEmil] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useHistory();
    
  async function singUp() {
     let item={name,email,password}
     

    let result= await fetch("http://127.0.0.1:8000/api/register",{
         method:"POST",
         body:JSON.stringify(item),
         headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
     })

     result=await result.json()
     localStorage.setItem("user-info",JSON.stringify(result))
     navigate.push("/add");
 }
    return (
        <>
            <Header/>
            <div className="col-sm-6 offset-sm-3">
                <h1 className="text-center">Register From</h1>

                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Enter your Name"/><br/>
                <input type="text" value={email} onChange={(e)=>setEmil(e.target.value)} className="form-control" placeholder="Enter your Email"/><br/>
                <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Enter your password"/>
                <br/>
                <button onClick={singUp} className="btn btn-success">Submit</button>
            </div>
        </>
    )
}

export default Register
