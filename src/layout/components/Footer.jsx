// Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-white text-center text-sm p-3 shadow-inner">
      © {new Date().getFullYear()} JoinMeds. All rights reserved.
    </footer>
  );
}

export default Footer;
