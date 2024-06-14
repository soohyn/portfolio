import { GITHUB_URL, GMAIL_ADDR, LINKEDIN_URL } from "@/public/config";
import { FC } from "react";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

const Contacts: FC = () => {
  return (
    <div className="flex flex-row gap-3">
      <a target="_blank" href={GITHUB_URL} className="icon-button-style cursor-pointer">
        <SiGithub size={24} />
      </a>
      <a target="_blank" href={LINKEDIN_URL} className="icon-button-style cursor-pointer">
        <SiLinkedin size={24} />
      </a>
      <a target="_blank" href={`mailto:${GMAIL_ADDR}`} className="icon-button-style cursor-pointer">
        <SiGmail size={24} />
      </a>
    </div>
  );
};

export default Contacts;
