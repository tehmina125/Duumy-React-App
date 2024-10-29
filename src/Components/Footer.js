import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-gray-100 fixed bottom-0 left-0 w-full text-center text-surface dark:bg-neutral-700 dark:text-white">
      <div className="container px-6 pt-6">
        <div className="mb-6 flex justify-center space-x-2">
          {/* Social Media Icons */}
          {/* ... Your existing social media buttons ... */}
        </div>

        <div>
          <form action="">
            <div className="grid-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
              <div className="md:mb-6 md:ms-auto">
                <p>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              <div className="relative md:mb-6" data-twe-input-wrapper-init>
                <input
                  type="email"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100"
                  id="exampleFormControlInputEmail"
                  placeholder="Email address"
                />
                <label
                  htmlFor="exampleFormControlInputEmail"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8]"
                >
                  Email address
                </label>
              </div>
              <div className="mb-6 md:me-auto">
                <button
                  type="submit"
                  className="inline-block rounded px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="mb-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam,
            commodi optio pariatur est quia magnam eum harum corrupti dicta,
            aliquam sequi voluptate quas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Company</h5>
            <ul className="mb-0 list-none">
              <li>
                <a href="#!">About Us</a>
              </li>
              <li>
                <a href="#!">Our Services</a>
              </li>
              <li>
                <a href="#!">Careers</a>
              </li>
              <li>
                <a href="#!">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Products</h5>
            <ul className="mb-0 list-none">
              <li>
                <a href="#!">Product 1</a>
              </li>
              <li>
                <a href="#!">Product 2</a>
              </li>
              <li>
                <a href="#!">Product 3</a>
              </li>
              <li>
                <a href="#!">Product 4</a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Resources</h5>
            <ul className="mb-0 list-none">
              <li>
                <a href="#!">Blog</a>
              </li>
              <li>
                <a href="#!">Help Center</a>
              </li>
              <li>
                <a href="#!">Privacy Policy</a>
              </li>
              <li>
                <a href="#!">Terms of Service</a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Follow Us</h5>
            <ul className="mb-0 list-none">
              <li>
                <a href="#!">Facebook</a>
              </li>
              <li>
                <a href="#!">Twitter</a>
              </li>
              <li>
                <a href="#!">Instagram</a>
              </li>
              <li>
                <a href="#!">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full bg-black/5 p-4 text-center">
        © 2023 Copyright:
        <a className="font-semibold" href="https://tw-elements.com/">TW Elements</a>
      </div>
    </footer>
  );
};

export default Footer;
