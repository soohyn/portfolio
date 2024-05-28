import { FC } from "react";

interface MacDotButton {
  color: string;
}

const MacDotButton: FC<MacDotButton> = ({ color }) => {
  return (
    <div
      className={`w-[20px] h-[20px] rounded-full shadow-inner`}
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default MacDotButton;
