"use client";

import HighlightingText from "@/app/components/HighlightingText";
import { FC } from "react";

const Guest: FC = () => {
  const onSubmitForm = async () => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id="guest-section" className="bg-amber-50/20 section-layout">
      <div className="flex flex-col layout items-center">
        <h2 className="section-header">
          <HighlightingText text="Guest" />
        </h2>

        <div className="flex flex-col sm:flex-row mt-20 gap-10 w-full">
          <form className="flex flex-col p-10 bg-amber-100/50 rounded-lg backdrop-blur-xl gap-4 w-full guest-form-inner-shadow ">
            <input name="name" placeholder="name" className="" type="text" />
            <input name="email" placeholder="email" className="" type="text" />
            <input
              name="password"
              placeholder="password"
              type="password"
              className=""
            />
            <textarea className=" resize-none" placeholder="message" />
            <input type="button" value="submit" onSubmit={onSubmitForm} />
          </form>

          <ul className="flex flex-col w-full">
            <span className="text-2xl self-center">🌼 🌻 🌼 🌻 🌼</span>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Guest;
