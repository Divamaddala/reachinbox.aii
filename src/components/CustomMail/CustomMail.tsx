import axios from "axios";
import { useState } from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import {
  FaCaretDown,
  FaEye,
  FaImage,
  FaRegSmile,
  FaUserMinus,
} from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import { IoLinkSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TbSquareLetterA } from "react-icons/tb";
import './CustomMail.css';

function CustomMail({ threadId, onClose }: any) {
  const [replyData, setReplyData] = useState({
    to: "",
    from: "",
    subject: "",
    body: "",
  });

  const handleSendReply = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`,
        {
          to: replyData.to,
          from: replyData.from,
          subject: replyData.subject,
          body: replyData.body,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
    } catch {
      console.log("Reply sent successfully");
      onClose(); // Close the CustomMail component
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReplyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReplyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="custom-mail-container">
      <div className="custom-mail-box">
        <div className="custom-mail-header">
          <div className="custom-mail-header-title">Reply</div>
          <div className="custom-mail-close" onClick={onClose}>
            <RxCross2 className="custom-mail-close-icon" />
          </div>
        </div>
        <div className="custom-mail-input-container">
          <div className="label">To :</div>
          <input
            className="custom-mail-input"
            placeholder="Recipient's Email"
            name="to"
            value={replyData.to}
            onChange={handleInputChange}
          />
        </div>

        <div className="custom-mail-input-container">
          <div className="label">From :</div>
          <input
            className="custom-mail-input"
            placeholder="Your Email"
            name="from"
            value={replyData.from}
            onChange={handleInputChange}
          />
        </div>

        <div className="custom-mail-input-container">
          <div className="label">Subject :</div>
          <input
            className="custom-mail-input"
            placeholder="Subject"
            name="subject"
            value={replyData.subject}
            onChange={handleInputChange}
          />
        </div>

        <div className="custom-mail-textarea-container">
          <textarea
            className="custom-mail-textarea"
            placeholder="Message Body"
            name="body"
            value={replyData.body}
            onChange={handleTextAreaChange}
          />
        </div>

        <div className="custom-mail-footer">
          <div
            className="custom-mail-send-button"
            onClick={handleSendReply}
          >
            Send <FaCaretDown className="custom-mail-send-button-icon" />
          </div>
          <div className="icon-container">
            <BsLightningChargeFill className="icon" />
          </div>
          <div className="icon-container">
            <FaEye className="icon" />
          </div>
          <div className="custom-mail-icon-container">
            <TbSquareLetterA className="icon" />
            <IoLinkSharp className="icon" />
            <FaImage className="icon" />
            <FaRegSmile className="icon" />
            <FaUserMinus className="icon" />
            <IoMdCode className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomMail;
