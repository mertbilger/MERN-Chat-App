import { NavbarContainer } from "../Style/NavbarStyled";
import { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase/config'
import  {AuthContext} from '../context/AuthContext'


const Navbar = () => {
    const  {girisKullanici}  = useContext(AuthContext);
    return (
        <NavbarContainer>
            <span className="logo">MBSoft Chat</span>
            <div className="user">
            <img src={girisKullanici.photoURL} alt="" />
            <span>{girisKullanici.displayName}</span>
            
            <button onClick={()=>signOut(auth)}>Çıkış</button>
            </div>
        </NavbarContainer>
    );
};

export default Navbar;
