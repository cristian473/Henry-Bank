import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import "./Transactions.css";
import OneTransaction from "./OneTransaction";
import { transactionsHistory, getProfile } from "../../actions/UserActions";

function Transactions({usuarioConectado, moment, getProfile}) {
  // const {usuarioConectado, moment} = props;
  var transactioners = [];
  console.log(`Usuario: ${{usuarioConectado}}`);
  console.log(`Rango Horario: ${moment}`);

  useEffect(() => {
    getProfile();
  }, []);

  // /ƒ (dispatch) {
  //   axiosWEBPACK_IMPORTED_MODULE1default.a.post("http://localhost:3001/transactions/history/time/" + id?moment= + moment).then(data => {
  //     dispatch({
  //       type: _constants…/

  transactioners = transactionsHistory(usuarioConectado.id, moment);
  const transactioners2 = transactioners
  console.log(transactioners);
  return (
    <Container className="">
      <Row>
        <Col sm={4}></Col>
        <Col sm={8} className="">
          {/* {transactioners.map((transactionsHistory) => {
            <OneTransaction key={transactionsHistory.id} />
          })} */}
        </Col>
      </Row>
    </Container>
  );
}
function mapStateToProps(state) {
  return {
    history: state.history,
    usuarioConectado: state.usuario.usuarioConectado,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    transactionsHistory: (data) => dispatch(transactionsHistory(data)), 
    
  };
}

export default connect(mapStateToProps, {transactionsHistory, getProfile})(Transactions);
