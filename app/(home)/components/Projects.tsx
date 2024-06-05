import HighlightingText from "@/app/components/HighlightingText";
import ProjectCard from "@/app/components/ProjectCard";
import { projects } from "@/public/config";
import { FC } from "react";

const Projects: FC = () => {
  return (
    <section id="projects-section" className="section-layout bg-gray-50">
      <div className="flex flex-col layout items-center">
        <h2 className="section-header">
          <HighlightingText text="Project" />
        </h2>

        <ul className="grid md:grid-cols-2 w-full mt-20 gap-x-8 gap-y-16">
          {projects.map((p, idx) => {
            return <ProjectCard key={`project-${idx}`} project={p} idx={idx} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
