import React from "react";
import img from "../assets/avtar.png";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <img src={img} alt="founder" />

        <h2>Mayank Jain</h2>
        <p>Learn till your last breath</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://www.linkedin.com/in/mayank-jain16/" target="blank">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/jainm7228" target="blank">
            <AiFillGithub />
          </a>
          <a href="https://www.instagram.com/mayankj.16/" target="blank">
            <AiFillInstagram />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
