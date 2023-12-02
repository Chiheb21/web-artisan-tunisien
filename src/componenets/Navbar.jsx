import React from 'react'
import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import {Link} from "react-router-dom";
import { useShoppingCart } from '../context/Shoppingcartcontext';
import logoImage from '../images/logo-site.jpeg';
import panier from '../images/panier.jpg';
import contact from '../images/picto_compte_blanc.png';


const Navbar = () => {
  const {openCart,cartQuantity} = useShoppingCart()
 
  return (
    <NavbarBs sticky='top' bg='black' >
       <Container className='d-flex justify-content-between align-items-center'>
        <Nav className='me-auto'>
        <div className='logo-container'>
        <Link to="/Signup" className='nav-link-white me-3 fw-bold'>Signup</Link>
      <Link to="/Home" className='nav-link-white me-3 fw-bold'>Login</Link>
      <Link to="/Store" className='nav-link-white me-3 fw-bold'>Store</Link>
      

    
          <img
            src={logoImage}
            alt='Logo'
            className='logo-image img-fluid' 
            style={{ maxWidth: '100px', marginLeft: '400px' }}
          />
        </div>
        </Nav>
            <Button 
            variant='outline-primary'
        className='rounded-circle d-flex align-items-center justify-content-center'
        style={{ width: '3rem', height: '3rem', position: 'relative', color: 'white' }}
        onClick={openCart}
      >
        <img
          src={contact}  
          alt="Logo2"
          style={{ width: '150%', height: 'auto', marginRight: '2px' }}
        />
        <img
          src={panier }
          alt="Logo"
          style={{ width: '150px', height: 'auto' }}
        />
        
      
<div className='rounded-circle bg-danger d-flex justify-content-center align-items-center' 
style={{
  position:"absolute",
  color:"white",
  width:"1.2rem",
  height:"1.2rem",
  bottom:0,
  right:0,
  transform:"translate(25%,25%)",

}}
>
{cartQuantity}
</div>
            </Button> 
        </Container>
    </NavbarBs>
  )
}

export default Navbar
