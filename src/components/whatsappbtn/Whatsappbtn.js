import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { ReactComponent as Whatsappsvg } from "../../images/social/Whatsapp.svg";
import "./Whatsappbtn.css";

// Define the shake animation with a longer pause and short animation
const shake = keyframes`
  0% { transform: skewX(-15deg); }
 5% { transform: skewX(15deg); }
 10% { transform: skewX(-15deg); }
 15% { transform: skewX(15deg); }
 20% { transform: skewX(0deg); }
 100% { transform: skewX(0deg); }
`;

// Styled component for the WhatsApp button
const Button = styled.a`
  position: fixed;
  z-index: 1000;
  bottom: 110px;
  right: 20px;
  padding: 0.8rem;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  cursor: pointer;
  animation: ${shake} 2s linear infinite; /* 5s hold + 1s animation */
  text-decoration: none;

  &:hover {
    background-color: #128c7e;
  }
`;

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    let heightToHidden = 300;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <Button
          href="https://wa.me/00923455005810"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Whatsappsvg className="whatsappsvg" />
        </Button>
      )}
    </>
  );
};

export default WhatsAppButton;
