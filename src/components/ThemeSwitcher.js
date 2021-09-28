import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import ThemeContext from "../context/themeContext";
const ThemeSwitcher = () => {
  const themeContext = useContext(ThemeContext);
  const { setNavBg } = themeContext;
  const changeToLight = () => {
    setNavBg("light");
  };
  const changeToPrimary = () => {
    setNavBg("primary");
  };
  const changeToDark = () => {
    setNavBg("dark");
  };
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <h3 className="mb-3">Change Navbar Style & Refresh !</h3>
      <div className="d-xl-flex d-lg-flex buttons">
        <Button onClick={changeToPrimary} className="btn btn-primary">
          Switch To Primary
        </Button>
        <br /> <br />
        <Button
          onClick={changeToLight}
          className="btn btn-light my-1 mx-xl-3 mx-lg-3"
        >
          Switch To Light
        </Button>
        <br /> <br />
        <Button onClick={changeToDark} className="btn btn-dark">
          Switch To Dark
        </Button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
