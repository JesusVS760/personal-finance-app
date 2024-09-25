import React, { useEffect, useState } from "react";
import arrow from "../../starter-code/assets/images/icon-caret-right.svg";
import savedSign from "../../starter-code/assets/images/icon-nav-pots.svg";
const Pots = ({ pots }) => {
  const [saved, setSaved] = useState(0);

  useEffect(() => {
    const getTotal = pots
      .filter((pot) => pot.total >= 0)
      .map((pot) => pot.total)
      .reduce((acc, current) => acc + current, 0);

    setSaved(getTotal);
  }, [pots]);

  const potsValues = pots
    .filter((pot) => pot.name !== "") // Only keep pots with a non-empty name
    .map((pot) => pot); // Extract the names

  const potsToDisplay = potsValues.slice(0, 4);

  const getBorderColor = (theme) => {
    switch (theme) {
      case "#277C78":
        return "border-theme1";
      case "#626070":
        return "border-theme2";
      case "#82C9D7":
        return "border-theme3";
      case "#F2CDAC":
        return "border-theme4";
    }
  };

  return (
    <div className="pots-container rounded-xl p-7 max-w-2xl bg-white mt-20">
      <div className="pots-heading flex flex-row">
        <div className="pots-title mr-auto mb-10">
          <h3 className="text-2xl font-bold">Pots</h3>
        </div>
        <div className="pots-details">
          <button className="detail-button flex items-center gap-2 cursor-pointer">
            <h3> See Details</h3>
            <img src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
      <div className="pots-content flex flex-row">
        <div className="pots-saved-total flex gap-8 bg-slate-200  pl-5 px-24 pt-10 rounded-md">
          <div className="pots-saved-total-img">
            <img className="pots-image w-11" src={savedSign} alt="saved" />
          </div>
          <div className="pots-saved-total-value text-white">
            <h4 className="text-gray-500">Total Saved</h4>
            <h2 className="saved-amount text-black font-bold text-3xl">
              ${saved}
            </h2>
          </div>
        </div>

        <div className="pots-more grid grid-rows-2 grid-cols-2 gap-4 ml-8">
          {potsToDisplay.map((pot) => (
            <div
              key={pot.name}
              className={`pots-savings bg-slate-200 p-2 rounded-sm border-l-4 ${getBorderColor(
                pot.theme
              )} pl-4`}
            >
              <h5>{pot.name}</h5>
              <h2 className="font-bold">${pot.total}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pots;
