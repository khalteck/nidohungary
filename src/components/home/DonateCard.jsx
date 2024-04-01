const DonateCard = ({ price, setSelectedPrice, setother }) => {
  function handleSelect() {
    if (price === "Other") {
      setother(true);
    } else {
      setSelectedPrice(price);
      setother(false);
    }
  }
  return (
    <div
      onClick={handleSelect}
      className="py-3 px-8 border-2 flex justify-center border-[#082f49] rounded-2xl text-[1rem] font-bold cursor-pointer hover:bg-[#082f49] hover:text-neutral-50 transition-all duration-500"
    >
      {price === "Other" ? "" : "$"}
      {price?.toLocaleString()}
    </div>
  );
};

export default DonateCard;
