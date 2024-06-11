"use client";

import GuestForm from "@/app/components/GuestForm";
import GuestList from "@/app/components/GuestList";
import HighlightingText from "@/app/components/HighlightingText";
import axios from "axios";
import { FC, useEffect, useState } from "react";


const Guest: FC = () => {
  const [guests, setGuests] = useState<Guest[]>([]);

  const prepare = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/guest?page=1`)

      console.log(response)
      setGuests(response.data.guests ?? []);
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

        <div className="flex flex-col md:flex-row mt-20 gap-12  w-full md:items-start">
          <GuestForm setGuests={setGuests} />
          <GuestList guests={guests} setGuests={setGuests} />
        </div>
      </div>
    </section>
  );
};

export default Guest;
