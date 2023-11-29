import React, { useState } from "react";

import { TriggerButton } from "../components/TriggerButton";
import Chatbot from "./Chatbot";
import "./App.scss";

const App = () => {
  const [isShown, setIsShown] = useState(false);
  const toggleShow = () => {
    setIsShown(!isShown);
  };
  return (
    <>
      <TriggerButton toggleShow={toggleShow} />
      {isShown && (
        <div className="chatbot-container">
          <Chatbot />
        </div>
      )}
    </>
  );
};

export default App;
