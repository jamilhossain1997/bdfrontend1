import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
              <div class="sidebar-wrapper" data-simplebar="true">
            <div class="sidebar-header">
                <div>
                    <img src="assets/images/logo-icon.png" class="logo-icon" alt="logo icon"/>
                </div>
                <div>
                    <h4 class="logo-text">Syndron</h4>
                </div>
                <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
                </div>
            </div>
         
            <ul class="metismenu" id="menu">
                <li>
                    <a href="javascript:;" class="has-arrow">
                        <div class="parent-icon"><i class='bx bx-home-circle'></i>
                        </div>
                        <div class="menu-title">Dashboard</div>
                    </a>
                    <ul>
                        <li> <a href="index.html"><i class="bx bx-right-arrow-alt"></i>eCommerce</a>
                        </li>
                        <li> <a href="dashboard-alternate.html"><i class="bx bx-right-arrow-alt"></i>Analytics</a>
                        </li>
                    </ul>
                </li>
             
                <li class="menu-label">UI Elements</li>
                
                <li>
                    <a href="javascript:;" class="has-arrow">
                        <div class="parent-icon"><i class='bx bx-cart'></i>
                        </div>
                        <div class="menu-title">eCommerce</div>
                    </a>
                    <ul>
                        <li> <Link to='/category'><i class="bx bx-right-arrow-alt"></i>Category</Link>
                        </li>
                        <li> <Link to='/subcategory'><i class="bx bx-right-arrow-alt"></i>Subcategory</Link>
                        </li>
                        <li> <Link to='/brand'><i class="bx bx-right-arrow-alt"></i>Products Brand</Link>
                        </li>
                        <li> <a href="ecommerce-products.html"><i class="bx bx-right-arrow-alt"></i>Products</a>
                        </li>
                        <li> <Link to="/productview"><i class="bx bx-right-arrow-alt"></i>Product Details</Link>
                        </li>
                        <li> <Link to='/productadd'><i class="bx bx-right-arrow-alt"></i>Add New Products</Link>
                        </li>
                        <li> <a href="ecommerce-orders.html"><i class="bx bx-right-arrow-alt"></i>Orders</a>
                        </li>
                    </ul>
                </li>
            </ul>
        
        </div>
        </div>
    )
}

export default Nav
