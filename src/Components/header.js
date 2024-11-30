import React from "react";
import "./Header3D.css";

const Header = ({ onFormSwitch }) => {
  return (
    <header className="header-3d">
      <h1>Read Dataset</h1>
      <div className="header-buttons">
        <button
          className="header-button"
          onClick={() => onFormSwitch("form1")}
        >
          Kaggle
        </button>
        <button
          className="header-button"
          onClick={() => onFormSwitch("form2")}
        >
          Own Dataset
        </button>
      </div>
    </header>
  );
};

export default Header;
