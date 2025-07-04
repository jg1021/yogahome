import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const NoticeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [notice, setNotice] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem('notices')) || [];
    const found = all.find(n => String(n.id) === id);
    if (found) {
      setNotice(found);
      setEditedTitle(found.title);
      setEditedContent(found.content);
    }
  }, [id]);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this notice?')) {
      const all = JSON.parse(localStorage.getItem('notices')) || [];
      const updated = all.filter(n => String(n.id) !== id);
      localStorage.setItem('notices', JSON.stringify(updated));
      navigate('/notice');
    }
  };

  const handleSaveEdit = () => {
    const all = JSON.parse(localStorage.getItem('notices')) || [];
    const updated = all.map(n =>
      String(n.id) === id
        ? { ...n, title: editedTitle, content: editedContent }
        : n
    );
    localStorage.setItem('notices', JSON.stringify(updated));
    setNotice({ ...notice, title: editedTitle, content: editedContent });
    setIsEditing(false);
  };

  if (!notice) return <div className="p-4">Notice not found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      {isEditing ? (
        <>
          <h1 className="text-xl font-bold mb-2">✏️ Edit Notice</h1>
          <input
            type="text"
            value={editedTitle}
            onChange={e => setEditedTitle(e.target.value)}
            className="w-full p-2 border rounded mb-2"
          />
          <textarea
            value={editedContent}
            onChange={e => setEditedContent(e.target.value)}
            className="w-full p-2 border rounded h-40"
          />
          <div className="mt-4 space-x-2">
            <button
              onClick={handleSaveEdit}
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-400 text-white rounded"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-2">{notice.title}</h1>
          <p className="text-gray-700 mb-4 whitespace-pre-line">
            {notice.content}
          </p>
          <div className="space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-600 text-white rounded"
            >
              Delete
            </button>
            <Link
              to="/notice"
              className="px-4 py-2 bg-gray-500 text-white rounded"
            >
              Back
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default NoticeDetail;
