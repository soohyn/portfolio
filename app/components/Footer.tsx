import { FC } from "react";
import Contacts from "./Contacts";

const Footer: FC = () => {
  return (
    <footer className="bg-black text-white w-full pt-16 pb-20">
      <div className="flex flex-col items-center layout">
        <div className="flex flex-col items-center self-center">
          <Contacts />
          <div className="bg-white bg-opacity-30 w-[250px] md:w-[400px] h-[1px] rounded-full mt-10"></div>
        </div>
        <div className="mt-20">
          <span className="text-sm">
            Copyright © 2024 Soohyeon Jo All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
