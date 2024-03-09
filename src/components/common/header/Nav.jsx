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
  const [hover, setHover] = useState(false);

  const [showCategories, setShowCategories] = useState(false);
  const [hovering, setHovering] = useState(false);

  function hamdleClose() {
    setTimeout(() => {
      setShowCategories(false);
    }, 700);
  }

  const [showChildren, setShowChildren] = useState(null);
  function handleChild(param) {
    setShowChildren((prev) => (prev ? null : param));
  }
  return (
    <div className="flex gap-10 items-center h-[80px] md:h-[100px] border bg-[#fafafa] text-neutral-950 px-5 md:px-[100px]">
      <img
        alt="logo"
        src="/images/logo.png"
        className="w-[150px] md:w-[200px] h-auto"
      />
      <ul className="w-full hidden md:flex gap-3 items-center text-[.9rem]">
        {nav?.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => navigate(`/${item?.slug}`)}
              className={`px-3 py-2 transition-all duration-300 hover:bg-[#082f49]/90 hover:text-white rounded-md uppercase cursor-pointer ${
                currentPage?.includes("contact") && "bg-[#fafafa] text-black"
              }`}
            >
              {item?.name}
            </li>
          );
        })}
        {/* <li
          onClick={() => navigate("/")}
          className={`px-5 py-2 transition-all duration-300 hover:bg-[#fafafa]/70 hover:text-black cursor-pointer ${
            currentPage === "/" && "bg-[#fafafa] text-black"
          }`}
        >
          HOME
        </li>
        <li
          onMouseOver={() => {
            setHover(true);
            setShowCategories(true);
          }}
          onMouseOut={() => {
            setHover(false);
            hamdleClose();
          }}
          className={`px-5 py-2 transition-all duration-300 bg-transparent flex gap-2 items-center hover:bg-[#fafafa]/70 hover:text-black cursor-pointer`}
        >
          CATEGORIES
          <div className="">
            <RiArrowDropDownLine
              size="25px"
              color={hover ? "black" : "white"}
            />
          </div>
        </li> */}
      </ul>
      <div className="md:block hidden">
        <PrimaryButton />
      </div>

      <div onClick={handleMenu} className="block md:hidden ml-auto">
        <CgMenuRight size="40px" />
      </div>

      {/* {(showCategories || hovering) && (
        <div
          onMouseOut={() => {
            hamdleClose();
            setHovering(false);
          }}
          onMouseOver={() => {
            setHovering(true);
            setShowCategories(true);
          }}
          className={`w-[550px] bg-neutral-950 p-5 absolute left-[40px] z-[999] flex flex-col flex-wrap gap-3 ${
            showChildren
              ? "h-[400px] bottom-[-400px]"
              : "h-[300px] bottom-[-300px]"
          }`}
        >
          {categories?.map((itm, ind) => {
            return (
              <div
                key={ind}
                onClick={() => {
                  itm?.child?.length > 0
                    ? handleChild(itm)
                    : navigate(`/categories/${itm?.slug}`);
                }}
                className="w-1/2 text-white/70 px-3 cursor-pointer hover:text-white text-[.85rem]"
              >
                <div className="w-full flex justify-between">
                  <p>{itm?.name}</p>
                  {itm?.child?.length > 0 && (
                    <div>
                      {showChildren?.name === itm?.name ? (
                        <FaMinus
                          size="15px"
                          color="white"
                          style={{ opacity: 0.5 }}
                        />
                      ) : (
                        <FaPlus
                          size="15px"
                          color="white"
                          style={{ opacity: 0.5 }}
                        />
                      )}
                    </div>
                  )}
                </div>
                {itm?.child?.length > 0 && showChildren?.name === itm?.name && (
                  <div className="w-[90%] mx-auto h-fit mt-2 px-3 border-l border-neutral-100/50 flex flex-col gap-2">
                    {itm?.child?.map((x, idx) => {
                      return (
                        <div
                          key={idx}
                          className="hover:text-white/70 text-white"
                        >
                          {x?.name}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )} */}
    </div>
  );
};

export default Nav;
