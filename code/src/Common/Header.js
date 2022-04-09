import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 text-white"><Link to={"/"}>Navbar</Link></span>
                </div>
        </nav>
    </>
  )
}

export default Header