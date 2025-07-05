import React from "react";
import storyImg from "../assets/story.jpg"; // Use your actual image

const Story = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Image */}
        <div>
          <img
            src={storyImg}
            alt="Yoga Story"
            className="w-full rounded shadow"
          />
        </div>

        {/* Right: Text */}
        <div>
          <p className="text-orange-500 font-medium mb-2">with A_proYoga school</p>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Grow up Together & Respect each other
          </h2>
          <div className="text-gray-700 space-y-4 text-sm leading-relaxed">
            <p>
              에이프로요가스쿨은 다양한 라이프스타일을 가진 현대인에게
              재미있게 성장과 니즈에 맞는 최상의 요가를 제공합니다.
            </p>
            <p>
              에이프로요가스쿨의 하타요가는 오랜 역사를 지닌 세계적인 요가이며
              ‘시바난다 요가’에 뿌리를 두고 모든 요기의 해부학 정렬을 더해
              트렌디함과 깊은 만족감을 선사합니다.
            </p>
            <p>
              깊이 있는 호흡 수련을 통해 호흡을 알고 마음을 수련하며,
              세계적인 아사나 수련으로 신체적인 긴장을 증진시키는 것은 물론,
              집중력을 높이고 자존감을 향상시켜줍니다.
            </p>
            <p>
              몸의 비정렬로 약해졌을 경우나 체질이 필요한 분들도
              안전하게, 부상 위험 없이 수련할 수 있으며,
              수련은 이끌이에 따라 자연스럽게 치유와 성장을 경험할 수 있습니다.
            </p>
            <p>
              70년 이상의 역사를 지닌 시바난다 요가는 인도는 물론
              미국, 캐나다, 인도, 우루과이, 아르헨티나, 브라질, 이스라엘, 독일,
              오스트리아, 스위스, 이탈리아, 일본 등
              세계 60개 이상의 아쉬람과 센터를 보유한
              인터내셔널 전통 하타요가 입니다.
            </p>
            <p>
              에이프로요가스쿨은 현지와 가장 가까운
              시바난다요가를 만날 수 있는 국내 유일의 요가입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
