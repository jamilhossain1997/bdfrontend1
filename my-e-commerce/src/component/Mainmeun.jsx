import React from 'react';
import { Navbar,Nav,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <div>
             <nav>
                 <ul className='left'>
                     <li><Link to='/'>BnaExpress</Link></li>
                 </ul>
                 <ul className='right'>
                     <li>
                         <Link to='cart'>
                             <span className='shoppingCard'><i class="fas fa-cart-plus"></i><span className='CartCount'>0</span></span>
                         </Link>
                    </li>
                 </ul>
             </nav>
        </div>
    )
}

export default Header
