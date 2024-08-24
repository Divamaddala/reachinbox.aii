import { useEffect, useState } from "react";
import axios from "axios";
import AllInbox from "../Inbox/AllInbox";
import CenterPage from "../CenterPage/CenterPage";
import RightSection from "../RIghtSection/RightSection";
import loader from '../../assets/loader.gif'
import './MainPage.css';

function MainPage() {
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedThread, setSelectedThread] = useState(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setData(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }, 2500);
  
    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  
  if (loading) {
    return (
      <div className="loading-container">
        <img src={loader} alt="" />
      </div>
    );
  }

  const loadMail = async (threadId: any) => {
    setSelectedThread(threadId);
  };

  return (
    <div className="main-page-container">
      <div className="inbox-section">
        <AllInbox data={datas} loadMail={loadMail} />
      </div>
      <div className="center-section">
        {/* @ts-ignore */}
        <CenterPage selectedThread={selectedThread} />
      </div>
      <div className="right-section">
        <RightSection />
      </div>
    </div>
  );
}

export default MainPage;
