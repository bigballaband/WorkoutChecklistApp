import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="../screens/Homepage.js">
        General To-do list
      </a>
      <a className="menu-item" href="../screens/Chest.js">
        Chest
      </a>
      <a className="menu-item" href="../screens/Shoulders.js">
        Shoulders
      </a>
      <a className="menu-item" href="../screens/Back.js">
        Back
      </a>
      <a className="menu-item" href="../screens/Triceps.js">
        Triceps
      </a>
      <a className="menu-item" href="../screens/Biceps.js">
        Biceps
      </a>
      <a className="menu-item" href="../screens/Legs.js">
        Legs
      </a>
    </Menu>
  );
};