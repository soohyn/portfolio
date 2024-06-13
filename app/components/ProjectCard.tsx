import Image from "next/image";
import { FC } from "react";
import Tag from "./Tag";
import BorderTag from "./BorderTag";
import { FiLink } from "react-icons/fi";

interface ProjectCardProps {
  project: Project;
  idx: number;
}

const ProjectCard: FC<ProjectCardProps> = ({ idx, project }) => {
  return (
    <li
      className={`bg-white flex flex-col w-full bg-white rounded-sm inner-shadow transition-all cursor-pointer hover:opacity-60 active:scale-[98%] relative postit-shadow select-none`}
    >
      <div className="flex w-full h-[160px] sm:h-[200px] relative">
        <Image
          fill
          sizes="100%"
          priority={true}
          className="w-full h-full object-cover select-none"
          src={project.thumbnail}
          alt={project.name}
          draggable={false}
        />
      </div>
      <div className="flex flex-col p-4 gap-2">
        <div className="flex flex-row items-center gap-2">
          <span className="text-lg font-bold">{project.name}</span>
          <Tag
            text={`${project.isTeam ? "팀" : "개인"}`}
            bgTheme={`${!project.isTeam ? "bg-gray-200" : "bg-amber-200"}`}
            textTheme={`${
              !project.isTeam ? "text-gray-600" : "text-amber-600"
            }`}
          />
        </div>
        <span>{project.description}</span>
        <span className="text-sm text-gray-500">{project.deploy}</span>
        <ul className="flex flex-row flex-wrap gap-2">
          {project.skills.map((v, idx) => {
            return <BorderTag key={`${project.name}-${idx}`} text={v} />;
          })}
        </ul>
      </div>
      <div className=" w-[120px] h-[40px] absolute -top-5 left-[38%] bg-amber-200 shadow-sm shadow-inner opacity-50"></div>
    </li>
  );
};

export default ProjectCard;
