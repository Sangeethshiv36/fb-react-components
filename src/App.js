import React from 'react';
import Navbar from './components/Navbar';
import NavItem from './components/NavItem';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as FacebookIcon } from './icons/Facebook-01.svg';
import { ReactComponent as HomeIcon } from './icons/home.svg';
import { ReactComponent as WatchIcon } from './icons/watch.svg';
import { ReactComponent as GroupsIcon } from './icons/groups.svg';
import { ReactComponent as MarketplaceIcon } from './icons/marketplace.svg';
import { ReactComponent as GamingIcon } from './icons/gaming.svg';
import DropdownMenu from './components/DropdownMenu';
import SearchInput from './components/SearchInput';

function App() {
  return (
    <>
      <Navbar>
        <div className="left-content">
          <div className="brand-logo">
            <FacebookIcon />
          </div>
          <SearchInput />
        </div>
        <div className="mid-content">
          <NavItem centerIcon={true} icon={<HomeIcon />} />
          <NavItem centerIcon={true} icon={<WatchIcon />} />
          <NavItem centerIcon={true} icon={<MarketplaceIcon />} />
          <NavItem centerIcon={true} icon={<GroupsIcon />} />
          <NavItem centerIcon={true} icon={<GamingIcon />} />
        </div>
        <div className="right-content">
          <NavItem icon={<PlusIcon />} />
          <NavItem icon={<MessengerIcon />} />
          <NavItem icon={<BellIcon />} />
          <NavItem icon={<CaretIcon />}>
            <DropdownMenu />
          </NavItem>
        </div>
      </Navbar>
    </>
  );
}

export default App;
