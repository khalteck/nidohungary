import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { HiMenuAlt2 } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../contexts/AppContext";

const SearchCont = ({ handleMenu, toggleSearch }) => {
  const navigate = useNavigate();
  const { cartData } = useAppContext();

  return (
    <div className="w-full bg-[#fafafa] text-white text-[.9rem] px-5 md:px-[100px] flex gap-4 md:gap-12 items-center pt-4 pb-4 md:pb-5">
      <div>
        <img
          alt="logo"
          src="/images/logo-white-no-bg.png"
          className="w-[200px] h-auto hidden md:block"
        />
        <div onClick={handleMenu} className="md:hidden">
          <HiMenuAlt2 size="25px" color="white" />
        </div>
      </div>
      <div className="w-full min-w-[200px] flex mx-2 md:mx-0 relative">
        <div
          onClick={toggleSearch}
          className="w-full h-full absolute top-0 left-0 cursor-pointer hover:bg-white/30"
        ></div>
        <div className="w-[50px] md:h-[55px] p-2 md:p-3 flex items-center justify-center bg-[#F1E4D8]">
          <AiOutlineSearch color="black" size="25px" />
        </div>
        <input
          type="text"
          className="bg-white w-full text-black p-2 md:p-4 outline-none rounded-none text-[.85rem] placeholder:text-black"
          placeholder="SEARCH.."
        />
      </div>

      <div onClick={() => navigate("/cart")} className="ml-auto cursor-pointer">
        <p className="hidden md:block whitespace-nowrap">
          CART <span className="font-medium">({cartData?.length})</span>
        </p>
        <div className="md:hidden relative">
          {cartData?.length > 0 && (
            <div className="w-4 h-4 absolute -top-2 -right-2 bg-red-500 rounded-full flex justify-center items-center text-[.75em] text-white leading-tight">
              <p className="block leading-3 font-bold">{cartData?.length}</p>
            </div>
          )}
          <FaShoppingCart size="20px" color="white" />
        </div>
      </div>

      <div
        onClick={() => navigate("/wishlist")}
        className="cursor-pointer flex items-center gap-2"
      >
        <p className="hidden md:block">WISHLIST</p>
        <div className="">
          <FaHeart size="20px" color="white" />
        </div>
      </div>
    </div>
  );
};

export default SearchCont;
