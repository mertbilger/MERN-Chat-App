import { ChatsContainer } from "../Style/ChatsStyled";
import { useState, useEffect, useContext } from 'react';
import { db } from '../firebase/config';
import { doc, onSnapshot } from 'firebase/firestore';
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from '../context/ChatContext';
import { Link, useNavigate } from 'react-router-dom';

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { girisKullanici } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "kullaniciChatler", girisKullanici.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    girisKullanici.uid && getChats();
  }, [girisKullanici.uid]);

  const handleSec = (k) => {
    dispatch({ type: "CHANGE_USER", payload: k });
    navigate('/chat'); // messages sayfasına yönlendir
  }

  return (
    <div>
      {Object.entries(chats)?.sort((a,b)=>b[1].tarih - a[1].tarih).map(chat => (
        <ChatsContainer key={chat[0]} onClick={() => handleSec(chat[1].kullaniciBilgi)}>
          <img
            src={chat[1].kullaniciBilgi.fotoURL}
            alt=""
          />
          <div className="userChatInfo">
            <span>{chat[1].kullaniciBilgi.kullaniciAd}</span>
            <p>{chat[1].sonMesaj?.text}</p>
          </div>
        </ChatsContainer>
      ))}
    </div>
  );
};

export default Chats;
