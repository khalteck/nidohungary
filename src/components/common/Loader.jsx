import { BeatLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-full h-[100dvh] fixed top-0 left-0 bg-[#082f49] flex justify-center items-center z-[100]">
      <div className="md:w-1/3 w-[80%] text-[1.2rem] md:text-[2rem] font-bold p-[25px] md:py-[20px] rounded-2xl flex flex-col gap-4 justify-center items-center">
        <BeatLoader color={"#fff"} size={60} />
      </div>
    </div>
  );
};

export default Loader;
