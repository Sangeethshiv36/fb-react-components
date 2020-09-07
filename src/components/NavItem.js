import React, { useState } from 'react';

function NavItem({ icon, children }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <button className="icon-button nav-button" onClick={() => setOpen(!open)}>
        {icon}
      </button>
      {open && children}
    </li>
  );
}

export default NavItem;
