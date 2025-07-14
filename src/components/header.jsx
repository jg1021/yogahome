import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const menuItems = [
  {
    name: 'SivanadYoga',
    //link: '/program',
    submenu: [
      { name: 'Affiliated Seoul Center', link: '/program/beginner' },
      { name: 'Dalat', external: true, link: 'https://sivanandayogavietnam.org/' },
      { name: 'California', external: true, link: 'https://sivanandala.org/' },
      { name: 'Swami Narayan', link: '/program/advanced' },
    ],
  },
  {
    name: 'AproYoga',
    //link: '/ttc',
    submenu: [
      { name: 'About Us', link: '/about/story' },
      { name: 'Teacher', link: '/teacher' },
      { name: 'Program ttc', link: '/events' },
      { name: 'Program retreat', link: '/events' },
      { name: 'Location', link: '/location' },
    ],
  },
  {
    name: 'Prema Seojin',
    //link: '/family',
    submenu: [
      { name: '소개', link: '/about/story' },
      { name: '앨범', link: '/about/story' },
      { name: 'Voice Meditation', link: '/about/story' },
    ],
  },
  { 
    name: 'Store',
    //link: '/about',
    submenu: [
      { name: 'Harmonium', external: true, link: 'https://smartstore.naver.com/zic9net' },
      { name: 'Goods', external: true, link: 'https://smartstore.naver.com/zic9net' },
    ],    
  },
  /*
  { name: 'LOCATION', link: '/location' },
  { name: 'NOTICE', link: '/notice' },
  { name: 'LOG IN', link: '/signin' },*/
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
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <Link to="/" className="text-xl font-bold text-red-600">
          A-proYoga school
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
