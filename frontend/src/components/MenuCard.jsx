// src/components/MenuCard.jsx
import React from 'react';

const MenuCard = ({ item }) => {
  return (
    <div className="menuCard">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
    </div>
  );
};

export default MenuCard;
