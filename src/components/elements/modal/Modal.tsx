import { useState } from "react";
import "./Modal.scss";

function Modal({
  setShowModal,
  img,
}: {
  setShowModal: (value: boolean) => void;
  img: string;
}) {
  const [animate, setAnimate] = useState(false);
  setTimeout(() => setAnimate(true), 100);

  return (
    <div className="modal-frame" onClick={() => setShowModal(false)}>
      <div
        className={`modal ${animate ? "show" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__content">
          <img src={img} alt="album cover" className="modal__content-img" />
          <div className="modal__content-details">
            <h2 className="modal__content-heading">
              Start listening with a free Spotify account
            </h2>
            <button className="modal__content-btn modal__content-btn-sign-up">
              Sign up free
            </button>
            <button className="modal__content-btn modal__content-btn-download">
              Download app
            </button>
            <p className="modal__content-login">
              <span className="modal__content-login-text">
                Already have an account?
              </span>
              <a href="#" className="modal__content-login-button">
                Log in
              </a>
            </p>
          </div>
        </div>
        <button className="modal__button" onClick={() => setShowModal(false)}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
