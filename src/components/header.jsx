import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const menuItems = [
  {
    name: 'PROGRAM',
    //link: '/program',
    submenu: [
      { name: 'Beginner', link: '/program/beginner' },
      { name: 'Intermediate', link: '/program/intermediate' },
      { name: 'Advanced', link: '/program/advanced' },
    ],
  },
  {
    name: 'TTC & WORKSHOP',
    //link: '/ttc',
    submenu: [
      { name: 'Teacher Training', link: '/ttc' },
      { name: 'Workshops', link: '/workshop' },
      { name: 'Special Events', link: '/events' },
    ],
  },
  {
    name: 'FAMILY',
    //link: '/family',
    submenu: [
      { name: 'Yoga for Kids', link: '/family/kids' },
      { name: 'Yoga for Seniors', link: '/family/seniors' },
      { name: 'Yoga Together', link: '/family/together' },
    ],
  },
  { 
    name: 'ABOUT',
    //link: '/about',
    submenu: [
      { name: 'Story', link: '/about' },
      { name: 'Teachers', link: '/about' },
      { name: 'Community', link: '/about' },
    ],    
  },
  { name: 'LOCATION', link: '/location' },
  { name: 'NOTICE', link: '/notice' },
  { name: 'LOG IN', link: '/signin' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  let hoverTimeout = null;
  const menuRef = useRef();
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header ref={menuRef} className="bg-white border-b border-red-500 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <Link to="/" className="text-xl font-bold text-red-600">
          SIVANANDAYOGA
        </Link>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-semibold">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => {
                clearTimeout(hoverTimeout);
                setHovered(index);
              }}
              onMouseLeave={() => {
                hoverTimeout = setTimeout(() => setHovered(null), 200); // 👈 small delay
              }}
            >
              <Link
                to={item.link}
                className={`hover:text-red-600 transition ${
                  currentPath.startsWith(item.link) ? 'text-red-600 font-bold' : ''
                }`}
              >
                {item.name}
              </Link>
              {item.submenu && hovered === index && (
                <div className="absolute left-0 mt-2 bg-white shadow rounded border w-48 z-50">
                  {item.submenu.map((sub, subIdx) => (
                    <Link
                      key={subIdx}
                      to={sub.link}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow text-sm">
          {menuItems.map((item, index) => (
            <div key={index}>
              <Link
                to={item.link}
                className={`block py-2 font-semibold ${
                  currentPath.startsWith(item.link) ? 'text-red-600 font-bold' : ''
                }`}
                onClick={() => setIsOpen(false)} // ✅ CLOSE on click
              >
                {item.name}
              </Link>

              {item.submenu && (
                <div className="ml-4 space-y-1">
                  {item.submenu.map((sub, subIdx) => (
                    <Link
                      key={subIdx}
                      to={sub.link}
                      className="block py-1 text-gray-600"
                      onClick={() => setIsOpen(false)} // ✅ CLOSE on submenu click
                    >
                      - {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

    </header>
  );
};

export default Header;
