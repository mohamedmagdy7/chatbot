import React from "react";

import { TriggerButton } from "../../components/TriggerButton";
import Chatbot from "../Chatbot";

class ModalContainer extends React.Component {
  state = { isShown: false };
  toggleShow = () => {
    this.setState({ isShown: !this.state.isShown });
  };

  render() {
    return (
      <>
        <TriggerButton
          toggleShow={this.toggleShow}
          buttonRef={(n) => (this.TriggerButton = n)}
        />
        {this.state.isShown && (
          <div className="chatbot-container">
            <Chatbot />
          </div>
        )}
      </>
    );
  }
}

export default ModalContainer;
