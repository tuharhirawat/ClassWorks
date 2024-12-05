//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

// function App() {
//   // const [count, setCount] = useState(0)

//   // return (
//   //   <>
//   //     <div>
//   //       <a href="https://vite.dev" target="_blank">
//   //         <img src={viteLogo} className="logo" alt="Vite logo" />
//   //       </a>
//   //       <a href="https://react.dev" target="_blank">
//   //         <img src={reactLogo} className="logo react" alt="React logo" />
//   //       </a>
//   //     </div>
//   //     <h1>Vite + React</h1>
//   //     <div className="card">
//   //       <button onClick={() => setCount((count) => count + 1)}>
//   //         count is {count}
//   //       </button>
//   //       <p>
//   //         Edit <code>src/App.jsx</code> and save to test HMR
//   //       </p>
//   //     </div>
//   //     <p className="read-the-docs">
//   //       Click on the Vite and React logos to learn more
//   //     </p>
//   //   </>
//   // )
// }

// export default App
import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = (e) => {
    e.preventDefault();
    if (newItem) {
      setItems([
        ...items,
        { id: Date.now(), name: newItem, checked: false },
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
          items.map(item => (
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

export default App;
