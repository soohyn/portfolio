"use client";
import { FC, useEffect, useState } from "react";
import { SectionId } from "./Header";

interface NavItemProps {
  label: string;
  sectionId: SectionId;
  y: number;
}

const NavItem: FC<NavItemProps> = ({ label, sectionId, y }) => {
  const [selected, setSelected] = useState<boolean>(false);

  const getSectionElementPosition = () => {
    const el = document.querySelector("#" + sectionId + "-section");

    if (!el) return;

    const result = el.getBoundingClientRect();

    return result;
  };

  const onClickNavItem = () => {
    const result = getSectionElementPosition();

    if (!result) return;

    window.scrollBy(0, result.top);
  };

  const getItemSelected = (): void => {
    const result = getSectionElementPosition();

    if (!result) return;

    const condition = window.innerHeight / 2;

    if (result.top > condition || result.bottom < condition) {
      setSelected(false);
      return;
    }

    setSelected(true);
  };

  useEffect(() => {
    getItemSelected();
  }, [y]);

  return (
    <li className={`${selected && "--selected"}`}>
      <button onClick={onClickNavItem}>{label}</button>
    </li>
  );
};

export default NavItem;
