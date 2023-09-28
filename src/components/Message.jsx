import { MessageContainer, MessageInfo, MessageContent } from "../Style/MessageStyled";
import { useContext, useEffect, useRef } from "react";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from '../context/AuthContext'
import { DateTime } from 'luxon';

export default function Message({ mesaj }) {
  const { girisKullanici } = useContext(AuthContext)
  const { data } = useContext(ChatContext)
  const ref = useRef()

  let formattedDate = null;

  if (mesaj.tarih) {
    formattedDate = DateTime.fromJSDate(mesaj.tarih.toDate()).toRelative();
  }

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }, [mesaj])

  return (
    <MessageContainer ref={ref} className={`message ${mesaj.gonderenId === girisKullanici.uid && "owner"}`}>
      <MessageInfo>
        <img src={mesaj.gonderenId === girisKullanici.uid ? girisKullanici.photoURL : data.user.fotoURL} />
        <span>{formattedDate}</span>
      </MessageInfo>
      <MessageContent>
        <p>{mesaj.text}</p>
        {mesaj.resim && <img src={mesaj.resim} />}
      </MessageContent>
    </MessageContainer>
  )
}
