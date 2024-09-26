import React, { useEffect, useState } from "react";
import arrow from "../../starter-code/assets/images/icon-caret-right.svg";

const Transactions = ({ transactionValues }) => {
  const [isCard, setIsCard] = useState(true);
  const [displayPreview, setDisplayPreview] = useState([]);

  const validTransactions = transactionValues
    .filter((transaction) => transaction.name != "")
    .map((transaction) => transaction);

  console.log(validTransactions);

  useEffect(() => {
    if (isCard) {
      setDisplayPreview(validTransactions.splice(0, 5));
    }
  }, []);

  return (
    <div className="transaction-container rounded-xl p-7 max-w-2xl bg-white mt-5">
      <div className="transactions-heading flex">
        <h3 className=" mr-auto mb-4 font-bold  text-2xl ">Transactions</h3>
        <button className="detail-button flex items-center gap-2 cursor-pointer">
          <h3> View All</h3>
          <img src={arrow} alt="arrow" />
        </button>
      </div>
      {displayPreview.map((transaction) => (
        <div key={transaction.name} className="transactions-card flex">
          <div className="transaction-info  mr-auto">
            <img src={`../../starter-code${transaction.avatar}`} alt="" />
            <p>{transaction.name}</p>
          </div>
          <div className="transactions-value">
            <div className="transaction-amt">{transaction.amount}</div>
            <div className="transaction-date">{transaction.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
