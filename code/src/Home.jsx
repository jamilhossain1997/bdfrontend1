import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from'./Common/Header';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';

const Home = () => {
    const [catdata, setCatdata] = useState([]);
    const [sildeData, setSildeData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      axios.get('https://prm.scoutsbd.com/prm21/ecommerce-app/api/uersCatViewlimit')
        .then(function (response) {
          console.log(response);
          setCatdata(response.data.Categroy);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        })
    }, [])
    useEffect(() => {
      axios.get('https://prm.scoutsbd.com/prm21/ecommerce-app/api/UserProduct')
        .then(function (response) {
          console.log(response);
          setSildeData(response.data.Products);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        })
    }, [])
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    };
  
    if (loading) {
      return (
        <h3>Loading...</h3>
      )
    } else {
      return (
        <>
              {/* < Header /> */}
              <div className='container'>
                <div className='row'>
                  <div className='col-md-4 varius_down'>
                    <div className='varius_mobile'>
                      <h4>Varius porttitor</h4>
                      <h4 style={{ color: `#355197` }}>imperdiet.</h4>
                      <p>Making protection,smart and secuare</p>
                      <button type="button" className="btn btn-primary">Get Started</button>
                    </div>
                  </div>
                  <div className='col-md-8 mt-5'>
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                      <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="buttomColor bg-primary active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className="buttomColor" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className="buttomColor" aria-label="Slide 3"></button>
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className='row'>
                            <div className='col-md-6'>
                              <img src="../assest/8.jpg" className="d-block w-100" alt="hello" />
                            </div>
                            <div className='col-md-6 sileder_size' >
                              <div className='container'>
                                <div className='row'>
                                  <div className='col-md-2'>
                                    <span><img src='../assest/7.png' style={{ width: `30px`, height: `30px` }} /></span>
                                  </div>
                                  <div className='col-md-10'>
                                    <span><h4>Flexible insurance with</h4></span>
                                    <span><h4>affordable price</h4></span>
                                  </div>
                                </div>
                              </div>
                              <div className='container'>
                                <div className='row'>
                                  <div className='col-md-2'>
                                    <span><img src='../assest/7.png' style={{ width: `30px`, height: `30px` }} /></span>
                                  </div>
                                  <div className='col-md-10'>
                                    <span><h4>Flexible insurance with</h4></span>
                                    <span><h4>affordable price</h4></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className='row'>
                            <div className='col-md-6'>
                              <img src="../assest/8.jpg" className="d-block w-100" alt="hello" />
                            </div>
                            <div className='col-md-6 sileder_size'>
                              <div className='container'>
                                <div className='row'>
                                  <div className='col-md-2'>
                                    <span><img src='../assest/7.png' style={{ width: `30px`, height: `30px` }} /></span>
                                  </div>
                                  <div className='col-md-10'>
                                    <span><h4>Flexible insurance with</h4></span>
                                    <span><h4>affordable price</h4></span>
                                  </div>
                                </div>
                              </div>
                              <div className='container'>
                                <div className='row'>
                                  <div className='col-md-2'>
                                    <span><img src='../assest/7.png' style={{ width: `30px`, height: `30px` }} /></span>
                                  </div>
                                  <div className='col-md-10'>
                                    <span><h4>Flexible insurance with</h4></span>
                                    <span><h4>affordable price</h4></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className='row'>
                            <div className='col-md-6'>
                              <img src="../assest/8.jpg" className="d-block w-100" alt="hello" />
                            </div>
                            <div className='col-md-6 sileder_size' >
                              <div className='container'>
                                <div className='row'>
                                  <div className='col-md-2'>
                                    <span><img src='../assest/7.png' style={{ width: `30px`, height: `30px` }} /></span>
                                  </div>
                                  <div className='col-md-10'>
                                    <span><h4>Flexible insurance with</h4></span>
                                    <span><h4>affordable price</h4></span>
                                  </div>
                                </div>
                              </div>
                              <div className='container'>
                                <div className='row'>
                                  <div className='col-md-2'>
                                    <span><img src='../assest/7.png' style={{ width: `30px`, height: `30px` }} /></span>
                                  </div>
                                  <div className='col-md-10'>
                                    <span><h4>Flexible insurance with</h4></span>
                                    <span><h4>affordable price</h4></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='container'>
                <div className='row'>
                  <h3 className='addcart_head mt-5'>
                    Making protection,smart and secuare
                  </h3>
                </div>
              </div>
              <div className='container addcart mt-5 mb-5'>
                <div className='row'>
                  {
                    catdata.map((items) => {
                      return (
                        <div className="col-md-2">
                          <div className="card4">
                            <div className="card-1">
                              <img style={{ width:`50px`,height:`50px` }} src={`https://prm.scoutsbd.com/prm21/ecommerce-app/${items.image}`}  alt="hello"/>
                              <h1><Link to={'/Cardid'+items.id}>{items.categroy_name}</Link></h1>
                            </div>
                          </div>
                        </div>
                        
                      )
  
                    })
                  }
                  <div className="col-md-2">
                    <div className="card4 ">
                      <div className="card-2">
                        <img src='../assest/12.png' style={{ width: `50px`, height: `50px` }} alt='hello'/>
                        <span><Link to={'/Allproview'}><h2>All view</h2></Link></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='container mb-5'>
                <div className='row'>
                  <h3 className='addcart_head mt-5'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting.
                  </h3>
                </div>
              </div>
              <div className='container mb-5'>
                <div className='row'>
                  <Carousel
                    responsive={responsive}
                    swipeable={false}
                    draggable={false}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoplayTimeout={6000}
                  >
                    {
                      sildeData.map((items) => {
                        return (
                          <div className='col-md-4' key={items.id}>
                            <div className="card" style={{ width: `18rem` }} >
  
                              <div className="card-body">
                                <img src={`https://prm.scoutsbd.com/prm21/ecommerce-app/${items.image}`} className="card-img-top" alt="jamil" style={{ width: `254px`, height: `177px` }} />
                                <h5 className="card-title mt-2" style={{ color: `#355197` }}>{items.pro_name}</h5>
                                <h6 className="card-title">{items.price}</h6>
                                <p className="card-text">{items.pro_details}</p>
                                <button href="#" className="card_button"><Link to={"/productdetail"+items.id}><a style={{color:`#fff`,textDecoration:`none`}}>View Details</a></Link></button>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </Carousel>
                </div>
              </div>
        </>
      )
    }
  
  
}

// export default Home