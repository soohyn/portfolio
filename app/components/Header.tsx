import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="bg-white fixed top-0 w-full">
      <div className="layout flex flex-row w-full py-3 global-px items-center">
        <h1 className="highlight text-2xl font-extrabold">Soohyn,</h1>
        <nav>
          <ul className="flex flex-row">
            <li>About</li>
            <li>Tech</li>
            <li>Projects</li>
            <li>Guest</li>
          </ul>
        </nav>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
