import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import StoreItem from '../data/storeitems.json'
import { useShoppingCart } from '../context/Shoppingcartcontext';
const Cartitem = ({id , quantity}) => {
  const {removeItemFromCart} =useShoppingCart()
    const item = StoreItem.find((i)=>i.id === id)
    if(item == null) return null;
  return (
  <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
  <img src={item.imgSrc} alt='cart-img'
    style={{width:"125ps", height:"75px" , objectFit:"cover"}}

  /> 
  <div className='me-auto'>
    <div>
      {item.name}{" "}
      {quantity > 1 && (
        <span className='text-muted' style={{fontSize:"0.65rem"}}>
        x{quantity}</span>
      )}
    
    </div>
    {item.price * quantity} DT
    <div>

    </div>
  </div>
  <Button variant='outline-danger' size='sm' onClick={()=>removeItemFromCart(id)}
  >
   X
  </Button>
  
  </Stack>
  )
}

export default Cartitem