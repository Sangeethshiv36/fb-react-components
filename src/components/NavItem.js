import React, { useState } from 'react';

function NavItem({ icon, centerIcon, children }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <button
        className={
          centerIcon ? 'nav-button center-icon' : 'icon-button nav-button'
        }
        onClick={() => setOpen(!open)}
      >
        {icon}
      </button>
      {open && children}
    </li>
  );
}

export default NavItem;
