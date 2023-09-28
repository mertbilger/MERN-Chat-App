import { MessagesContainer } from "../Style/MessagesStyled"
import Message from "./Message"
import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase/config";
import Input from "./Input";
import Chat from "./Chat";



export default function Messages() {

  const [mesajlar, setMesajlar] = useState([])
  const { data } = useContext(ChatContext)

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chatler", data.chatId), (doc) => {
      doc.exists() && setMesajlar(doc.data().mesajlar);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <>
      <MessagesContainer>
        <Chat />
        {mesajlar.map((m) => (
          <Message mesaj={m} key={m.id} />
        ))}

      </MessagesContainer>
      <Input />
    </>

  )
}