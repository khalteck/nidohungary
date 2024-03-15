import { FaArrowRightLong } from "react-icons/fa6";

const NewsCard = ({ item }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="200"
      className="w-full md:w-[400px] max-w-[450px] border border-neutral-950/50 flex flex-col gap-3"
    >
      <img
        alt=""
        src={item?.image}
        className="w-full h-[250px] object-cover object-center"
      />
      <div className="flex flex-col gap-3 p-4">
        <h3 className="text-[1.25rem] font-medium">{item?.title}</h3>
        <p>{item?.body?.slice(0, 150)}...</p>
        <button className="w-fit px-5 py-2 mt-2 bg-[#082f49] text-[.85rem] rounded-md text-white font-medium flex gap-2 items-center">
          Read more
          <FaArrowRightLong size="15px" color="white" />
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
