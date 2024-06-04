import GuestForm from "@/app/components/GuestForm";
import HighlightingText from "@/app/components/HighlightingText";
import { FC } from "react";

const Guest: FC = () => {


  return (
    <section id="guest-section" className="bg-amber-50/20 section-layout">
      <div className="flex flex-col layout items-center">
        <h2 className="section-header">
          <HighlightingText text="Guest" />
        </h2>

        <div className="flex flex-col sm:flex-row mt-20 gap-10 w-full">
         <GuestForm />

          <ul className="flex flex-col w-full">
            <span className="text-2xl self-center">🌼 🌻 🌼 🌻 🌼</span>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Guest;
