import CommonSection1 from "../../components/common/CommonSection1";
import WorkInProgress from "../../components/common/WorkInProgress";
import Header from "../../components/common/header/Header";
import Footer from "../../components/footer/Footer";
import news from "../../data/news.json";
import { useParams } from "react-router-dom";

const NewsDetails = () => {
  const { slug } = useParams();
  const currentNews = news?.filter((x) => x?.slug === slug)[0];

  console.log("currentNews", currentNews);
  return (
    <>
      <Header />

      <main>
        <CommonSection1
          tag={"NidiHongary News"}
          title={`News - ${currentNews?.title}`}
          body={`${currentNews?.body?.slice(0, 30)}`}
        />
        <section className="w-full min-h-[500px] flex md:flex-row flex-col gap-5 md:gap-[80px] justify-center my-10 px-5 md:p-[100px]">
          <WorkInProgress />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default NewsDetails;
