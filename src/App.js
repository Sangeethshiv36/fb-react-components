import React from 'react';
import Navbar from './components/Navbar';
import NavItem from './components/NavItem';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';

function App() {
  return (
    <>
      <Navbar>
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<MessengerIcon />} />
        <NavItem icon={<BellIcon />} />
      </Navbar>
    </>
  );
}

export default App;
