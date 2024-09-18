import React from "react";
import "./FinanceTab.css";
import close from "../starter-code/assets/images/icon-minimize-menu.svg";
import overviewImage from "../starter-code/assets/images/icon-nav-overview.svg";
import transactionsImage from "../starter-code/assets/images/icon-nav-transactions.svg";
import budgetsImage from "../starter-code/assets/images/icon-nav-budgets.svg";
import potsImage from "../starter-code/assets/images/icon-nav-pots.svg";
import recurringImage from "../starter-code/assets/images/icon-nav-recurring-bills.svg";

const FinanceTab = () => {
  return (
    <div className="finance-tab-container">
      <div className="finance-tab-heading">
        <h1>Finance</h1>
      </div>
      <div className="finance-content">
        <div className="finance-buttons">
          <button>
            {" "}
            <img src={overviewImage} alt="overview image" />
            Overview
          </button>
          <button>
            <img src={transactionsImage} alt="trans image" />
            Transactions
          </button>
          <button>
            <img src={budgetsImage} alt="" />
            Budgets
          </button>
          <button>
            <img src={potsImage} alt="pots image" />
            Pots
          </button>
          <button>
            <img src={recurringImage} alt="reccurring image" />
            Recurring Bills
          </button>
        </div>
      </div>
      <div className="finance-minimize-menu">
        <button>
          {" "}
          <img src={close} alt="" />
          Minimize Menu
        </button>
      </div>
    </div>
  );
};

export default FinanceTab;
