const CommonSection1 = ({ tag, title, body }) => {
  return (
    <section className="w-full h-[350px] md:h-[400px] bg-[#082f49] relative">
      <div
        className={`w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black/80 to-black/30 flex items-center text-white px-5 md:px-[100px] `}
      >
        <div className="w-full md:w-[700px] lg:w-[60%]">
          <div className="w-fit px-4 py-1 rounded-md border border-white text-white text-[.85rem] uppercase first-text">
            {tag}
          </div>
          <h1 className="text-[1.75rem] md:text-[3rem] lg:text-[3rem] font-medium mt-2 first-text">
            {title}
          </h1>
          {body && (
            <div className="w-[80%] md:pl-[100px] flex gap-5 mt-5 md:text-[.1.1rem]">
              <div className="w-[100px] h-[1px] bg-white mt-2 first-text"></div>
              {body}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CommonSection1;
