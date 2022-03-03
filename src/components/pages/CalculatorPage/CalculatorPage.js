import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Calculator from '../../Calculator';
import './CalculatorPage.css';

const CalculatorPage = () => (
  <Container>
    <Row>
      <Col><h1 className="heading">Let us do some calculation</h1></Col>
      <Col><Calculator /></Col>
    </Row>
  </Container>
);

export default CalculatorPage;
