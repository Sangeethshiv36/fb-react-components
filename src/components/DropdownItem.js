import React from 'react';

function DropdownItem({ children, leftIcon, rightIcon }) {
  return (
    <button className="menu-item nav-button">
      <span className="icon-button">{leftIcon}</span>
      {children}
      <span className="icon-right">{rightIcon}</span>
    </button>
  );
}

export default DropdownItem;
