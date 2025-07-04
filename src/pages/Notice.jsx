import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const defaultNotices = [
  { id: 1, title: '🧘 June Yoga Class Registration Open', date: '2025-06-01' },
  { id: 2, title: '🕉️ Studio Closed on Public Holiday', date: '2025-06-06' },
];

const Notice = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('notices')) || [];
    setNotices([...saved, ...defaultNotices]);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">📢 Notice Board</h1>
        <Link
          to="/admin/notice"
          className="text-sm text-blue-600 hover:underline"
        >
          + Write New Notice
        </Link>
      </div>
      <div className="border rounded shadow">
        {notices.map(notice => (
          <Link
            key={notice.id}
            to={`/notice/${notice.id}`}
            className="flex justify-between items-center px-4 py-3 border-b hover:bg-gray-50"
          >
            <span>{notice.title}</span>
            <span className="text-sm text-gray-500">{notice.date}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Notice;
