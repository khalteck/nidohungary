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

const Heritage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />

      <main>
        <CommonSection1
          tag={"NidoHongary"}
          title={"Celebrate Your heritage in Hungary"}
          body={"NIDO Hungary: Let Your Nigerian Colors Shine in Hungary! 🇳🇬🇭🇺"}
        />
        <section className="w-full bg-neutral-50 p-5 md:p-[100px] text-[1.2rem] pt-10">
          <div>
            <div className="w-fit px-4 py-1 rounded-md border border-[#082f49] text-[#082f49] text-[.85rem] uppercase tracking-wider mb-4">
              Heritage
            </div>
            <h1 className="text-[1.75rem] md:text-[2.5rem] mb-4 md:mb-10">
              Greetings, proud Nigerians in Hungary!
            </h1>
            <div className="w-full flex md:flex-row flex-col gap-5 md:gap-10 md:justify-end relative">
              <div className="w-full md:w-[50%] md:h-[500px] p-10 md:p-[50px] bg-[#082f49] text-white md:text-[1.15rem] md:absolute left-0 top-[50%] md:translate-y-[-50%] flex flex-col shadow-md">
                <h3 className="font-bold text-[1.35rem] mb-5">
                  Nigerian heritage
                </h3>
                <p className="mb-5 tracking-wider">
                  Heritage is more than just the past; it's the vibrant thread
                  woven into the tapestry of who we are. Here at NIDO Hungary,
                  we celebrate the beauty and richness of Nigerian heritage,
                  empowering you to share it with the world – right here in
                  Hungary!
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
              Our roots
            </div>
            <h1
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-[1.75rem] md:text-[2.5rem]"
            >
              Embrace Your Roots, Embrace Your Future:
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              className="mt-5 w-full md:w-[70%]"
            >
              This page is your platform to explore and express the many facets
              of your Nigerian heritage. We'll provide a platform to:
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
                <h3 className="font-bold text-[1.35rem]">
                  Uncover Hidden Gems:{" "}
                </h3>
                <p>
                  Delve deeper into Nigeria's fascinating history, diverse
                  traditions, and captivating folklore. We'll share stories,
                  articles, and resources that rekindle your connection to the
                  motherland.
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
                  Express Yourself Creatively:
                </h3>
                <p>
                  Let your artistic spirit flow! Share your Nigerian-inspired
                  music, dance, poetry, or visual art. This page is your stage
                  to showcase your talents and celebrate Nigerian creativity.
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
                  Educate and Inspire:
                </h3>
                <p>
                  Have a unique Nigerian tradition you'd love to share with
                  Hungary? We can help you organize cultural workshops,
                  presentations, or even small-scale festivals. Let's bridge the
                  cultural gap and share the beauty of Nigeria with the
                  Hungarian community.
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
                  Keep Languages Alive:
                </h3>
                <p>
                  Language is a cornerstone of heritage. Practice your Yoruba,
                  Igbo, Hausa, or any other Nigerian language you speak! We can
                  facilitate language exchange programs or conversation groups
                  to keep these vibrant languages thriving.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[100px]">
            <div className="w-fit px-4 py-1 rounded-md border border-[#082f49] text-[#082f49] text-[.85rem] uppercase tracking-wider mb-4">
              celebration
            </div>
            <h1 className="text-[1.75rem] md:text-[2.5rem] mb-4">
              Together, We Create a Mosaic of Heritage! 🇳🇬🇭🇺
            </h1>
            <p className="w-full md:w-[70%] mb-10">
              NIDO Hungary believes that celebrating your heritage strengthens
              your sense of belonging, both within the Nigerian community and in
              your adopted Hungarian home. So, don't be shy! Share your stories,
              showcase your talents, and let's paint Hungary with the vibrant
              colors of Nigerian heritage.
              <br />
              <span className="font-bold">
                Here are some ways to get involved:
              </span>
            </p>
            <div className="w-full flex md:flex-row flex-col gap-5 md:gap-10 md:justify-start relative">
              <div className="w-full md:w-[50%] md:h-[550px] p-10 md:p-[50px] bg-[#082f49] text-white md:text-[1.15rem] md:absolute right-0 top-[50%] md:translate-y-[-50%] flex flex-col shadow-md">
                <p className="mb-5 tracking-wider">
                  <span className="font-bold">
                    Participate in our heritage discussions:{" "}
                  </span>{" "}
                  Share your knowledge about Nigerian traditions, folktales, or
                  historical figures. Let's learn from each other!
                  <br />
                  <br />
                  <span className="font-bold">
                    Organize a heritage showcase:
                  </span>{" "}
                  Do you have a passion for Nigerian music, dance, or cuisine?
                  Organize a workshop or event to share it with the community.
                  <br />
                  <br />
                  <span className="font-bold">
                    Contribute cultural content:
                  </span>
                  Have you written a poem in your native Nigerian language?
                  Share it on our platform and inspire others to do the same.
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
              Together, let's make NIDO Hungary a vibrant celebration of
              Nigerian heritage in Hungary! 🇳🇬🇭🇺
            </p>
            <p className="font-medium">
              #NIDOHungary #NigeriansinHungary #HeritageCelebration #Culture
              #Community #Expression #Education
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

export default Heritage;
