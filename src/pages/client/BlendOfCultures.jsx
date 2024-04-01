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

const BlendOfCultures = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />

      <main>
        <CommonSection1
          tag={"NidoHongary"}
          title={"A Blend Of Cultures"}
          body={
            "NIDO Hungary: A Fusion of Flavors - Where Nigeria Meets Hungary! 🇭🇺🇳🇬"
          }
        />
        <section className="w-full bg-neutral-50 p-5 md:p-[100px] text-[1.2rem] pt-10">
          <div>
            <div className="w-fit px-4 py-1 rounded-md border border-[#082f49] text-[#082f49] text-[.85rem] uppercase tracking-wider mb-4">
              Cultures
            </div>
            <h1 className="text-[1.75rem] md:text-[2.5rem] mb-4 md:mb-10">
              Calling all cultural enthusiasts in NIDO Hungary!
            </h1>
            <div className="w-full flex md:flex-row flex-col gap-5 md:gap-10 md:justify-end relative">
              <div className="w-full md:w-[50%] md:h-[500px] p-10 md:p-[50px] bg-[#082f49] text-white md:text-[1.15rem] md:absolute left-0 top-[50%] md:translate-y-[-50%] flex flex-col shadow-md">
                <h3 className="font-bold text-[1.35rem] mb-5">
                  Hungary and Nigeria
                </h3>
                <p className="mb-5 tracking-wider">
                  Hungary and Nigeria – two vibrant nations, each boasting a
                  rich tapestry of traditions, languages, and customs. But have
                  you ever considered the fascinating ways these cultures can
                  blend and create something truly unique? This page is your
                  gateway to exploring the exciting fusion that occurs when
                  Nigerian and Hungarian cultures meet!
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
              Similarities
            </div>
            <h1
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-[1.75rem] md:text-[2.5rem]"
            >
              Beyond the Differences: A Celebration of Similarities!
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              className="mt-5 w-full md:w-[70%]"
            >
              While Hungary and Nigeria have distinct characteristics, there are
              also surprising cultural parallels that bridge the gap. Here's
              what you can expect to discover:
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
                <h3 className="font-bold text-[1.35rem]">Family First:</h3>
                <p>
                  Both cultures place immense value on family and strong social
                  bonds. Get ready to experience the warmth of Hungarian
                  hospitality and the deep-rooted respect for elders in Nigerian
                  tradition.
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
                <h3 className="font-bold text-[1.35rem]">A Culinary Canvas:</h3>
                <p>
                  Food is a universal language of love! Explore the similarities
                  between hearty Hungarian goulash and Nigerian stews, both
                  bursting with flavor and cooked with love.
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
                <h3 className="font-bold text-[1.35rem]">Rhythm & Roots:</h3>
                <p>
                  Both cultures have a deep love for music and dance. Uncover
                  the vibrant rhythms of Nigerian drumming and let them resonate
                  with the lively melodies of Hungarian folk music.
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
                <h3 className="font-bold text-[1.35rem]">Festival Fever:</h3>
                <p>
                  Hungarians celebrate with a flourish, and so do Nigerians!
                  Join us as we explore the colorful Hungarian carnivals and
                  vibrant Nigerian cultural celebrations, finding joy in shared
                  experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[100px]">
            <div className="w-fit px-4 py-1 rounded-md border border-[#082f49] text-[#082f49] text-[.85rem] uppercase tracking-wider mb-4">
              Fusion
            </div>
            <h1 className="text-[1.75rem] md:text-[2.5rem] mb-4">
              More Than Just Similarities: A Fusion Feast!
            </h1>
            <p className="w-full md:w-[70%] mb-10">
              This page isn't just about finding common ground; it's about
              celebrating the exciting ways these cultures intertwine:
            </p>
            <div className="w-full flex md:flex-row flex-col gap-5 md:gap-10 md:justify-start relative">
              <div className="w-full md:w-[50%] md:h-[550px] p-10 md:p-[50px] bg-[#082f49] text-white md:text-[1.15rem] md:absolute right-0 top-[50%] md:translate-y-[-50%] flex flex-col shadow-md">
                <p className="mb-5 tracking-wider">
                  <span className="font-bold">Culinary Fusions:</span> Imagine
                  the possibilities! Hungarian paprika meets Nigerian jollof
                  rice, creating a taste sensation unlike any other. Let's delve
                  into the world of Nigerian-Hungarian fusion cuisine.
                  <br />
                  <br />
                  <span className="font-bold">Fashion Forward:</span> Nigerian
                  fabrics boast vibrant colors and intricate patterns. See how
                  these elements can be incorporated into Hungarian fashion,
                  creating a unique and eye-catching style.
                  <br />
                  <br />
                  <span className="font-bold">Artistic Expressions:</span> From
                  music to dance to visual arts, both cultures possess a rich
                  artistic heritage. Let's explore collaborative art projects
                  that blend Nigerian and Hungarian artistic styles.
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
              Possibilities
            </div>
            <h1
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-[1.75rem] md:text-[2.5rem]"
            >
              NIDO Hungary: Building Bridges, One Culture at a Time! 🇳🇬🇭🇺
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              className="mt-5 w-full md:w-[70%]"
            >
              This page is an invitation to embrace the exciting possibilities
              that arise when cultures collide. Let's celebrate our differences,
              discover our similarities, and create a vibrant, harmonious blend
              of Nigerian and Hungarian culture right here in Hungary!
              <br />
              <span className="font-bold">
                Here are some ways to get involved:
              </span>
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
                  Share your fusion creations:{" "}
                </h3>
                <p>
                  Have you tried making a Hungarian dish with a Nigerian twist?
                  Share your recipe and photos with us!
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
                  Organize cultural exchange events:
                </h3>
                <p>
                  Interested in showcasing Nigerian music and dance? Partner
                  with NIDO Hungary to organize a cultural exchange event.
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
                <h3 className="font-bold text-[1.35rem]">Let's discuss! </h3>
                <p>
                  What cultural similarities or surprising fusions have you
                  experienced in Hungary? Share your thoughts in the comments
                  below.
                </p>
              </div>
            </div>
            <p className="mt-6 mb-3">
              Together, let's create a cultural tapestry as rich and vibrant as
              the communities we represent! 🇳🇬🇭🇺
            </p>
            <p className="font-medium">
              #NIDOHungary #NigeriansinHungary #ACultureBlend #Similarities
              #Fusion #Celebration
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

export default BlendOfCultures;
