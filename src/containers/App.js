import React from "react";

import ModalContainer from "./ModalContainer";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <ModalContainer triggerText={"Open ChatBot"} />
    </div>
  );
};

export default App;
