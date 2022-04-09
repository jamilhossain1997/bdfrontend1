import React,{useState} from 'react';
import Header from './Header';
import {Table,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const SearchProduct = () => {

    const [data, setdata] = useState([]);
    async function search(key){
        let result= await fetch("http://127.0.0.1:8000/api/search/"+key); 
        result=await result.json();
        setdata(result);
    }

    
    return (
        <>
          <Header/>
          <div className='col-sm-6 offset-sm-3'>
            <h1 className='text-center'>Product Search </h1>
            <input type="text" className='form-control' onChange={(e)=>search(e.target.value)} placeholder='Product search' /><br/>
            <br/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                {
                    data.map((item)=>
                    <tbody>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.descripaton}</td>
                            <td><img style={{width:100}} src={"http://127.0.0.1:8000/"+item.file_path}/></td>
                            <td><Link to={"/update/"+item.id}><Button variant="outline-primary">Update</Button></Link></td>
                        </tr>
                        
                    </tbody>

                  )
                }
            </Table>
          </div>
        
        </>
        
    )
}

export default SearchProduct
