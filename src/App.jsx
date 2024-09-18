import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "./personal-finance-app/components/DashboardLayout";
import HomePage from "./personal-finance-app/pages/HomePage";

const App = () => {
  return (
    <div className="app-container bg-shellwhite-500">
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
