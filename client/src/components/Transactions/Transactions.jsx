import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import "./Transactions.css";
import OneTransaction from "./OneTransaction";
import { transactionsHistory } from "../../actions/UserActions";

export class Transactions extends Component {
  componentDidMount() {
    if (!this.transactions) {
      this.props.transactionsHistory(usuarioConectado.id, moment);
    } else {
      return "Esto no esta bien del todo";
    }
  }
  render() {
    return (
      <Container className="">
        <Row>
          <Col sm={4}></Col>
          <Col sm={8} className="">
            {this.props.transactionsHistory.map((transactionsHistory) => (
              <OneTransaction key={transactionsHistory.transactions_type} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}
function mapStateToProps(state) {
  return {
    history: state.history,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    transactionsHistory: (data) => dispatch(transactionsHistory(data)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
