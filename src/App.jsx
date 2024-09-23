import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "./personal-finance-app/components/DashboardLayout";
import HomePage from "./personal-finance-app/pages/HomePage";
import Transactions from "./personal-finance-app/components/overviewPageComonents/Transactions";
import Overview from "./personal-finance-app/pages/Overview";
import Budgets from "./personal-finance-app/pages/Budgets";

const App = () => {
  return (
    <div className="app-container bg-slate-500 h-screen">
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Overview />} />
            <Route path="/Transactions" element={<Transactions />} />
            <Route path="/Budgets" element={<Budgets />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
