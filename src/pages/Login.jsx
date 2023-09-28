import React, { useState } from "react";
import { Container, FormWrapper, LogoSpan, TitleSpan } from "../Style/LoginStyled";
import Succes from "../other/Succes";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import LoadingComponent from "../other/Loading";
import Footer from "../components/Footer";


const Login = () => {
  const [hata, setHata] = useState(false);
  const navigate = useNavigate();
  const [basarili, setBasarili] = useState(false);
  const [yukleniyor, setYukleniyor] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const parola = e.target[1].value;


    setYukleniyor(true);
    try {
      await signInWithEmailAndPassword(auth, email, parola);
      setBasarili(true);
      setTimeout(() => {
        navigate("/");
      }, 2000); // 2 saniye bekleyip yönlendirme yapacak
    } catch (err) {
      setHata(true);
      setYukleniyor(false);
    }
    setYukleniyor(false);
  };

  return (
    <>
      <Container>
        {basarili && <Succes>Ana Sayfaya</Succes>}
        <FormWrapper onSubmit={handleSubmit}>
          <LogoSpan>MBSoft Chat</LogoSpan>
          <TitleSpan>Giriş Yap</TitleSpan>
          <input required type="text" placeholder="E-mail Adresi" />
          <input required type="password" placeholder="Parola" />
          <button>Giriş Yap</button>
          {hata && <span>Bir hata oluştu</span>}
          {yukleniyor && <LoadingComponent></LoadingComponent>}
          <p>
            Üyeliğiniz bulunmuyorsa <Link to="/register">Üye Olunuz</Link>
          </p>
        </FormWrapper>
      </Container>
      <Footer />
    </>

  );
};

export default Login;
