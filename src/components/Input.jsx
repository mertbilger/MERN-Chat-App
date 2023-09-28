import Img from "../assets/img.png";
import Attach from "../assets/attach.png";
import { InputContainer, Send } from "../Style/InputStyled";
import { useState, useContext } from 'react'
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from '../context/ChatContext';
import { db, storage } from "../firebase/config";
import { arrayUnion, Timestamp, doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";




export default function Input() {

  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const { girisKullanici } = useContext(AuthContext);
  const { data } = useContext(ChatContext)

  const handleGonder = async () => {
    if (img) {

      const storageRef = ref(storage, uuid());

      await uploadBytesResumable(storageRef, img).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          await updateDoc(doc(db, "chatler", data.chatId), {
            mesajlar: arrayUnion({
              id: uuid(),
              text,
              gonderenId: girisKullanici.uid,
              date: Timestamp.now(),
              resim: downloadURL,
            }),
          });
        });
      })

    } else {
      await updateDoc(doc(db, "chatler", data.chatId), {
        mesajlar: arrayUnion({
          id: uuid(),
          text,
          gonderenId: girisKullanici.uid,
          tarih: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "kullaniciChatler", girisKullanici.uid), {
      [data.chatId + ".sonMesaj"]: {
        text,
      },
      [data.chatId + ".tarih"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "kullaniciChatler", data.user.uid), {
      [data.chatId + ".sonMesaj"]: {
        text,
      },
      [data.chatId + ".tarih"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  }



  return (
    <InputContainer>
      <input onChange={(e) => setText(e.target.value)} value={text} type="text" placeholder='Mesajınızı Yazınız' />
      <Send>
        <img src={Attach} alt="" />
        <input onChange={(e) => setImg(e.target.files[0])} type="file" style={{ display: 'none' }} id="file" />
        <label htmlFor='file'>
          <img src={Img} alt="" />
        </label>
        <button onClick={handleGonder}>Gönder</button>
      </Send>
    </InputContainer>
  )
}
