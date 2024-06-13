"use client";

import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface GuestListNavigationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const GuestListNavigation: FC<GuestListNavigationProps> = ({
  page,
  setPage,
}) => {
  const [pageCount, setPageCount] = useState<number>(1);

  const onClickPrevPage = () => {
    setPage((prev) => {
      if (prev > 1) {
        return prev - 1;
      }

      return prev;
    });
  };

  const onClickNextPage = () => {
    setPage((prev) => {
      if (prev < pageCount) {
        return prev + 1;
      }

      return prev;
    });
  };

  const getPageCount = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/guest/page-count`
      );

      setPageCount(response.data.pageCount)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPageCount();
  }, []);

  return (
    <div className="flex flex-row items-center gap-3">
      <button className="icon-button-style" onClick={onClickPrevPage}>
        <MdKeyboardArrowLeft size={32} />
      </button>
      <div className="flex items-center gap-2">
        <span className="text-lg">{page}</span>
        <div className="text-sm text-gray-400">{" / "}</div>
        <span className="text-lg text-gray-400">{pageCount}</span>
      </div>
      <button className="icon-button-style" onClick={onClickNextPage}>
        <MdKeyboardArrowRight size={32} />
      </button>
    </div>
  );
};

export default GuestListNavigation;
