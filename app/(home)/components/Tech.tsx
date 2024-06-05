import HighlightingText from "@/app/components/HighlightingText";
import {
  certificate,
  skills,
  studySkills,
  styleSkill,
  toolSkill,
} from "@/public/config";
import { FC } from "react";

const Tech: FC = () => {
  const skillsMap = skills.map((skill, idx) => {
    return (
      <div
        key={`skill-${skill.name}-${idx}`}
        className="flex flex-col items-center"
      >
        <div className="h-[56px] sm:h-[80px]">
          <img
            src={skill.image}
            alt={skill.name}
            className="h-full object-cover"
          />
        </div>
        {/* <span className="mt-4">{skill.name}</span> */}
      </div>
    );
  });

  return (
    <section id="tech-section" className="bg-gray-50 section-layout">
      <div className="flex flex-col layout items-center">
        <h2 className="section-header">
          <HighlightingText text={"Tech"} />
        </h2>

        <div className="skill-box mt-20">{skillsMap}</div>

        <span className="skill-label">Style</span>
        <div className="skill-box">
          {styleSkill.map((skill, idx) => {
            return <div key={`skill-${skill.name}-${idx}`}>{skill.name}</div>;
          })}
        </div>

        <span className="skill-label">Studying</span>
        <div className="skill-box">
          {studySkills.map((skill, idx) => {
            return <div key={`skill-${skill.name}-${idx}`}>{skill.name}</div>;
          })}
        </div>

        <span className="skill-label">Tool</span>
        <div className="skill-box">
          {toolSkill.map((skill, idx) => {
            return <div key={`skill-${skill.name}-${idx}`}>{skill.name}</div>;
          })}
        </div>

        <span className="skill-label">Certificate</span>
        <div className="skill-box">
          {certificate.map((skill, idx) => {
            return <div key={`skill-${skill.name}-${idx}`}>{skill.name}</div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Tech;
