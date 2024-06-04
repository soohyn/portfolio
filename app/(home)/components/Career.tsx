import CareerCard from "@/app/components/CareerCard";
import HighlightingText from "@/app/components/HighlightingText";
import { career } from "@/public/config";
import { FC } from "react";

const Career: FC = () => {
  const careerMap = career.map((c, idx) => {
    return (
      <CareerCard
        key={`career-${idx}`}
        career={c}
        isLast={idx >= career.length - 1}
        idx={idx}
      />
    );
  });

  return (
    <section id="career-section" className="section-layout">
      <div className="layout flex flex-col items-center">
        <h2 className="section-header">
          <HighlightingText text={"Career"} />
        </h2>

        <ul className="flex flex-col self-start sm:px-20 pt-20">{careerMap}</ul>
      </div>
    </section>
  );
};

export default Career;
