import { FC } from "react";

interface Tag {
  text: string;
  theme: 'amber' | 'gray' | 'rose'
}

const Tag: FC<Tag> = ({ text, theme }) => {
  return (
    <div className={`py-[2px] px-[8px] bg-${theme}-200 rounded-xl`}>
      <span className={`text-sm text-${theme}-800`}>{text}</span>
    </div>
  );
};

export default Tag;
