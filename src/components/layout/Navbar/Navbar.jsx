import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { globalContext } from "../../../context/globalContext";
import { NavbarTab } from "./partials";
import "./Navbar.scss";

const Navbar = () => {
  const { dispatch } = useContext(globalContext);
  const navigate = useNavigate();

  const handleNavigate = view => {
    view === "home" ? navigate("/") : navigate(view);
    dispatch({ type: "view", value: view });
  };

  return (
    <nav id="navbar">
      <NavbarTab view="home" title="Home" handleNavigate={handleNavigate} />
      <NavbarTab view="placeholder" title="Placeholder" handleNavigate={handleNavigate} />
    </nav>
  );
};

export default Navbar;
