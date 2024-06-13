"use client";

import GuestForm from "@/app/components/GuestForm";
import GuestList from "@/app/components/GuestList";
import GuestListNavigation from "@/app/components/GuestListNavigation";
import HighlightingText from "@/app/components/HighlightingText";
import axios from "axios";
import { FC, useEffect, useState } from "react";

const Guest: FC = () => {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [page, setPage] = useState<number>(1);

  const prepare = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/guest?page=${page}`
      );

      console.log(response);
      setGuests(response.data.guests ?? []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    prepare();
  }, [page]);

  return (
    <section id="guest-section" className="section-layout">
      <div className="flex flex-col layout items-center">
        <h2 className="section-header">
          <HighlightingText text="Guest" />
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 mt-20 gap-12  w-full md:items-start">
          <GuestForm setGuests={setGuests} />
          <div className="flex flex-col items-center w-full">
            {guests.length <= 0 ? (
              <span className="text-2xl self-center mt-20">🌼 🌻 🌼 🌻 🌼</span>
            ) : (
              <>
                <GuestList
                  guests={guests}
                  setGuests={setGuests}
                  prepare={prepare}
                />
                <GuestListNavigation guests={guests} page={page} setPage={setPage} />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guest;
