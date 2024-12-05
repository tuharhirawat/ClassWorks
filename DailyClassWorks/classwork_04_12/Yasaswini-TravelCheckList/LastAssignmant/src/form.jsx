import React, { useState } from 'react';

function PackingListApp() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = (e) => {
    e.preventDefault();
    if (newItem) {
      setItems([
        ...items,
        { id: Date.now(), name: newItem, checked: false }
      ]);
      setNewItem(''); 
    }
  };

  const toggleItem = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>Packing List</h1>

      <form onSubmit={addItem}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a new item"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {items.length === 0 ? (
          <p>No items in your packing list.</p>
        ) : (
          items.map((item) => (
            <li key={item.id} style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => toggleItem(item.id)}
              />
              {item.name}
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default PackingListApp;
