import React from 'react';
import { Link } from 'react-router-dom';

const notices = [
  { id: 1, title: '🧘 June Yoga Class Registration Open', date: '2025-06-01' },
  { id: 2, title: '🕉️ Studio Closed on Public Holiday', date: '2025-06-06' },
  { id: 3, title: '🙏 Special Satsang Event This Weekend', date: '2025-06-10' },
];

const Notice = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">📢 Notice Board</h1>
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
