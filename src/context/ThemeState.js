import React, { useReducer } from "react";
import ThemeContext from "../context/themeContext";

const CHANGE_NAV_BG = "CHANGE_NAV_BG";
const ThemeReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_NAV_BG:
      return {
        ...state,
        navbg: action.payload[0],
        bgvariant: action.payload[1],
      };
    default:
      return state;
  }
};

const ThemeState = (props) => {
  let navbar_theme = localStorage.getItem("navbar_theme")
    ? JSON.parse(localStorage.getItem("navbar_theme"))
    : "theme_not_saved";

  const initialState = {
    theme: "",
    navbg: navbar_theme !== "theme_not_saved" ? navbar_theme.navbg : "",
    bgvariant: navbar_theme !== "theme_not_saved" ? navbar_theme.bgvariant : "",
  };
  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  const setNavBg = (bg_name) => {
    var navbar_bg = [];
    switch (bg_name) {
      case "primary":
        navbar_bg = ["primary", "dark"];
        break;
      case "dark":
        navbar_bg = ["dark", "dark"];
        break;
      case "light":
        navbar_bg = ["light", "light"];
        break;
      default:
        return true;
    }

    localStorage.setItem(
      "navbar_theme",
      JSON.stringify({
        navbg: navbar_bg[0],
        bgvariant: navbar_bg[1],
      })
    );

    dispatch({
      type: CHANGE_NAV_BG,
      payload: navbar_bg,
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        navbg: state.navbg,
        bgvariant: state.bgvariant,
        setNavBg,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;
