import Header from "../../components/common/header/Header";
import Section2 from "../../components/contact/Section2";
import Footer from "../../components/footer/Footer";
import Form from "../../components/contact/Form";
import CommonSection1 from "../../components/common/CommonSection1";

const Contact = () => {
  return (
    <>
      <Header />

      <main>
        <CommonSection1
          tag={"NidoHongary"}
          title={"Contact Us"}
          body={"Reach out to us easily..."}
        />
        <Section2 />
        <section className="w-full min-h-[500px] flex md:flex-row flex-col gap-5 md:gap-[80px] justify-center my-10 px-5 md:p-[100px]">
          <img
            alt=""
            src="/images/slide2.jpg"
            className="w-full h-auto md:h-[400px] object-cover object-center"
          />
          <div className="w-full">
            <h1 className="text-[2.5rem]">Get in Touch with us!</h1>
            <Form />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
