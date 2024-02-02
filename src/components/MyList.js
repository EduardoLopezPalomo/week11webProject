import React from 'react';

const MyList = ({ header, items, onItemClick }) => {
  return (
    <div>
      <h3>{header}</h3>
      <ol>
        {items.map(item => (
          <li
            key={item.id}
            onClick={() => onItemClick(item.id)}
            style={{ textDecoration: item.clicked ? "line-through" : "" }}
          >
            {item.text}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default MyList;

