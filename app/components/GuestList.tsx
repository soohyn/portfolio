import { FC } from "react";
import GuestItem from "./GuestItem";

interface GuestList {
  guests: Guest[];
}

const GuestList: FC<GuestList> = ({ guests }) => {
  return (
    <ul className="flex flex-col w-full gap-8">
      {guests.length <= 0 ? (
        <span className="text-2xl self-center mt-20">🌼 🌻 🌼 🌻 🌼</span>
      ) : (
        guests.map((g, idx) => {
          return <GuestItem key={`guest-${idx}`} guest={g} />;
        })
      )}
    </ul>
  );
};

export default GuestList;
