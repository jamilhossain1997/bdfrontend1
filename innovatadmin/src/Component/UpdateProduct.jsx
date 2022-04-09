import React,{useState,useEffect} from 'react';
import Header from './Header';
import {Button} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
const UpdateProduct = (props) => {
    // console.warn("props",props.match.params.id)
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [descripaton, setDescripaton] = useState("");
    const [price, setPrice] = useState("");
    const [mag,setMag]=useState('');
    
    useEffect( async() => {
        let result= await fetch("http://127.0.0.1:8000/api/getProduct/"+props.match.params.id);
        result= await result.json();
        setData(result);
        setName(result.name);
        setDescripaton(result.descripaton);
        setPrice(result.price);
        setFile(result.file);

       
       }, [])

     
       async function handleUpdate(id){
        console.warn(name, file, descripaton, price)
        const formData = new FormData();
        formData.append('file_path', file);
        formData.append('name', name);
        formData.append('descripaton', descripaton);
        formData.append('price', price);

        let result = await fetch("http://127.0.0.1:8000/api/putProduct/"+id+"?_method=PUT", {
            method: "POST",
            body: formData

        });

        alert("Data has been save");
    }
        

        
    return (
        <>
            <Header/>
            <div className='col-sm-6 offset-sm-3'>
                <h1 className='text-center'>update</h1><br/>
                <br/>
                <h1>{mag}</h1>
                 <input type="text" onChange={(e) => setName(e.target.value)}  defaultValue={data.name} className="form-control"/><br/>
                 <input type="text" onChange={(e) => setDescripaton(e.target.value)}   defaultValue={data.descripaton} className="form-control"/><br/>
                 <input type="text" onChange={(e) => setPrice(e.target.value)} defaultValue={data.price} className="form-control"/><br/>
                 <input type="file" onChange={(e) => setFile(e.target.files[0])}  defaultValue={data.file_path} className="form-control"/><br/>
                 <img style={{width:200}} src={"http://127.0.0.1:8000/"+data.file_path}/><br/><br/>
                 <Button onClick={()=>handleUpdate(data.id)}  variant="outline-primary">Product Update</Button>
            </div>
        </>
    )
}

export default withRouter(UpdateProduct)
