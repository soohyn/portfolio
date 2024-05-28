"use client";

import { FC, useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
}

const TypingText: FC<TypingTextProps> = ({ text }) => {
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
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <span>{displayedText}</span>;
};

export default TypingText;
