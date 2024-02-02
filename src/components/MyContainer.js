import React, { useState } from 'react';
import MyList from './MyList';

const MyContainer = () => {
  const [items, setItems] = useState([
    { id: "1", text: "Item 1", clicked: false },
    { id: "2", text: "Item 2", clicked: false },
    { id: "3", text: "Item 3", clicked: false },
  ]);

  const [newItemText, setNewItemText] = useState("");

  const handleAddItem = () => {
    const newItem = { id: Date.now().toString(), text: newItemText, clicked: false };
    setItems(prevItems => [...prevItems, newItem]);
    setNewItemText("");
  };

  const handleItemClick = (itemId) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, clicked: !item.clicked } : item
      )
    );
  };

  return (
    <div>
      <h2>This is MyContainer Component</h2>
      <MyList header="My List Header" items={items} onItemClick={handleItemClick} />

      <textarea
        value={newItemText}
        onChange={(e) => setNewItemText(e.target.value)}
        placeholder="Enter new item text"
      />

      <button onClick={handleAddItem}>
        Add New Item
      </button>
    </div>
  );
}

export default MyContainer;

