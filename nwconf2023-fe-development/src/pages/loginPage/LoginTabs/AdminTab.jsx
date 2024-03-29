import React, { useState } from "react";
import Accept from "../../../images/accept.png";
import SubmitNew from "../../../images/newPaper.png";
import Profile from "../../../images/profileImage.jpg";
// import chatNew from "../../../images/chat.png";
// import PaperStatus from "../../../images/editPaper.png";
// import KmowMore from "../../../images/knowMore.jpg";
import axios from "axios";
import { useEffect } from "react";
import Modal from "react-modal";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { API_ENDPOINT } from "../../../constant/constant";
import "../../../styles/landing.css";
import ModalContent from "../components/modalContent";
const UserLoginPageTab = () => {
  const { state } = useLocation();
  const [userDatas, setUserDatas] = useState();
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [conversation, setConversation] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [myheader] = useState({
    headers: {
      token: localStorage.getItem("Usertoken"),
    },
  });
  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userInputMessage = { sender: 'You', message: userInput };
    const replyMessage = { sender: 'other', message: simulateReply() };
    setConversation([...conversation, userInputMessage, replyMessage]);
    setUserInput('');
  };
  const simulateReply = () => {
    // Simulate generating a reply from the other end
    // Replace this with your logic to fetch a reply from a server or chatbot
    const replies = ['Hello!', 'How are you?', 'Nice to meet you!'];
    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    return randomReply;
  };
  const GetApi = () => {
    axios.get(`${API_ENDPOINT}/admin/project`, myheader).then((response) => {
      setUserDatas(response.data.project);
      setDisabled(false);
    });
  };

  useEffect(() => {
    GetApi();
  }, [GetApi]);
  

  function checkStatus() {
    navigate("/checkStatus", { state: userDatas });
  }

  return (
    <div>
      <div className="user-pag-con">
        <div className="profile-container">
          <div className="profile-img">
            <img src={Profile} alt="" />
          </div>
          {/* <div className="user-details">
            <p>
              User Name :<b>{userDatas?.userName}</b>
            </p>
            <p>
              User Email :<b>{userDatas?.email}</b>
            </p>
          </div> */}
          <div className="authorInfo">
            <table>
              <tr>
                <td className='authorInfoHeading'>Name</td>
                <td>&nbsp;:&nbsp; </td>
                <td>{state.name}</td>
              </tr>
              <tr>
                <td className='authorInfoHeading'>Email</td>
                <td>&nbsp;:&nbsp;</td>
                <td>{state.email}</td>
              </tr>
              <tr>
                <td className='authorInfoHeading'>Areas of intrest</td>
                <td>&nbsp;:&nbsp;</td>
                <td>{state.areaOfInterest}</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="optionContainer">
          <NavLink to="/evaluate">
            <div className="submit-new">
              <div className="sub-img">
                <img src={SubmitNew} alt="" />
              </div>
              <p>Assign & Evaluate</p>
            </div>
          </NavLink>
          <NavLink to="/Accept">
            <div className="submit-new">
              <div className="sub-img">
                <img src={Accept} alt="" />
              </div>
              <p>Accepted Papers</p>
            </div>
          </NavLink>
          {/* <NavLink>
          <div>
          
              <div className="submit-new" onClick={openModal}>
                <div className="sub-img">
                  <img src={chatNew} alt="" />
                </div>
                <p>Discussion</p>
              </div>
            
          </div>
          </NavLink> */}
          <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
            <ModalContent
              conversation={conversation}
              handleSubmit={handleSubmit}
              userInput={userInput}
              setUserInput={setUserInput}
              closeModal={closeModal}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default UserLoginPageTab;
