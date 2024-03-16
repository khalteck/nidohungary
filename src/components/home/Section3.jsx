import { MdOutlineArrowOutward } from "react-icons/md";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { useAppContext } from "../../contexts/AppContext";

const Section3 = () => {
  const { navigate } = useAppContext();
  return (
    <section className="w-full h-fit px-5 md:px-[100px] my-[80px] flex md:flex-row flex-col md:gap-10 gap-4">
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
        className="fw-full md:w-1/2 flex flex-col gap-5"
      >
        <h2 className="text-[2.5rem]">What Do We Offer</h2>
        <p className="leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate
        </p>
        <button
          onClick={() => navigate("/about")}
          className="w-fit px-5 py-2 bg-[#082f49] rounded-md text-white font-medium flex gap-2 items-center"
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
        src="/images/slide3.jpg"
        className="w-full md:w-1/2 h-auto"
      />
    </section>
  );
};

export default Section3;
