import { useParams } from "react-router-dom";

const teachers = {
  prema: {
    name: "Prema Seojin",
    image: "/assets/teachers/prema.jpg",
    intro: "프리마 서진은 하타요가 전문 지도자이며 요가필드 원장입니다.",
    detail: `- 하타요가, 시바난다 요가 수련자
- 인도 시바난다 아쉬람 TTC/ATTC 수료
- 명상, 요가철학, 아사나 전문 지도`,
  },
  sita: {
    name: "Sita Youngsun",
    image: "/assets/teachers/sita.jpg",
    intro: "시타 영선은 사운드 테라피와 명상 전문가입니다.",
    detail: `- 사운드 힐링/명상 진행
- 라이프 요가 프로그램 개발자
- 요가철학 강의자`,
  },
  ravi: {
    name: "Ravi Hyun",
    image: "/assets/teachers/ravi.jpg",
    intro: "라비 현은 TTC 지도 및 철학 수업을 담당합니다.",
    detail: `- 시바난다 TTC/ATTC 수료
- 요가 철학/명상 전문 강사
- 국내외 TTC 지도 경험`,
  },
};

const TeacherDetail = () => {
  const { slug } = useParams();
  const teacher = teachers[slug];

  if (!teacher) {
    return <div className="p-10 text-center">존재하지 않는 선생님입니다.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img src={teacher.image} alt={teacher.name} className="w-full rounded shadow" />
        <div>
          <h2 className="text-2xl font-bold mb-2">{teacher.name}</h2>
          <p className="text-gray-600 mb-4">{teacher.intro}</p>
          <pre className="text-gray-700 whitespace-pre-wrap text-sm leading-relaxed">
            {teacher.detail}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetail;
