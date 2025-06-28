import React from 'react';
import { useParams, Link } from 'react-router-dom';

const noticeContent = {
  1: {
    title: '🧘 June Yoga Class Registration Open',
    content: 'We are now accepting registrations for June yoga classes. Early bird discount available until May 31!',
  },
  2: {
    title: '🕉️ Studio Closed on Public Holiday',
    content: 'Our studio will be closed on June 6 for Memorial Day. No classes on that day.',
  },
  3: {
    title: '🙏 Special Satsang Event This Weekend',
    content: 'Join us for a free satsang event this Sunday at 6PM. Bring a friend!',
  },
};

const NoticeDetail = () => {
  const { id } = useParams();
  const notice = noticeContent[id];

  if (!notice) {
    return <div className="p-4">Notice not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">{notice.title}</h1>
      <p className="mb-4 text-gray-700">{notice.content}</p>
      <Link to="/notice" className="text-blue-600 hover:underline">
        ← Back to Notices
      </Link>
    </div>
  );
};

export default NoticeDetail;
