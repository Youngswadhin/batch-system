import { useContext, useState } from "react";
import Advantages from "./components/Advantages/Advantages";
import Download from "./components/Download/Download";
import Faq from "./components/FAQ/Faq";
import Features from "./components/Features/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  return (
    <div
      className=" bg-slate-50 dark:bg-slate-950 w-full  lg:overflow-auto overflow-hidden
     "
    >
      <div className="lg:w-[1090px] w-[425px] flex justify-center flex-col  mx-auto bg-slate-50  dark:bg-slate-950">
        <Navbar theme={theme} setTheme={setTheme} />
        <Hero />
        <Features />
        <Advantages />
        <Testimonials />
        <Faq />
        <Download />
        <Footer />
      </div>
    </div>
  );
}

export default App;
