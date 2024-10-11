"use client";

// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Aboutme() {
  return (
    <section className="pt-16" id="about">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div
            className="lg:w-1/2 px-4 wow fadeInLeft animated"
            data-wow-duration="1500ms"
            style={{
              visibility: "visible",
              animationDuration: "1500ms",
              animationName: "fadeInLeft",
            }}
          >
            <div className="relative">
              <h3 className="absolute top-4 left-4 bg-white py-2 px-4 text-lg font-bold">
                since 1996
              </h3>
              <img
                src="assets/images/about/about-1-1.jpg"
                alt="about image"
                className="w-full h-auto"
              />
              <a
                href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="text-4xl text-white bg-black rounded-full p-3">
                  ▶
                </span>
              </a>
              <div className="absolute inset-0 border-4 border-gray-300"></div>
            </div>
            <img
              src="assets/images/shapes/about-shape-1-1.png"
              alt="about shape"
              className="mt-8"
            />
          </div>
          <div
            className="lg:w-1/2 px-4 wow fadeInRight animated"
            data-wow-duration="1500ms"
            style={{
              visibility: "visible",
              animationDuration: "1500ms",
              animationName: "fadeInRight",
            }}
          >
            <div>
              <div className="mb-8">
                <img
                  src="assets/images/shapes/sec-title-s-1.png"
                  alt="about boskery meat shop"
                  className="mb-4"
                />
                <h6 className="text-gray-600 uppercase tracking-wide">
                  about boskery meat shop
                </h6>
                <h2 className="text-3xl font-bold mb-4">
                  We Provide Best Meat
                </h2>
              </div>
              <p className="mb-6 text-gray-700">
                We are trusted by many clients from all over the country. Cras
                non dui id ex mattis vehicula. Nullam posuere ligula non libero
                mollis, non ornare sapien rutrum. Quisque vitae risus venenatis,
                dignissim felis id, vulputate nisl. Praesent sed felis aliquam,
                ullamcorper tellus.
              </p>
              <div className="mb-6">
                <h5 className="font-semibold text-xl mb-4">
                  Raw Meat Production by Leading Farm
                </h5>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span> Premium Cuts
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span> Quality
                    Sourcing
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span> Custom
                    Butchering
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span> Freshness
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span> Best Reviews
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span> 100% Organic
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="contact.html"
                  className="relative inline-block bg-red-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-600 transition-all"
                >
                  <span className="absolute inset-0 bg-white opacity-10 rounded-lg"></span>
                  <span className="relative">Know About Us</span>
                </a>
                <div className="flex items-center">
                  <div className="bg-red-500 p-4 rounded-full text-white mr-4">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Call for Delivery</h4>
                    <a
                      href="tel:+92(8800)68900"
                      className="text-red-500 font-bold"
                    >
                      +92 (8800) 68900
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-16">
        <img
          src="assets/images/shapes/about-shape-1-2.png"
          alt="about shape"
          className="absolute left-0"
        />
        <img
          src="assets/images/shapes/about-shape-1-3.png"
          alt="about shape"
          className="absolute right-0"
        />
      </div>
    </section>
  );
}

export default Aboutme;
