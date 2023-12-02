import React, { useState } from 'react';
import { Offcanvas, Stack, Button, Form } from 'react-bootstrap';
import { useShoppingCart } from '../context/Shoppingcartcontext';
import Cartitem from './Cartitem';
import StoreItem from '../data/storeitems.json';
import emailjs from '@emailjs/browser';
const ShoppingCart = ({ isOpen }) => {
  const { cartItems, closeCart } = useShoppingCart();
  const [name ,setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const totalAmount = cartItems.reduce((total, cartItem) => {
    const item = StoreItem.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Validate email format
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
    setIsValidEmail(isValid);
  };

  const handlePayment = () => {
    if (!isValidEmail || email === '') {
      alert('Veuillez fournir une adresse email valide');
    } else {
      setIsFormVisible(true);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const serviceId = 'service_6mvx1jk';
    const templatedId = 'template_yzak3q7';
    const publicKey = 'dUrKKX4kyuHEO108_';
    
    const templateParams = {
      from_name : name ,
      from_email : email ,
      to_name : 'Web Wizard',
      message : message,
    };
    emailjs.send(serviceId ,templatedId,templateParams,publicKey)
    .then((Response)=>
    {
      console.log('Email sent successfully!',Response);
      setName('');
      setEmail('');
      setMessage('');
      alert('UN MAIL DE VERIFICATION SERA RECU SUR VOTRE MAIL ');
    })
    .catch((error)=>{
      console.error('Error sending email:',error);
    });

  };

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Panier</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <Cartitem key={item.id} {...item} />      ))}
          <p>Total: {totalAmount.toFixed(2)}</p>

        {!isFormVisible ? (
            <div>
              <label htmlFor="email" className="form-label">
              Adresse Email
              </label>
              <input
                type="email"          className={`form-control ${isValidEmail ? '' : 'is-invalid'}`}
                id="email"
                value={email}
        onChange={handleEmailChange}
              />
              {!isValidEmail && (
                <div className="invalid-feedback">Veuillez fournir une adresse email valide</div>
         )}
              <p className="text-muted">Vérification d'email</p>
              <Button variant="primary" onClick={handlePayment}>              PAYER
            </Button>
           </div>
         ) : (
            <Form onSubmit={handleFormSubmit}>
              <Form.Group className="mb-3" controlId="nameOnCard">
                <Form.Label>Name on Card</Form.Label>
                <Form.Control
             type="text"
          placeholder="Enter name on card"
                  value={cardDetails.name}                  onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
            required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="cardNumber">
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter card number (12 digits)"
                  value={cardDetails.cardNumber}
                  pattern="\d{12}"
                  onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="expiryDate">
                <Form.Label>Expiry Date</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="MM/YY"
                  value={cardDetails.expiryDate}
                  onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="cvv">
                <Form.Label>CVV</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter CVV (3 digits)"
                  value={cardDetails.cvv}
                  pattern="\d{3}"
                  onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                TRAITEMENT
              </Button>
            </Form>
          )}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;


