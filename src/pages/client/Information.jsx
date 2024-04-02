import { FaAngleDoubleDown } from "react-icons/fa";
import CommonSection1 from "../../components/common/CommonSection1";
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import Header from "../../components/common/header/Header";
import Footer from "../../components/footer/Footer";
import Section6 from "../../components/home/Section6";
import { PiStarFourFill } from "react-icons/pi";

const Information = () => {
  return (
    <>
      <Header />

      <main>
        <CommonSection1
          tag={"NidoHongary"}
          title={"Information"}
          body={
            "Navigating Hungary: Your Essential Guide from NIDO Hungary! 🇭🇺🇳🇬"
          }
        />
        <section className="w-full bg-neutral-50 p-5 md:p-[100px] text-[1.2rem]">
          <div>
            <h1 className="text-[1.75rem] md:text-[2.5rem]">
              Greetings, Nigerians in Hungary!
            </h1>
            <p className="mt-5">
              Feeling a little lost navigating the Hungarian system? Don't
              worry, NIDO Hungary is here to be your guiding light!
              <br />
              <br />
              This page is your one-stop shop for all the essential information
              you need to thrive in Hungary. We'll be tackling the nitty-gritty
              details and answering your burning questions, so you can focus on
              settling in and making the most of your Hungarian experience.
            </p>
          </div>
          <div className="mt-10 md:mt-[100px]">
            <div className="w-fit px-4 py-1 rounded-md border border-[#082f49] text-[#082f49] text-[.85rem] uppercase tracking-wider mb-4">
              Information
            </div>
            <h1 className="text-[1.75rem] md:text-[2.5rem] mb-4 md:mb-10">
              Here's a sneak peek of what you'll find:
            </h1>
            <div className="w-full flex md:flex-row flex-col gap-5 md:gap-10 md:justify-end relative">
              <div className="w-full md:w-[50%] md:h-[550px] p-10 md:p-[50px] bg-[#082f49] text-white text-[1rem] md:absolute left-0 top-[50%] md:translate-y-[-50%] flex flex-col shadow-md">
                <p className="mb-5">
                  <span className="font-bold">
                    Hungarian Immigration Law Updates:
                  </span>{" "}
                  We'll keep you informed about the latest changes and
                  regulations regarding visas, work permits, and residency in
                  Hungary. No more deciphering complex legalese – we'll break it
                  down into clear, understandable terms.
                  <br />
                  <br />
                  <span className="font-bold">
                    Passport Renewal Process:
                  </span>{" "}
                  Expiring passport causing a panic? Relax! We'll walk you
                  through the entire Nigerian passport renewal process in
                  Hungary, step-by-step. From required documents to timelines,
                  we'll ensure a smooth renewal experience.
                  <br />
                  <br />
                  <span className="font-bold">Beyond the Basics:</span> We
                  understand that settling into a new country involves more than
                  just paperwork. We'll provide helpful tips on everything from
                  finding accommodation and healthcare to navigating public
                  transportation and cultural nuances.
                </p>
                <div className="mt-auto p-5 border-white/20 border w-fit">
                  <FaAngleDoubleDown size={"30px"} color="white" />
                </div>
              </div>
              <img
                alt=""
                src="/images/slide1.jpg"
                className="w-full md:w-[60%] h-auto"
              />
            </div>
          </div>

          <div className="mt-[100px]">
            <p className="mt-6 mb-3">
              NIDO Hungary is your partner in progress!
            </p>

            <p>
              We're here to empower you with the knowledge and resources you
              need to feel confident and secure in Hungary. So, bookmark this
              page, share it with your fellow Nigerians, and let's build a
              community that thrives together!
            </p>

            <p className="font-medium my-3">
              #NIDOHungary #NigeriansinHungary #InformationHub #Immigration
              #PassportRenewal #Support
            </p>

            <p>
              <span className="font-bold">P.S</span>. Do you have any burning
              questions about living in Hungary? Let us know in the comments
              below, and we'll do our best to find the answer for you!
            </p>
          </div>
        </section>

        <Section6 />
      </main>

      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Information;
