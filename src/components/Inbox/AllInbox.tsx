import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { TbReload } from "react-icons/tb";
import './AllInbox.css'; // Import the CSS file

function AllInbox({
  data,
  loadMail,
}: {
  data: any;
  loadMail: (threadId: number) => void;
}) {
  async function reloadHandler() {
    const token = localStorage.getItem("token");
    await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
      headers: {
        Authorization: token,
      },
    });
  }

  if (!Array.isArray(data)) {
    console.error("Data is not an array:", data); 
  }
  return (
    <div className="container">
      <div className="header1">
        <div className="header-title">
          <div>
          All Inbox(s){" "}
          <FaAngleDown className="header-title-icon" />
          </div>
          <div className="desc"><pre>{data.length}/25 </pre>Inboxes selected</div>
        </div>
        <div
          className="reload-button"
          onClick={reloadHandler}
        >
          <TbReload className="reload-button-icon" />
        </div>
      </div>
      <div className="search-container">
        <input
          placeholder=" Search"
          className="search-input"
        />
        <CiSearch className="search-icon" />
      </div>

      <div className="new-replies">
        <div className="header-info">
          <span className="new-replies-count">
            {data.length}
          </span>{" "}
          New Replies
        </div>
        <div className="sort-options">
          Newest <FaAngleDown className="sort-icon" />
        </div>
      </div>

      <div>
        {data.map((email: any) => (
          <Mail
            key={email.id}
            fromEmail={email.fromEmail}
            subject={email.subject}
            threadId={email.threadId}
            loadMail={loadMail}
          />
        ))}
      </div>
    </div>
  );
}

function Mail({
  fromEmail,
  subject,
  threadId,
  loadMail,
}: {
  fromEmail: string;
  subject: string;
  threadId: number;
  loadMail: (threadId: number) => void;
}) {
  const trimSubject = (subject: string, wordCount: number) => {
    const words = subject.split(" ");
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(" ") + " ...";
    }
    return subject;
  };

  const handleMailClick = () => {
    loadMail(threadId);
  };

  return (
    <div
      className="mail-item"
      onClick={handleMailClick}
    >
      <div>
        <div className="mail-header">
          <div className="mail-from-by">{fromEmail}</div>
          <div className="mail-date">Mar 7</div>
        </div>
        <div className="mail-subject">
          {trimSubject(subject, 7)}
        </div>
        <div className="mail-tags">
          <div className="mail-tag">
            <GoDotFill/>
            Interested
          </div>
          <div className="mail-tag mail-tag-campaign">
            <IoIosSend/>
            Campaign Name
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllInbox;
