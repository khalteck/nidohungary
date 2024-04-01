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

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />

      <main>
        <CommonSection1
          tag={"NidoHongary"}
          title={"Experience the Beauty of Nigeria"}
          body={
            "NIDO Hungary: A Glimpse into the Enchanting Embrace of Nigeria! 🇳🇬"
          }
        />
        <section className="w-full bg-neutral-50 p-5 md:p-[100px] text-[1.2rem] pt-10">
          <div>
            <div className="w-fit px-4 py-1 rounded-md border border-[#082f49] text-[#082f49] text-[.85rem] uppercase tracking-wider mb-4">
              motherland
            </div>
            <h1 className="text-[1.75rem] md:text-[2.5rem] mb-4 md:mb-10">
              Greetings, ambitious Nigerians!
            </h1>
            <div className="w-full flex md:flex-row flex-col gap-5 md:gap-10 md:justify-end relative">
              <div className="w-full md:w-[50%] md:h-[500px] p-10 md:p-[50px] bg-[#082f49] text-white md:text-[1.15rem] md:absolute left-0 top-[50%] md:translate-y-[-50%] flex flex-col shadow-md">
                <h3 className="font-bold text-[1.35rem] mb-5">
                  Explore the wonders Nigeria holds
                </h3>
                <p className="mb-5 tracking-wider">
                  Calling all Nigerians in Hungary! Feeling a pang of nostalgia
                  for the motherland? Or perhaps you're curious to explore the
                  wonders Nigeria holds? Well, look no further! This page is
                  your portal to experiencing the breathtaking beauty and
                  captivating spirit of Nigeria.
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
              Adventure
            </div>
            <h1
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-[1.75rem] md:text-[2.5rem]"
            >
              Here's a taste of what awaits you on this virtual Nigerian
              adventure:
            </h1>
            {/* <p
              data-aos="fade-up"
              data-aos-duration="800"
              className="mt-5 w-full md:w-[70%]"
            >
              We'll equip you with the essential information and resources you
              need to thrive in various aspects of Hungarian life:
            </p> */}
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
                <h3 className="font-bold text-[1.35rem]">
                  Natural Splendor Unveiled:{" "}
                </h3>
                <p>
                  From the majestic Jos Plateau to the pristine beaches of
                  Lagos, Nigeria boasts a diverse landscape that will leave you
                  breathless. We'll take you on a visual journey through
                  cascading waterfalls, lush rainforests, and awe-inspiring
                  mountain ranges.
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
                  Cultural Tapestry Explored:
                </h3>
                <p>
                  Nigeria is a vibrant kaleidoscope of ethnicities and
                  traditions. We'll delve into the rich cultural heritage of
                  different regions, showcasing mesmerizing festivals, artistic
                  expressions, and the warmth of Nigerian hospitality.
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
                  Culinary Delights Unveiled:
                </h3>
                <p>
                  Is your mouth watering yet? We'll tantalize your taste buds
                  with the explosion of flavors that defines Nigerian cuisine.
                  From the aromatic jollof rice to the spicy pepper soup, get
                  ready to embark on a delicious culinary exploration.
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
                  Modern Marvels Highlighted:
                </h3>
                <p>
                  Nigeria isn't just about its historical beauty; it's a nation
                  on the rise. We'll showcase the country's thriving cities,
                  architectural marvels, and innovative spirit, proving that
                  Nigeria is a force to be reckoned with.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[100px]">
            <div className="w-fit px-4 py-1 rounded-md border border-[#082f49] text-[#082f49] text-[.85rem] uppercase tracking-wider mb-4">
              Stay Connected
            </div>
            <h1 className="text-[1.75rem] md:text-[2.5rem] mb-4">
              More Than Just a Country, It's an Experience! 🇳🇬
            </h1>
            <p className="w-full md:w-[70%] mb-10">
              NIDO Hungary wants to keep you connected to the beauty and
              vibrancy of Nigeria, even while you're abroad. So, bookmark this
              page, share it with your fellow Nigerians, and let's celebrate the
              magic of our motherland together!
              <br />
              <span className="font-bold">
                Here are some ways to get involved:
              </span>
            </p>
            <div className="w-full flex md:flex-row flex-col gap-5 md:gap-10 md:justify-start relative">
              <div className="w-full md:w-[50%] md:h-[550px] p-10 md:p-[50px] bg-[#082f49] text-white md:text-[1.15rem] md:absolute right-0 top-[50%] md:translate-y-[-50%] flex flex-col shadow-md">
                <p className="mb-5 tracking-wider">
                  <span className="font-bold">
                    Share your Nigerian experiences!
                  </span>{" "}
                  Have you traveled to a breathtaking part of Nigeria? We'd love
                  to see your photos and hear your stories in the comments
                  below.
                  <br />
                  <br />
                  <span className="font-bold">Recommend hidden gems!</span> Do
                  you know of a must-try Nigerian dish or a cultural experience
                  not to be missed? Share your recommendations and inspire
                  others.
                  <br />
                  <br />
                  <span className="font-bold">Let's reminisce!</span> What
                  aspects of Nigerian life do you miss the most? Share your
                  memories and connect with others who feel the same way.
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
              NIDO Hungary: Where Hungary meets the magic of Nigeria! 🇭🇺🇳🇬
            </p>
            <p className="font-medium mb-3">
              #NIDOHungary #NigeriansinHungary #ExperienceNigeria #Culture
              #Nature #Food #Travel
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

export default Experience;
