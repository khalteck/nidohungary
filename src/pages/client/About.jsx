import { FaAngleDoubleDown } from "react-icons/fa";
import CommonSection1 from "../../components/common/CommonSection1";
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import Header from "../../components/common/header/Header";
import Footer from "../../components/footer/Footer";
import Section6 from "../../components/home/Section6";
import { PiStarFourFill } from "react-icons/pi";

const About = () => {
  return (
    <>
      <Header />

      <main>
        <CommonSection1
          tag={"NidoHongary"}
          title={"About Us"}
          body={"NIDO Hungary: Your Bridge Between Nigeria and Hungary! 🇳🇬🇭🇺"}
        />
        <section className="w-full bg-neutral-50 p-5 md:p-[100px] text-[1.2rem]">
          <div>
            <h1 className="text-[1.75rem] md:text-[2.5rem]">
              Greetings, fellow Nigerians in Hungary!
            </h1>
            <p className="mt-5">
              Welcome to NIDO Hungary, your one-stop shop for connection,
              support, and celebrating all things Nigerian in the heart of
              Hungary! We're more than just an organization; we're a vibrant
              community dedicated to empowering Nigerians to thrive in their
              Hungarian experience.
            </p>
            <h1 className="text-[1.75rem] mt-10">
              Our Story: Rooted in Unity, Reaching for Success!
            </h1>
            <p className="mt-5">
              NIDO Hungary was born from the desire to create a supportive
              network for Nigerians living, working, or studying in Hungary. We
              understand the challenges and joys of navigating a new country,
              and we're here to bridge the gap between your Nigerian heritage
              and your Hungarian present.
            </p>
          </div>
          <div className="mt-10 md:mt-[100px]">
            <div className="w-fit px-4 py-1 rounded-md border border-[#082f49] text-[#082f49] text-[.85rem] uppercase tracking-wider mb-4">
              Unique
            </div>
            <h1 className="text-[1.75rem] md:text-[2.5rem] mb-4 md:mb-10">
              What Makes Us Unique?
            </h1>
            <div className="w-full flex md:flex-row flex-col gap-5 md:gap-10 md:justify-end relative">
              <div className="w-full md:w-[50%] md:h-[550px] p-10 md:p-[50px] bg-[#082f49] text-white text-[1rem] md:absolute left-0 top-[50%] md:translate-y-[-50%] flex flex-col shadow-md">
                <p className="mb-5">
                  <span className="font-bold">A Celebration of Heritage:</span>{" "}
                  We cherish our Nigerian roots and love to share them with the
                  world. From cultural events to traditional delicacies, NIDO
                  Hungary keeps the spirit of Nigeria alive in Hungary.
                  <br />
                  <br />
                  <span className="font-bold">
                    Empowering Your Journey:
                  </span>{" "}
                  Whether you're a seasoned resident or a newcomer, NIDO Hungary
                  offers a wealth of resources, from information about Hungarian
                  immigration laws to tips on finding an apartment. We're here
                  to help you build a successful life in Hungary.
                  <br />
                  <br />
                  <span className="font-bold">Building Bridges:</span> We
                  believe in fostering connections between Nigerians in Hungary
                  and the wider Hungarian community. Our events and initiatives
                  promote cultural exchange and understanding.
                  <br />
                  <br />
                  <span className="font-bold">A Network of Support:</span> NIDO
                  Hungary is your family away from home. Need help navigating
                  the healthcare system? Craving a taste of home-cooked Nigerian
                  food? Our community is here to lend a helping hand and offer
                  friendly advice.
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
              Passion
            </div>
            <h1
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-[1.75rem] md:text-[2.5rem]"
            >
              Together, We Rise! 🇳🇬🇭🇺
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              className="mt-5 w-full md:w-[70%]"
            >
              NIDO Hungary is more than just an organization; it's a movement.
              We're a community of passionate Nigerians who are building a
              brighter future for ourselves and future generations in Hungary.
              <br />
              <span className="font-bold">
                Here's what you can expect from NIDO Hungary:
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
                  Informative website:
                </h3>
                <p>
                  Explore our website for resources, news updates, and upcoming
                  events.
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
                  Engaging social media:
                </h3>
                <p>
                  Connect with fellow Nigerians, share your experiences, and
                  stay updated on our latest initiatives.
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
                <h3 className="font-bold text-[1.35rem]">Vibrant events:</h3>
                <p>
                  Participate in cultural celebrations, networking events, and
                  workshops designed to empower and connect our community.
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
                  Volunteer opportunities:
                </h3>
                <p>
                  Give back to the community and make a difference by sharing
                  your skills and experience.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[100px]">
            <p className="mt-6 mb-3">
              Join us and be part of something special! 🇳🇬🇭🇺
            </p>
            <p>
              NIDO Hungary invites you to embrace the warmth of our community,
              celebrate your heritage, and build a fulfilling life in Hungary.
            </p>
            <p className="font-medium my-3">
              #NIDOHungary #NigeriansinHungary #Community #Support #Empowerment
              #Celebration
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

export default About;
