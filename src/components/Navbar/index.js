import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../apis/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  

  const onLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            src={require("../../assets/logo.png")}
            alt="logo"
            height={44}
            width={60}
          />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/klasemen" activeStyle>
            Klasemen
          </NavLink>
          <NavLink to="/livescore" activeStyle>
            Livescore
          </NavLink>
          <NavLink to="/berita" activeStyle>
            Berita
          </NavLink>
          <NavLink to="/transfer" activeStyle>
            Transfer
          </NavLink>
        </NavMenu>
        <NavBtn>
          {!user ? (
            <NavBtnLink to="/login">Login</NavBtnLink>
          ) : (
            <NavBtnLink to="#" onClick={onLogout}>Logout</NavBtnLink>
          )}
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
