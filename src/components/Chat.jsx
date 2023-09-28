import { ChatContainer, ChatInfo } from "../Style/ChatStyled";
import { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'
import { IoArrowBack } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom';

const Chat = () => {
  const {data}=useContext(ChatContext)
  const navigate=useNavigate()

  const handleBack=()=>{
    navigate("/")
  }
  return (
    <ChatContainer>
      <ChatInfo>
        <IoArrowBack style={{fontSize:"30px", cursor:"pointer"}} onClick={handleBack}/>
        <span>{data.user?.kullaniciAd}</span>
      </ChatInfo>
    </ChatContainer>
  );
};

export default Chat;
