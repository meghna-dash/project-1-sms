import React from 'react';
import { Col, Button } from 'reactstrap';

function AddPurchasePage() {
  return (
    <div className="App">
      <Col>
        <Link to="/add-product" /> 
      </Col>
      <Col>
        <Link to="/add-customer" /> 
      </Col>
      <Col>
        <Link to="/add-purchase" /> 
      </Col>
    </div>
  );
}

export default AddPurchasePage;
