import React from "react";
import "./Header.css";

const Header = ({ headTitle, headerExpand }) => {
  return (
    <div className="header-container">
      <img
        className={` header-image ${
          headerExpand ? "head-image-expanded" : "head-image-contracted"
        } `}
        src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
        alt="logo"
      />
      <h1 className="header-text">{headTitle}</h1>
    </div>
  );
};
export default Header;
