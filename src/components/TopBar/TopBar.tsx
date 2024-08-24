import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import './TopBar.css';

function TopBar() {
  return (
    <div className={`topbar ${document.body.classList.contains('dark') ? 'dark' : ''}`}>
      <div>Onebox</div>

      <div className="topbar-right">
        <ThemeToggle />
        Tim's Workspace <MdOutlineKeyboardArrowDown className="topbar-icon" />
      </div>
    </div>
  );
}

export default TopBar;
