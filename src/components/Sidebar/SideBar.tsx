import { useState } from "react";
import sidebar_logo from '../../assets/sidebar-logo.png';
import home_icon from '../../assets/home_icon.png';
import search_icon from '../../assets/contact_icon.png';
import mail_icon from '../../assets/mail_icon.png';
import send_icon from '../../assets/send_icon.png';
import stack_icon from '../../assets/menu_icon.png'; 
import inbox_icon from '../../assets/inbox_icon.png';
import stats_icon from '../../assets/analytics_icon.png';
import './Sidebar.css';

type SideBarProps = {
  onMenuItemClick: (path: string) => void;
};

function SideBar({ onMenuItemClick }: SideBarProps) {
  const [selectedItem, setSelectedItem] = useState('/');

  const handleMenuItemClick = (path: string) => {
    setSelectedItem(path);
    onMenuItemClick(path);
  };

  return (
    <div className={`sidebar ${document.body.classList.contains('dark') ? 'dark' : ''}`}>
      <div className="sidebar-logo">
        <img src={sidebar_logo} alt="Logo" />
      </div>
      <div className="sidebar-menu">
        <div className={`sidebar-item ${selectedItem === '/' ? 'active' : ''}`} onClick={() => handleMenuItemClick('/')}>
          <img src={home_icon} alt="Home" className="icon"/>
        </div>
        <div className={`sidebar-item ${selectedItem === '/search' ? 'active' : ''}`} onClick={() => handleMenuItemClick('/search')}>
          <img src={search_icon} alt="Search" className="icon"/>
        </div>
        <div className={`sidebar-item ${selectedItem === '/mail' ? 'active' : ''}`} onClick={() => handleMenuItemClick('/mail')}>
          <img src={mail_icon} alt="Mail" className="icon"/>
        </div>
        <div className={`sidebar-item ${selectedItem === '/send' ? 'active' : ''}`} onClick={() => handleMenuItemClick('/send')}>
          <img src={send_icon} alt="Send" className="icon"/>
        </div>
        <div className={`sidebar-item ${selectedItem === '/stack' ? 'active' : ''}`} onClick={() => handleMenuItemClick('/stack')}>
          <img src={stack_icon} alt="Stack" className="icon"/>
        </div>
        <div className={`sidebar-item ${selectedItem === '/inbox' ? 'active' : ''}`} onClick={() => handleMenuItemClick('/inbox')}>
          <img src={inbox_icon} alt="Inbox" className="icon"/>
        </div>
        <div className={`sidebar-item ${selectedItem === '/stacks' ? 'active' : ''}`} onClick={() => handleMenuItemClick('/stacks')}>
          <img src={stats_icon} alt="Stats" className="icon"/>
        </div>
      </div>
      <div className="sidebar-footer">
        <div>
        PS
        </div>
      </div>
    </div>
  );
}

export default SideBar;
