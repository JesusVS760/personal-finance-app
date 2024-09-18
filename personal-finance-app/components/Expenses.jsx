import React, { useState } from "react";
import "./Expenses.css";

const Expenses = () => {
  const [expense, setExpense] = useState(0);
  return (
    <div className="expenses-container">
      <h4>Expenses</h4>
      <h1>${expense}</h1>
    </div>
  );
};

export default Expenses;
