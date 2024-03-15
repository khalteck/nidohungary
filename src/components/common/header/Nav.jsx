import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
// import categories from "../../../data/categories.json";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../contexts/AppContext";
import nav from "../../../data/nav.json";
import PrimaryButton from "../button/PrimaryButton";
import { CgMenuRight } from "react-icons/cg";

const Nav = ({ handleMenu }) => {
  const { currentPage } = useAppContext();
  const navigate = useNavigate();

  function scrollToSection(param) {
    const section = document.getElementById(param);
    section
      ? section.scrollIntoView({ top: 0, behavior: "smooth" })
      : navigate(`/#${param}`);
  }

  return (
    <div className="flex gap-10 items-center h-[80px] md:h-[100px] border bg-[#fafafa] text-neutral-950 px-5 md:px-[100px]">
      <img
        onClick={() => navigate("/")}
        alt="logo"
        src="/images/logo.png"
        className="w-[150px] md:w-[200px] h-auto cursor-pointer"
      />
      <ul className="w-full hidden md:flex gap-3 items-center text-[.9rem]">
        {nav?.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                item?.route
                  ? navigate(`${item?.link}`)
                  : scrollToSection(item?.name?.toLowerCase());
              }}
              className={`px-3 py-2 transition-all duration-300 uppercase cursor-pointer whitespace-nowrap ${
                currentPage === item?.link
                  ? "border-b-4 rounded-none border-[#082f49] hover:bg-white text-black"
                  : "hover:bg-[#082f49]/90 hover:text-white rounded-md"
              }`}
            >
              {item?.name}
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => scrollToSection("donate")}
        className="md:block hidden"
      >
        <PrimaryButton />
      </div>

      <div onClick={handleMenu} className="block md:hidden ml-auto">
        <CgMenuRight size="40px" />
      </div>
    </div>
  );
};

export default Nav;
