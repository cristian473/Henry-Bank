import React, { Component } from "react";
import { connect } from "react-redux";
import "./Transactions.css";
import OneTransaction from "../OneTransaction";
import { Container, Row, Col } from "react-bootstrap";

export class Transactions extends Component {
  /* componentDidMount() {
    if (!this.productos) {
      this.props.buscarTodos();
    }
    this.props.traerCategorias();
  }
 */
  render() {
    return (
      <Container className="">
        <Row>
          <Col sm={4}></Col>
          <Col sm={8} className="">
            {this.props.transactions.map((transaction, moment) => (
              <OneTransaction key={transaction.id} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
