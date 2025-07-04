import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NoticeAdmin = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert('Please fill in both title and content.');
      return;
    }

    // Save to localStorage (simulate DB)
    const existing = JSON.parse(localStorage.getItem('notices')) || [];
    const newNotice = {
      id: Date.now(),
      title,
      content,
      date: new Date().toISOString().slice(0, 10),
    };
    const updated = [newNotice, ...existing];
    localStorage.setItem('notices', JSON.stringify(updated));

    // Redirect or show message
    navigate('/notice');
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">🛠 Write a New Notice</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Enter the notice title"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Content</label>
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            className="w-full border p-2 rounded h-40"
            placeholder="Write the notice content..."
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700"
        >
          Save Notice
        </button>
      </form>
    </div>
  );
};

export default NoticeAdmin;
