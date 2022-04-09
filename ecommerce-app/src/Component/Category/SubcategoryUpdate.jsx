import React, { useEffect } from 'react';
import Header from '../Header';
import axios from 'axios';
import { useState } from 'react';

const SubcategoryUpdate = (props) => {
    const [data, setData] = useState([]);
    const [subcategroy_name, setSubcategroy_name] = useState('');
    const [categroy_id, setCategroy_id] = useState('');
    const [getData, SetGetData] = useState([]);
    const [getDatasubCat, SetGetDatasetCat] = useState([]);
    const [message, setMessage] = useState(null);
    useEffect(async () => {
        let result = await fetch("http://127.0.0.1:8000/api/SubCategoryView/" + props.match.params.id);
        result = await result.json();
        setData(result);
        setSubcategroy_name(result.subcategroy_name);
        setCategroy_id(result.categroy_id);
        GetDataCategory();
        GetData();
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

    function handleChange(id) {
        const item = { categroy_id,subcategroy_name }
        setMessage(null)
        axios.post('SubCategoryUpdate/' + id + '?_method=PUT', item)
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
            <Header /><br /><br /><br /><br /><br />
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
                                    <label for="exampleFormControlInput1" class="form-label float-start">Subcategroy Name</label>
                                    <input type='text' onChange={(e) => setSubcategroy_name(e.target.value)} defaultValue={data.subcategroy_name} class="form-control form-control-sm" id="exampleFormControlInput1" />
                                </div>
                                <div class="mb-3">
                                    <label for="disabledSelect" class="form-label">Disabled select menu</label>
                                    <select id="categroy_id" class="form-select" name='categroy_id' onChange={(e) => setCategroy_id(e.target.value)}>

                                         <option defaultValue={data.categroy_id}>plz select</option>
                                        
                                        {
                                            getData.map((categroy_id,key) =>

                                                <option key={key} value={categroy_id.id}>{categroy_id.categroy_name}</option>
                                               
                                            )
                                        }
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <button type="submit" onClick={() => handleChange(data.id)} class="btn btn-success float-end mb-3">Category Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubcategoryUpdate
