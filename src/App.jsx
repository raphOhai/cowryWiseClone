import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/hero/hero";
import Header from "./components/header";

function App() {
  return (
    <>
      <div className=" maxWidth">
        <Header />
        <Hero />
      </div>
    </>
  );
}

export default App;
