import HighlightingText from "@/app/components/HighlightingText";
import ProjectCard from "@/app/components/ProjectCard";
import { projects } from "@/public/config";
import { FC } from "react";

const Projects: FC = () => {
  const filteredProjects = projects.filter((item)=>item.isDone)

  return (
    <section id="projects-section" className="section-layout  pattern">
      <div className="flex flex-col layout items-center">
        <h2 className="section-header">
          <HighlightingText text="Project" />
        </h2>

        <ul className="grid sm:grid-cols-2 w-full mt-20 gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-16">
          {filteredProjects.map((p, idx) => {
            return <ProjectCard key={`project-${idx}`} project={p} idx={idx} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
