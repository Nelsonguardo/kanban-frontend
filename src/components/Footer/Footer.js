import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-400 p-4 text-center text-white text-sm flex flex-col items-center shadow-md mt-8">
      <div className="flex space-x-4 mb-2">
        <a href="https://github.com/Nelsonguardo" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
          <FaGithub size={22} />
        </a>
        <a href="https://www.linkedin.com/in/nelson-javier-guardo-camacho-a92b28191/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
          <FaLinkedin size={22} />
        </a>
      </div>
      <div>
        © {new Date().getFullYear()} Kanban App. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
