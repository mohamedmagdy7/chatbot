import React from "react";
import ReactDOM from "react-dom";
import FocusTrap from "focus-trap-react";
import { useSelector } from "react-redux";

import Loader from "../../components/Loader";
import "./modal.scss";
import Chatbot from "../Chatbot";

export const Modal = (params) => {
  const isLoading = useSelector((state) => state.loader.loader);

  return ReactDOM.createPortal(
    <FocusTrap>
      <div className="widget-container">
        {isLoading && <Loader />}
        <div className={`modal-area`} ref={params.modalRef}>
          <button
            ref={params.buttonRef}
            aria-label="Close Modal"
            aria-labelledby="close-modal"
            className="_modal-close"
            onClick={params.closeModal}
          >
            <span id="close-modal" className="_hide-visual">
              Close
            </span>
            <svg className="_modal-close-icon" viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </button>
          <div className={`widget-layout`}>
            <Chatbot />
          </div>
        </div>
      </div>
    </FocusTrap>,
    document.body
  );
};

export default Modal;
