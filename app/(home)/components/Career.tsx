import HighlightingText from "@/app/components/HighlightingText";
import { FC } from "react";

const Career: FC = () => {
  return (
    <section id="career-section" className="section-layout">
      <div className="layout flex flex-col items-center">
        <h2 className="section-header">
          <HighlightingText text={'Career'} />
        </h2>
      </div>
    </section>
  );
};

export default Career;
