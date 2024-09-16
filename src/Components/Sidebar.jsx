import React from 'react'
import AddItemForm from "./AddItemForm"
import ButtonGroup from "./ButtonGroup"


const Sidebar = ({handleAddItem,handleRemoveAllItems,handleMarkAllAsComplete,handleMarkAllAsIncomplete,handleResetToInitial}) => {
  return (
    <div className='sidebar'>
      <AddItemForm handleAddItem={handleAddItem}/>
      <ButtonGroup handleMarkAllAsComplete={handleMarkAllAsComplete} handleMarkAllAsIncomplete={handleMarkAllAsIncomplete} handleResetToInitial={handleResetToInitial} handleRemoveAllItems={handleRemoveAllItems}/>
    </div>
  )
}

export default Sidebar