import React, { useState } from "react";
import "./CurrBalance.css";

const CurrBalance = () => {
  const [balance, setBalance] = useState(0);

  return (
    <div className="curr-balance-container">
      <h4 className="text-2xl">Current Balance</h4>
      <h1 className="text-3xl">${balance}</h1>
    </div>
  );
};
export default CurrBalance;
