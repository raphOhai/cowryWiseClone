import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/hero/hero";
import Header from "./components/header";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5";
import Section6 from "./components/section6";
import Section7 from "./components/section7";

function App() {
  return (
    <>
      <div className="maxWidth stack3 overFlowHidden">
        <Header />
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      </div>
    </>
  );
}

export default App;
