import { MdOutlineArrowOutward } from "react-icons/md";

const Form = () => {
  return (
    <form className="mt-10 flex flex-col gap-5">
      <div>
        <input
          type="text"
          placeholder="Full name"
          className="w-full py-3 border-b border-[#082f49] outline-none bg-neutral-50/50"
        />
      </div>
      <div className="flex gap-5">
        <input
          type="email"
          placeholder="Email"
          className="w-full py-3 border-b border-[#082f49] outline-none bg-neutral-50/50"
        />
        <input
          type="number"
          placeholder="Phone number"
          className="w-full py-3 border-b border-[#082f49] outline-none bg-neutral-50/50"
        />
      </div>
      <textarea
        className="w-full h-[150px] py-3 border-b border-[#082f49] outline-none bg-neutral-50/50"
        placeholder="Message"
      />
      <button className="w-fit px-10 py-3 mt-5 bg-[#082f49] rounded-md text-white font-medium flex gap-2 items-center">
        Submit
        <MdOutlineArrowOutward size="20px" color="white" />
      </button>
    </form>
  );
};

export default Form;
