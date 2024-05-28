import { NextPage } from "next";
import About from "./components/About";
import Tech from "./components/Tech";
import Project from "./components/Project";
import Guest from "./components/Guest";

const Home: NextPage = () => {
  return (
    <main>
      <About />
      <Tech />
      <Project />
      <Guest />
    </main>
  );
};

export default Home;
