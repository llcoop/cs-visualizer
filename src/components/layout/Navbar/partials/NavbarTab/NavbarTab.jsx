import React, { useContext } from "react";
import { globalContext } from "../../../../../context/globalContext";
import "./NavbarTab.scss";

const NavbarTab = ({ view, title, handleNavigate, ...props }) => {
  const { state } = useContext(globalContext);
  const page = state.view;
  const active = page === view;

  const handleClick = () => handleNavigate(view);

  return (
    <span
      id={`nav-link-${view}`}
      className={`nav-link ${active && "active"}`}
      onClick={handleClick}
    >
      {title}
    </span>
  );
};

export default NavbarTab;
