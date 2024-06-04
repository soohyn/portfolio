"use client";

import { FC, useEffect, useState } from "react";

interface ProgressBarProps {
  y: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ y }) => {
  const [per, SetPer] = useState<number>(0);

  const getProgressBarPercent = () => {
    const mainEl = document.querySelector("main");

    if (!mainEl) return;

    const mainElHeight = mainEl.getBoundingClientRect().height;

    const result = (y / (mainElHeight - window.innerHeight)) * 100;
    SetPer(result);
  };

  useEffect(() => {
    getProgressBarPercent();
  }, [y]);

  return (
    <div className="bg-amber-100 w-full h-2">
      <div
        className={`bg-amber-400 h-2 transition-all duration-0 ease-in-out`}
        style={{ width: `${per}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
