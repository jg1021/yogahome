import React from 'react';
import locationImg from '../assets/loca.jpg'; // Use your own photo

const Location = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-8">에이프로요가 동백점</h2>

      {/* Two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Location image */}
        <div>
          <img
            src={locationImg}
            alt="Apro Yoga Location"
            className="w-full rounded shadow"
          />
        </div>

        {/* Right: Naver Map Embed */}
        <div>
          <iframe
            title="naver-map"
            src="https://map.naver.com/p/entry/place/1829820191?c=19.85,0,0,0,dh" // ← update with your coordinates
            width="100%"
            height="320"
            frameBorder="0"
            allowFullScreen
            className="rounded shadow"
          ></iframe>
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-8 text-center text-sm md:text-base text-gray-700">
        <p>
          <strong>Add.</strong> 경기 용인시 기흥구 동백중앙로54번길 36-1<br />
          <strong>지번.</strong> 경기 용인시 기흥구 중동 97-23
        </p>
        <p className="mt-2">
          <strong>Tel.</strong> 0507-1388-5787
        </p>
        <p className="mt-2">
          <strong>평일</strong> 11:00 ~ 21:00 &nbsp;&nbsp;
          <strong>주말</strong> 10:00 ~ 12:30
        </p>
      </div>
    </div>
  );
};

export default Location;
