import React from "react";
import "./Button.scss";

const Button = ({ children, className, ...props }) => {
  return (
    <button className={className ? `button ${className}` : "button"} {...props}>
      {children}
    </button>
  );
};

export default Button;
