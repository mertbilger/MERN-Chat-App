import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GlobalStyles from './Style/GlobalStyled'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Messages from './components/Messages'


function App() {
  const { girisKullanici } = useContext(AuthContext);

  const YonlendirmeKontrol = ({ children }) => {
    if (!girisKullanici) {
      return <Navigate to="/login" />;
    }

    return children
  };



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<YonlendirmeKontrol><Home /></YonlendirmeKontrol>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="chat" element={<Messages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
