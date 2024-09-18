import React, { useState } from "react";
import "./CurrBalance.css";
export const CurrBalance = () => {
  const [balance, setBalance] = useState(0);

  return (
    <div className="curr-balance-container">
      <div className="curr-balance-content">
        <h4>Current Balance</h4>
        <h1>${balance}</h1>
      </div>
    </div>
  );
};
