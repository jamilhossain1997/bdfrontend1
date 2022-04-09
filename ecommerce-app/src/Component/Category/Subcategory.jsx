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

const Subcategory = () => {
    const [categroy_id, setCategroy_id] = useState('');
    const [subcategroy_name, setSubCategroy_name] = useState('');
    const [message, setMessage] = useState(null);
    const [getData, SetGetData] = useState([]);
    const [getDatasubCat, SetGetDatasetCat] = useState([]);
    const history = useHistory();
    let i = 1;

    useEffect(() => {
        if (!localStorage.getItem("user-info")) {
            history.push("/login");
        };

        $(document).ready(function () {
            setTimeout(function () {
                $('#example').DataTable();
            }, 1000);
        });
        //subcategoryView***
        GetData();
        // categoryView***
        GetDataCategory();

    }, [])

    // categoryView***

    function GetDataCategory() {
        axios.get('CategoryView')
            .then(res => {
                console.log(res);
                SetGetData(res.data);
            });
    }

    // subcategoryView***

    function GetData() {
        axios.get('SubCategoryget')
            .then(res => {
                console.log(res);
                SetGetDatasetCat(res.data);
            });
    }

    //subcatgroy insert***

    function heandleChange(e) {
        e.preventDefault()

        const item = { categroy_id,subcategroy_name }
        setMessage(null);
        axios.post('SubCategoryAd', item)
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
        axios.delete('SubCategoryDelete/' + id)
            .than(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })

        GetData()
    }
    return (
        <>

            <Header /><br /><br /><br /><br />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <span><h1>Subcategory</h1></span>
                    </div>
                    <div className='col-md-6 d-flex flex-row-reverse bd-highlight mb-3'>
                        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Add to Subcategory</button>
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
                                    <th scope="col">category Name</th>
                                    <th scope="col">Subcategory Name</th>
                                    <th scope="col">Subcategory Update</th>
                                    <th scope="col">Subcategory Delete</th>
                                </tr>
                            </thead>
                            <tbody>{
                                getDatasubCat.map((item) =>

                                    <tr>
                                        <th scope="row">{i++}</th>
                                        <td>{item.categroy_name}</td>
                                        <td>{item.subcategroy_name}</td>
                                        <td><Link to={'/subcatupdate' + item.id}><button type="button" class="btn btn-success">Update</button></Link></td>
                                        <td><button onClick={() => DeleteOpation(item.id)} class="btn btn-danger">Delete</button></td>
                                    </tr>
                                )
                            }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">category Name</th>
                                    <th scope="col">Subcategory Name</th>
                                    <th scope="col">Subcategory Update</th>
                                    <th scope="col">Subcategory Delete</th>
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
                            <h5 class="modal-title" id="exampleModalLabel">Add Category</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={heandleChange}>

                                {message && <div class="alert alert-primary" role="alert">
                                    {message}
                                </div>}
                                <div class="mb-3">

                                    <input type="text" value={subcategroy_name} onChange={(e) => setSubCategroy_name(e.target.value)} class="form-control border-start-0" id="inputLastEnterUsername" placeholder="Enter UserEmail" />
                                </div>
                                <div class="mb-3">
                                    <label for="disabledSelect" class="form-label">Disabled select menu</label>
                                    <select id="categroy_id" class="form-select" value={categroy_id} onChange={(e)=>setCategroy_id(e.target.value)}>
                                        {
                                            getData.map((categroy_id) =>

                                                <option  value={categroy_id.id} >{categroy_id.categroy_name}</option>

                                            )
                                        }
                                    </select>
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

export default Subcategory
