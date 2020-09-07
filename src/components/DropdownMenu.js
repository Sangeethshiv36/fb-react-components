import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import DropdownItem from './DropdownItem';
import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';
import { ReactComponent as CogIcon } from '../icons/cog.svg';
import { ReactComponent as ArrowIcon } from '../icons/arrow.svg';

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
            setActiveMenu={setActiveMenu}
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            setActiveMenu={setActiveMenu}
            leftIcon={<ArrowIcon />}
            goToMenu="main"
          />
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenu;
