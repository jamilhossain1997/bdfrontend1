import React, { useState } from 'react';
// import {useHistory} from 'react-router-dom'; 
import Header from './Header';

const AddProduct = () => {
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [descripaton, setDescripaton] = useState("");
    const [price, setPrice] = useState("");


    async function addProduct() {
        console.warn(name, file, descripaton, price)
        const formData = new FormData();
        formData.append('file_path', file);
        formData.append('name', name);
        formData.append('descripaton', descripaton);
        formData.append('price', price);

        let result = await fetch("http://127.0.0.1:8000/api/addProduct", {
            method: "POST",
            body: formData

        });

        alert("Data has been save");

    }
    return (
        <>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1 className="text-center">Add product</h1>
                <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" placeholder='Product Name' /><br />
                <input type="file" onChange={(e) => setFile(e.target.files[0])} className="form-control" placeholder='file' /><br />
                <input type="text" onChange={(e) => setDescripaton(e.target.value)} className="form-control" placeholder='Descripaton' /><br />
                <input type="text" onChange={(e) => setPrice(e.target.value)} className="form-control" placeholder='price' /><br />
                <button onClick={addProduct} className="btn btn-success">Product Add</button>
            </div>
        </>
    )
}

export default AddProduct
