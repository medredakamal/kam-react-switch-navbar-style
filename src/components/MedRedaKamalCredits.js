import React from "react";
import MedRedaKamalIMG from "../kamcredits/medredakamal.jpeg";
import KamLinkedInIcon from "../kamcredits/kam_linkedin.png";
import KamGithubIcon from "../kamcredits/kam_github.png";
import KamEmailIcon from "../kamcredits/kam_email.png";

const MedRedaKamalCredits = () => {
  return (
    <div style={kamcredits.content}>
      <div style={kamcredits.left}>
        <img
          src={MedRedaKamalIMG}
          style={kamcredits.image}
          alt="Med Reda Kamal"
        />
        <span style={kamcredits.createdby}>Created by Med Reda Kamal</span>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/medredakamal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={KamLinkedInIcon} alt="Med Reda Kamal LinkedIn" />
        </a>
        <a
          href="https://github.com/medredakamal"
          target="_blank"
          rel="noopener noreferrer"
          style={kamcredits.github}
        >
          <img src={KamGithubIcon} alt="Med Reda Kamal Github" />
        </a>
        <a
          href="email:gencodevcompany@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={KamEmailIcon} alt="Med Reda Kamal Email" />
        </a>
      </div>
    </div>
  );
};

const kamcredits = {
  image: {
    height: "53px",
    borderRadius: "100%",
  },
  createdby: {
    margin: "0 0 0 5.75px",
  },
  content: {
    position: "absolute",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    left: 0,
    right: 0,
    bottom: "34px",
  },
  github: {
    margin: "0 10px",
  },
};

export default MedRedaKamalCredits;
