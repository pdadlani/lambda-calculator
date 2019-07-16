import React, {useState} from "react";
//Import your array data to from the provided data file
import { numbers } from '../../../data';
//import any components needed
import NumberButton from './NumberButton.js';


const Numbers = () => {
  // STEP 2 - add the imported data to state
  // const [numbersState, setNumbersState] = useState(numbers);
  // console.log({numbersState});
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numbers.map((number, index) => <NumberButton number={number} key={index} />
      )};
    </div>
  );
};


export default Numbers;