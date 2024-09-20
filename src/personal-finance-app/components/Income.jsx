import React, { useState } from "react";
import "./Income.css";
const Income = () => {
  const [income, setIncome] = useState(0);

  return (
    <div className="income-container bg-white">
      <h4 className="text-2xl">Income</h4>
      <h1 className="text-xl">${income}</h1>
    </div>
  );
};

export default Income;
