// app/layout.tsx
import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Aboutme from "./component/about-me"

// Load local fonts
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// Metadata for the document head
export const metadata: Metadata = {
  title: "Boskery || HTML Template For Butcher & Meat",
  description: "Boskery is a modern butcher & meat shop HTML5 Template.",
};

// Root layout component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home One || Boskery || HTML Template For Butcher & Meat</title>
        {/* Favicon Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="assets/images/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicons/favicon-16x16.png" />
        <link rel="manifest" href="assets/images/favicons/site.webmanifest" />
        <meta name="description" content="Boskery is a modern butcher & meat shop HTML5 Template." />

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cormorant:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap" rel="stylesheet" /> */}

        {/* Stylesheets */}
        {/* 
        <link rel="stylesheet" href="./assets/vendors/bootstrap-select/bootstrap-select.min.css" />
        <link rel="stylesheet" href="./assets/vendors/animate/animate.min.css" />
        <link rel="stylesheet" href="./assets/vendors/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="./assets/vendors/jquery-ui/jquery-ui.css" />
        <link rel="stylesheet" href="./assets/vendors/jarallax/jarallax.css" />
        <link rel="stylesheet" href="./assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css" />
        <link rel="stylesheet" href="./assets/vendors/nouislider/nouislider.min.css" />
        <link rel="stylesheet" href="./assets/vendors/nouislider/nouislider.pips.css" />
        <link rel="stylesheet" href="./assets/vendors/tiny-slider/tiny-slider.css" />
        <link rel="stylesheet" href="./assets/vendors/boskery-icons/style.css" />
        <link rel="stylesheet" href="./assets/vendors/owl-carousel/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="./assets/vendors/owl-carousel/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="./assets/vendors/swiper/css/swiper-bundle.min.css" />*/}
        {/* <link rel="stylesheet" href="./assets/css/boskery.css" /> 
        <link rel="stylesheet" href="./assets/vendors/bootstrap/css/bootstrap.min.css" /> */}

        {/* Inline styles for jarallax */}
        <style type="text/css" id="jarallax-clip-0">
          {`#jarallax-container-0 {
            clip: rect(0 1348px 556px 0);
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }`}
        </style>
        <style type="text/css" id="jarallax-clip-1">
          {`#jarallax-container-1 {
            clip: rect(0 1348px 901.90625px 0);
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }`}
        </style>
      </head>

      <body className="custom-cursor">
        <div className="custom-cursor__cursor" />
        <div className="custom-cursor__cursor-two" />

        <div className="preloader" style={{ display: 'none' }}>
          <div className="preloader__image" style={{ backgroundImage: 'url(assets/images/loader.png)' }} />
        </div>

        <div className="page-wrapper">
          <Header />
          {children}
          <Footer />
        </div>

        {/* <SearchPopup /> */}
        {/* <SidebarOne /> */}

        <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
          <span className="scroll-to-top__text">back top</span>
          <span className="scroll-to-top__wrapper">
            <span className="scroll-to-top__inner" style={{ width: '9.88194%' }} />
          </span>
        </a>

        {/* Scripts */}
        {/* <script src="./assets/vendors/jquery/jquery-3.7.0.min.js" />
        <script src="./assets/vendors/bootstrap/js/bootstrap.bundle.min.js" />
        <script src="./assets/vendors/bootstrap-select/bootstrap-select.min.js" />
        <script src="./assets/vendors/jarallax/jarallax.min.js" />
        <script src="./assets/vendors/jquery-ui/jquery-ui.js" />
        <script src="./assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js" />
        <script src="./assets/vendors/jquery-appear/jquery.appear.min.js" />
        <script src="./assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js" />
        <script src="./assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js" />
        <script src="./assets/vendors/jquery-validate/jquery.validate.min.js" />
        <script src="./assets/vendors/nouislider/nouislider.min.js" />
        <script src="./assets/vendors/tiny-slider/tiny-slider.js" />
        <script src="./assets/vendors/wnumb/wNumb.min.js" />
        <script src="./assets/vendors/owl-carousel/js/owl.carousel.min.js" />
        <script src="./assets/vendors/swiper/js/swiper-bundle.min.js" />
        <script src="./assets/vendors/wow/wow.js" />
        <script src="./assets/vendors/imagesloaded/imagesloaded.min.js" />
        <script src="./assets/vendors/isotope/isotope.js" />
        <script src="./assets/vendors/countdown/countdown.min.js" />
        <script src="./assets/vendors/jquery-circleType/jquery.circleType.js" />
        <script src="./assets/vendors/jquery-lettering/jquery.lettering.min.js" />
        <script src="./assets/js/boskery.js" /> */}
      </body>
    </html>
  );
}
