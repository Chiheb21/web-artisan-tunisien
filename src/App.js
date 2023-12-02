import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router';
import Home from './componenets/Home';
import Store from './componenets/Store';
import Navbar from './componenets/Navbar';
import ShooppingartProvider from './context/Shoppingcartcontext';
import Signup from './componenets/SignUp';


  const appStyle = {
    backgroundImage: 'url("/imgs/Design-sans-titre.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',  
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  };

const Footer = () => {
  const footerStyle = {
    color: 'white',
    padding: '40px 8px',  
    backgroundImage: 'url("/imgs/AT.jpg")',
    backgroundSize: '100% 120%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };


  return (
    <footer style={footerStyle}>
      <div>
      </div>
      
    </footer>
   
  );
};

const App = () => {
  return (
    <ShooppingartProvider>
      <Navbar />
      <div style={appStyle}>
      <Container>
        <Routes>
        <Route path='/SignUp' element={<Signup />} />
        <Route path='/Home' element={<Home />} />
          <Route path='/Store' element={<Store />} />
        </Routes>
      </Container>
      </div>
      <Footer />
    </ShooppingartProvider>
  );
};

export default App;

