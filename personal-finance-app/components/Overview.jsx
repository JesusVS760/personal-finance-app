import React from "react";
import { CurrBalance } from "./CurrBalance";

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
        </div>
      </div>
    </div>
  );
};

export default Overview;
