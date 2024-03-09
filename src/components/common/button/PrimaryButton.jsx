import { RiMoneyDollarBoxFill } from "react-icons/ri";

const PrimaryButton = () => {
  return (
    <button className="px-5 py-2 bg-[#082f49] rounded-md text-white font-medium flex gap-2 items-center">
      Donate
      <RiMoneyDollarBoxFill size="20px" color="white" />
    </button>
  );
};

export default PrimaryButton;
