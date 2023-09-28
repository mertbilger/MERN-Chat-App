import { SearchContainer, UserChat } from "../Style/SearchStyled";
import { useState, useEffect, useContext } from 'react';
import { collection, query, where, getDocs, getDoc, setDoc, doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from '../context/ChatContext';

const Search = () => {
  const [arananKullanici, setArananKullanici] = useState("");
  const [kullanici, setKullanici] = useState(null);
  const [hata, setHata] = useState(false);

  const { girisKullanici } = useContext(AuthContext)

  const {dispatch}=useContext(ChatContext)


  useEffect(() => {
    handleAra();
  }, [arananKullanici]);

  const handleAra = async () => {
    if (arananKullanici === "") {
      setKullanici(null);
      setHata(false);
      return;
    }

    // Firestore'da bir sorgu oluşturuyoruz. Bu sorgu "kullanicilar" koleksiyonundaki belgeleri "kullaniciAd" alanının arananKullanici'ye eşit olduğu durumlarda getirir.
    const q = query(
      collection(db, "kullanicilar"),
      where("kullaniciAd", "==", arananKullanici)
    );

    try {
      // Oluşturduğumuz sorguyu çalıştırıyoruz ve sonucunu querySnapshot adında bir değişkene atıyoruz.
      const querySnapshot = await getDocs(q);
      // Eğer sorgu sonucunda herhangi bir belge döndüyse bu belgeleri döngüye alıp kullanici state'ine atıyoruz.
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          setKullanici(doc.data());
        });
        setHata(false);
      } else {
        // Eğer sorgu sonucunda herhangi bir belge dönmediyse kullanici state'ini null yapıyoruz ve hata state'ini true yapıyoruz.
        setKullanici(null);
        setHata(true);
      }
      
      dispatch({type:"CHANGE_USER",payload:kullanici})

    } catch (err) {
      setKullanici(null);
      setHata(true);
    }
  };
  // Bu asenkron fonksiyon, iki kullanıcının sohbetlerini Firebase veritabanında yönetir.
const handleSec = async () => {

  // İki kullanıcının benzersiz kimliklerini (uid) birleştiriyoruz. 
  // Eğer giriş yapan kullanıcının uid'si, diğer kullanıcının uid'sinden büyükse, 
  // bu iki uid'yi birleştiriyoruz. Aksi takdirde, önce diğer kullanıcının uid'sini, 
  // sonra giriş yapan kullanıcının uid'sini birleştiriyoruz.
  const birlestirilmisId = girisKullanici.uid > kullanici.uid ? girisKullanici.uid + kullanici.uid : kullanici.uid + girisKullanici.uid

  try {
    // Firebase veritabanındaki belirli bir 'chatler' belgesini alıyoruz.
    const res = await getDoc(doc(db, "chatler", birlestirilmisId))

    // Eğer belge mevcut değilse, yeni bir 'chatler' belgesi oluşturuyoruz.
    if (!res.exists()) {
      await setDoc(doc(db, "chatler", birlestirilmisId), { mesajlar: [] })

      // Giriş yapan kullanıcının 'kullaniciChatler' belgesini güncelliyoruz.
      await updateDoc(doc(db, "kullaniciChatler", girisKullanici.uid), {
        [birlestirilmisId + ".kullaniciBilgi"]: {
          uid: kullanici.uid,
          kullaniciAd: kullanici.kullaniciAd,
          fotoURL: kullanici.fotoURL
        },
        [birlestirilmisId + ".tarih"]: serverTimestamp()
      });

      // Diğer kullanıcının 'kullaniciChatler' belgesini güncelliyoruz.
      await updateDoc(doc(db, "kullaniciChatler", kullanici.uid), {
        [birlestirilmisId + ".kullaniciBilgi"]: {
          uid: girisKullanici.uid,
          kullaniciAd: girisKullanici.displayName,
          fotoURL: girisKullanici.photoURL
        },
        [birlestirilmisId + ".tarih"]: serverTimestamp()
      });
    }
  } catch (error) {
    // Eğer herhangi bir hata oluşursa, hatayı yakalıyoruz.
  }

  // Kullanıcıyı null olarak ayarlıyoruz ve arananKullanici değerini boş string olarak ayarlıyoruz.
  setKullanici(null)
  setArananKullanici("")
}


  return (
    <SearchContainer>
      <div className='searchForm'>
        <input type="text" placeholder='Kullanıcı Ara'
          onChange={(e) => setArananKullanici(e.target.value)}
          value={arananKullanici} />
      </div>
      {hata && <span>Kullanıcı Bulunamadı</span>}
      {kullanici && (
        <UserChat onClick={handleSec}>
          <img src={kullanici.fotoURL} alt="" />
          <div className='userChatInfo'>
            <span>{kullanici.kullaniciAd}</span>
          </div>
        </UserChat>
      )}
    </SearchContainer>
  );
}

export default Search;
