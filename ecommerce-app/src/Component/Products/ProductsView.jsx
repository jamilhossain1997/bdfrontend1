import React,{useState,useEffect} from 'react';
import Header from '../Header';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';


const ProductsView = () => {

    const [data,setData]=useState([]);
    const [megDel,setMegDel]=useState(null);
    const history=useHistory();
    
    useEffect(() => {
        productsget();
    }, [])

    function productsget() {
        
        axios.get('ProductGet')
            .then(res => {
                console.log(res);
                setData(res.data);
                history.push('/productview');
            });
    }

    function productDelete(id){
        setMegDel(null);
        axios.delete('ProductDel/'+id)
        .than(res=>{
            setMegDel(res.data.message);
        })
    }
    
    return (
        <>
            <Header />
            <div class="page-wrapper">
                <div class="page-content">

                    <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                        <div class="breadcrumb-title pe-3">eCommerce</div>
                        <div class="ps-3">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb mb-0 p-0">
                                    <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">Orders</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div class="card">
                    {
                                    megDel && <div class="alert alert-success" role="alert">
                                       {megDel}
                                  </div>
                                }
                        <div class="card-body">
                            <div class="d-lg-flex align-items-center mb-4 gap-3">
                                <div class="position-relative">
                                    <input type="text" class="form-control ps-5 radius-30" placeholder="Search Order" /> <span class="position-absolute top-50 product-show translate-middle-y"><i class="bx bx-search"></i></span>
                                </div>
                                <div class="ms-auto"><a href="javascript:;" class="btn btn-primary radius-30 mt-2 mt-lg-0"><i class="bx bxs-plus-square"></i>Add New Order</a></div>
                            </div>
                            <div class="table-responsive">
                                <table class="table mb-0">
                                    <thead class="table-light">
                                        <tr>
                                            <th>Category</th>
                                            <th>Subcategory</th>
                                            <th>Brand</th>
                                            <th>Product Details</th>
                                            <th>Price</th>
                                            <th>Discount</th>
                                            <th>Size</th>
                                            <th>Color</th>
                                            <th>Stock Out</th>
                                            <th>Hot Deals</th>
                                            <th>By one Get One</th>
                                            <th>image</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { data.map((items)=>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div>
                                                        <input class="form-check-input me-3" type="checkbox" value="" aria-label="..." />
                                                    </div>
                                                    <div class="ms-2">
                                                        <h6 class="mb-0 font-14">{items.categroy_name}</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{items.subcategroy_name}</td>
                                            <td><div class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3"><i class='bx bxs-circle me-1'></i>{items.brands_name}</div></td>
                                            <td>{items.pro_details}</td>
                                            <td>{items.price}</td>
                                            <td>{items.discount_price}</td>
                                            <td><div class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3"><i class='bx bxs-circle me-1'></i>{items.size}</div></td>
                                            <td>{items.color}</td>
                                            <td>{items.stockout}</td>
                                            <td>{items.hot_deal}</td>
                                            <td>{items.by_one_get_one}</td>
                                            <td><img style={{width:100}} src={"http://127.0.0.1:8000/"+items.image} alt='img-tutul'/></td>
                                            <td>
                                                <div class="d-flex order-actions">
                                                    <a href="javascript:;" class=""><i class='bx bxs-edit'></i></a>
                                                    <Link onClick={()=>productDelete(items.id)} class="ms-3"><i class='bx bxs-trash'></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                         ) }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsView
