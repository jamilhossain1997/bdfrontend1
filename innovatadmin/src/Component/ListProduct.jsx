import React,{useState} from 'react';
import Header from './Header';
import {Table,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';

const ListProduct = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData()
    }, [])

    async function getData(){
        let result = await fetch("http://127.0.0.1:8000/api/list")
        result = await result.json();
        setData(result)
    }

    async function deleteOperation(id){
        let result= await fetch("http://127.0.0.1:8000/api/delete/"+id,{
            method:'Delete'
        });

        result=await result.json();
        console.warn(result)
        getData()

    }
    return (
        <>
        <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1 className='text-center'>Product List</h1>

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
                            <td><Button onClick={()=>deleteOperation(item.id)} variant="outline-primary">Delete</Button></td>
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

export default ListProduct
