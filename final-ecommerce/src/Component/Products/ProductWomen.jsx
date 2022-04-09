import React from 'react';
import { useState } from 'react';
import ProductView from './ProductView';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductWomen = () => {
    const [data,setData]=useState([]);
   
    useEffect(()=>{
        womanProduct()
    },[]);

    function womanProduct() {
        axios.get("/by_one_getone")
        .then(function (response) {
            console.log(response.data.Products);
            setData(response.data.Products)
          })
          .catch(function (error) {
            console.log(error);
          })
    }
    return (
        <>
            <ProductView />
            <div class="container" style={{ marginTop: '-175px' }}>
                <div class="row">
                {data.map(items => {
                        return (
                            <div class="col-md-3 mt-5">
                                <div class="block2-pic hov-img0">
                                    <img style={{width:"286px", height:"180px"}} src={"http://127.0.0.1:8000/" + items.image} alt="IMG-PRODUCT" />
                                    <Link to={"/productdetail"+items.id} class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                        Quick View
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </>
    )
};

export default ProductWomen;
