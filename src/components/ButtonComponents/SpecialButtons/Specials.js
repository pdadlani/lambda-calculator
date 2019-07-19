import React, { useState } from "react";
//Import your array data to from the provided data file
import { specials } from '../../../data';
//import any components needed
import SpecialButton from './SpecialButton.js';


const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialsState, setSpecialsState] = useState(specials);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {specialsState.map((special, index) => (
        <SpecialButton special={special} key={index} />
      ))}
    </div>
  );
};

export default Specials;