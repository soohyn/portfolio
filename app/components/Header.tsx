"use client";

import { FC, useEffect, useState } from "react";
import NavItem from "./NavItem";
import { removeAllListeners } from "process";
import Link from "next/link";
import ProgressBar from "./ProgressBar";

export type SectionId = "about" | "tech" | "career" | "guest" | "projects";
interface NavItemData {
  label: string;
  id: SectionId;
}

const navItemData: NavItemData[] = [
  { label: "About", id: "about" },
  { label: "Tech", id: "tech" },
  { label: "Career", id: "career" },
  { label: "Projects", id: "projects" },
  { label: "Guest", id: "guest" },
];

const Header: FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [isTop, setIsTop] = useState<boolean>(true);

  const getScroll = () => {
    const y = window.scrollY;
    setScrollY(y);
  };

  const checkIsTop = () => {
    if (scrollY < window.innerHeight) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  };

  const setBackgroundColor = () => {
    const html = document.querySelector("html") as HTMLElement;

    if (!html) return;

    if (isTop) {
      html.style.backgroundColor = "#fff";
    } else {
      html.style.backgroundColor = "#000";
    }
  };

  useEffect(() => {
    setBackgroundColor();
  }, [isTop]);

  useEffect(() => {
    checkIsTop();
  }, [scrollY]);

  useEffect(() => {
    window.addEventListener("scroll", getScroll);

    return () => {
      removeAllListeners();
    };
  }, []);

  const navItemMap = navItemData.map((data, idx) => {
    return (
      <NavItem
        key={data.id}
        label={data.label}
        sectionId={data.id}
        y={scrollY}
      />
    );
  });

  return (
    <header
      className={`backdrop-blur-md fixed top-0 w-full z-20 transition-all ${
        scrollY > 0 && "header-inner-shadow"
      }`}
    >
      <ProgressBar y={scrollY} />
      <div className="layout flex flex-row py-3 items-center select-none">
        <Link href={"/"}>
          <h1 className="text-xl sm:text-2xl font-extrabold">Soohyn,</h1>
        </Link>
        <nav className="px-7">
          <ul className="flex flex-row gap-4 invisible sm:visible">
            {navItemMap}
          </ul>
        </nav>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
