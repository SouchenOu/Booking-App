import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../context/AuthenticationContext';

const Navbar = ({ openMessage, setOpenMessage }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { isAuthenticated, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    // Reset user state
    // Redirect the user to the login page
  };

  const MessageBar = () => {
    setOpenMessage(!openMessage);
  };

  const navigateFunc = () => {
    navigate("/login");
  };

  const navigateRegister = () => {
    navigate("/register");
  };

  const contactUs = () => {
    navigate('/contact');
  };

  return (
    <div className="h-[70px] flex justify-center bg-[#0D19A3]">
      <div className="container mx-auto px-4 flex justify-between items-center text-white">
        <Link to="/" className="text-2xl lg:text-4xl font-bold cursor-pointer"> 
          Booking.com
        </Link>
        {!isAuthenticated ? (
          <div className="flex items-center gap-4 lg:gap-8">
            <button
              className="px-3 py-2 text-sm lg:text-base bg-white rounded cursor-pointer"
              onClick={navigateRegister}
              style={{ color: '#022E51' }}
            >
              Register
            </button>
            <button
              className="px-3 py-2 text-sm lg:text-base bg-white rounded cursor-pointer"
              onClick={navigateFunc}
              style={{ color: '#022E51' }}
            >
              Login
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4 lg:gap-8">
            <button
              className="text-sm lg:text-[30px] font-medium cursor-pointer underline"
              onClick={contactUs}
            >
              Contact Us
            </button>
            <div className="relative flex items-center cursor-pointer" onClick={MessageBar}>
              <FontAwesomeIcon icon={faMessage} className="text-lg lg:text-[30px]" />
              <div className="w-4 h-4 lg:w-5 lg:h-5 bg-red-600 rounded-full flex items-center justify-center text-xs lg:text-sm font-bold absolute top-[-5px] right-[-5px]" style={{ color: 'white' }}>
                3
              </div>
            </div>
            <button
              className="px-3 py-2 text-sm lg:text-[20px] bg-white rounded cursor-pointer"
              onClick={handleLogout}
              style={{ color: '#022E51' }}
            >
              LogOut
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;