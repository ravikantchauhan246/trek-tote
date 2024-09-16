import React, { useState } from "react";
import { initialItem } from "../lib/Constants";

const ItemList = ( {handleToggleItem,items,handleDeleteItem}) => {

  
  return (
    <>
      <ul>
       {items.map((item)=>{
        return <Item key={item.id} handleToggleItem={handleToggleItem} item={item} handleDeleteItem={handleDeleteItem} />
       })}
      </ul>
    </>
  );
};

function Item({handleToggleItem,item,handleDeleteItem}) {
  return (
    <li className="item">
      <label>
        <input onChange={()=>{
          handleToggleItem(item.id)
        }} checked={item.packed} type="checkbox" />
        {item.name}
      </label>
      <button onClick={()=>{
        handleDeleteItem(item.id)
      }}>❌</button>
    </li>
  );
}

export default ItemList;
