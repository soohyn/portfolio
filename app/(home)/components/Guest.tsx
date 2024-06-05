"use client";
import GuestForm from "@/app/components/GuestForm";
import GuestList from "@/app/components/GuestList";
import HighlightingText from "@/app/components/HighlightingText";
import { FC, useEffect, useState } from "react";

const dummy: Guest[] = [
  {
    id: "id",
    createdAt: Date.now(),
    updatedAt: Date.now(),
    name: "조구미",
    password: "soo",
    email: "sooheyonjo@gmail.com",
    message: "안녕하세요~!",
  },
  {
    id: "id",
    createdAt: Date.now(),
    updatedAt: Date.now(),
    name: "조굼",
    password: "hyn",
    email: "soo@gmail.com",
    message: "프론트엔드 개발자 화이팅!",
  },
];

const Guest: FC = () => {
  const [guests, setGuests] = useState<Guest[]>([]);

  const prepare = async () => {
    try {
      setGuests(dummy);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    prepare();
  }, []);

  return (
    <section id="guest-section" className="section-layout">
      <div className="flex flex-col layout items-center">
        <h2 className="section-header">
          <HighlightingText text="Guest" />
        </h2>

        <div className="flex flex-col md:flex-row mt-20 gap-12  w-full">
          <GuestForm />
          <GuestList guests={guests} />
        </div>
      </div>
    </section>
  );
};

export default Guest;
