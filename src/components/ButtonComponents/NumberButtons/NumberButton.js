import React from "react";

const NumberButton = (props) => {
  // const {number} = props;
  // console.log('props', props);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{props.number}</button>
    </>
  );
};

export default NumberButton;