import { useState } from 'react'
function Checklist() {
    const [items, setItems] = useState([
      { id: 1, name: 'Passport', checked: false },
      { id: 2, name: 'Toothbrush', checked: false },
    ]);
  
    const toggleItem = (id) => {
      setItems(items.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
    };
  
    return (
      <div>
        {items.map(item => (
          <Item key={item.id} item={item} toggleItem={toggleItem} />
        ))}
      </div>
    );
  }
  
  function Item({ item, toggleItem }) {
    return (
      <div>
        <input 
          type="checkbox" 
          checked={item.checked} 
          onChange={() => toggleItem(item.id)} 
        />
        {item.name}
      </div>
    );
  }
  