import { useEffect } from "react";
import CommonSection1 from "../../components/common/CommonSection1";
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import Header from "../../components/common/header/Header";
import Footer from "../../components/footer/Footer";
import Section6 from "../../components/home/Section6";
import { FaAngleDoubleDown } from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "../../ScrollToTop";

const BuildALife = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />

      <main>
        <CommonSection1
          tag={"NidoHongary"}
          title={"Build a Life in hungary"}
          body={
            "NIDO Hungary: Building Your Hungarian Dream, Brick by Brick! 🇭🇺🇳🇬"
          }
        />
        <section className="w-full bg-neutral-50 p-5 md:p-[100px] text-[1.2rem] pt-10">
          <div>
            <div className="w-fit px-4 py-1 rounded-md border border-[#082f49] text-[#082f49] text-[.85rem] uppercase tracking-wider mb-4">
              Greetings
            </div>
            <h1 className="text-[1.75rem] md:text-[2.5rem] mb-4 md:mb-10">
              Greetings, ambitious Nigerians in Hungary!
            </h1>
            <div className="w-full flex md:flex-row flex-col gap-5 md:gap-10 md:justify-end relative">
              <div className="w-full md:w-[50%] md:h-[500px] p-10 md:p-[50px] bg-[#082f49] text-white md:text-[1.15rem] md:absolute left-0 top-[50%] md:translate-y-[-50%] flex flex-col shadow-md">
                <h3 className="font-bold text-[1.35rem] mb-5">
                  Nigerians in Hungary!
                </h3>
                <p className="mb-5 tracking-wider">
                  Hungary beckons with its rich history, stunning landscapes,
                  and vibrant culture. But building a life in a new country can
                  be daunting. Worry not, Nigerians in Hungary! NIDO Hungary is
                  here to be your one-stop shop for navigating the exciting (and
                  sometimes tricky) process of settling down in Hungary.
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
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              className="w-fit px-4 py-1 rounded-md border border-[#082f49] text-[#082f49] text-[.85rem] uppercase tracking-wider mb-4"
            >
              Blueprint
            </div>
            <h1
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-[1.75rem] md:text-[2.5rem]"
            >
              This page is your blueprint for Hungarian success!
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              className="mt-5 w-full md:w-[70%]"
            >
              We'll equip you with the essential information and resources you
              need to thrive in various aspects of Hungarian life:
            </p>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 smd:gap-10 mt-10">
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
                className="w-full p-8 border border-[#082f49] flex flex-col gap-4 relative"
              >
                <div className="w-fit absolute -top-3 -left-3">
                  <PiStarFourFill size={"20px"} color="#082f49" />
                </div>
                <h3 className="font-bold text-[1.35rem]">Academic Pursuits:</h3>
                <p>
                  Considering pursuing higher education in Hungary? We'll
                  provide insights into the Hungarian education system,
                  scholarship opportunities, and navigating the application
                  process for Nigerian students.
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
                className="w-full p-8 border border-[#082f49] flex flex-col gap-4 relative"
              >
                <div className="w-fit absolute -top-3 -left-3">
                  <PiStarFourFill size={"20px"} color="#082f49" />
                </div>
                <h3 className="font-bold text-[1.35rem]">
                  Finding Your Place:
                </h3>
                <p>
                  Looking for an apartment or exploring Hungarian neighborhoods?
                  We'll offer tips on finding suitable accommodation,
                  understanding rental agreements, and settling into your new
                  Hungarian home.
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
                className="w-full p-8 border border-[#082f49] flex flex-col gap-4 relative"
              >
                <div className="w-fit absolute -top-3 -left-3">
                  <PiStarFourFill size={"20px"} color="#082f49" />
                </div>
                <h3 className="font-bold text-[1.35rem]">Career Corner:</h3>
                <p>
                  Aspiring to launch your professional journey in Hungary? We'll
                  share guidance on the Hungarian job market, work permit
                  requirements, and strategies for crafting a winning resume
                  that resonates with Hungarian employers.
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
                className="w-full p-8 border border-[#082f49] flex flex-col gap-4 relative"
              >
                <div className="w-fit absolute -top-3 -left-3">
                  <PiStarFourFill size={"20px"} color="#082f49" />
                </div>
                <h3 className="font-bold text-[1.35rem]">Residence Roadmap:</h3>
                <p>
                  Unsure about visa applications, residency permits, or the path
                  to Hungarian citizenship? We'll demystify the legalities and
                  guide you through the process, step-by-step.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[100px]">
            <div className="w-fit px-4 py-1 rounded-md border border-[#082f49] text-[#082f49] text-[.85rem] uppercase tracking-wider mb-4">
              Partner
            </div>
            <h1 className="text-[1.75rem] md:text-[2.5rem] mb-4">
              NIDO Hungary: Your Partner in Progress! 🇳🇬🇭🇺
            </h1>
            <p className="w-full md:w-[70%] mb-10">
              We understand that settling into a new country involves more than
              just paperwork. This page will also connect you with experienced
              Nigerians already thriving in Hungary. They can offer invaluable
              advice and real-life experiences to help you adjust smoothly.
              <br />
              <span className="font-bold">
                Here are some ways to get involved:
              </span>
            </p>
            <div className="w-full flex md:flex-row flex-col gap-5 md:gap-10 md:justify-start relative">
              <div className="w-full md:w-[50%] md:h-[550px] p-10 md:p-[50px] bg-[#082f49] text-white md:text-[1.15rem] md:absolute right-0 top-[50%] md:translate-y-[-50%] flex flex-col shadow-md">
                <p className="mb-5 tracking-wider">
                  <span className="font-bold">
                    Browse our resource library:{" "}
                  </span>{" "}
                  Access downloadable guides, informative articles, and helpful
                  links that cover various aspects of living in Hungary.
                  <br />
                  <br />
                  <span className="font-bold">
                    Connect with our mentors:
                  </span>{" "}
                  Have questions about specific areas like finding an apartment
                  or navigating the job market? Reach out to our network of
                  experienced Nigerians who can provide personalized guidance.
                  <br />
                  <br />
                  <span className="font-bold">
                    Join our online forum:{" "}
                  </span>{" "}
                  Share your experiences, ask questions, and connect with fellow
                  Nigerians who are on the same journey as you.
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
              Together, let's build a strong foundation for your Hungarian
              dreams! 🇳🇬🇭🇺
            </p>
            <p className="font-medium mb-3">
              #NIDOHungary #NigeriansinHungary #BuildaLifeinHungary #Education
              #Living #Working #Residence
            </p>
            <p>
              <span className="font-bold"> P.S.</span> Don't forget to check out
              our other informative pages on NIDO Hungary's website! We cover
              everything from celebrating your Nigerian heritage to experiencing
              the beauty of Nigeria, all while building a supportive community
              in Hungary.
            </p>
          </div>
        </section>

        {/* <Section6 /> */}
      </main>

      <ScrollToTopButton />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default BuildALife;
