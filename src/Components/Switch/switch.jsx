import React from "react";
// import { useEffect, useState } from "react";
import "./index.css";

const ButtonSwitch = ({ isDarkMode, setIsDarkMode }) => {

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        id="toggleSwitcher"
        className="toggle-input"
        checked={isDarkMode}
        onChange={handleToggle}
      />
      <label
        htmlFor="toggleSwitcher"
        className="toggle-label">
        {/* Circulo deslizante */}
        <span className="toggle-slider"></span>
      </label>
    </div>
  );
};

export { ButtonSwitch };