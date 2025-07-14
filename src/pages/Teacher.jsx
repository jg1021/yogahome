import React from "react";
import { Link } from 'react-router-dom';
import t1 from "../assets/teacher01.jpg"

const teachers = [
  {
    name: "Prema Seojin",
    slug: "prema",
    image: t1,
    desc: "프리마 서진 – 하타요가 지도자, 요가필드 원장",
  },
  {
    name: "Sita Youngsun",
    slug: "sita",
    image: "/assets/teachers/sita.jpg",
    desc: "시타 영선 – 명상·사운드 테라피 전문가",
  },
  {
    name: "Ravi Hyun",
    slug: "ravi",
    image: "/assets/teachers/ravi.jpg",
    desc: "라비 현 – 요가 철학, TTC 과정 리더",
  },
];

const Teacher = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold text-center mb-10">Our Teachers</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teachers.map((teacher, idx) => (
          <div key={idx} className="text-center">
            <Link to={`/teacher/${teacher.slug}`}>
                <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-[300px] object-cover rounded shadow-md"
                />
            </Link>
            <h3 className="text-xl font-semibold mt-4">
                <Link to={`/teacher/${teacher.slug}`}>
                    {teacher.name}
                </Link>
            </h3>
            <p className="text-gray-600 text-sm mt-1">{teacher.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teacher;
