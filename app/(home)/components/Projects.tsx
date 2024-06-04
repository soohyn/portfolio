import HighlightingText from "@/app/components/HighlightingText";
import { FC } from "react";

const Projects: FC = () => {
  return (
    <section id="projects-section" className="section-layout">
      <div className="flex flex-col layout items-center">
        <h2 className="section-header">
          <HighlightingText text="Project" />
        </h2>
      </div>
    </section>
  );
};

export default Projects;
