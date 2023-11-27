import React from "react";

import "./TriggerButton.scss";

export const TriggerButton = ({ buttonRef, toggleShow }) => {
  return (
    <button
      className="chatbot-trigger"
      ref={buttonRef}
      onClick={toggleShow}
    ></button>
  );
};
export default TriggerButton;
