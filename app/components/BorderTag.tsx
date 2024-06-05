import { FC } from "react";

interface BorderTagProps {
  text: string;
}

const BorderTag: FC<BorderTagProps> = ({ text }) => {
  return (
    <div className="flex px-2 py-1 border-2 text-xs text-gray-500 rounded-full">
      <span>{text}</span>
    </div>
  );
};

export default BorderTag;
