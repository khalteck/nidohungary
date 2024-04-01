import { SiMoneygram } from "react-icons/si";
import { FaRegLightbulb } from "react-icons/fa6";
import { RiFundsBoxLine } from "react-icons/ri";
import { MdBiotech } from "react-icons/md";
import { TbWorldHeart } from "react-icons/tb";

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
        <h3 className="text-[1.5rem] font-medium">Community</h3>
        <p className="block leading-relaxed text-neutral-900/70">
          Welcome to the heart of NIDO Hungary, your gateway to a vibrant and
          supportive Nigerian community!
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
        className="w-full md:w-1/4 min-w-[200px] min-h-[300px] border-r border-b border-black/20 px-5 pt-[100px] md:px-10 pb-10 flex flex-col gap-4"
      >
        <FaRegLightbulb size="60px" color="#082f49" />
        <h3 className="text-[1.5rem] font-medium">Heritage</h3>
        <p className="block leading-relaxed text-neutral-900/70">
          we celebrate the beauty and richness of Nigerian heritage, empowering
          you to share it with the world – right here in Hungary!
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
        className="w-full md:w-1/4 min-w-[200px] min-h-[300px] border-r border-b border-black/20 px-5 pt-[100px] md:px-10 pb-10 flex flex-col gap-4"
      >
        <TbWorldHeart size="60px" color="#082f49" />
        <h3 className="text-[1.5rem] font-medium">Culture</h3>
        <p className="block leading-relaxed text-neutral-900/70">
          Hungary and Nigeria – two vibrant nations, each boasting a rich
          tapestry of traditions, languages, and customs.
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
        className="w-full md:w-1/4 min-w-[200px] min-h-[300px] border-r border-b border-black/20 px-5 pt-[100px] md:px-10 pb-10 flex flex-col gap-4"
      >
        <MdBiotech size="60px" color="#082f49" />
        <h3 className="text-[1.5rem] font-medium">Information</h3>
        <p className="block leading-relaxed text-neutral-900/70">
          We're here to empower you with the knowledge and resources you need to
          feel confident and secure in Hungary.
        </p>
      </div>
    </section>
  );
};

export default Section2;
