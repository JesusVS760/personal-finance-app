import React, { useState } from "react";

const AddPot = ({ handleAdd }) => {
  const [addPot, setAddPot] = useState(false);
  const [userInput, setUserInput] = useState("");
  // const [validPot, setValidPot] = useState("");

  function handleUserInput(value) {
    setUserInput([...userInput, value]);
    console.log(value);
  }

  function handleSubmitPot() {
    if (userInput === "") {
      console.log("Please Enter Pot Before Submitting");
      return;
    } else {
      // setValidPot(userInput);
      handleAdd(userInput);
    }
  }

  return (
    <div>
      <button onClick={() => setAddPot(!addPot)}>Add Pot</button>
      {addPot ? (
        <form
          // action="submit"
          className="absolute p-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold bg-slate-500 rounded-md"
        >
          <h1>Add A Pot</h1>
          <div className="add-pot-info flex flex-col ">
            <input
              onChange={(e) => handleUserInput(e.target.value)}
              placeholder="Enter New Pot Here..."
              type="text"
              className="p-2 text-black"
            />
            <button
              className="p-2 bg-black cursor-pointer"
              onClick={() => handleSubmitPot}
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
