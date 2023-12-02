// Store.jsx
import React from 'react';
import { Col , Row } from 'react-bootstrap';
import storeItems from "../data/storeitems.json";
import StoreItem from './StoreItem';

const Store = () => {
  return (
    <>
    <Row>
      <h1>Store</h1>
      {storeItems.map((item) => (
  <Col key={item.id}>
    <StoreItem {...item}/>
  </Col>
))} 
</Row>
    </> 
  );
};

export default Store;
