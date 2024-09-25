import React from "react";
import "./Overview.css";
import CurrBalance from "../components/overviewPageComonents/CurrBalance";
import Income from "../components/overviewPageComonents/Income";
import Expenses from "../components/overviewPageComonents/Expenses";
import Pots from "../components/overviewPageComonents/Pots";

const Overview = ({ balance, potsContent }) => {
  return (
    <div className="overview-container">
      <div className="overview-heading text-2xl font-bold">
        <h1 className="text-3xl">Overview</h1>
      </div>
      <div className="overview-content flex flex-col">
        <div className="overview-valuation">
          <div className="overview-current-balances">
            <CurrBalance currBalance={balance.current} />
          </div>
          <div className="overview-income">
            <Income incomeValue={balance.income} />
          </div>
          <div className="overview-expenses">
            <Expenses expenses={balance.expenses} />
          </div>
        </div>
        <div className="overview-left-side">
          <Pots pots={potsContent} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
