import React from 'react';
import { Link,useHistory } from 'react-router-dom';

const Nav = (props) => {
    const history=useHistory();
    function LogOut(){
        localStorage.clear();
        props.userSet(null);
        history.push('/login')
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    {localStorage.getItem('token') ?
                    <>
                        <Link class="navbar-brand" to="/">BDExpress</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    </>
                    :null
                    
                }
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    {localStorage.getItem('token') ?
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to={'/'}>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={'/profile'}>Profile</Link>
                            </li>

                        </ul>:
                        <ul class="navbar-nav d-flex">
                            <li class="nav-item">
                                <Link class="nav-link" to={'/login'}>Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={'/register'}>Register</Link>
                            </li>
                        </ul>
                        }


                        {localStorage.getItem('token') ?
                            <ul class="navbar-nav d-flex" title={props.user.name}>
                                <li class="nav-item">
                                    <Link class="nav-link" onClick={LogOut} to={'/login'}>Logout</Link>
                                </li>
                            </ul>:null
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
