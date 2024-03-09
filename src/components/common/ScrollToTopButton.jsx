import { VscFoldUp } from "react-icons/vsc";

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="fixed bottom-5 right-5 bg-[#082f49] text-white p-4 rounded-full border border-white/50 z-[100]"
      onClick={handleScrollToTop}
    >
      <VscFoldUp size="25px" color="white" />
    </button>
  );
};

export default ScrollToTopButton;
