import React from "react";

const OperatorButton = (props) => {
  // const [operator] = props;
  console.log('props.op', props);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{props.char}</button>
    </>
  );
};

export default OperatorButton;