import React from "react";
import ReactDOM from "react-dom";
import FocusTrap from "focus-trap-react";
import { useSelector } from "react-redux";

import Loader from "../../components/Loader";
import "./modal.scss";

export const Modal = (params) => {
  const isLoading = useSelector((state) => state.loader.loader);

  return ReactDOM.createPortal(
    <FocusTrap>
      <div className="widget-container">
        <aside
          tag="aside"
          role="dialog"
          tabIndex="-1"
          aria-modal="true"
          className="modal-cover"
          onClick={params.onClickOutside}
          onKeyDown={params.onKeyDown}
        >
          {isLoading && <Loader />}
          <div className={`modal-area `} ref={params.modalRef}>
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
            <div className={`widget-layout `}>ChatBot</div>
          </div>
        </aside>
      </div>
    </FocusTrap>,
    document.body
  );
};

export default Modal;
