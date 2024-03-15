import { useEffect } from "react";
import Header from "../../components/common/header/Header";
import Loader from "../../components/common/Loader";
import Footer from "../../components/footer/Footer";
import Section1 from "../../components/home/Section1";
import Section2 from "../../components/home/Section2";
import Section3 from "../../components/home/Section3";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import Section4 from "../../components/home/Section4";
import Section5 from "../../components/home/Section5";
import Section6 from "../../components/home/Section6";
import { useAppContext } from "../../contexts/AppContext";

const Homepage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const href = window.location.href;

  useEffect(() => {
    if (
      href?.includes("news") ||
      href?.includes("community") ||
      href?.includes("donate")
    ) {
      const sectionSplit = href?.split("#");
      const sectionName = sectionSplit[sectionSplit?.length - 1];
      const section = document.getElementById(sectionName);
      section.scrollIntoView({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Header />

      <main className="text-neutral-900 text-[1.2rem] ">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </main>

      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Homepage;
