import React, { useState } from "react";
import arrow from "../starter-code/assets/images/icon-caret-right.svg";
import savedSign from "../starter-code/assets/images/icon-nav-pots.svg";
const Pots = () => {
  const [saved, setSaved] = useState(0);
  const [savings, setSavings] = useState(0);
  const [firstPurchase, setFirstPurchase] = useState(0);
  const [secondPurchase, setSecondPurchase] = useState(0);
  const [thirdPurchase, setThirdPurchase] = useState(0);

  return (
    <div className="pots-container rounded-xl p-7 max-w-2xl bg-white mt-20">
      <div className="pots-heading flex flex-row">
        <div className="pots-title mr-auto mb-10">
          <h3 className="text-2xl font-bold">Pots</h3>
        </div>
        <div className="pots-details">
          <button className="detail-button flex items-center gap-2 cursor-pointer">
            <h3> See Details</h3>
            <img src={arrow} />
          </button>
        </div>
      </div>
      <div className="pots-content flex flex-row">
        <div className="pots-saved-total flex align-center gap-8 bg-gray-500 w-fit px-12 py-5 rounded-md">
          <div className="pots-saved-total-img">
            <img className="pots-image w-11" src={savedSign} alt="" />
          </div>
          <div className="pots-saved-total-value text-white">
            <h4>Total Saved</h4>
            <h2 className="saved-amount text-2xl">${saved}</h2>
          </div>
        </div>
        <div className="pots-more flex flex-row justify-between">
          <div className="pots-savings ">
            <h5>Savings</h5>
            <h2>${savings}</h2>
          </div>
          <div className="pots-gift">
            <h5>Gift</h5>
            <h2>${firstPurchase}</h2>
          </div>
          <div className="pots-concert">
            <h5>Concert Ticket</h5>
            <h2>${secondPurchase}</h2>
          </div>
          <div className="pots-purchase">
            <h5>New Laptop</h5>
            <h2>${thirdPurchase}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pots;
