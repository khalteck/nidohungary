import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";

const Section6 = () => {
  const [hover, setHover] = useState(null);
  function handleHover(id) {
    setHover(null);
    setTimeout(() => {
      setHover(id);
    }, 100);
  }
  return (
    <section id="community" className="w-full pt-[60px] md:px-0">
      <div className="px-5 md:px-[100px]">
        <h1 className="text-[2.5rem]">Community</h1>
        <h2 className="text-[1.5rem]">Find out about our communities...</h2>
      </div>
      <div className="w-full flex md:flex-row flex-col mt-10">
        <div
          id="one"
          onMouseOver={() => handleHover("one")}
          onMouseOut={() => setHover(null)}
          className={`w-full md:w-1/4 min-w-[200px] min-h-[200px] border-r border-y border-black/20 px-5 pt-[50px] md:px-10 pb-10 flex flex-col gap-4 items-center cursor-pointer transition-all duration-500 ${
            hover === "one" ? "bg-[#082f49] text-white" : ""
          }`}
        >
          <FaFacebook
            size="60px"
            color={hover === "one" ? "white" : "#082f49"}
          />
          <h3 className="text-[1.5rem] font-medium">Facebook</h3>
        </div>
        <div
          id="two"
          onMouseOver={() => handleHover("two")}
          onMouseOut={() => setHover(null)}
          className={`w-full md:w-1/4 min-w-[200px] min-h-[200px] border-r border-y border-black/20 px-5 pt-[50px] md:px-10 pb-10 flex flex-col gap-4 items-center cursor-pointer transition-all duration-500 ${
            hover === "two" ? "bg-[#082f49] text-white" : ""
          }`}
        >
          <FaXTwitter
            size="60px"
            color={hover === "two" ? "white" : "#082f49"}
          />
          <h3 className="text-[1.5rem] font-medium">X/Twitter</h3>
        </div>
        <div
          id="three"
          onMouseOver={() => handleHover("three")}
          onMouseOut={() => setHover(null)}
          className={`w-full md:w-1/4 min-w-[200px] min-h-[200px] border-r border-y border-black/20 px-5 pt-[50px] md:px-10 pb-10 flex flex-col gap-4 items-center cursor-pointer transition-all duration-500 ${
            hover === "three" ? "bg-[#082f49] text-white" : ""
          }`}
        >
          <FaInstagram
            size="60px"
            color={hover === "three" ? "white" : "#082f49"}
          />
          <h3 className="text-[1.5rem] font-medium">Instagram</h3>
        </div>

        <div
          id="four"
          onMouseOver={() => handleHover("four")}
          onMouseOut={() => setHover(null)}
          className={`w-full md:w-1/4 min-w-[200px] min-h-[200px] border-r border-y border-black/20 px-5 pt-[50px] md:px-10 pb-10 flex flex-col gap-4 items-center cursor-pointer transition-all duration-500 ${
            hover === "four" ? "bg-[#082f49] text-white" : ""
          }`}
        >
          <FaLinkedinIn
            size="60px"
            color={hover === "four" ? "white" : "#082f49"}
          />
          <h3 className="text-[1.5rem] font-medium">LinkedIn</h3>
        </div>
      </div>
    </section>
  );
};

export default Section6;
