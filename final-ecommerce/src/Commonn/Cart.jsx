import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../Toolkit/counterSlice';
import { Link,useHistory } from 'react-router-dom';


const Cart = () => {
    const [loading, setLoading] = useState(true);
    const [cartdata, setCartData] = useState([]);
    const histroy=useHistory();
    let totalPrice=0
    
    useEffect(() => {
        axios.get('/viewCart')
            .then(res => {
                setCartData(res.data.Cart);

                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
            if(!localStorage.getItem('token')){
                histroy.push('/login');
            }
    }, [])
    

    function Cartproduct(id) {
        axios.delete(`removeItems/${id}`)
            .then(res => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function handelRemove() {
        axios.delete(`cartsFlash`)
            .then(res => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    

    if (loading) {
        return (
            <h6>Loding Product Details...</h6>
        )
    }
    else {
        return (
            <>
                <div class="container">
                    <div class="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
                        <a href="index.html" class="stext-109 cl8 hov-cl1 trans-04">
                            Home
                            <i class="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
                        </a>

                        <span class="stext-109 cl4">
                            Shoping Cart
                        </span>
                    </div>
                </div>
                <form class="bg0 p-t-75 p-b-85">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-10 col-xl-7 m-lr-auto m-b-50">
                                <div class="m-l-25 m-r--38 m-lr-0-xl">
                                    <div class="wrap-table-shopping-cart">
                                        <table class="table-shopping-cart">
                                            <tr class="table_head">
                                                <th class="column-1">Product</th>
                                                <th class="column-2"></th>
                                                <th class="column-3">Price</th>
                                                <th class="column-4">Quantity</th>
                                                <th class="column-5">Total</th>
                                            </tr>
                                            {
                                                cartdata.map((items) => {
                                                    const Total = (items.price * items.qty);
                                                    totalPrice +=(items.price*items.qty);
                                                    return (
                                                        <>
                                                            <tr class="table_row">
                                                                <td class="column-1">
                                                                    <div class="how-itemcart1">
                                                                        <img src={"http://127.0.0.1:8000/" + items.image} alt="IMG" />
                                                                    </div>
                                                                </td>
                                                                <td class="column-2">{items.productname}</td>
                                                                <td class="column-3">{items.price}</td>
                                                                <td class="column-4">
                                                                    <div class="wrap-num-product flex-w m-l-auto m-r-0">
                                                                        {/* <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m" onClick={() => { handleDecrement(items.id) }}>
                                                                            <i class="fs-16 zmdi zmdi-minus"></i>
                                                                        </div> */}

                                                                        {/* <input class="mtext-104 cl3 txt-center num-product" type="number" name="num-product1"  defaultValue={items.qty} /> */}
                                                                        <button class="mtext-104 cl3 txt-center num-product" type="number" name="num-product1"  >{items.qty}</button>

                                                                        {/* <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m" onClick={() => { handleInecrement(items.id) }}>
                                                                            <i class="fs-16 zmdi zmdi-plus"></i>
                                                                        </div> */}
                                                                    </div>
                                                                </td>
                                                                <td class="column-5">{Total}</td>
                                                            </tr>
                                                        </>
                                                        );
                                                })
                                            }
                                        </table>
                                    </div>

                                    <div class="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm">
                                        <div class="flex-w flex-m m-r-20 m-tb-5">
                                            {/* <input class="stext-104 cl2 plh4 size-117 bor13 p-lr-20 m-r-10 m-tb-5" type="text" name="coupon" placeholder="Coupon Code" />

                                            <div class="flex-c-m stext-101 cl2 size-118 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-5">
                                                Apply coupon
                                            </div> */}
                                        </div>

                                        <div class="flex-c-m stext-101 cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10" >
                                            Update Cart
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
                                <div class="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                                    <h4 class="mtext-109 cl2 p-b-30">
                                        Cart Totals
                                    </h4>

                                    <div class="flex-w flex-t bor12 p-b-13">
                                        <div class="size-208">
                                            <span class="stext-110 cl2">
                                                Subtotal:
                                            </span>
                                        </div>

                                        <div class="size-209">
                                            <span class="mtext-110 cl2">
                                                {totalPrice}
                                            </span>
                                        </div>
                                    </div>

                                    <div class="flex-w flex-t p-t-27 p-b-33">
                                        <div class="size-208">
                                            <span class="mtext-101 cl2">
                                                Total:
                                            </span>
                                        </div>

                                        <div class="size-209 p-t-1">
                                            <span class="mtext-110 cl2">
                                                {totalPrice}
                                            </span>
                                        </div>
                                    </div>

                                    <Link to='/checkout' class="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
                                        Proceed to Checkout
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </>
        )
    }
};

export default Cart;

