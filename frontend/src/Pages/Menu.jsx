// src/pages/Menu.jsx
import React from 'react';
import MenuCard from '../components/MenuCard';
 // Assume you have a MenuCard component

const Menu = () => {
  // Sample menu data
  const menuItems = [
    {
      id: 1,
      name: 'Pizza',
      description: 'Delicious cheese pizza with fresh toppings.',
      price: 10,
    },
    {
      id: 2,
      name: 'Pasta',
      description: 'Creamy Alfredo pasta with garlic and herbs.',
      price: 12,
    },
    {
      id: 3,
      name: 'Burger',
      description: 'Juicy beef burger with lettuce and tomato.',
      price: 8,
    },
    {
      id: 4,
      name: 'Salad',
      description: 'Fresh garden salad with vinaigrette dressing.',
      price: 7,
    },
    {
      id: 5,
      name: 'Dessert',
      description: 'Choose from our daily selection of desserts.',
      price: 5,
    },
  ];

  return (
    <div className="menu">
      <h1 >Restaurant Menu</h1>
      <div className="menuGrid">
        {menuItems.map(item => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
