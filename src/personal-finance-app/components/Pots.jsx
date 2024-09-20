import React from "react";
import arrow from "../starter-code/assets/images/icon-caret-right.svg";

const Pots = () => {
  return (
    <div className="pots-container rounded-xl p-10 max-w-2xl bg-white mt-20">
      <div className="pots-heading flex flex-row">
        <div className="pots-title mr-auto">
          <h3>Pots</h3>
        </div>
        <div className="pots-details">
          <button className="detail-button flex align-middle justify-items-center	">
            <h3> See Details</h3>
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>
      <div className="pots-content">
        <div className="pots-saved-total">
          <div className="pots-saved-total-img"></div>
          <div className="pots-saved-total-value"></div>
        </div>
        <div className="pots-more"></div>
      </div>
    </div>
  );
};

export default Pots;
