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
              Address: Independent street, road 54, Yaba Lagos
            </p>
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
              info@example.com
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
              + 01 234 567 88
            </p>
          </div>
          <div className="">
            <h6 className="mb-4 flex font-semibold uppercase justify-start">
              INFO
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                About Us
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Return Policy
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Shipping Policy
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Privacy Policy
              </a>
            </p>
            <p>
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Terms & Conditions
              </a>
            </p>
          </div>
          <div className="">
            <h6 className="mb-4 flex font-semibold uppercase justify-start">
              MY ACCOUNT
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Shopping Cart
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Wishlist
              </a>
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex font-semibold uppercase justify-start">
              Connect
            </h6>
            <p className="mb-5">
              Subscribe to receive updates, access to exclusive deals, and more.{" "}
            </p>

            <div className="flex flex-col gap-4">
              <input
                type="text"
                className="p-3 w-[200px] md:w-[300px] border-white border outline-none bg-transparent"
                placeholder="Email Address"
              />
              <button className="px-10 py-3 w-fit bg-[#C2A284] text-black">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
