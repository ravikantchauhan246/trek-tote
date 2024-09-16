import React, { useId } from "react";
import Button from "./Button";
import { secondaryButton } from "../lib/Constants";


const ButtonGroup = ({handleMarkAllAsComplete,handleMarkAllAsIncomplete,handleResetToInitial,handleRemoveAllItems}) => {

  return (
    <div className="button-group">
      
      <Button onClick={handleMarkAllAsComplete} type="secondary" >Mark all as complete</Button>
      <Button onClick={handleMarkAllAsIncomplete} type="secondary" >Mark all as incomplete</Button>
      <Button onClick={handleResetToInitial} type="secondary" >Reset to initial</Button>
      <Button onClick={handleRemoveAllItems} type="secondary" >Remove all items</Button>
    </div>
  );
};

export default ButtonGroup;
