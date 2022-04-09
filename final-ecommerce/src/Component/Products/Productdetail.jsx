import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useHistory } from 'react-router-dom';
import { decrement, increment, incrementByAmount } from '../../Toolkit/counterSlice';





const Productdetail = (props) => {
    const [data, setData] = useState([]);
    const [qty, setQty] = useState(1);
    const [color,setColor]=useState('');
    const [size,setSize]=useState('');
    const [userid, setUserid] = useState([]);
    const count = useSelector((state) => state.counterme.count);
    const dispatch = useDispatch();
    const histroy=useHistory();
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    };

   

    function handleDecment(){
        if(qty>1){
            setQty(prevCount=>prevCount-1)
        }
       
    }

    function handleInrecment(){
        setQty(prevCount=>prevCount+1)
    }

    useEffect(() => {
        ProductView();
        if(!localStorage.getItem('token')){
            histroy.push('/login');
        }
    }, [])

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
    console.log(userid.id)
    function ProductView() {
        axios.get('/oneProductshow/' + props.match.params.id)
            .then(function (response) {
                // console.log(response);
                setData(response.data.Product);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    function CartDatap(){
        
       let item={
            productid:data.id,
            qty:qty,
            productname:data.pro_name,
            price:data.price,
            userid:userid.id,
            color,
            size,
        }
        console.log(item);
        axios.post('/ADDtoCart/'+data.id,item)
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    }

    
   
    return (
        <>

            <div class="container">
                <div class="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
                    <a href="index.html" class="stext-109 cl8 hov-cl1 trans-04">
                        Home
                        <i class="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
                    </a>

                    <a href="product.html" class="stext-109 cl8 hov-cl1 trans-04">
                      {data.pro_name}
                       
                    </a>
                </div>
            </div>
            <section class="sec-product-detail bg0 p-t-65 p-b-60">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-lg-7 p-b-30">
                            <Slider {...settings}>
                                <div>
                                    <div class="wrap-pic-w">
                                    <img style={{width:"350px", height:"180px"}} src={"http://127.0.0.1:8000/" + data.image} alt="IMG-PRODUCT" />

                                        <a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/product-detail-01.jpg">
                                            <i class="fa fa-expand"></i>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div class="wrap-pic-w">
                                    <img style={{width:"350px", height:"180px"}} src={"http://127.0.0.1:8000/" + data.image} alt="IMG-PRODUCT" />

                                        <a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/product-detail-01.jpg">
                                            <i class="fa fa-expand"></i>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div class="wrap-pic-w">
                                    <img style={{width:"350px", height:"180px"}} src={"http://127.0.0.1:8000/" + data.image} alt="IMG-PRODUCT" />

                                        <a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/product-detail-01.jpg">
                                            <i class="fa fa-expand"></i>
                                        </a>
                                    </div>
                                </div>

                            </Slider>
                        </div>
                        <div class="col-md-6 col-lg-5 p-b-30">
                            <div class="p-r-50 p-t-5 p-lr-0-lg">
                            <h4 class="mtext-105 cl2 js-name-detail p-b-14">
                                {data.pro_name}
                            </h4>

                                <span class="mtext-106 cl2">
                                     {data.price}
                                </span>

                                <p class="stext-102 cl3 p-t-23">
                                {data.pro_details}
                                </p>

                                <div class="p-t-33">
                                    <div class="flex-w flex-r-m p-b-10">
                                        <div class="size-203 flex-c-m respon6">
                                            Size
                                        </div>

                                        <div class="size-204 respon6-next">
                                            <div class="rs1-select2 bor8 bg0">
                                                <input type="text" value={size} onChange={(e)=>setSize(e.target.value)} defaultValue={data.size}/>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex-w flex-r-m p-b-10">
                                        <div class="size-203 flex-c-m respon6">
                                            Color
                                        </div>

                                        <div class="size-204 respon6-next">
                                            <div class="rs1-select2 bor8 bg0">
                                                 <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} defaultValue={data.color }/>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex-w flex-r-m p-b-10">
                                        <div class="size-204 flex-w flex-m respon6-next">
                                            <div class="wrap-num-product flex-w m-r-20 m-tb-10">
                                                <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m" onClick={() => { dispatch(decrement()) }}>
                                                    <i class="fs-16 zmdi zmdi-minus"></i>
                                                </div>

                                                <input class="mtext-104 cl3 txt-center num-product" type="number" name="num-product" value={count} />

                                                <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m" onClick={() => { dispatch(increment()) }} >
                                                    <i class="fs-16 zmdi zmdi-plus"></i>
                                                </div>
                                            </div>

                                            <button  class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail" onClick={CartDatap}>
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>


                                <div class="flex-w flex-m p-l-100 p-t-40 respon7">
                                    <div class="flex-m bor9 p-r-10 m-r-11">
                                        <a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100" data-tooltip="Add to Wishlist">
                                            <i class="zmdi zmdi-favorite"></i>
                                        </a>
                                    </div>

                                    <a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Facebook">
                                        <i class="fa fa-facebook"></i>
                                    </a>

                                    <a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Twitter">
                                        <i class="fa fa-twitter"></i>
                                    </a>

                                    <a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Google Plus">
                                        <i class="fa fa-google-plus"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bor10 m-t-50 p-t-43 p-b-40">

                        <div class="tab01">

                            <ul class="nav nav-tabs" role="tablist">
                                <li class="nav-item p-b-10">
                                    <a class="nav-link active" data-toggle="tab" href="#description" role="tab">Description</a>
                                </li>

                                <li class="nav-item p-b-10">
                                    <a class="nav-link" data-toggle="tab" href="#information" role="tab">Additional information</a>
                                </li>

                                <li class="nav-item p-b-10">
                                    <a class="nav-link" data-toggle="tab" href="#reviews" role="tab">Reviews (1)</a>
                                </li>
                            </ul>


                            <div class="tab-content p-t-43">

                                <div class="tab-pane fade show active" id="description" role="tabpanel">
                                    <div class="how-pos2 p-lr-15-md">
                                        <p class="stext-102 cl6">
                                            Aenean sit amet gravida nisi. Nam fermentum est felis, quis feugiat nunc fringilla sit amet. Ut in blandit ipsum. Quisque luctus dui at ante aliquet, in hendrerit lectus interdum. Morbi elementum sapien rhoncus pretium maximus. Nulla lectus enim, cursus et elementum sed, sodales vitae eros. Ut ex quam, porta consequat interdum in, faucibus eu velit. Quisque rhoncus ex ac libero varius molestie. Aenean tempor sit amet orci nec iaculis. Cras sit amet nulla libero. Curabitur dignissim, nunc nec laoreet consequat, purus nunc porta lacus, vel efficitur tellus augue in ipsum. Cras in arcu sed metus rutrum iaculis. Nulla non tempor erat. Duis in egestas nunc.
                                        </p>
                                    </div>
                                </div>


                                <div class="tab-pane fade" id="information" role="tabpanel">
                                    <div class="row">
                                        <div class="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                                            <ul class="p-lr-28 p-lr-15-sm">
                                                <li class="flex-w flex-t p-b-7">
                                                    <span class="stext-102 cl3 size-205">
                                                        Weight
                                                    </span>

                                                    <span class="stext-102 cl6 size-206">
                                                        0.79 kg
                                                    </span>
                                                </li>

                                                <li class="flex-w flex-t p-b-7">
                                                    <span class="stext-102 cl3 size-205">
                                                        Dimensions
                                                    </span>

                                                    <span class="stext-102 cl6 size-206">
                                                        110 x 33 x 100 cm
                                                    </span>
                                                </li>

                                                <li class="flex-w flex-t p-b-7">
                                                    <span class="stext-102 cl3 size-205">
                                                        Materials
                                                    </span>

                                                    <span class="stext-102 cl6 size-206">
                                                        60% cotton
                                                    </span>
                                                </li>

                                                <li class="flex-w flex-t p-b-7">
                                                    <span class="stext-102 cl3 size-205">
                                                        Color
                                                    </span>

                                                    <span class="stext-102 cl6 size-206">
                                                        Black, Blue, Grey, Green, Red, White
                                                    </span>
                                                </li>

                                                <li class="flex-w flex-t p-b-7">
                                                    <span class="stext-102 cl3 size-205">
                                                        Size
                                                    </span>

                                                    <span class="stext-102 cl6 size-206">
                                                        XL, L, M, S
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                <div class="tab-pane fade" id="reviews" role="tabpanel">
                                    <div class="row">
                                        <div class="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                                            <div class="p-b-30 m-lr-15-sm">

                                                <div class="flex-w flex-t p-b-68">
                                                    <div class="wrap-pic-s size-109 bor0 of-hidden m-r-18 m-t-6">
                                                        <img src="assect/assimages/avatar-01.jpg" alt="AVATAR" />
                                                    </div>

                                                    <div class="size-207">
                                                        <div class="flex-w flex-sb-m p-b-17">
                                                            <span class="mtext-107 cl2 p-r-20">
                                                                Ariana Grande
                                                            </span>

                                                            <span class="fs-18 cl11">
                                                                <i class="zmdi zmdi-star"></i>
                                                                <i class="zmdi zmdi-star"></i>
                                                                <i class="zmdi zmdi-star"></i>
                                                                <i class="zmdi zmdi-star"></i>
                                                                <i class="zmdi zmdi-star-half"></i>
                                                            </span>
                                                        </div>

                                                        <p class="stext-102 cl6">
                                                            Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos
                                                        </p>
                                                    </div>
                                                </div>


                                                <form class="w-full">
                                                    <h5 class="mtext-108 cl2 p-b-7">
                                                        Add a review
                                                    </h5>

                                                    <p class="stext-102 cl6">
                                                        Your email address will not be published. Required fields are marked *
                                                    </p>

                                                    <div class="flex-w flex-m p-t-50 p-b-23">
                                                        <span class="stext-102 cl3 m-r-16">
                                                            Your Rating
                                                        </span>

                                                        <span class="wrap-rating fs-18 cl11 pointer">
                                                            <i class="item-rating pointer zmdi zmdi-star-outline"></i>
                                                            <i class="item-rating pointer zmdi zmdi-star-outline"></i>
                                                            <i class="item-rating pointer zmdi zmdi-star-outline"></i>
                                                            <i class="item-rating pointer zmdi zmdi-star-outline"></i>
                                                            <i class="item-rating pointer zmdi zmdi-star-outline"></i>
                                                            <input class="dis-none" type="number" name="rating" />
                                                        </span>
                                                    </div>

                                                    <div class="row p-b-25">
                                                        <div class="col-12 p-b-5">
                                                            <label class="stext-102 cl3" for="review">Your review</label>
                                                            <textarea class="size-110 bor8 stext-102 cl2 p-lr-20 p-tb-10" id="review" name="review"></textarea>
                                                        </div>

                                                        <div class="col-sm-6 p-b-5">
                                                            <label class="stext-102 cl3" for="name">Name</label>
                                                            <input class="size-111 bor8 stext-102 cl2 p-lr-20" id="name" type="text" name="name" />
                                                        </div>

                                                        <div class="col-sm-6 p-b-5">
                                                            <label class="stext-102 cl3" for="email">Email</label>
                                                            <input class="size-111 bor8 stext-102 cl2 p-lr-20" id="email" type="text" name="email" />
                                                        </div>
                                                    </div>

                                                    <button class="flex-c-m stext-101 cl0 size-112 bg7 bor11 hov-btn3 p-lr-15 trans-04 m-b-10">
                                                        Submit
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Productdetail;
