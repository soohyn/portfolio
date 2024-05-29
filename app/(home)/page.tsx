import { NextPage } from "next";
import About from "./components/About";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Guest from "./components/Guest";
import Career from "./components/Career";

const Home: NextPage = () => {
  return (
    <main>
      <About />
      <Tech />
      <Career />
      <Projects />
      <Guest />
    </main>
  );
};

export default Home;
