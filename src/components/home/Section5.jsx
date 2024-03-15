import NewsCard from "./NewsCard";
import newsData from "../../data/news.json";

const Section5 = () => {
  return (
    <section
      id="news"
      className="w-full min-h-[500px] px-5 py-[60px] md:p-[100px]"
    >
      <h1 className="text-[2.5rem]">News</h1>
      <h2 className="text-[1.5rem]">
        Stay up to date with happenings in Nigeria...
      </h2>
      <div className="w-full mt-10 flex flex-wrap gap-7">
        {newsData?.map((item, index) => {
          return <NewsCard key={index} item={item} />;
        })}
      </div>
    </section>
  );
};

export default Section5;
