import { FaAngleDoubleDown } from "react-icons/fa";
import CommonSection1 from "../../components/common/CommonSection1";
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import Header from "../../components/common/header/Header";
import Footer from "../../components/footer/Footer";
import Section6 from "../../components/home/Section6";
import { PiStarFourFill } from "react-icons/pi";

const Community = () => {
  return (
    <>
      <Header />

      <main>
        <CommonSection1
          tag={"NidoHongary"}
          title={"Community"}
          body={"NIDO Hungary: Building Bridges, Building Unity! 🇭🇺🇳🇬"}
        />
        <section className="w-full bg-neutral-50 p-5 md:p-[100px] text-[1.2rem]">
          <div>
            <h1 className="text-[1.75rem] md:text-[2.5rem]">
              Greetings, amazing Nigerians in Hungary!
            </h1>
            <p className="mt-5">
              Welcome to the heart of NIDO Hungary, your gateway to a vibrant
              and supportive Nigerian community! This page is all about
              connecting you with your fellow Nigerians, fostering friendships,
              and celebrating our shared heritage.
            </p>
          </div>
          <div className="mt-10 md:mt-[100px]">
            <div className="w-fit px-4 py-1 rounded-md border border-[#082f49] text-[#082f49] text-[.85rem] uppercase tracking-wider mb-4">
              community
            </div>
            <h1 className="text-[1.75rem] md:text-[2.5rem] mb-4 md:mb-10">
              Here's what makes our NIDO Hungary community unique:
            </h1>
            <div className="w-full flex md:flex-row flex-col gap-5 md:gap-10 md:justify-end relative">
              <div className="w-full md:w-[50%] md:h-[550px] p-10 md:p-[50px] bg-[#082f49] text-white text-[1rem] md:absolute left-0 top-[50%] md:translate-y-[-50%] flex flex-col shadow-md">
                <p className="mb-5">
                  <span className="font-bold">A Mosaic of Cultures:</span> We
                  are doctors, students, entrepreneurs, artists, and more – all
                  Nigerians who bring their unique talents and experiences to
                  Hungary. Get ready to meet some truly inspiring individuals!
                  <br />
                  <br />
                  <span className="font-bold">
                    Celebrating Nigerian Spirit:
                  </span>{" "}
                  We cherish our Nigerian roots and love to share them with the
                  world. Look forward to cultural events, traditional
                  delicacies, and opportunities to showcase the beauty of
                  Nigerian culture.
                  <br />
                  <br />
                  <span className="font-bold">Support Network:</span> Whether
                  you're new to Hungary or a seasoned resident, NIDO Hungary is
                  your support system. Need help finding an apartment? Craving a
                  taste of home? Our community is here to lend a helping hand
                  and offer friendly advice.
                  <br />
                  <br />
                  <span className="font-bold">
                    Networking & Mentorship:{" "}
                  </span>{" "}
                  We believe in empowering each other. This page will connect
                  you with experienced Nigerians who can offer guidance and
                  mentorship as you navigate your journey in Hungary.
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
              family
            </div>
            <h1
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-[1.75rem] md:text-[2.5rem]"
            >
              TWe're more than just a community, we're a family! 🇳🇬🇭🇺
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              className="mt-5 w-full md:w-[70%]"
            >
              NIDO Hungary is your platform to connect, share stories, and build
              lasting friendships. So, don't be shy! Introduce yourself in the
              comments below, share your experiences, and let's get to know each
              other.
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
                  Join our online forum:
                </h3>
                <p>
                  Discuss everything under the Hungarian sun, from finding the
                  best Nigerian restaurant to upcoming events.
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
                  Attend our community gatherings:
                </h3>
                <p>
                  Mingle with fellow Nigerians, celebrate important occasions,
                  and create lasting memories.
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
                  Volunteer your skills:
                </h3>
                <p>
                  Give back to the community and empower others by sharing your
                  expertise.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[100px]">
            <p className="mt-6 mb-3">
              Together, let's build a strong and vibrant Nigerian community in
              Hungary! 🇳🇬🇭🇺
            </p>

            <p className="font-medium my-3">
              #NIDOHungary #NigeriansinHungary #Community #Support #Network
              #Culture
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

export default Community;
