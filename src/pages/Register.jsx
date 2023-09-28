import { useState, useEffect } from "react";
import {
  RegisterContainer,
  FormWrapper,
  LogoSpan,
  TitleSpan,
} from "../Style/RegisterStyled";
import Add from "../assets/add.jpg";
import {
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth, storage, db } from "../firebase/config";
import AlertDis from "../other/Alert";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import LoadingComponent from "../other/Loading";
import { doc, setDoc } from "firebase/firestore";
import Succes from "../other/Succes";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";
// Kara Liste
const karaListe = [
  "admin",
  "root",
  "manager",
  "Yönetici",
  "password",
  "admin123",
  "yönetici",
];

const Register = () => {
  const [hata, setHata] = useState(false);
  const [yukleniyor, setYukleniyor] = useState(false);
  const [basarili, setBasarili] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const kullaniciAd = e.target[0].value.toLowerCase(); // Küçük harfe dönüştür
    const email = e.target[1].value;
    const parola = e.target[2].value;
    const avatar = e.target[3].files[0];

    // Kara listede mi kontrol et
    if (karaListe.some(kelime => kullaniciAd.includes(kelime.toLowerCase()))) {
      setHata(true);
      return;
    }

    setYukleniyor(true);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, parola);
      const date = new Date().getTime();
      const storageRef = ref(storage, `${kullaniciAd + date}`);

      await uploadBytesResumable(storageRef, avatar).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName: kullaniciAd,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "kullanicilar", res.user.uid), {
              uid: res.user.uid,
              kullaniciAd,
              email,
              fotoURL: downloadURL,
            });

            await setDoc(doc(db, "kullaniciChatler", res.user.uid), {});
            setBasarili(true);
            setTimeout(() => {
              setBasarili(false);
              navigate("/login");
            }, 3000);
          } catch (error) {
            setHata(true);
            setYukleniyor(false);
          }
        });
      });

      setYukleniyor(false);
    } catch (error) {
      setHata(true);
      setYukleniyor(false);
    }
  };

  return (
    <>
        <RegisterContainer>
      {basarili && <Succes>Kayıt Başarılı Giriş Ekranına</Succes>}
      <FormWrapper>
        <LogoSpan>MBSoft Chat</LogoSpan>
        <TitleSpan>Üye Ol</TitleSpan>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="Kullanıcı Adı" />
          <input required type="text" placeholder="E-mail Adresi" />
          <input required type="password" placeholder="Parola" />
          <input required type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Fotoğraf Seç</span>
          </label>
          <button disabled={yukleniyor}>Üye Ol</button>
          {hata && <AlertDis>Bir hata oluştu</AlertDis>}
        </form>
        {yukleniyor && <LoadingComponent></LoadingComponent>}

        {!yukleniyor && (
          <p>
            Üyeliğiniz bulunuyorsa <Link to="/login">Giriş Yapınız</Link>
          </p>
        )}
      </FormWrapper>
    </RegisterContainer>
    <Footer/>
    </>

  );
};

export default Register;
