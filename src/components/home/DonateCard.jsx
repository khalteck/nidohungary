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
      className="py-3 px-8 border-2 flex justify-center border-neutral-50 rounded-2xl text-[1rem] font-bold cursor-pointer hover:bg-neutral-50 hover:text-black transition-all duration-500"
    >
      {price === "Other" ? "" : "$"}
      {price?.toLocaleString()}
    </div>
  );
};

export default DonateCard;
