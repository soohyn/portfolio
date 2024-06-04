import { FC } from "react";

interface HighlightingTextProps {
  text: string;
}

const HighlightingText: FC<HighlightingTextProps> = ({ text }) => {
  return (
    <div className="relative">
      <span className="absolute top-0 left-0 z-10">{text}</span>
      <span className=" text-transparent">{text}</span>
      <div className="highlight-pen -left-2  opacity-60"></div>
      <div className="highlight-pen w-[8px]  opacity-85"></div>
    </div>
  );
};

export default HighlightingText;
