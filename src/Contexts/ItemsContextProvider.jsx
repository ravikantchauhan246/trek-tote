import React, { createContext, useEffect, useState } from 'react';
import { initialItem } from '../lib/Constants';

export const ItemContext = createContext(); // Move this outside the component

const ItemsContextProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem('items')) || initialItem;
  });

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }

      return item;
    });
    setItems(newItems);
  };

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });

    setItems(newItems);
  };

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });

    setItems(newItems);
  };

  const handleResetToInitial = () => {
    setItems(initialItem);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const contextValue = {
    items,
    handleAddItem,
    handleDeleteItem,
    handleToggleItem,
    handleMarkAllAsComplete,
    handleMarkAllAsIncomplete,
    handleResetToInitial,
    handleRemoveAllItems,
  };

  return (
    <ItemContext.Provider value={contextValue}>{children}</ItemContext.Provider>
  );
};

export default ItemsContextProvider;
