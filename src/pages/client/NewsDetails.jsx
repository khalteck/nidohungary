import { FaAngleDoubleDown } from "react-icons/fa";
import CommonSection1 from "../../components/common/CommonSection1";
import WorkInProgress from "../../components/common/WorkInProgress";
import Header from "../../components/common/header/Header";
import Footer from "../../components/footer/Footer";
import news from "../../data/news.json";
import { useParams } from "react-router-dom";

const NewsDetails = () => {
  const { slug } = useParams();
  const currentNews = news?.filter((x) => x?.slug === slug)[0];

  return (
    <>
      <Header />

      <main>
        <CommonSection1
          tag={"NidoHongary News"}
          title={`News - ${currentNews?.title}`}
          body={`${currentNews?.preview}`}
        />
        <section className="w-full min-h-[500px] flex flex-col gap-5 md:gap-[80px] justify-center my-10 px-5 md:px-[100px] pb-[80px]">
          <div>
            <h1 className="text-[1.75rem] md:text-[2.5rem]">
              {currentNews?.body?.paragraphs[0]}
            </h1>
            {currentNews?.body?.paragraphs?.map((item, index) => {
              return (
                <p key={index} className={`my-5 ${index === 0 && "hidden"}`}>
                  {item}
                </p>
              );
            })}
          </div>

          <div className="">
            <div className="w-fit px-4 py-1 rounded-md border border-[#082f49] text-[#082f49] text-[.85rem] uppercase tracking-wider mb-4">
              news
            </div>
            <h1 className="text-[1.75rem] md:text-[2.5rem] mb-4">
              More Than Just a Country, It's an Experience! 🇳🇬
            </h1>
            <p className="w-full md:w-[70%] mb-10">
              NIDO Hungary wants to keep you connected to the beauty and
              vibrancy of Nigeria, even while you're abroad. So, bookmark this
              page, share it with your fellow Nigerians, and let's celebrate the
              magic of our motherland together!
              <br />
              <span className="font-bold">
                Here are some ways to get involved:
              </span>
            </p>
            <div className="w-full flex md:flex-row-reverse flex-col-reverse gap-5 md:gap-10 md:justify-end relative">
              <div className="w-full md:w-[50%] md:h-[500px] p-10 md:p-[50px] bg-[#082f49] text-white md:text-[1.15rem] md:absolute right-0 top-[50%] md:translate-y-[-50%] flex flex-col shadow-md">
                <p className="mb-5 tracking-wider">
                  <span className="font-bold">
                    Share your Nigerian experiences!
                  </span>{" "}
                  Have you traveled to a breathtaking part of Nigeria? We'd love
                  to see your photos and hear your stories in the comments
                  below.
                  <br />
                  <br />
                  <span className="font-bold">Recommend hidden gems!</span> Do
                  you know of a must-try Nigerian dish or a cultural experience
                  not to be missed? Share your recommendations and inspire
                  others.
                  <br />
                  <br />
                  <span className="font-bold">Let's reminisce!</span> What
                  aspects of Nigerian life do you miss the most? Share your
                  memories and connect with others who feel the same way.
                </p>
                <div className="mt-auto p-5 border-white/20 border w-fit">
                  <FaAngleDoubleDown size={"30px"} color="white" />
                </div>
              </div>
              <img
                alt=""
                src="/images/slide1.jpg"
                className="w-full md:w-[60%] h-auto"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default NewsDetails;
