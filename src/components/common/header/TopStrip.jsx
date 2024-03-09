import { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const TopStrip = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  function handleShowDropdown() {
    setShow((prev) => !prev);
  }

  return (
    <>
      <div className="w-full px-3 md:px-[100px] bg-[#fafafa] hidden md:flex text-black text-[.85rem] border-b border-black/10">
        <div className="pr-3 md:px-5 py-2 flex gap-2 items-center justify-center">
          <MdOutlineEmail color="black" size="22px" />
          <p className="cursor-pointer uppercase hidden md:block">
            info@nidohungary.ng
          </p>
          <p className="cursor-pointer uppercase md:hidden block">Contact</p>
        </div>

        <div className="md:px-5 py-2 hidden md:flex gap-2 items-center justify-center">
          <FiPhoneCall color="black" size="20px" />
          <p className="cursor-pointer uppercase hidden md:block">
            +123456789123
          </p>
        </div>

        <div className="ml-auto py-2 md:py-4 pr-5 flex gap-3 items-center justify-end md:justify-center relative">
          <div>
            <FaFacebookSquare color="black" size="20px" />
          </div>
          <div>
            <FaInstagram color="black" size="20px" />
          </div>
          <div>
            <FaLinkedin color="black" size="20px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopStrip;
