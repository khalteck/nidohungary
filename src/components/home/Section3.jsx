const Section3 = () => {
  return (
    <section className="w-full h-fit px-5 md:px-[100px] my-[80px] flex md:flex-row flex-col md:gap-10 gap-4">
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
        className="fw-full md:w-1/2 flex flex-col gap-5"
      >
        <h2 className="text-[2.5rem]">What Do We Offer</h2>
        <p className="leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate
        </p>
      </div>
      <img
        data-aos="zoom-in"
        data-aos-duration="800"
        data-aos-delay="200"
        alt=""
        src="/images/slide3.jpg"
        className="w-full md:w-1/2 h-auto"
      />
    </section>
  );
};

export default Section3;
