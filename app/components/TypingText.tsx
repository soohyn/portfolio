"use client";

import { FC, useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  intervalMs:number;
}

const TypingText: FC<TypingTextProps> = ({ text, intervalMs }) => {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    let count = text.length;

    const interval = setInterval(() => {
      if (count <= 0) {
        clearInterval(interval);
        return;
      }

      setDisplayedText((prev) => {
        return text.slice(0, prev.length + 1);
      });

      count--;
    }, intervalMs);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <span>{displayedText}</span>;
};

export default TypingText;
