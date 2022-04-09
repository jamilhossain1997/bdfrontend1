import React, { useState, useEffect } from 'react';
//jQuery libraries

import 'jquery/dist/jquery.min.js';

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import Header from '../Header';
import { withRouter, useHistory, Link } from 'react-router-dom'
import axios from 'axios';

const Brand = () => {
    const [brands_name, setBrands_name] = useState('');
    const [message, setMessage] = useState(null);
    const [getData, SetGetData] = useState([]);
    const history = useHistory();
    let i=1;

    useEffect(() => {
        if (!localStorage.getItem("user-info")) {
            history.push("/login");
        };

        $(document).ready(function () {
            setTimeout(function(){
            $('#example').DataTable();
             } ,1000);
        });

        GetData();

    }, [])

    function GetData(){
        axios.get('BrandView')
            .then(res => {
                console.log(res);
                SetGetData(res.data);
            });
    }

    function heandleChange(e) {
        e.preventDefault()
        
        const item = { brands_name }
        setMessage(null);
        axios.post('BrandAd', item)
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

    function DeleteOpation(id) {
        axios.delete('deleteBrand/'+id)
        .than(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })

        GetData()
    }
    return (
        <>

            <Header /><br /><br /><br/><br/>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <span><h1>Brand</h1></span>
                    </div>
                    <div className='col-md-6 d-flex flex-row-reverse bd-highlight mb-3'>
                        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Add to Brand</button>
                    </div>
                </div>
            </div><br /> <br /><br /><br />

            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 offset-md-3'>
                        <table id="example" class="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Brand Name</th>
                                    <th scope="col">Brand Update</th>
                                    <th scope="col">Brand Delete</th>
                                </tr>
                            </thead>
                            <tbody>{
                                getData.map((items) =>

                                    <tr>
                                        <th scope="row">{i++}</th>
                                        <td>{items.brands_name}</td>
                                        <td><Link to={'/brand_update'+items.id} class="btn btn-success">Update</Link></td>
                                        <td><button  onClick={() => DeleteOpation(items.id)} class="btn btn-danger">Delete</button></td>
                                    </tr>
                                )
                            }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Brand Name</th>
                                    <th scope="col">Brand Update</th>
                                    <th scope="col">Brand Delete</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>

            {/* Model */}


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add Brand</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={heandleChange}>

                                {message && <div class="alert alert-primary" role="alert">
                                    {message}
                                </div>}
                                <div class="mb-3">

                                    <input type="text" value={brands_name} onChange={(e) => setBrands_name(e.target.value)} class="form-control border-start-0" id="inputLastEnterUsername" placeholder="Enter UserEmail" />
                                </div>
                                <div class='mb-3'>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(Brand) 
