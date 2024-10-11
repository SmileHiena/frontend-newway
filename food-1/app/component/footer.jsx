

export default function Footer() {
  return (
    <footer className="bg-[#1E1D1D]">
      <div
        className="relative bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: 'url(./assets/images/backgrounds/footer-bg.png)',
        }}
      ></div>
      <div className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-10 md:space-y-0">
          <div className="w-full md:w-1/4 animate-fadeIn">
            <a href="index.html" className="flex items-center">
              <img
                src="/assets/images/footer-logo-light.png"
                width="119"
                alt="Boskery HTML Template"
              />
            </a>
          </div>
          <div className="w-full md:w-[40%] animate-fadeIn">
            <form
              action="#"
              data-url="MAILCHIMP_FORM_URL"
              className="flex items-center space-x-3"
              noValidate
            >
              <input
                type="text"
                name="EMAIL"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="flex-shrink-0">
                <span className="sr-only">submit</span>
                <i className="icon-paper-plane text-[#A42125]"></i>
              </button>
            </form>
            <div className="mc-form__response mt-2"></div>
          </div>
        </div>

        <div className="py-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="w-full animate-fadeIn">
              <div className="footer-widget footer-widget--about">
                <h2 className="footer-widget__title text-xl font-bold">
                  Providing fresh and organic meat from our farm in a very hygienic way.
                </h2>
                <a
                  href="contact.html"
                  className="relative-order mt-3 inline-flex items-center px-6 py-2 border border-transparent rounded-lg bg-blue-500 text-white"
                >
                  <span className="relative-order__hover"></span>
                  <span className="relative-order__hover"></span>
                  <span className="relative-order__hover"></span>
                  <span className="relative-order__hover"></span>
                  <span className="relative-order__hover"></span>
                  <span className="relative-order__hover"></span>
                  <span className="relative-order__text">Contact Us</span>
                  <i className="icon-meat-3 ml-2"></i>
                </a>
              </div>
            </div>
            <div className="w-full animate-fadeIn">
              <div className="footer-widget footer-widget--links">
                <h2 className="footer-widget__title text-xl font-bold">Explore</h2>
                <ul className="list-none">
                  <li>
                    <a href="about.html" className="hover:underline text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="checkout.html" className="hover:underline text-white">
                      Place Order
                    </a>
                  </li>
                  <li>
                    <a href="team.html" className="hover:underline text-white">
                      Meet the Team
                    </a>
                  </li>
                  <li>
                    <a href="blog.html" className="hover:underline text-white">
                      Latest News
                    </a>
                  </li>
                  <li>
                    <a href="contact.html" className="hover:underline text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full animate-fadeIn">
              <div className="footer-widget footer-widget--contact"  style={{paddingLeft:"0"}}>
                <h2 className="footer-widget__title text-xl font-bold">Contact</h2>
                <div className="footer-widget__contact">
                  <address className="footer-widget__address">
                    85 Ketch Harbour Road Bensal PA 19020
                  </address>
                  <ul className="list-none">
                    <li>
                      <span className="icon-paper-plane text-[#A42125]"></span>{" "}
                      <a href="mailto:needhelp@company.com" className="hover:underline text-white">
                        needhelp@company.com
                      </a>
                    </li>
                    <li>
                      <span className="icon-phone-call text-[#A42125]"></span>{" "}
                      <a href="tel:+9156980036420" className="hover:underline text-white">
                        +91 5698 0036 420
                      </a>
                    </li>
                  </ul>
                  <div className="footer-widget__social flex space-x-4">
                    <a href="https://facebook.com" className="text-gray-500 ">
                      <i className="fab fa-facebook-f" aria-hidden="true"></i>
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a href="https://twitter.com" className="text-gray-500 ">
                      <i className="fab fa-twitter" aria-hidden="true"></i>
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a href="https://linkedin.com" className="text-gray-500 ">
                      <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                      <span className="sr-only">Linkedin</span>
                    </a>
                    <a href="https://youtube.com" aria-hidden="true" className="text-gray-500 ">
                      <i className="fab fa-youtube"></i>
                      <span className="sr-only">Youtube</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full animate-fadeIn">
              <div className="footer-widget footer-widget--gallery">
                <h2 className="footer-widget__title text-xl font-bold">Gallery</h2>
                <div className="grid grid-cols-3 gap-2 mt-3">
                  <a href="gallery.html" className="relative block w-[83px]">
                    <img
                      src="/assets/images/gallery/footer-widget-gallery-1.jpg"
                      alt="footer-widget-gallery"
                      className="w-full h-auto rounded"
                    />
                    <span className="footer-widget__gallery__icon absolute top-0 right-0 p-2 bg-white rounded-full">
                      <i className="icon-plus"></i>
                    </span>
                  </a>
                  <a href="gallery.html" className="relative block w-[83px]">
                    <img
                      src="/assets/images/gallery/footer-widget-gallery-2.jpg"
                      alt="footer-widget-gallery"
                      className="w-full h-auto rounded"
                    />
                    <span className="footer-widget__gallery__icon absolute top-0 right-0 p-2 bg-white rounded-full">
                      <i className="icon-plus"></i>
                    </span>
                  </a>
                  <a href="gallery.html" className="relative block w-[83px]">
                    <img
                      src="/assets/images/gallery/footer-widget-gallery-3.jpg"
                      alt="footer-widget-gallery"
                      className="w-full h-auto rounded"
                    />
                    <span className="footer-widget__gallery__icon absolute top-0 right-0 p-2 bg-white rounded-full">
                      <i className="icon-plus"></i>
                    </span>
                  </a>
                  <a href="gallery.html" className="relative block w-[83px]">
                    <img
                      src="/assets/images/gallery/footer-widget-gallery-4.jpg"
                      alt="footer-widget-gallery"
                      className="w-full h-auto rounded"
                    />
                    <span className="footer-widget__gallery__icon absolute top-0 right-0 p-2 bg-white rounded-full">
                      <i className="icon-plus"></i>
                    </span>
                  </a>
                  <a href="gallery.html" className="relative block w-[83px]">
                    <img
                      src="/assets/images/gallery/footer-widget-gallery-5.jpg"
                      alt="footer-widget-gallery"
                      className="w-full h-auto rounded"
                    />
                    <span className="footer-widget__gallery__icon absolute top-0 right-0 p-2 bg-white rounded-full">
                      <i className="icon-plus"></i>
                    </span>
                  </a>
                  <a href="gallery.html" className="relative block w-[83px]">
                    <img
                      src="/assets/images/gallery/footer-widget-gallery-6.jpg"
                      alt="footer-widget-gallery"
                      className="w-full h-auto rounded"
                    />
                    <span className="footer-widget__gallery__icon absolute top-0 right-0 p-2 bg-white rounded-full">
                      <i className="icon-plus"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <p className="text-white">
              © Copyright <span className="dynamic-year">2024</span> by Boskery HTML Template.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
