import React from 'react';
import DropdownItem from './DropdownItem';
// import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';
import { ReactComponent as CogIcon } from '../icons/cog.svg';

function DropdownMenu() {
  return (
    <div className="dropdown">
      <DropdownItem>My Profile</DropdownItem>
      <DropdownItem leftIcon={<CogIcon />}>Settings</DropdownItem>
    </div>
  );
}

export default DropdownMenu;
