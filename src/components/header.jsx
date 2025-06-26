import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const menuItems = [
    { name: 'SIVANANDAYOGA', link: '/' },
    { name: 'ABOUT', link: '/about' },
    { name: 'LOCATION', link: '/location' },
    {
      name: 'PROGRAM',
      link: '/program',
      submenu: [
        { name: 'Beginner Class', link: '/program/beginner' },
        { name: 'Intermediate Class', link: '/program/intermediate' },
        { name: 'Advanced Class', link: '/program/advanced' },
      ],
    },
    {
      name: 'TTC&WORKSHOP',
      link: '/ttc',
      submenu: [
        { name: 'Teacher Training', link: '/ttc' },
        { name: 'Workshops', link: '/workshop' },
        { name: 'Special Events', link: '/events' },
      ],
    },
    {
      name: 'FAMILY',
      link: '/family',
      submenu: [
        { name: 'Yoga for Kids', link: '/family/kids' },
        { name: 'Yoga for Seniors', link: '/family/seniors' },
        { name: 'Yoga Together', link: '/family/together' },
      ],
    },
    { name: 'SHOP', link: '/shop' },
    { name: 'NOTICE', link: '/notice' },
  ];

  return (
    <header className="bg-white border-y-4 border-red-600 shadow-md z-50 relative">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex justify-between items-start text-lg font-semibold">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative group px-3 py-4 text-center"
              onMouseEnter={() => item.submenu && setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ flex: 1 }}
            >
              <Link to={item.link} className="hover:text-red-600 block">
                {item.name}
              </Link>
              {item.submenu && hoveredIndex === index && (
                <div className="mt-2 space-y-1">
                  {item.submenu.map((sub, subIdx) => (
                    <Link
                      key={subIdx}
                      to={sub.link}
                      className="block text-sm text-gray-700 hover:text-red-600"
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
    </header>
  );
};

export default Header;
