import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <>
      {/* Contact section */}
      <section id="contact"
        className="bg-[#212529] bg-[url('/images/map-image.png')] bg-cover bg-center bg-no-repeat px-6 py-20 text-white">
        <div className="mb-14 text-center">
          <h2 className="font-['Montserrat'] text-[32px] font-bold md:text-[40px]">CONTACT US</h2>
          <p className="mt-4 font-['Roboto_Slab'] text-base italic text-gray-400">Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <form className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Left column */}
            <div className="flex flex-col gap-6">
              <div>
                <label htmlFor="contact-name" className="sr-only">
                Name (required)
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Name"
                  className="h-16 w-full rounded-md border border-gray-300 bg-white px-5 font-['Montserrat'] text-base text-[#212529] placeholder:font-bold placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#fed136]"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Email (required)
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email"
                  className="h-16 w-full rounded-md border border-gray-300 bg-white px-5 font-['Montserrat'] text-base text-[#212529] placeholder:font-bold placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#fed136]"
                />
              </div>

              <div>
                <label htmlFor="contact-phone" className="sr-only">Phone (required)</label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  placeholder="Phone"
                  className="h-16 w-full rounded-md border 
                  border-gray-300 bg-white px-5 font-['Montserrat'] 
                  text-base text-[#212529] placeholder:font-bold 
                  placeholder:text-gray-500 focus:outline-none focus:ring-2 
                  focus:ring-[#fed136]"/>
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col">
              <label htmlFor="contact-message" className="sr-only">
                Message (required)
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                placeholder="Message"
                className="min-h-[240px] w-full flex-1 resize-none 
                rounded-md border border-gray-300 bg-white p-5 
                font-['Montserrat'] text-base text-[#212529]
                placeholder:font-bold placeholder:text-gray-500 
                focus:outline-none focus:ring-2 focus:ring-[#fed136]" />
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              type="submit"
              aria-describedby="contact-status"
              className="rounded-md bg-[#fed136] px-8 py-5 font-['Montserrat'] 
              text-lg font-bold text-[#212529] 
              disabled:opacity-60">SEND MESSAGE</button>
          </div>
        </form>
      </section>

      {/* Bottom footer */}
      <footer className="bg-white px-6 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center font-['Montserrat'] text-sm text-[#212529] lg:flex-row">
          <p>Copyright © Your Website {new Date().getFullYear()}</p>

          <div className="flex items-center gap-5">
            <a
              href="https://twitter.com/"
              aria-label="Twitter"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#212529] text-white hover:bg-[#424649]"
            >
              <FaTwitter className="text-lg" />
            </a>

            <a
              href="https://facebook.com/"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#212529] text-white hover:bg-[#424649]"
            >
              <FaFacebookF className="text-lg" />
            </a>

            <a
              href="https://linkedin.com/"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#212529] text-white hover:bg-[#424649]"
            >
              <FaLinkedinIn className="text-lg" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;