import React from 'react';
import '../styles/Footer.css';

function Footer(props) {
  return (
    <footer className="text-white text-center">
      Copyright &copy; {new Date().getFullYear()} Chatly
    </footer>
  );
}

export default Footer;