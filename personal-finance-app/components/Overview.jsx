import React from "react";
import "./Overview.css";
import CurrBalance from "./CurrBalance";
import Income from "./Income";
import Expenses from "./Expenses";

const Overview = () => {
  return (
    <div className="overview-container">
      <div className="overview-heading">
        <h1>Overview</h1>
      </div>
      <div className="overview-content">
        <div className="overview-valuation">
          <div className="overview-current-balances">
            <CurrBalance />
          </div>
          <div className="overview-income">
            <Income />
          </div>
          <div className="overview-expenses">
            <Expenses />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
