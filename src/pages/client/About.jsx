import CommonSection1 from "../../components/common/CommonSection1";
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import Header from "../../components/common/header/Header";
import Footer from "../../components/footer/Footer";
import Section6 from "../../components/home/Section6";

const About = () => {
  return (
    <>
      <Header />

      <main>
        <CommonSection1
          tag={"NidoHongary"}
          title={"About Us"}
          body={"Who are we? What we do? How we do it..."}
        />
        <section className="w-full bg-neutral-50 p-5 md:p-[100px] text-[1.2rem]">
          <div>
            <h1 className="text-[2.5rem]">Who are we?</h1>
            <p className="mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br />
              ed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
          </div>
          <div className="w-full p-3 md:p-[80px] bg-neutral-200 flex md:flex-row flex-col gap-8 md:gap-[100px] mt-[50px] md:mt-[100px]">
            <img
              alt=""
              src="/images/slide2.jpg"
              className="w-full h-auto md:h-[400px] object-cover object-center"
            />
            <div>
              <h1 className="text-[2.5rem]">What we do?</h1>
              <p className="mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </section>

        <Section6 />
      </main>

      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default About;
