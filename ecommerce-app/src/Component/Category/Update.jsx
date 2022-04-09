import React,{useEffect} from 'react';
import Header from '../Header';
import axios from 'axios';
import { useState } from 'react';

const Update = (props) => {
    const [data, setData] = useState([]);
    const [categroy_name,setCategroy_name] =useState('');
    const [message, setMessage] = useState(null);
    useEffect(async() => {
        let result= await fetch("http://127.0.0.1:8000/api/getCategory/"+props.match.params.id);
        result= await result.json();
        setData(result);
        setCategroy_name(result.categroy_name);
    }, [])
    
    function handleChange(id){
        const item={categroy_name}
        setMessage(null)
        axios.post('updateCategory/'+id+'?_method=PUT',item)
        .then(function (response) {
            // handle success
            console.log(response);
            setMessage(response.data.message);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }
    return (
        <>
            <Header /><br/><br/><br/><br/><br/>
            <div class="container">
                <div class="row">
                    <div class="col-md-8 offset-md-3">
                        <div class="card">
                            <div class="card-header">
                                <h6>categroy Update</h6>
                            </div>
                            <div class="card-body">
                                {
                                    message && <div class="alert alert-success" role="alert">
                                       {message}
                                  </div>
                                }
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label float-start">Categroy Name</label>
                                    <input type='text' onChange={(e)=>setCategroy_name(e.target.value)} defaultValue={data.categroy_name} class="form-control form-control-sm" id="exampleFormControlInput1" />
                                </div>
                                <div class="mb-3">
                                <button type="submit" onClick={()=>handleChange(data.id)} class="btn btn-success float-end mb-3">Category Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Update
