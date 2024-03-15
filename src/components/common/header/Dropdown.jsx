import { IoClose } from "react-icons/io5";
import nav from "../../../data/nav.json";
// import categories from "../../../data/categories.json";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { RiMoneyDollarBoxFill } from "react-icons/ri";

const Dropdown = ({ handleMenu }) => {
  const navigate = useNavigate();

  const [showList, setShowList] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowList(true);
    }, 600);
  }, []);

  function scrollToSection(param) {
    const section = document.getElementById(param);
    section
      ? section.scrollIntoView({ top: 0, behavior: "smooth" })
      : navigate(`/#${param}`);
  }

  return (
    <div
      onClick={handleMenu}
      className="w-full h-[100dvh] bg-black/70 fixed top-0 left-0 z-[999] bgslide"
    >
      {showList && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[80%] max-w-[400px] h-[100%] min-h-[500px] overflow-y-auto bg-[#082f49] px-5 pt-10 pb-[80px] flex flex-col gap-5 dropslide"
        >
          <div onClick={handleMenu} className="">
            <IoClose size="35px" color="white" />
          </div>

          <ul className="w-full flex flex-col gap-6 text-neutral-50 mt-10">
            {nav?.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <li
                    onClick={() => {
                      item?.route
                        ? navigate(`${item?.link}`)
                        : scrollToSection(item?.name?.toLowerCase());
                      handleMenu();
                    }}
                    className={`w-full flex flex-col gap-3 text-[1.2rem] `}
                  >
                    <div className="w-full flex gap-3 justify-between uppercase">
                      <p>{item?.name}</p>
                    </div>
                  </li>
                </React.Fragment>
              );
            })}
            <li
              onClick={() => {
                scrollToSection("donate");
                handleMenu();
              }}
              className={`w-full flex flex-col gap-3 text-[1.2rem] `}
            >
              <button className="w-fit px-5 py-2 bg-white rounded-md text-black font-medium flex gap-2 items-center">
                Donate
                <RiMoneyDollarBoxFill size="20px" color="black" />
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
