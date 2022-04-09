import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Checkout = () => {
    const [loading, setLoading] = useState(true);
    const [userid, setUserid] = useState([]);
    const [cartdata, setCartData] = useState([]);
    const [name,setName]=useState('');
    const [city,setCity]=useState('');
    const [state,setState]=useState('');
    const [phone,setPhone]=useState('');
    const [email,setEmail]=useState('');
    const [address,setAddress]=useState('');
    const [zip,setZip]=useState('');
    const histroy=useHistory();
    let totalPrice = 0
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
    }, []);
    useEffect(() => {
        axios.get('/GetUser')
        .then(function (response) {
            setUserid(response.data);
           console.log(response)
        })
        .catch(function (error) {
           
            console.log(error);
        })
    }, [])
    function handleSubmit(e,payment_mode){
        e.preventDefault();
        let items={name,
                   city,
                   state,
                   phone,
                   email,
                   address,
                   zip,
                   user_id:userid.id,
                   payment_mode:payment_mode
                }
        axios.post('/OrderCheckout',items)
        
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })

            switch (payment_mode) {
                case 'cod':
                    
                    break;
                case 'razopay':
                    
                    break;
                default:
                    break;
            }
      

    }
    if (loading) {
        return (
            <>
                <h1>Pages Loading</h1>
            </>
        )
    }
    else {
        return (
            <>

                <div class="container">
                    <div class="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
                        <Link to='/' class="stext-109 cl8 hov-cl1 trans-04">
                            Home
                            <i class="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
                        </Link>

                        <span class="stext-109 cl4">
                            Shoping Cart
                        </span>
                    </div>
                </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7 col-xl-5 m-lr-auto m-b-50">
                                <div class="m-l-25 m-r--38 m-lr-0-xl">
                                    <div class="wrap-table-shopping-cart">
                                        <table class="table-shopping-cart">
                                            <tr class="table_head">
                                                <th class="column-1">Product</th>
                                                <th class="column-2">Product Name</th>
                                                <th class="column-3">Price</th>
                                                <th class="column-5">Total</th>
                                            </tr>
                                            {
                                                cartdata.map((items) => {
                                                    const Total = (items.price * items.qty);
                                                    totalPrice += (items.price * items.qty);
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
                                                                <td class="column-5">{Total}</td>
                                                            </tr>
                                                        </>
                                                    );
                                                })
                                            }

                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-10 col-lg-10 col-xl-7 m-lr-auto m-b-50">
                                <div class="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                                    <h4 class="mtext-109 cl2 p-b-30">
                                        Basic Information.
                                    </h4>
                                   
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="inputEmail4">Name</label>
                                                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} class="form-control" id="inputEmail4" placeholder="Name"/>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputPassword4">Email</label>
                                                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} class="form-control" id="inputPassword4" placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="inputAddress">Phone</label>
                                            <input type="number" value={phone} onChange={(e)=>setPhone(e.target.value)} class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="inputAddress">Address</label>
                                            <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                                        </div>
                                        
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="inputCity">City</label>
                                                <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} class="form-control" id="inputCity"/>
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="inputState">State</label>
                                                <input type="text" value={state} onChange={(e)=>setState(e.target.value)} class="form-control" id="inputCity"/>
                                            </div>
                                            <div class="form-group col-md-2">
                                                <label for="inputZip">Zip</label>
                                                <input type="text" value={zip} onChange={(e)=>setZip(e.target.value)} class="form-control" id="inputZip"/>
                                            </div>
                                        </div>
                                       
                                       
                               
                                    <button class="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer" onClick={(e)=>handleSubmit(e,'cod')}>
                                        Order Place
                                    </button><br/>
                                    <button class="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer" onClick={(e)=>handleSubmit(e,'razorpay')}>
                                        Pay online
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
             
            </>
        )
    }
}

export default Checkout