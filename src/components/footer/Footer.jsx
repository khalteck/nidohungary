import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center bg-[#0f172a] text-neutral-200 lg:text-left">
      <div className="mx-6 py-[80px] text-left px-5 md:px-[100px]">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className="mb-4 flex items-center font-semibold uppercase justify-start">
              <img
                alt="logo"
                src="/images/logo.png"
                className="min-w-[100px] w-[150px] h-auto block"
              />
            </h6>
            <p className="mb-5">
              NIDO Hungary: Your Bridge Between Nigeria and Hungary! 🇳🇬🇭🇺
            </p>
          </div>
          <div className="">
            <h6 className="mb-4 flex font-semibold uppercase justify-start">
              INFO
            </h6>
            <p className="mb-4">
              <Link
                to="/about"
                className="text-neutral-600 dark:text-neutral-200"
              >
                About Us
              </Link>
            </p>

            <p className="mb-4">
              <Link
                to="/community"
                className="text-neutral-600 dark:text-neutral-200"
              >
                Community
              </Link>
            </p>
            <p className="mb-4">
              <Link
                to="/information"
                className="text-neutral-600 dark:text-neutral-200"
              >
                Information
              </Link>
            </p>
          </div>
          <div className="">
            <h6 className="mb-4 flex font-semibold uppercase justify-start">
              Communities
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Facebook
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                X
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Instagram
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                LinkedIn
              </a>
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex font-semibold uppercase justify-start">
              Contact Information
            </h6>
            <p className="mb-4 flex items-center justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <a href="mailto:nidohungary24@gmail.com" className="">
                nidohungary24@gmail.com
              </a>
            </p>
            <p className="mb-4 flex items-center justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              <a href="tel:+34**********" className="">
                +34 123 456 7890
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pb-10 text-[.75rem] text-neutral-300">
        Copyright @2024 NIDO Hungary. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
