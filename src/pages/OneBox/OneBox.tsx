// OneBox.js
import { useEffect, useState } from "react";
import SubView from "../../components/SubView/SubView";
import MainPage from "../../components/MainPage/MainPage";
import SideBar from "../../components/Sidebar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import { useLocation, useNavigate } from "react-router-dom";
import './OneBox.css'; // Import the CSS file

function OneBox() {
  const Navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  useEffect(() => {
    if (!token) {
      Navigate("/login");
    }
    if (token) {
      localStorage.setItem("token", `Bearer ${token}`);
    }
  }, [token]);

  const [selectedComponent, setSelectedComponent] = useState(null); 

  const handleMenuItemClick = (path: any) => {
    setSelectedComponent(path);
  };

  if (selectedComponent === null) {
    return (
      <div className="onebox-container dark-mode">
        <SideBar onMenuItemClick={handleMenuItemClick} />
        <TopBar />
        <SubView />
      </div>
    );
  }

  return (
    <div className="onebox-container dark-mode">
      <SideBar onMenuItemClick={handleMenuItemClick} />
      <TopBar />
      <div>
        {/* Render the selected component */}
        {selectedComponent === "/" && <SubView />}
        {selectedComponent === "/search" && <SubView />}
        {selectedComponent === "/mail" && <SubView />}
        {selectedComponent === "/send" && <SubView />}
        {selectedComponent === "/stack" && <SubView />}
        {selectedComponent === "/inbox" && <MainPage />}
        {selectedComponent === "/stacks" && <SubView />}
      </div>
    </div>
  );
}

export default OneBox;
