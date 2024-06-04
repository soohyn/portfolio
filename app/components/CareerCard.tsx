"use client";

import { FC } from "react";
import { formatDate } from "../utils";
import Tag from "./Tag";
import Dot from "./Dot";

interface CareerCardProps {
  career: Career;
  isLast: boolean;
  idx: number;
}

const CareerCard: FC<CareerCardProps> = ({ career, isLast, idx }) => {
  const skillsMap = career.skills.map((s, sIdx) => {
    return (
      <div key={`${idx}-skill-${sIdx}`} className="flex px-2 py-1 border-2 text-xs text-gray-500 rounded-full">
        <span key={`${idx}-${sIdx}`}>{s}</span>
      </div>
    );
  });

  const jobsMap = career.jobs.map((j, jIdx) => {
    const isLast = jIdx >= career.jobs.length - 1

    return (
      <div key={`${idx}-job-${jIdx}`} className="text-gray-500">
        <span key={`${idx}-${jIdx}`} >{j}{!isLast &&', '}</span>
      </div>
    );
  });

  return (
    <div className="flex flex-row">
      <div className="flex flex-col items-center">
        <div
          className={` ${
            isLast ? "bg-amber-300" : "bg-gray-200"
          } min-w-6 min-h-6 rounded-full`}
        ></div>
        {!isLast && <div className="bg-gray-200 h-full w-1"></div>}
      </div>

      <div className="flex flex-col pl-10 pb-20 gap-2">
        <span className="text-gray-500 text-sm">
          {formatDate(career.startDate)} - {formatDate(career.endDate)}
        </span>

        <div className="flex flex-row gap-2 items-center">
          <span className="font-semibold text-lg">{career.maskingName}</span>
          <Tag
            text={career.level}
            bgTheme={career.level === "계약직" ? "bg-gray-200" : "bg-amber-200"}
            textTheme={career.level === "계약직" ? "text-gray-600" : "text-amber-600"}
          />
        </div>

        <span className="flex flex-row items-center">
          <span>{career.team}</span>
          <Dot />
          <span>{career.position}</span>
        </span>
        <ul className="flex flex-wrap text-gray-500 gap-1">{jobsMap}</ul>
        <ul className="flex flex-wrap gap-1">{skillsMap}</ul>
      </div>
    </div>
  );
};

export default CareerCard;
