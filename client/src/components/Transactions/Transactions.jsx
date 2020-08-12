import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import "./Transactions.css";
import OneTransaction from "./OneTransaction";
import { transactionsHistory, getProfile } from "../../actions/UserActions";

function Transactions(usuarioConectado, moment) {
  useEffect(() => {
    getProfile();
  }, {});

  /*ƒ (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("http://localhost:3001/transactions/history/time/" + id`?moment=` + moment).then(data => {
      dispatch({
        type: _constants…*/

  const transactioners = transactionsHistory(usuarioConectado.id, moment);
  console.log(usuarioConectado);
  return (
    <Container className="">
      <Row>
        <Col sm={4}></Col>
        <Col sm={8} className="">
          {transactioners.map((transactionsHistory) => (
            <OneTransaction key={transactionsHistory.id} />
          ))}
        </Col>
      </Row>
    </Container>
  );
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
