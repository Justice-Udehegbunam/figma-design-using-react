import Hero from "./sections/Hero";
import { Nav } from "./sections/Nav";
import Services from "./sections/Services";
import { Vector1, element } from "./assets/icons";
import { HealthCare } from "./sections/HealthCare";
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="">
        <div className="absolute pt-[10.5rem]">
          <img src={Vector1} alt="Background" width={"70%"} height={"40%"} />
        </div>
        <div className="relative z-[1]">
          <Services />
        </div>
      </div>
      <HealthCare />
    </>
  );
}

export default App;
