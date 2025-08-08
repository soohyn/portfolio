import HighlightingText from "@/app/components/HighlightingText";
import Terminal from "@/app/components/Terminal";
import { FC } from "react";

const About: FC = () => {
  return (
    <section id="about-section" className="flex flex-col section-layout">
      <div className="layout flex flex-col items-center justify-center">
        <Terminal />
        <div className="flex flex-col pt-20 items-center text-center">
          <h2 className="text-2xl sm:text-5xl font-extrabold">
            Front-end Developer
          </h2>
          <h2 className="text-4xl sm:text-7xl font-extrabold">
            <HighlightingText text={"Soohyun Jo"} />
          </h2>
          <div className="flex flex-col whitespace-pre-wrap break-words pt-20 sm:text-lg font-semibold gap-4">
            <span>{"안녕하세요! 프론트엔드 개발자 조수현 입니다."}</span>
            <span>
              {`사용자 입장이 되어 생각하는 개발자가 되기 위해 노력합니다.`}
            </span>
            <span>{`프론트엔드 뿐만 아니라,\n다양한 분야에서 실력있는 개발자가 되고 싶어 꾸준히 공부하고 있습니다.`}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
