import React, { useMemo, useState } from 'react';
import EmptyView from './EmptyView';
import Select from 'react-select';
import { useItemsContext } from '../lib/hooks';

const ItemList = () => {
  const { items, handleDeleteItem, handleToggleItem } = useItemsContext();
  const [sortBy, setSortBy] = useState('default');

  const sortingOptions = [
    { value: 'default', label: 'Sort by default' },
    { value: 'packed', label: 'Sort by packed' },
    { value: 'unpacked', label: 'Sort by unpacked' },
  ];

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === 'packed') {
          return b.packed - a.packed;
        }

        if (sortBy === 'unpacked') {
          return a.packed - b.packed;
        }

        return 0;
      }),
    [items, sortBy],
  );

  return (
    <>
      <ul className="item-list">
        {items.length === 0 ? <EmptyView /> : null}
        {items.length > 0 ? (
          <section className="sorting">
            <Select
              defaultValue={sortingOptions[0]}
              onChange={(option) => setSortBy(option.value)}
              options={sortingOptions}
            />
          </section>
        ) : null}
        {sortedItems.map((item) => {
          return (
            <Item
              key={item.id}
              handleToggleItem={handleToggleItem}
              item={item}
              handleDeleteItem={handleDeleteItem}
            />
          );
        })}
      </ul>
    </>
  );
};

function Item({ item, handleToggleItem, handleDeleteItem }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => {
            handleToggleItem(item.id);
          }}
          checked={item.packed}
          type="checkbox"
        />
        {item.name}
      </label>
      <button
        onClick={() => {
          handleDeleteItem(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}

export default ItemList;
