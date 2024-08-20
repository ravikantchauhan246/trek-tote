import React, { useId } from "react";
import Button from "./Button";
import { secondaryButton } from "../lib/Constants";


const ButtonGroup = () => {

    
    
  

  return (
    <div className="button-group">
      {secondaryButton.map((label,id) => {
        return <Button key={id} type="secondary">{label}</Button>;
      })}
      {/* <Button type="secondary" >Mark all as complete</Button>
      <Button type="secondary" >Mark all as incomplete</Button>
      <Button type="secondary" >Reset to initial</Button>
      <Button type="secondary" >Remove all items</Button> */}
    </div>
  );
};

export default ButtonGroup;
