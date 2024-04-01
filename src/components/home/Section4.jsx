import { useState } from "react";
import donateData from "../../data/donate.json";
import DonateCard from "./DonateCard";

const Section4 = () => {
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [other, setother] = useState(false);

  return (
    <section
      id="donate"
      className="w-full min-h-[500px] text-[#082f49] px-5 py-[60px] md:p-[100px] bg-neutral-50 flex flex-col md:flex-row gap-10 justify-between"
    >
      <div className="w-full p-3 md:p-[80px] bg-neutral-100 flex md:flex-row flex-col gap-8 md:gap-[100px]">
        <div className="w-full md:w-[40%]">
          <h2 className="text-[2.5rem]">Donate</h2>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate
          </p>
        </div>
        <div className="w-full md:w-[40%]">
          <h3 className="font-medium text-[1.5rem]">Help us do more</h3>
          <div className="w-full grid grid-cols-3 md:grid-cols-4 gap-5 mt-6">
            {donateData?.map((item, index) => {
              return (
                <DonateCard
                  key={index}
                  price={item?.price}
                  setSelectedPrice={setSelectedPrice}
                  setother={setother}
                />
              );
            })}
            <DonateCard price={"Other"} setother={setother} />
          </div>
          {other && (
            <div className="mt-6 flex flex-col gap-1">
              <label>Enter Amount</label>
              <input className="w-full max-w-[600px] outline-none border-2 border-neutral-50 p-2 rounded-xl bg-transparent" />
            </div>
          )}
          <button className="w-full max-w-[600px] text-neutral-50 bg-[#082f49] p-3 rounded-lg mt-6">
            Proceed
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section4;
