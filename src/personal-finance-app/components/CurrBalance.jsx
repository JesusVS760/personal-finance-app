import React, { useState } from "react";
import "./CurrBalance.css";

const CurrBalance = () => {
  const [balance, setBalance] = useState(0);

  return (
    <div className="curr-balance-container">
      <h4>Current Balance</h4>
      <h1>${balance}</h1>
    </div>
  );
};
export default CurrBalance;
