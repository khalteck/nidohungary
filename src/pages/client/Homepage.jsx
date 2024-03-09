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

const Homepage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />

      <main className="text-neutral-900">
        <Section1 />
        <Section2 />
        <Section3 />
        <section className="w-full min-h-[500px] bg-[#082f49] p-[100px] text-white">
          <h2 className="text-[2.5rem]">Donate</h2>
        </section>
        <section className="w-full min-h-[500px] p-[100px]">
          <h2 className="text-[2.5rem]">News</h2>
        </section>{" "}
      </main>

      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Homepage;
