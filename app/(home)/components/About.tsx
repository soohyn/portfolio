import Terminal from "@/app/components/Terminal";
import { FC } from "react";

const About: FC = () => {
  return (
    <section
      id="about-section"
      className="flex flex-col py-40  section-layout"
    >
      <div className="layout flex flex-col items-center justify-center">
        <Terminal />
        <div className="pt-20 items-center text-center">
          <h2 className="text-2xl font-extrabold">Front-end Developer</h2>
          <h2 className="text-4xl font-extrabold highlight">Soohyeon Jo</h2>
        </div>
      </div>
    </section>
  );
};

export default About;
