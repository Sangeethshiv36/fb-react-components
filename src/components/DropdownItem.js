import React from 'react';

function DropdownItem({ children, leftIcon, rightIcon }) {
  return (
    <a href="#" className="menu-item">
      <span className="icon-button">{leftIcon}</span>
      {children}
      <span className="icon-right">{rightIcon}</span>
    </a>
  );
}

export default DropdownItem;
