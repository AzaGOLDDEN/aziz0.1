import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faKey, faCode, faVideo, faPaperPlane, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import "../style/sugnets.css";

const allSuggestions = [
  {
    color: "var(--display-purple-fgColor)",
    text: "Explain Java char[] for password",
    type: "key",
  },
  {
    color: "var(--display-gray-fgColor)",
    text: "Python password endpoint",
    type: "code",
  },
  {
    color: "var(--display-purple-fgColor)",
    text: "Multiple GitHub account guide",
    type: "github",
  },
  {
    color: "var(--display-blue-fgColor)",
    text: "How to record a video tutorial",
    type: "video",
  },
  {
    color: "var(--display-red-fgColor)",
    text: "Secure your API keys",
    type: "key",
  },
  {
    color: "var(--display-gray-fgColor)",
    text: "React best practices",
    type: "code",
  },
  {
    color: "var(--display-purple-fgColor)",
    text: "GitHub pull request tutorial",
    type: "github",
  },
  {
    color: "var(--display-green-fgColor)",
    text: "Video editing tips",
    type: "video",
  },
];

// Icon tanlash funksiyasi
const getIconByType = (type) => {
  switch (type) {
    case "key":
      return <FontAwesomeIcon icon={faKey} style={{ color: "brown" }} size="lg" />;
    case "code":
      return <FontAwesomeIcon icon={faCode} size="lg" />;
    case "github":
      return <FontAwesomeIcon icon={faGithub} style={{ color: "purple" }} size="lg" />;
    case "video":
      return <FontAwesomeIcon icon={faVideo} style={{ color: "blue" }} size="lg" />;
    default:
      return null;
  }
};

// Tasodifiy aralashtirish funksiyasi
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// 👉 KOMPONENT BOSHLANISHI
const SuggestionList = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  // Tasodifiy 6ta suggestion tanlash
  useEffect(() => {
    const getRandomSuggestions = () => shuffleArray(allSuggestions).slice(0, 6);
    setSuggestions(getRandomSuggestions());
  }, []);

  // Modal tashqarisiga bosilsa yopiladi
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
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

  // Ko'z harakati animatsiyasi
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

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClick = () => {
    setAnimate(false);
    setTimeout(() => {
      void document.querySelector('.koz')?.offsetWidth;
      setAnimate(true);
    }, 1000);
  };

  return (
    <>
      <div className="suggestions-grid">
        <div className="capilother1">
          <button
            type="button"
            aria-label="Conversation options"
            aria-haspopup="true"
            aria-expanded={isModalOpen}
            className="cpapilei"
            onClick={toggleModal}
          >
            <h4>GPT-4o</h4>

          </button>

        </div><br /><br /><br /><br />
        <div className="cpiaq">
          <svg className="head" onClick={handleClick}
            style={{ cursor: 'pointer' }} aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="50" data-view-component="true">
            <path fill="rgba(100, 100, 100)"
              d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.054 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z">
            </path>
            <path className={`koz ${animate ? 'animate-once' : ''}`}
              fill="rgba(100, 100, 100)"
              d="M6.25 9.037a.5.5 0 0 1 .5.5v1.101a.5.5 0 0 1-1 0V9.537a.5.5 0 0 1 .5-.5Zm4.25.5v1.101a.5.5 0 0 1-1 0V9.537a.5.5 0 0 1 1 0Z">
            </path>
          </svg>

          <br /><br />

        </div>
        <ul className="list-style-none">
          {suggestions.map((item, index) => (
            <li key={index}>
              <button
                className="bya"
                aria-label={item.text}
              >
                <div style={{ color: item.color }}>{getIconByType(item.type)}</div>
                <div>{item.text}</div>
              </button>
            </li>
          ))}
        </ul>

        <p className='part'><a href="#">Copilot</a> uses AI. Check for mistakes.</p>
        <div className="space-y-4 ebr">
          <div className="ebr__input-wrapper">
            <input
              type="text"
              placeholder="Ask Copilot"
              className="ebr__input"
            />

            <div className="ebr__icons">
              <div className="ebr__icon-btn">
                <label htmlFor="file-upload">
                  <FontAwesomeIcon icon={faPaperclip} />
                </label>
                <input
                  type="file"
                  id="file-upload"
                  style={{ display: 'none' }}
                  onChange={(e) => {
                   
                    console.log(e.target.files[0]);
                  }}
                />
              </div>
              <button className="ebr__icon-btn" >
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <div className="modal-containe" style={{ marginLeft: "40%", marginTop: "-63%", }}>
            <div className="modal" ref={modalRef} style={{ width: "290px" }}>
              <h6>Models</h6>
              <div className="mon">
                <div className="after">
                  <span className="prc-ActionList-LeadingVisual-dxXxW prc-ActionList-VisualWrap-rfjV-" style={{ display: 'flex', alignItems: "center", gap: "10px", }}>
                    <img
                      data-component="Avatar"
                      className="prc-Avatar-Avatar-ZRS-m"
                      alt="Azure OpenAI logo"
                      data-square=""
                      width="18"
                      height="18"
                      src="https://github.com/images/modules/marketplace/models/families/openai.svg?size=36"
                      data-testid="github-avatar"
                      style={{ "--avatarSize-regular": "18px" }}
                    />
                    <div className='dark'>
                      <div className="lekt">
                        <h5>GPT-4o</h5>
                        <h6 style={{ color: 'grey', }}>Azure OpenAI</h6>
                      </div>
                    </div>
                  </span>
                </div>
                <div className="after">
                  <span className="prc-ActionList-LeadingVisual-dxXxW prc-ActionList-VisualWrap-rfjV-" style={{ display: 'flex', alignItems: "center", gap: "10px", }}>
                    <img
                      data-component="Avatar"
                      className="prc-Avatar-Avatar-ZRS-m"
                      alt="Azure OpenAI logo"
                      data-square=""
                      width="18"
                      height="18"
                      src="https://github.com/images/modules/marketplace/models/families/openai.svg?size=36"
                      data-testid="github-avatar"
                      style={{ "--avatarSize-regular": "18px" }}
                    />
                    <div className='dark'>
                      <div className="lekt">
                        <h5>o3-mini</h5>
                        <h6 style={{ color: 'grey', }}>Azure OpenAI</h6>
                      </div>
                    </div>
                  </span>
                </div>
                <div className="after">
                  <span className="prc-ActionList-LeadingVisual-dxXxW prc-ActionList-VisualWrap-rfjV-" style={{ display: 'flex', alignItems: "center", gap: "10px", }}>
                    <img
                      data-component="Avatar"
                      className="prc-Avatar-Avatar-ZRS-m"
                      alt="Azure OpenAI logo"
                      data-square=""
                      width="18"
                      height="18"
                      src="https://github.com/images/modules/marketplace/models/families/anthropic.svg?size=36"
                      data-testid="github-avatar"
                      style={{ "--avatarSize-regular": "18px" }}
                    />
                    <div className='dark'>
                      <div className="lekt">
                        <h5>Claude-3.5 sonnet</h5>
                        <h6 style={{ color: 'grey', }}>Anthropic</h6>
                      </div>
                    </div>
                  </span>
                </div>
                <div className="after">
                  <span className="prc-ActionList-LeadingVisual-dxXxW prc-ActionList-VisualWrap-rfjV-" style={{ display: 'flex', alignItems: "center", gap: "10px", }}>
                    <img
                      data-component="Avatar"
                      className="prc-Avatar-Avatar-ZRS-m"
                      alt="Azure OpenAI logo"
                      data-square=""
                      width="18"
                      height="18"
                      src="https://github.com/images/modules/marketplace/models/families/gemini.svg?size=36"
                      data-testid="github-avatar"
                      style={{ "--avatarSize-regular": "18px" }}
                    />
                    <div className='dark'>
                      <div className="lekt">
                        <h5>Gemini 2.0 Flash</h5>
                        <h6 style={{ color: 'grey', }}>Google</h6>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
              <h6>Preiwe</h6>
              <div className="mon">
                <div className="after">
                  <span className="prc-ActionList-LeadingVisual-dxXxW prc-ActionList-VisualWrap-rfjV-" style={{ display: 'flex', alignItems: "center", gap: "10px", }}>
                    <img
                      data-component="Avatar"
                      className="prc-Avatar-Avatar-ZRS-m"
                      alt="Azure OpenAI logo"
                      data-square=""
                      width="18"
                      height="18"
                      src="https://github.com/images/modules/marketplace/models/families/openai.svg?size=36"
                      data-testid="github-avatar"
                      style={{ "--avatarSize-regular": "18px" }}
                    />
                    <div className='dark'>
                      <div className="lekt">
                        <h5>GPT-4.1</h5>
                        <h6 style={{ color: 'grey', }}>Azure OpenAI</h6>
                      </div>

                    </div>
                  </span>
                </div>

                <div className="after">
                  <span className="prc-ActionList-LeadingVisual-dxXxW prc-ActionList-VisualWrap-rfjV-" style={{ display: 'flex', alignItems: "center", gap: "10px", }}>
                    <img
                      data-component="Avatar"
                      className="prc-Avatar-Avatar-ZRS-m"
                      alt="Azure OpenAI logo"
                      data-square=""
                      width="18"
                      height="18"
                      src="https://github.com/images/modules/marketplace/models/families/anthropic.svg?size=36"
                      data-testid="github-avatar"
                      style={{ "--avatarSize-regular": "18px" }}
                    />
                    <div className='dark'>
                      <div className="lekt">
                        <h5>Claude-3.7 sonnet</h5>
                        <h6 style={{ color: 'grey', }}>Anthropic</h6>
                      </div>
                      <h5 >Upgrade</h5>
                    </div>
                  </span>
                </div>
                <div className="after">
                  <span className="prc-ActionList-LeadingVisual-dxXxW prc-ActionList-VisualWrap-rfjV-" style={{ display: 'flex', alignItems: "center", gap: "10px", }}>
                    <img
                      data-component="Avatar"
                      className="prc-Avatar-Avatar-ZRS-m"
                      alt="Azure OpenAI logo"
                      data-square=""
                      width="18"
                      height="18"
                      src="https://github.com/images/modules/marketplace/models/families/openai.svg?size=36"
                      data-testid="github-avatar"
                      style={{ "--avatarSize-regular": "18px" }}
                    />
                    <div className='dark' >
                      <div className="lekt">
                        <h5>o1</h5>
                        <h6 style={{ color: 'grey', }}>Azure OpenAI</h6>
                      </div>
                      <h5>Upgrade</h5>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SuggestionList;
