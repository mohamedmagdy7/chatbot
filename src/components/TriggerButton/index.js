import React from "react";

import "./TriggerButton.scss";

export const TriggerButton = ({ buttonRef, showModal }) => {
  return (
    <button
      className="chatbot-trigger"
      ref={buttonRef}
      onClick={showModal}
    ></button>
  );
};
export default TriggerButton;
