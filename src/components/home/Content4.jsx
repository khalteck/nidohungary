import { MdOutlineArrowOutward } from "react-icons/md";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { useAppContext } from "../../contexts/AppContext";

const Content4 = () => {
  const { navigate } = useAppContext();
  return (
    <section className="w-full h-fit py-[60px] md:p-0 bg-[#082f49] text-neutral-50 flex md:flex-row-reverse flex-col-reverse md:gap-10 gap-4">
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
        className="fw-full md:w-1/2 flex flex-col gap-5 md:p-12"
      >
        <h2 className="text-[2rem] md:text-[2.5rem] px-5 md:p-0">
          Experience the Beauty of Nigeria
        </h2>
        <img
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="200"
          alt=""
          src="/images/slide3.jpg"
          className="w-full md:w-1/2 h-auto md:hidden block"
        />
        <p className="leading-relaxed px-5 md:p-0">
          Calling all Nigerians in Hungary! Feeling a pang of nostalgia for the
          motherland? Or perhaps you're curious to explore the wonders Nigeria
          holds? Well, look no further! This page is your portal to experiencing
          the breathtaking beauty and captivating spirit of Nigeria.
        </p>
        <button
          onClick={() => navigate("/experience-the-beauty-of-nigeria")}
          className="w-fit px-5 py-2 md:mt-8 text-[#082f49] rounded-md bg-neutral-50 font-medium flex gap-2 items-center mx-5 md:mx-0"
        >
          Read more
          <MdOutlineArrowOutward size="20px" color="#082f49" />
        </button>
      </div>
      <img
        data-aos="zoom-in"
        data-aos-duration="800"
        data-aos-delay="200"
        alt=""
        src="/images/slide3.jpg"
        className="w-full md:w-1/2 h-[600px] object-cover hidden md:block"
      />
    </section>
  );
};

export default Content4;
