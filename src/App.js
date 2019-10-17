import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Col, Button } from 'reactstrap';
import AddProductPage from './pages/AddProductPage';
import AddCustomerPage from './pages/AddCustomerPage';
import AddPurchasePage from './pages/AddPurchasePage';

function App() {
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

export default App;
