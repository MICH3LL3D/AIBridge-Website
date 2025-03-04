'use client'
import React, { useState } from 'react'

const Footer = () => {
  const [windowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1024)
  const isMobile = windowWidth < 768

  return (
    <footer
      className="footer"
      style={{
        backgroundColor: "transparent",
        color: "#d2d4d6",
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center", 
        paddingTop: isMobile ? '1rem' : '2rem',
        paddingBottom: isMobile ? '1.5rem' : '3rem',
        width: "100%", 
      }}
    >
      <p>© {new Date().getFullYear()} AIBridge M. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

  