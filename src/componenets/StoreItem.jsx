
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useShoppingCart } from '../context/Shoppingcartcontext';
const StoreItem = ({ id, price ,name , imgSrc }) => {
  const { getItemsQuantity, increaseCartQuantity, decreaseCartQuantity, removeItemFromCart } = useShoppingCart();

  return (

    <Card style={{ width: '20rem', marginBottom: '20px' }}>
             <Card.Img src={imgSrc} variant='top' style={{height:'200px' , objectFit:'cover'}} className='card-image' />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-baseline'>
          <span className='fs-2'>{name}</span>
          <span className='text-muted me-2'>{price} DT</span>
        </Card.Title>
        <div>
          {getItemsQuantity(id) === 0 ? (
            <Button className='w-100' onClick={() => increaseCartQuantity(id)}>
              ADD TO CART
            </Button>
          ) : (
            <div className='d-flex align-items-center justify-content-center' style={{ gap: '0.5rem' }}>
              <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
              <span className='fs-3'>{getItemsQuantity(id)} in cart</span>
              <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              <Button variant='danger' onClick={() => removeItemFromCart(id)}>
                Remove
              </Button>
              <div></div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;

