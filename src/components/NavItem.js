import React, { useState } from 'react';

function NavItem({ icon, centerIcon, children, isDropDown }) {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <li className="nav-item">
      <button
        className={
          centerIcon ? 'nav-button center-icon' : 'icon-button nav-button'
        }
        onClick={isDropDown && (() => setOpen(!open))}
      >
        {icon}
      </button>
      {open && children}
    </li>
  );
}

export default NavItem;
