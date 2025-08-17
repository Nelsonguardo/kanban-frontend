import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { FaHome, FaUser, FaColumns, FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Eliminar la cookie del token usando js-cookie
    Cookies.remove('token');
    Cookies.remove('username');
    // Redirigir a la página de login
    navigate('/login');
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-400 p-4 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
        {/* Nombre de la app a la izquierda */}
        <div className="flex items-center">
          <span className="text-white font-bold text-xl tracking-wide">Kanban App</span>
        </div>
        {/* Iconos y textos a la derecha */}
        <ul className="flex space-x-6 text-white text-lg items-center">
          <li>
            <Link
              to="/dashboard"
              className="flex items-center gap-2 hover:text-blue-200 transition-colors"
              title="Inicio"
            >
              <FaHome /> <span>Inicio</span>
            </Link>
          </li>
          <li>
            <Link
              to="/perfil"
              className="flex items-center gap-2 hover:text-blue-200 transition-colors"
              title="Perfil"
            >
              <FaUser /> <span>Perfil</span>
            </Link>
          </li>
          <li>
            <Link
              to="/board"
              className="flex items-center gap-2 hover:text-blue-200 transition-colors"
              title="Tableros"
            >
              <FaColumns /> <span>Tableros</span>
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 hover:text-blue-200 transition-colors"
              title="Cerrar Sesión"
            >
              <FaSignOutAlt /> <span>Cerrar Sesión</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
