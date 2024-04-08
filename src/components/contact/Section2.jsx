import { HiOutlineMailOpen } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { MdMessage } from "react-icons/md";

const Section2 = () => {
  return (
    <section className="w-full flex md:flex-row flex-col">
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
        className="w-full md:w-1/4 min-w-[200px] min-h-[300px] border-r border-b border-black/20 px-5 pt-[100px] md:px-10 pb-10 flex flex-col gap-4"
      >
        <HiOutlineMailOpen size="60px" color="#082f49" />
        <h3 className="text-[1.5rem] font-medium">Email us 24/7</h3>
        <p className="block leading-relaxed text-neutral-900/70">
          Reach out to us by mail -{" "}
          <a href="mailto:nidohungary24@gmail.com" className="underline">
            nidohungary24@gmail.com
          </a>
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
        className="w-full md:w-1/4 min-w-[200px] min-h-[300px] border-r border-b border-black/20 px-5 pt-[100px] md:px-10 pb-10 flex flex-col gap-4"
      >
        <FaLocationDot size="60px" color="#082f49" />
        <h3 className="text-[1.5rem] font-medium">Location</h3>
        <p className="block leading-relaxed text-neutral-900/70">
          Nigeria/hungary
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
        className="w-full md:w-1/4 min-w-[200px] min-h-[300px] border-r border-b border-black/20 px-5 pt-[100px] md:px-10 pb-10 flex flex-col gap-4"
      >
        <FiPhoneCall size="60px" color="#082f49" />
        <h3 className="text-[1.5rem] font-medium">Call us 24/7</h3>
        <p className="block leading-relaxed text-neutral-900/70">
          Get in touch -{" "}
          <a href="tel:+34**********" className="underline">
            +34 123 456 7890
          </a>
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
        className="w-full md:w-1/4 min-w-[200px] min-h-[300px] border-r border-b border-black/20 px-5 pt-[100px] md:px-10 pb-10 flex flex-col gap-4"
      >
        <MdMessage size="60px" color="#082f49" />
        <h3 className="text-[1.5rem] font-medium">Send a message</h3>
        <p className="block leading-relaxed text-neutral-900/70">
          Fill the form below..
        </p>
      </div>
    </section>
  );
};

export default Section2;
