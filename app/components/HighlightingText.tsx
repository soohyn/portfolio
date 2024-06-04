import { FC } from "react";

interface HighlightingTextProps {
  text: string;
}

const HighlightingText: FC<HighlightingTextProps> = ({ text }) => {
  return (
    <div className='relative'>
      <span className="absolute top-0 left-0 z-10">{text}</span>
      <span className=" text-transparent">{text}</span>
      <div className="bg-yellow-200 absolute top-3 right-0 bottom-3 left-0"></div>
    </div>
  );
};

export default HighlightingText;
