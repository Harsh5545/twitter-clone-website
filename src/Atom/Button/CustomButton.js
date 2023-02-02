import React from "react";
// import style from "../styled.module.css";

function CustomButton({ type, buttonText, icon, btnNext, customCss, pitcher, disabled }) {
  return (
    <button type={type} disabled={disabled} className={customCss} onClick={btnNext}>
      {icon}
      {buttonText}
      {pitcher}
    </button>
  );
}

export default CustomButton;
