import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux"
import Banner from './Banner';
import Banner1 from './Banner1';
import Cart from './Cart';
import { Link,useHistory } from 'react-router-dom';


const Header = (props) => {
    const [colorChange, setColorchange] = useState(false);
    const coin = useSelector((state) => state.counterme.count)
    const history=useHistory();
    
    function LogOut(){
        localStorage.clear();
        props.userSet(null);
        history.push('/login')
    }

    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <>
            <header className='mb-4 '>

                <div class="container-menu-desktop">

                    <div class="top-bar">
                        <div class="content-topbar flex-sb-m h-full container">
                            <div class="left-top-bar">
                                Free shipping for standard order over $100
                            </div>

                            <div class="right-top-bar flex-w h-full">
                                <a href="#" class="flex-c-m trans-04 p-lr-25">
                                    Help & FAQs
                                </a>

                                <a href="#" class="flex-c-m trans-04 p-lr-25">
                                    My Account
                                </a>

                                <a href="#" class="flex-c-m trans-04 p-lr-25">
                                    EN
                                </a>

                                <a href="#" class="flex-c-m trans-04 p-lr-25">
                                    USD
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={colorChange ? 'wrap-menu-desktop-affter' : 'wrap-menu-desktop'}>
                        <nav class="limiter-menu-desktop container ">


                            <a href="#" class="logo">
                                <img src="assect/images/icons/logo-01.png" alt="IMG-LOGO" />
                            </a>


                            <div class="menu-desktop">
                                <ul class="main-menu">
                                    <li class="active-menu">
                                        <Link to="/">Home</Link>
                                    </li>

                                    <li>
                                        <Link to='/shops'>Shop</Link>
                                    </li>

                                    <li class="label1" data-label1="hot">
                                        <a href="shoping-cart.html">Features</a>
                                    </li>

                                    <li>
                                        <Link to="/blog">Blog</Link>
                                    </li>

                                    <li>
                                        <Link to="/abouts">About</Link>
                                    </li>

                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>


                            <div class="wrap-icon-header flex-w flex-r-m">
                            
                            <div class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify={coin}>
                                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                                        <i class="zmdi zmdi-shopping-cart"></i>
                                    </button>
                                </div>
                            {
                                localStorage.getItem('token')?
                                <div class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                                   <Link class="nav-link" onClick={LogOut} to={'/login'}>Logout</Link>
                                </div>
                                :<div class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                                <Link class="nav-link"  to={'/login'}>Login</Link>
                               </div>
                            }
                                
                            </div>
                        </nav>
                    </div>
                </div>


                <div class="wrap-header-mobile">

                    <div class="logo-mobile">
                        <a href="index.html"><img src="images/icons/logo-01.png" alt="IMG-LOGO" /></a>
                    </div>


                    <div class="wrap-icon-header flex-w flex-r-m m-r-15">
                        <div class="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
                            <i class="zmdi zmdi-search"></i>
                        </div>

                        <div class="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify={coin}>
                            <i class="zmdi zmdi-shopping-cart"></i>
                        </div>

                        <a href="#" class="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti" data-notify="0">
                            <i class="zmdi zmdi-favorite-outline"></i>
                        </a>
                    </div>


                    <div class="btn-show-menu-mobile hamburger hamburger--squeeze">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </div>
                </div>



                <div class="menu-mobile">
                    <ul class="topbar-mobile">
                        <li>
                            <div class="left-top-bar">
                                Free shipping for standard order over $100
                            </div>
                        </li>

                        <li>
                            <div class="right-top-bar flex-w h-full">
                                <a href="#" class="flex-c-m p-lr-10 trans-04">
                                    Help & FAQs
                                </a>

                                <a href="#" class="flex-c-m p-lr-10 trans-04">
                                    My Account
                                </a>

                                <a href="#" class="flex-c-m p-lr-10 trans-04">
                                    EN
                                </a>

                                <a href="#" class="flex-c-m p-lr-10 trans-04">
                                    USD
                                </a>
                            </div>
                        </li>
                    </ul>

                    <ul class="main-menu-m">
                        <li>
                            <a href="index.html">Home</a>
                            <ul class="sub-menu-m">
                                <li><a href="index.html">Homepage 1</a></li>
                                <li><a href="home-02.html">Homepage 2</a></li>
                                <li><a href="home-03.html">Homepage 3</a></li>
                            </ul>
                            <span class="arrow-main-menu-m">
                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                            </span>
                        </li>

                        <li>
                            <a href="product.html">Shop</a>
                        </li>

                        <li>
                            <a href="shoping-cart.html" class="label1 rs1" data-label1="hot">Features</a>
                        </li>

                        <li>
                            <Link  to="/blog">Blog</Link>
                        </li>

                        <li>
                            <a href="about.html">About</a>
                        </li>

                        <li>
                            <a href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>


                <div class="modal-search-header flex-c-m trans-04 js-hide-modal-search">
                    <div class="container-search-header">
                        <button class="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
                            <img src="images/icons/icon-close2.png" alt="CLOSE" />
                        </button>

                        <form class="wrap-search-header flex-w p-l-15">
                            <button class="flex-c-m trans-04">
                                <i class="zmdi zmdi-search"></i>
                            </button>
                            <input class="plh3" type="text" name="search" placeholder="Search..." />
                        </form>
                    </div>
                </div>
            </header>
            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <Cart/>
            </div>
        </>
    )
};

export default Header;
