import { FC } from "react";
import MacDotButton from "./MacDotButton";
import TypingText from "./TypingText";

const Terminal: FC = () => {
  return (
    <div className="flex flex-col bg-[#171717] rounded-xl overflow-hidden shadow-2xl  w-full h-[240px] sm:max-w-[500px] sm:h-[300px]">
      <div className="flex flex-row bg-[#2c302d] w-full h-[40px] gap-3 items-center px-3 shadow-inner">
        <MacDotButton color={"#fb4646"} />
        <MacDotButton color={"#fcb024"} />
        <MacDotButton color={"#28c132"} />
      </div>
      <div className="p-2 text-white text-3xl h-full select-none">
        <span className="text-[#67ed1f] font-bold mr-2">{">"}</span>
        <TypingText text="Hello, World!" />
      </div>
    </div>
  );
};

export default Terminal;
