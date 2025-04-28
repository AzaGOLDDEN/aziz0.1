import React, { useState, useRef, useEffect } from 'react';
import Home from '../companets/home';
import "../style/pacapilot.css";
import Sugnets from '../companets/sugnets';

const items = [
  "CSS styling for a modal component",
  "Yunon-Fors urushlari bo'yicha",
  "New conversation",
  "Interactive head and eye movement animation",
  "SVG element with path and click handler",
  "Random suggestion list with dynamic icons",
  "Uncaught SyntaxError: Module export issue",
  "SVG animatsiya misoli va tushuntirish",
  "Accessing and managing environment variables in Python",
];

const Pacapilot = () => {
  const [rotated, setRotated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [activeTitle, setActiveTitle] = useState("");

  const toggleRotation = () => {
    setRotated(!rotated);
  };

  const openModal = (title, buttonElement) => {
    // buttonElement bu yerda DOM node bo'lishi kerak
    const rect = buttonElement.getBoundingClientRect();
    setModalPosition({ top: rect.top + window.scrollY, left: rect.left + window.scrollX });
    setActiveTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveTitle("");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(false);
    setTimeout(() => {
      void document.querySelector('.koz')?.offsetWidth;
      setAnimate(true);
    }, 1000);
  };

  useEffect(() => {
    const headElement = document.querySelector('.head');
    const eyeElement = document.querySelector('.koz');

    if (!eyeElement || !headElement) return;

    const intervalId = setInterval(() => {
      if (!animate) return;

      const eyeStyle = window.getComputedStyle(eyeElement);
      const transformMatrix = eyeStyle.transform;

      const matrixValues = transformMatrix.match(/matrix.*\((.+)\)/);
      if (matrixValues) {
        const values = matrixValues[1].split(', ');
        const translateX = parseFloat(values[4]);
        const translateY = parseFloat(values[5]);

        const headRotationX = translateY * -15;
        const headRotationY = translateX * 15;

        headElement.style.transform = `rotateX(${headRotationX}deg) rotateY(${headRotationY}deg)`;
      }
    }, 150);

    return () => clearInterval(intervalId);
  }, [animate]);

  return (
    <>
      <Home showCapilot={false} />
      <div className="enaga">
        <div className="capilother">
          <div className={`side-modal ${rotated ? 'open' : ''}`}>
            <div className="easq">
              <button className="boshpasbtn" onClick={toggleRotation}>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  className="octicon octicon-sidebar-collapse"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                  fill="currentColor"
                  style={{ verticalAlign: 'text-bottom' }}
                >
                  <path
                    className={`aylana ${rotated ? 'chapgaQaragan' : ''}`}
                    d="M6.823 7.823a.25.25 0 0 1 0 .354l-2.396 2.396A.25.25 0 0 1 4 10.396V5.604a.25.25 0 0 1 .427-.177Z"
                  />
                  <path d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25H9.5v-13H1.75a.25.25 0 0 0-.25.25ZM11 14.5h3.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H11Z" />
                </svg>
              </button>
              <button className='boshpasbtn'>
                <a
                  data-component="IconButton"
                  type="button"
                  className="prc-Button-ButtonBase-c50BI prc-Button-IconButton-szpyj"
                  data-loading="false"
                  data-no-visuals="true"
                  data-size="medium"
                  data-variant="default"
                  aria-describedby=":r4:-loading-announcement"
                  aria-labelledby=":r3:"
                  href="/pacapilot"
                >
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M14.515.456a1.555 1.555 0 00-2.2 0L6.58 6.19a1.556 1.556 0 00-.396.673l-.825 2.89a.667.667 0 00.824.824l2.89-.826c.254-.072.485-.209.672-.396l5.735-5.734a1.556 1.556 0 000-2.2l-.965-.965zm-1.257.942a.222.222 0 01.314 0l.965.966a.222.222 0 010 .314L13.415 3.8l-1.28-1.28 1.123-1.122zm-2.065 2.066l1.279 1.279-3.67 3.67a.221.221 0 01-.096.056l-1.736.496.496-1.736c.01-.036.03-.07.057-.096l3.67-3.67zM1.639 4.778a2.25 2.25 0 012.25-2.25h3.154a.75.75 0 000-1.5H3.889a3.75 3.75 0 00-3.75 3.75v7.333a3.75 3.75 0 003.75 3.75h7.333a3.75 3.75 0 003.75-3.75V8.445a.75.75 0 00-1.5 0v3.666a2.25 2.25 0 01-2.25 2.25H3.889a2.25 2.25 0 01-2.25-2.25V4.778z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </button>
            </div>
            <br />
            <div className="histor">
              <p>Today</p>
              {items.map((title, index) => (
                <div className="hisrtarr" key={index}>
                  <h3>{title}</h3>
                  <button
                    className="hisbtn"
                    onClick={(e) => openModal(title, e.currentTarget)}
                  >
                    <span role="tooltip" aria-label="Conversation options" className="tooltip">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        className="octicon octicon-kebab-horizontal"
                        viewBox="0 0 16 16"
                        width="20"
                        height="20"
                        fill="currentColor"
                        style={{ verticalAlign: "text-bottom" }}
                      >
                        <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                      </svg>
                    </span>
                  </button>
                </div>
              ))}

              {isModalOpen && (
                <div
                  className="modal-container"
                  style={{
                    width: "200px",
                    position: "absolute",
                    top: `${modalPosition.top}px`,
                    left: `${modalPosition.left}px`,
                    zIndex: 1000,
                    background: "#fff",
                    border: "1px solid #ccc",
                    padding: "1px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                
                  }}
                  ref={modalRef}
                >
                  <p>
                    <strong>Selected Title:</strong> {activeTitle}
                  </p>
                  <button
                    disabled
                    style={{
                      border: "none",
                      boxShadow: "0px 1px 0px 0px black",
                      padding: "3px",
                      cursor: "no-drop",
                    }}
                  >
                    <p>
                      <i className="fa-solid fa-trash"></i> Delete
                    </p>
                  </button>
                  <button className="incgat">
                    <span>Delete </span>
                  </button>
                  <button className="incgat">
                    <span>Reply to </span>
                  </button>
                  <button onClick={closeModal}>Close</button>
                </div>
              )}
            </div>
          </div>
        </div>
        <Sugnets />

        <div className="capilother2">
          <button className='boshpasbtn'>
            <span role="tooltip" aria-label="Conversation options" className="tooltip">
              <svg
                aria-hidden="true"
                focusable="false"
                className="octicon octicon-kebab-horizontal"
                viewBox="0 0 16 16"
                width="20"
                height="20"
                fill="currentColor"
                style={{ verticalAlign: "text-bottom" }}
              >
                <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
              </svg>
            </span>
          </button>
          <button className='boshpasbtn' onClick={toggleRotation}>
            <svg
              aria-hidden="true"
              focusable="false"
              className="octicon octicon-sidebar-collapse"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              fill="currentColor"
              style={{ verticalAlign: 'text-bottom' }}
            >
              <path
                className={`aylana ${rotated ? 'chapgaQaragan' : ''}`}
                d="M6.823 7.823a.25.25 0 0 1 0 .354l-2.396 2.396A.25.25 0 0 1 4 10.396V5.604a.25.25 0 0 1 .427-.177Z"
              />
              <path d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25H9.5v-13H1.75a.25.25 0 0 0-.25.25ZM11 14.5h3.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H11Z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Pacapilot;
