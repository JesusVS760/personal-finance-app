import React, { useState } from "react";
import "./Expenses.css";

const Expenses = () => {
  const [expense, setExpense] = useState(0);
  return (
    <div className="expenses-container">
      <h4 className="text-2xl">Expenses</h4>
      <h1 className="text-xl">${expense}</h1>
    </div>
  );
};

export default Expenses;
