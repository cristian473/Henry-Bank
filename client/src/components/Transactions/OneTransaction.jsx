import React from "react";
import "./Transactions.css";

export default function Transaction(transaction, id, moment) {
  return (
    !!transaction && (
      //switch case pdoriamos hacerlo
      <div className="container">
        <div className="props">
          <div className="expenses">
            <h4>Número Transacción</h4>
            <h5>{transaction.transactionNumber}</h5>
          </div>
          <div className="expenses">
            <h4>Valor</h4>
            <h5>{transaction.value}</h5>
          </div>
          <div className="expenses">
            <h4>Tipo Transacción</h4>
            <h5>{transaction.transactions_type}</h5>
          </div>
          <div className="expenses">
            <h4>Estado</h4>
            <h5>{transaction.state}</h5>
          </div>
          <div className="expenses"></div>
        </div>
      </div>
    )
  );
}
export default Transaction;
