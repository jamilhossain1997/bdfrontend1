import React from 'react'
import { Navbar,Nav,NavDropdown,Container } from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'

const Header = () => {

    const user=JSON.parse(localStorage.getItem('user-info'));
    const history=useHistory();
    function LogOut(){
        localStorage.clear();
        history.push('/login')
    }
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="md">
            <Container fluid>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
               {
                   localStorage.getItem('user-info') ?
                   <>
                      <Nav.Link> <Link to='/'>Product List</Link></Nav.Link>
                      <Nav.Link><Link to='/add'>Add Product</Link></Nav.Link>
                      <Nav.Link> <Link to='/search'>Product Search</Link></Nav.Link>
                   </>

                   :
                   <>
                      <Nav.Link><Link to='/login'>Login</Link></Nav.Link>
                      <Nav.Link><Link to='/register'>Register</Link></Nav.Link>
                   </>
               }
               
               
            </Nav>
          {   localStorage.getItem('user-info') ?
             <Nav>
                <NavDropdown title={user && user.name}>
                    <NavDropdown.Item onClick={LogOut}>Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>

            :null
          }
            
            
        </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    )
}

export default Header
