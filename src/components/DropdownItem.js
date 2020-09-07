import React from 'react';

function DropdownItem(props) {
  const { children, leftIcon, rightIcon, goToMenu, setActiveMenu } = props;
  return (
    <button
      className="menu-item nav-button"
      onClick={() => goToMenu && setActiveMenu(goToMenu)}
    >
      <span className="icon-button">{leftIcon}</span>
      {children}
      <span className={rightIcon ? `icon-button icon-right` : `icon-right`}>
        {rightIcon}
      </span>
    </button>
  );
}

export default DropdownItem;
