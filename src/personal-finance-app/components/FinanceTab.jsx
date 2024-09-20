import React, { useState } from "react";
import "./FinanceTab.css";
import close from "../starter-code/assets/images/icon-minimize-menu.svg";
import overviewImage from "../starter-code/assets/images/icon-nav-overview.svg";
import transactionsImage from "../starter-code/assets/images/icon-nav-transactions.svg";
import budgetsImage from "../starter-code/assets/images/icon-nav-budgets.svg";
import potsImage from "../starter-code/assets/images/icon-nav-pots.svg";
import recurringImage from "../starter-code/assets/images/icon-nav-recurring-bills.svg";
import logo from "../starter-code/assets/images/logo-large.svg";

import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

const FinanceTab = () => {
  const navigate = useNavigate();
  const [minimize, setMinimize] = useState(true);

  const handleNextPage = (page) => {
    console.log(page);
    navigate(page);
  };

  return (
    <>
      {minimize && (
        <div className="finance-tab-container bg-black-500">
          <div className="finance-tab-heading text-primary-color font-bold text-3xl">
            <img src={logo} alt="logo" />
          </div>
          <div className="finance-content">
            <div className="finance-buttons">
              <button onClick={() => handleNextPage("/")}>
                <img src={overviewImage} alt="overview image" />
                Overview
              </button>
              <button onClick={() => handleNextPage("/Transactions")}>
                <img src={transactionsImage} alt="trans image" />
                Transactions
              </button>
              <button onClick={() => handleNextPage("/Budgets")}>
                <img src={budgetsImage} alt="" />
                Budgets
              </button>
              <button onClick={() => handleNextPage("/Pots")}>
                <img src={potsImage} alt="pots image" />
                Pots
              </button>
              <button onClick={() => handleNextPage("/RecurringBills")}>
                <img src={recurringImage} alt="reccurring image" />
                Recurring Bills
              </button>
            </div>
          </div>
          <div className="finance-minimize-menu">
            <button onClick={() => setMinimize(!minimize)}>
              {" "}
              <img src={close} alt="" />
              Minimize Menu
            </button>
          </div>
        </div>
      )}
      {!minimize && (
        <div className="show-menu" onClick={() => setMinimize(!minimize)}>
          <Menu size={25} className="text-blue-800" />
          <button className="text-xl text-blue-800">Show Menu</button>
        </div>
      )}
    </>
  );
};

export default FinanceTab;
