import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import ProductView from './ProductView';
import axios from 'axios';

const ProductBeg = () => {
    const [data,setData]=useState([]);


    useEffect(()=>{
        BegProductView()
    },[]);

    function BegProductView(){
        axios.get("/BegCat")
        .then(function (response) {
            console.log(response);
            setData(response.data.Products)
          })
          .catch(function (error) {
            console.log(error);
          })
    }
    return (
        <>
        <ProductView/>
        <div class="container" style={{marginTop:'-186px'}}>
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

export default ProductBeg;
