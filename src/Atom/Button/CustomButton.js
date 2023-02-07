import React from "react";

function CustomButton({ type, buttonText, icon, btnNext, customCss, pitcher, disable }) {
  return (
    <button  disabled={disable}  type={type} className={customCss} onClick={btnNext}>
      {icon}
      {buttonText}
      {pitcher}
    </button>
  );
}

export default CustomButton;
