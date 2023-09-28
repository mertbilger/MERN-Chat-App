import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

 export const AuthContext = createContext();

 export const AuthContextProvider = ({ children }) => {
    const [girisKullanici, setGirisKullanici] = useState({});
  
    useEffect(() => {
      // onAuthStateChanged fonksiyonu, kullanıcının oturum durumu değiştiğinde çalışır.
      // Bu fonksiyon, Firebase Authentication'taki oturum durumu değişikliklerini dinler.
      // Kullanıcı giriş yaparsa, kullanıcı bilgileri 'kullanici' parametresi olarak alınır.
      // Bu bilgiler, 'girisKullanici' state'ine atanır.
       const unsub = onAuthStateChanged(auth, (kullanici) => {
        if (kullanici) {
          setGirisKullanici(kullanici)
        } 
        else {
            setGirisKullanici(null);
        }
    });

      // useEffect içerisinde return edilen fonksiyon, bileşen ayrıldığında (unmount) çalışır.
      // Burada 'unsub' fonksiyonu, Firebase'in oturum durumu değişikliklerini dinlemesini durdurur.
      return () => {
        unsub();
      };
    }, []);
    
  
    return (
      // AuthContext.Provider, oluşturulan context'i sağlayan bir bileşendir.
      // Bu provider, içerisinde bir değer olarak 'girisKullanici' state'ini bulundurur.
      // Böylece, içerisinde saran bileşenler ('children') bu değeri kullanabilirler.
      <AuthContext.Provider value={{ girisKullanici }}>
        {children}
      </AuthContext.Provider>
    );
  };

  export default AuthContextProvider;