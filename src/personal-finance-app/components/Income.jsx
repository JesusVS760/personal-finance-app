import React, { useState } from "react";
import "./Income.css";
const Income = () => {
  const [income, setIncome] = useState(0);

  return (
    <div className="income-container">
      <h4>Income</h4>
      <h1>${income}</h1>
    </div>
  );
};

export default Income;
