import React from "react";
import "./HomePage.css";
import FinanceTab from "../components/FinanceTab";
import Overview from "../components/Overview";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-finance">
        <FinanceTab />
      </div>
      <div className="homepage-overview">
        <Overview />
      </div>
    </div>
  );
};

export default HomePage;
