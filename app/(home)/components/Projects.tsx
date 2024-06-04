import HighlightingText from "@/app/components/HighlightingText";
import Tag from "@/app/components/Tag";
import { projects } from "@/public/config";
import Image from "next/image";
import { FC } from "react";

const Projects: FC = () => {
  return (
    <section id="projects-section" className="section-layout bg-gray-50">
      <div className="flex flex-col layout items-center">
        <h2 className="section-header">
          <HighlightingText text="Project" />
        </h2>

        <ul className="flex flex-row flex-wrap w-full mt-20">
          {projects.map((p, idx) => {
            return (
              <li
                key={`project-${idx}`}
                className={`${idx % 2 === 0 ? "md:pr-4" : "md:pl-4"} pb-8  w-full md:w-[50%]`}
              >
                <div className="flex flex-col w-full overflow-hidden rounded-md bg-white inner-shadow">
                  <div className="flex w-full h-[120px] relative bg-amber-100">
                    <Image
                      fill
                      className="w-full h-full object-cover"
                      objectFit="cover"
                      src={p.thumbnail}
                      alt={p.name}
                    />
                  </div>
                  <div className="flex flex-col p-4 gap-2">
                    <div className="flex flex-row items-center gap-2">
                      <span className="text-lg font-bold">{p.name}</span>
                      <Tag
                        text={`${p.isTeam ? "팀" : "개인"}`}
                        bgTheme={`${
                          !p.isTeam ? "bg-gray-200" : "bg-amber-200"
                        }`}
                        textTheme={`${
                          !p.isTeam ? "text-gray-600" : "text-amber-600"
                        }`}
                      />
                    </div>
                    <span>{p.description}</span>
                    <span>{p.deploy}</span>
                    <ul className="flex flex-row gap-2">
                      {p.skills.map((v, idx) => {
                        return <li key={`${p.name}-${idx}`}>{v}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
