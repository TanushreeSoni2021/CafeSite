import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge'
import "./Header.css"
import { useSelector } from 'react-redux';
// import "../App.css"


function Header() {
    const { cartItem } = useSelector(state => state.cart)
    return (
        <div>
            <Navbar collapseOnSelect fixed='top' expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#" className='logo'>COFFEE <small>BLEND</small></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Link className='nav-link' to='/'>Home</Link>
                            <Link className='nav-link' to='/menu'>Menu</Link>
                            {/*  <Link className='nav-link' to='/service'>Services</Link>
                            <Link className='nav-link' to='/about'>About</Link>
                            <Link className='nav-link' to='/contact'>Contact</Link> */}
                            <Link className='nav-link order-count'>
                                <Badge badgeContent={cartItem.length} style={{ background: "" }} >
                                    <Link className='cart-icon' to='/add'><i className="fa-sharp fa-solid fa-cart-shopping"></i></Link>
                                </Badge>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header

