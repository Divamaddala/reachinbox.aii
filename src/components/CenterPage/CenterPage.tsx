import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomMail from "../CustomMail/CustomMail";
import { MdOutlineExpand } from "react-icons/md";
import { FaReply } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import DeletePopUp from "../DeletePopup/DeletePopUp";
import '../CenterPage/CenterPage.css'; // Import the CSS file

interface MailData {
  id: number;
  fromName: string;
  fromEmail: string;
  toName: string;
  toEmail: string;
  subject: string;
  body: string;
  sentAt: string;
}

interface Props {
  selectedThread: string;
}

const CenterPage: React.FC<Props> = ({ selectedThread }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedMail, setSelectedMail] = useState<MailData[]>([]);

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selectedThread}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setShowDelete(false);
    } catch (error) {
      console.error("Error deleting mail:", error);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "d" || event.key === "D") {
        setShowDelete(!showDelete);
        console.log("Pressed D");
      }

      if (event.key === "r" || event.key === "R") {
        setShowPopUp(!showPopUp);
        console.log("Pressed R");
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [showDelete, showPopUp]);

  useEffect(() => {
    const fetchMail = async () => {
      if (selectedThread) {
        try {
          const token = localStorage.getItem("token");
          const res = await axios.get<MailData[]>(
            `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selectedThread}`,
            {
              headers: {
                Authorization: token,
              },
            }
          );
          // @ts-ignore
          setSelectedMail(res.data.data);
        } catch (error) {
          console.error("Error fetching mail:", error);
        }
      } else {
        setSelectedMail([
          {
            id: 0,
            fromName: "",
            fromEmail: "jeanne@icloud.com",
            toName: "",
            toEmail: "lennon.j@mail.com",
            subject: "New Product Launch",
            body: "I would like to introduce you to SaaSgrow, a productized design service specifically tailored for saas startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.",
            sentAt: "2022-01-01T00:00:00.000Z",
          },
        ]);
      }
    };
    fetchMail();
  }, [selectedThread, showDelete]);

  return (
    <div className="container">
      <div className="header">
        <div className="header-left">
          <div className="header-left-name">Orlando</div>
          <div className="header-left-email">orladom@gmail.com</div>
        </div>
        <div className="actions">
          <div className="action-item action-item--completed">
            <GoDotFill/> Meeting Completed{" "}
            <SlArrowDown className="ml-2" />
          </div>
          <div className="action-item action-item--move">
            Move <SlArrowDown className="ml-2" />
          </div>
          <div className="action-item action-item--more">
            ...
          </div>
        </div>
      </div>

      <div className="divider">
        <div className="divider-line"></div>
        <div className="divider-text">Today</div>
      </div>

      <div>
        {selectedMail.map((mail) => (
          <Mail key={mail.id} {...mail} />
        ))}
      </div>

      <div className="divider">
        <div className="divider-line"></div>
        <div className="divider-text">
          <MdOutlineExpand/> View all{" "}
          <pre className="text-blue-500"> 4 </pre> replies
        </div>
      </div>

      {showPopUp && (
        <div className="popup">
          <CustomMail
            threadId={selectedThread}
            onClose={() => setShowPopUp(false)}
          />
        </div>
      )}

      <div
        className="reply-button"
        onClick={togglePopUp}
      >
        <FaReply className="reply-button-icon text-xl" /> Reply
      </div>

      {showDelete && (
        <DeletePopUp
          onCancel={() => setShowDelete(false)}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

const Mail: React.FC<MailData> = ({ fromEmail, toEmail, subject, body }) => {
  return (
    <div className="mail">
      <div className="mail-content">
        <div className="mail-header">
          <div className="mail-header-left">
            <div className="mail-subject">{subject}</div>
            <div className="mail-from">from: {fromEmail}</div>
            <div className="mail-to">to: {toEmail}</div>
          </div>
          <div className="mail-date">20 June 2022 : 9:16 AM</div>
        </div>
        <div
          className="mail-body"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </div>
  );
};

export default CenterPage;
