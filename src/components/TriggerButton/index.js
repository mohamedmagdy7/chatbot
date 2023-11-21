import React from "react";

import "./TriggerButton.scss";

export const TriggerButton = ({
  triggerText,
  buttonRef,
  showModal
}) => {
  return (
    <button className="button-55" ref={buttonRef} onClick={showModal}>
      {triggerText}
    </button>
  );
};
export default TriggerButton;
