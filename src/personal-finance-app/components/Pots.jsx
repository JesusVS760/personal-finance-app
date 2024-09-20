import React from "react";
import arrow from "../starter-code/assets/images/icon-caret-right.svg";
import savedSign from "../starter-code/assets/images/icon-nav-pots.svg";
const Pots = () => {
  return (
    <div className="pots-container rounded-xl p-7 max-w-2xl bg-white mt-20">
      <div className="pots-heading flex flex-row">
        <div className="pots-title mr-auto mb-10">
          <h3>Pots</h3>
        </div>
        <div className="pots-details">
          <button className="detail-button flex items-center gap-2 cursor-pointer">
            <h3> See Details</h3>
            <img src={arrow} />
          </button>
        </div>
      </div>
      <div className="pots-content">
        <div className="pots-saved-total">
          <div className="pots-saved-total-img">
            <img className="pots-image w-10" src={savedSign} alt="" />
          </div>
          <div className="pots-saved-total-value"></div>
        </div>
        <div className="pots-more"></div>
      </div>
    </div>
  );
};

export default Pots;
