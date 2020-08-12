import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./General.css";
import { Link } from "wouter";
import Transactions from "../Transactions/Transactions"
import { transactionsHistory, getProfile } from "../../actions/UserActions";

function General({ usuarioConectado, getProfile, transactionsHistory, transacciones }) {

    useEffect(() => {
        getProfile();
      }, []);

  return (
    <div className="container">
      <div className="general">
        <h4> GENERAL </h4>
      </div>
      <div className="props">
        <div className="income">
          <h5> Ingresos </h5>
          {transacciones ? (
            <h3>${transacciones.income}</h3>
          ) : (
            <h3 className="value"> $ aquí va el valor </h3>
          )}
        </div>
        <div className="expenses">
          <h5> Egresos </h5>
          {transacciones ? (
            <h3>${transacciones.outcome}</h3>
          ) : (
            <h3 className="value"> $ aquí va otro valor </h3>
          )}
        </div>
      </div>
      <div className="record">
        <Link to="1days" className="link">
          {<Transactions onClick={transactionsHistory(usuarioConectado.id, "day")}/>}
          1Day{" "}
        </Link>
        <Link to="7days" className="link">
          {" "}
          7Days{" "}
        </Link>
        <Link to="30days" className="link">
          {" "}
          30Days{" "}
        </Link>
        <Link to="6months" className="link">
          {" "}
          6Months{" "}
        </Link>
      </div>
    </div>
  );
}

function mapStateToProps(state){
    return {
      usuarioConectado: state.usuario.usuarioConectado,
      transactions: state.usuario.transactions,
    }
  }
  
export default connect(mapStateToProps,{ getProfile, transactionsHistory })(General)