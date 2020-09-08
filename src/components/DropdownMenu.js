import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import DropdownItem from './DropdownItem';
import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';
import { ReactComponent as CogIcon } from '../icons/cog.svg';
import { ReactComponent as ArrowIcon } from '../icons/arrow.svg';
import { ReactComponent as HelpIcon } from '../icons/help.svg';
import { ReactComponent as LogoutIcon } from '../icons/logout.svg';

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
          <DropdownItem>
            <span>
              <strong>My Profile</strong>
            </span>
          </DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
            setActiveMenu={setActiveMenu}
          >
            <span>
              <strong>Settings & privacy</strong>
            </span>
          </DropdownItem>
          <DropdownItem
            leftIcon={<HelpIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
            setActiveMenu={setActiveMenu}
          >
            <span>
              <strong>Help & support</strong>
            </span>
          </DropdownItem>
          <DropdownItem leftIcon={<LogoutIcon />}>
            <span>
              <strong>Log Out</strong>
            </span>
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

      <CSSTransition
        in={activeMenu === 'help'}
        unmountOnExit
        timeout={500}
        classNames="menu-tertiary"
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
