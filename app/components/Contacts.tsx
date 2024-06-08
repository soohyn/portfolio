import { GITHUB_URL, LINKEDIN_URL } from "@/public/config";
import { FC } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Contacts: FC = () => {
  return (
    <div className="flex flex-row gap-3">
      <a target="__blank" href={GITHUB_URL} className="icon-button-style cursor-pointer">
        <SiGithub size={24} />
      </a>
      <a target="__blank" href={LINKEDIN_URL} className="icon-button-style cursor-pointer">
        <SiLinkedin size={24} />
      </a>
    </div>
  );
};

export default Contacts;
