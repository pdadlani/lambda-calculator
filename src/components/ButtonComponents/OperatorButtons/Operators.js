import React, { useState } from "react";
//Import your array data to from the provided data file
import { operators } from '../../../data';
//import any components needed
import OperatorButton from './OperatorButton.js';


const Operators = () => {
  // STEP 2 - add the imported data to state
  // const [operatorsState, setOperatorsState] = useState(operators);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operators.map((operator, index) => (
        <OperatorButton 
          char ={operator.char}
          value = {operator.value}
          key = {index}
        />
      ))};
    </div>
  );
};

export default Operators;