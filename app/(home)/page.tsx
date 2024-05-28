import { NextPage } from "next";
import About from "./components/About";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Guest from "./components/Guest";

const Home: NextPage = () => {
  return (
    <main>
      <About />
      <Tech />
      <Projects />
      <Guest />
    </main>
  );
};

export default Home;
