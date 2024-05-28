import Terminal from "@/app/components/Terminal";
import { FC } from "react";

const About: FC = () => {
  return (
    <section
      id="about-section"
      className="flex flex-col py-40 bg-red-100 section-layout"
    >
      <div className="layout flex flex-col items-center justify-center">
        <Terminal />
        <div className="pt-10">
          <h2>안녕하세요 프론트엔드 개발자 조수현 입니다.</h2>
        </div>
      </div>
    </section>
  );
};

export default About;
