import React, { useEffect, useState } from "react";
import "../Styles/popup.css";
import logo from "../assets/hachac.jpg";
import pattern from "../assets/pattern.jpg";

interface PopupProps {
  isOpen: boolean;              // controls visibility
  onClose: () => void;          // callback to close popup
  children: React.ReactNode;    // dynamic content
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children }) => {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  if (!open) return null;

  return (
    <div className="PopupOverlay" onClick={onClose}> {/* Click outside to close */}
      <div className="PopupContent" onClick={(e) => e.stopPropagation()}>
        {/* Left section */}
        <div className="PopupLeft">
          <img src={pattern} alt="Pattern" className="PopupImage" />
        </div>

        {/* Right section */}
        <div className="PopupRight">
          <img src={logo} alt="Hachac Logo" className="PopupLogo" />
          <h2 className="PopupTitle">Hachac Foundation</h2>
          <p className="PopupDesc">
            Helping children build careers and brighter futures. Join us in making a difference!
          </p>

          {/* ✅ Render children here (dynamic content, including close button) */}
          <div className="PopupChildren">
            {children}
          </div>

          {/* Optional close button inside popup */}
          <button className="PopupCloseBtn" onClick={onClose}>
            ✖
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
