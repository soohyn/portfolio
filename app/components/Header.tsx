"use client";

import { FC, useEffect, useState } from "react";
import NavItem from "./NavItem";
import { removeAllListeners } from "process";
import Link from "next/link";

export type SectionId = "about" | "tech" | "guest" | "projects";
interface NavItemData {
  label: string;
  id: SectionId;
}

const navItemData: NavItemData[] = [
  { label: "About", id: "about" },
  { label: "Tech", id: "tech" },
  { label: "Projects", id: "projects" },
  { label: "Guest", id: "guest" },
];

const Header: FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  const getScroll = () => {
    const y = window.scrollY;
    setScrollY(y);
  };

  useEffect(() => {
    addEventListener("scroll", getScroll);

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
    <header className="bg-white fixed top-0 w-full">
      <div className="layout flex flex-row w-full py-3 global-px items-center select-none">
        <Link href={"/"}>
          <h1 className="highlight text-2xl font-extrabold">Soohyn,</h1>
        </Link>
        <nav className="px-8">
          <ul className="flex flex-row gap-4">{navItemMap}</ul>
        </nav>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
