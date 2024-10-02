import React, { useEffect, useState } from "react";

const AddPot = ({ handleAdd }) => {
  const [addPot, setAddPot] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [amountInput, setAmountInput] = useState(0);
  const [targetInput, setTargetInput] = useState(0);

  // useEffect(() => {
  //   console.log(userInput);
  //   console.log(amountInput);
  // }, [userInput, amountInput]);

  function handleSubmitPot(e) {
    e.preventDefault();
    if (userInput === "" || amountInput === "" || targetInput === "") {
      console.log("Please Enter Pot Before Submitting");
    } else {
      handleAdd({ name: userInput, target: targetInput, amount: amountInput });
    }
  }

  return (
    <div>
      <button onClick={() => setAddPot(!addPot)}>Add Pot</button>
      {addPot ? (
        <form
          action="submit"
          className="absolute p-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold bg-slate-500 rounded-md"
        >
          <h1 className="text-2xl">Add A Pot</h1>
          <div className="add-pot-info flex flex-col ">
            <div className="pot-name">
              <h5>Name:</h5>
              <input
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="e.g Birthday Party"
                type="text"
                className="p-2 text-black"
              />
            </div>
            <div className="amount-name mt-2">
              <h5>Amount:</h5>
              <input
                className="p-2 text-black "
                type="text"
                placeholder="e.g 200.00"
                onChange={(e) => setAmountInput(e.target.value)}
              />
            </div>
            <div className="target-name mt-2">
              <h5>Target Amount:</h5>
              <input
                type="text"
                className="p-2 text-black "
                placeholder="e.g 499.00"
                onChange={(e) => setTargetInput(e.target.value)}
              />
            </div>
            <button
              className="p-2 bg-black cursor-pointer mt-2"
              onClick={(e) => handleSubmitPot(e)}
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddPot;
