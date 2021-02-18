import React, { useState } from "react";

import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

export default function ToggleButtonGroupControlled() {
    const [value, setValue] = useState([1, 3]);
  
    const handleChange = (val) => setValue(val);
  
    return (
      <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
        <ToggleButton value={1}>Only show your information</ToggleButton>
      </ToggleButtonGroup>
    );
  }
  
