import CommonSection1 from "../../components/common/CommonSection1";
import Header from "../../components/common/header/Header";
import Footer from "../../components/footer/Footer";

const Information = () => {
  return (
    <>
      <Header />

      <main>
        <CommonSection1
          tag={"NidiHongary"}
          title={"Information"}
          body={"Get information, never miss out..."}
        />
        <section className="w-full min-h-[500px] flex md:flex-row flex-col gap-5 md:gap-[80px] justify-center my-10 px-5 md:p-[100px]"></section>
      </main>

      <Footer />
    </>
  );
};

export default Information;
