import React from 'react'
import "../styles/Header.scss";
import { HashLink } from 'react-router-hash-link';



function Header() {
  return (
    <nav>
      <h1>MY App</h1>
      <main>
      <HashLink to={"/#home"}>Home</HashLink>
      <HashLink to={"/#about"}>About</HashLink>
      <HashLink to={"/#brands"}>Brands</HashLink>
      <HashLink to={"/contact"}>Contact</HashLink>
      <HashLink to={"/services"}>Services</HashLink>
      </main>
    </nav>
  )
}

export default Header