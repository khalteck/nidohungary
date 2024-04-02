import { MdOutlineArrowOutward } from "react-icons/md";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { useAppContext } from "../../contexts/AppContext";

const Section3 = () => {
  const { navigate } = useAppContext();
  return (
    <section className="w-full h-fit md:p-0 flex md:flex-row flex-col md:gap-10 gap-4">
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
        className="fw-full md:w-1/2 flex flex-col gap-5 md:px-[100px] py-12"
      >
        <h2 className="text-[2rem] md:text-[2.5rem] px-5 md:p-0">
          A Blend Of Cultures
        </h2>
        <img
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="200"
          alt=""
          src="/images/blend-culture.jpg"
          className="w-full md:w-1/2 h-auto md:hidden block"
        />
        <p className="leading-relaxed px-5 md:p-0">
          Hungary and Nigeria – two vibrant nations, each boasting a rich
          tapestry of traditions, languages, and customs. But have you ever
          considered the fascinating ways these cultures can blend and create
          something truly unique? This page is your gateway to exploring the
          exciting fusion that occurs when Nigerian and Hungarian cultures meet!
        </p>
        <button
          onClick={() => navigate("/a-blend-of-cultures")}
          className="w-fit px-5 py-2 md:mt-8 bg-[#082f49] rounded-md text-white font-medium flex gap-2 items-center mx-5 md:mx-0"
        >
          Read more
          <MdOutlineArrowOutward size="20px" color="white" />
        </button>
      </div>
      <img
        data-aos="zoom-in"
        data-aos-duration="800"
        data-aos-delay="200"
        alt=""
        src="/images/blend-culture.jpg"
        className="w-full md:w-1/2 h-auto hidden md:block"
      />
    </section>
  );
};

export default Section3;
