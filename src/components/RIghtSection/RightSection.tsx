import { IoIosSend } from 'react-icons/io';
import mail from '../../assets/mail_icon2.png';
import { IoMailOpen } from 'react-icons/io5';
import './RightSection.css'; // Import the CSS file

function RightSection() {
  return (
    <div className={`right-section-container`}>
      <div className={`right-section-title`}>
        Lead Details
      </div>
      <div className={`right-section-details`}>
        <div className="detail-item">
          <div>Name</div>
          <div>Orlando</div>
        </div>
        <div className="detail-item">
          <div>Contact No</div>
          <div>+54-9062827869</div>
        </div>
        <div className="detail-item">
          <div>Email ID</div>
          <div>orlando@gmail.com</div>
        </div>
        <div className="detail-item">
          <div>Linkedin</div>
          <div>linkedin.com/<br/>in/timvadde/</div>
        </div>
        <div className="detail-item">
          <div>Company Name</div>
          <div>Reachinbox</div>
        </div>
      </div>

      <div className={`right-section-activities`}>
        Activities
      </div>

      <div className="right-section-activities-content">
        <div>Campaign Name</div>
        <div className='desc'>
          3 Steps | 5 Days in Sequence
        </div>
        <div>
          <div className="activity-item">
            <div>
              <img src={mail} alt="Mail" />
            </div>
            <div className="activity-details">
              <div>Step 1: Email</div>
              <div className="timestamp">
                <IoIosSend className="icon" /> Sent 3rd, Feb
              </div>
            </div>
          </div>

          <div className="activity-item">
            <div>
              <img src={mail} alt="Mail" />
            </div>
            <div className="activity-details">
              <div>Step 2: Email</div>
              <div className="timestamp">
                <IoMailOpen className="icon" /> Open 5th, Feb
              </div>
            </div>
          </div>

          <div className="activity-item">
            <div>
              <img src={mail} alt="Mail" />
            </div>
            <div className="activity-details">
              <div>Step 3: Email</div>
              <div className="timestamp">
                <IoMailOpen className="icon" /> Open 5th, Feb
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
