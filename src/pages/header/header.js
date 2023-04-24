import React from "react";
import GithubLogo from "../../img/Github.svg";
import "../../css/style.css";
import Nav from "../../components/nav/nav";



const Header = () => {
  return (
    <>
      <>
      <Nav/>
      
        <a
          className="github-icon"
          href="https://github.com/AAKRITIDEO/Aakriti-Projects"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="github-icon"
            style={{
              position: "absolute",
              right: "5px",
              top: "5px",
              height: "3rem",
              width: "3rem",
              padding: "3px",
              cursor: "pointer",
            }}
            src={GithubLogo}
            alt="github-icon"
          />
        </a>
        <>
        
          <h2
            className="heading-name"
            style={{
              background: "none",
              marginBottom: 50,
              color: "#efebeb",
              textAlign: "center",
              fontFamily: "cursive",
              textShadow: "2px 2px 3px #000",
            }}
          >
            A Book Library for all Book Lovers
          </h2>
        </>
      </>
    
    </>
  );
};

export default Header;
