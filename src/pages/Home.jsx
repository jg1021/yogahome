import React from 'react';
import ImageSlider from '../components/ImageSlider';
import { useNavigate } from "react-router-dom";

const contentLinks = [
  { name: "📢 소개", path: "/about/story" },
  { name: "👩‍🏫 Teachers", path: "/teacher" },
  { name: "📚 Programs", path: "/programs" },
  //{ name: "🍽️ Menu", path: "/menu" },
  //{ name: "🖼️ Slides", path: "/slides" },
  { name: "📍 Location", path: "/location" },
];

const Home = () => {
    const navigate = useNavigate();
    return (
      <div>
        <ImageSlider />
        <div className="p-6 text-center text-xl">Welcome to A-proYoga School</div>
    
        <section className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {contentLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className="p-4 bg-white rounded-xl shadow hover:shadow-lg text-center text-lg font-medium text-gray-800 hover:bg-gray-50 transition"
            >
              {link.name}
            </button>
          ))}
        </section>
      </div>
    );
};

export default Home;