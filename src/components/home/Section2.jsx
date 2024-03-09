import { SiMoneygram } from "react-icons/si";
import { FaRegLightbulb } from "react-icons/fa6";
import { RiFundsBoxLine } from "react-icons/ri";
import { MdBiotech } from "react-icons/md";

const Section2 = () => {
  return (
    <section className="w-full flex md:flex-row flex-col">
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
        className="w-full md:w-1/4 min-w-[200px] min-h-[300px] border-r border-b border-black/20 px-5 pt-[100px] md:px-10 pb-10 flex flex-col gap-4"
      >
        <SiMoneygram size="60px" color="#082f49" />
        <h3 className="text-[1.5rem] font-medium">Innovation</h3>
        <p className="block leading-relaxed text-neutral-900/70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
        className="w-full md:w-1/4 min-w-[200px] min-h-[300px] border-r border-b border-black/20 px-5 pt-[100px] md:px-10 pb-10 flex flex-col gap-4"
      >
        <FaRegLightbulb size="60px" color="#082f49" />
        <h3 className="text-[1.5rem] font-medium">Creativity</h3>
        <p className="block leading-relaxed text-neutral-900/70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
        className="w-full md:w-1/4 min-w-[200px] min-h-[300px] border-r border-b border-black/20 px-5 pt-[100px] md:px-10 pb-10 flex flex-col gap-4"
      >
        <RiFundsBoxLine size="60px" color="#082f49" />
        <h3 className="text-[1.5rem] font-medium">Funding</h3>
        <p className="block leading-relaxed text-neutral-900/70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
        className="w-full md:w-1/4 min-w-[200px] min-h-[300px] border-r border-b border-black/20 px-5 pt-[100px] md:px-10 pb-10 flex flex-col gap-4"
      >
        <MdBiotech size="60px" color="#082f49" />
        <h3 className="text-[1.5rem] font-medium">Technology</h3>
        <p className="block leading-relaxed text-neutral-900/70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis
        </p>
      </div>
    </section>
  );
};

export default Section2;
