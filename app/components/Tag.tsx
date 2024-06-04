"use client";

import { FC } from "react";

interface Tag {
  text: string;
  bgTheme: string;
  textTheme: string;
}

const Tag: FC<Tag> = ({ text, bgTheme, textTheme }) => {
  return (
    <div className={`py-[2px] px-[8px] rounded-xl ${bgTheme}`}>
      <span className={`text-xs ${textTheme} line-clamp-1`}>{text}</span>
    </div>
  );
};

export default Tag;
