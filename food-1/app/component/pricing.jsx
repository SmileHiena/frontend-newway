import React from "react";

function Pricing() {
  return (
    <section className="pricing-one pricing-one--home section-space-two">
      <div className="container">
        <div className="sec-title sec-title--center">
          <img
            src="assets/images/shapes/sec-title-s-1.png"
            alt="meat assortment"
            class="sec-title__img"
          />
          <h6 className="uppercase text-red-800">meat assortment</h6>
          <h2 className="uppercase text-6xl font-semibold ">Products price</h2>
        </div>
        <div>
          <ul class="flex space-x-4 border-b border-gray-200 justify-center items-center gap-8 ">
            <li data-tab="#beaf-meat" class="tab-btn hover:text-red-800">
              <i class="flex items-center justify-center relative  bg-red-800 z-[1] overflow-hidden  w-[70px] h-[70px]  text-[40px] text-[#F6F2EC]  rounded-full mb-[17px] ">
                <span class="icon-meat-5"></span>
              </i>
              <span
                class="uppercase  text-[16px] font-bold text-[#1E1D1D]
            "
              >
                Beaf meat
              </span>
            </li>
            <li
              data-tab="#beaf-meat"
              class="tab-btn cursor-pointer text-center text-gray-700 hover:text-gray-900 py-2  text-[15px] font-semibold leading-7 "
            >
              <i class=" relative after:absolute after:top-0 after:left-0 after:h-0 after:w-full hover:after:h-full after:transition-all after:ease-in-out after:duration-500 after:bg-red-800 z-[1] overflow-hidden  w-[70px] h-[70px] flex items-center justify-center text-[40px] text-[#A42125] bg-[#F6F2EC] rounded-full mb-[17px] transition-all duration-500 ease-in-out">
                <span class="icon-chicken-leg"></span>
              </i>
              <span class="uppercase  text-[16px] font-bold text-[#1E1D1D] flex items-center justify-center">
              Turkey
              </span>
            </li>
            <li
              data-tab="#beaf-meat"
              class="tab-btn cursor-pointer text-center text-gray-700 hover:text-gray-900 py-2  text-[15px] font-semibold leading-7 "
            >
              <i class=" relative after:absolute after:top-0 after:left-0 after:h-0 after:w-full hover:after:h-full after:transition-all after:ease-in-out after:duration-500 after:bg-red-800 z-[1] overflow-hidden  w-[70px] h-[70px] flex items-center justify-center text-[40px] text-[#A42125] bg-[#F6F2EC] rounded-full mb-[17px] transition-all duration-500 ease-in-out">
                <span class="icon-chicken"></span>
              </i>
              <span class="uppercase  text-[16px] font-bold text-[#1E1D1D] flex items-center justify-center">
              Poultry
              </span>
            </li>
            <li
              data-tab="#beaf-meat"
              class="tab-btn cursor-pointer text-center text-gray-700 hover:text-gray-900 py-2  text-[15px] font-semibold leading-7 "
            >
              <i class=" relative after:absolute after:top-0 after:left-0 after:h-0 after:w-full hover:after:h-full after:transition-all after:ease-in-out after:duration-500 after:bg-red-800 z-[1] overflow-hidden  w-[70px] h-[70px] flex items-center justify-center text-[40px] text-[#A42125] bg-[#F6F2EC] rounded-full mb-[17px] transition-all duration-500 ease-in-out">
                <span class="icon-meat-6"></span>
              </i>
              <span class="uppercase  text-[16px] font-bold text-[#1E1D1D] flex items-center justify-center">
              Lamb
              </span>
            </li>
            <li
              data-tab="#beaf-meat"
              class="tab-btn cursor-pointer text-center text-gray-700 hover:text-gray-900 py-2  text-[15px] font-semibold leading-7 "
            >
              <i class=" relative after:absolute after:top-0 after:left-0 after:h-0 after:w-full hover:after:h-full after:transition-all after:ease-in-out after:duration-500 after:bg-red-800 z-[1] overflow-hidden  w-[70px] h-[70px] flex items-center justify-center text-[40px] text-[#A42125] bg-[#F6F2EC] rounded-full mb-[17px] transition-all duration-500 ease-in-out">
                <span class="icon-meat-7"></span>
              </i>
              <span class="uppercase  text-[16px] font-bold text-[#1E1D1D] flex items-center justify-center">
              Goat
              </span>
            </li>
            <li
              data-tab="#beaf-meat"
              class="tab-btn cursor-pointer text-center text-gray-700 hover:text-gray-900 py-2  text-[15px] font-semibold leading-7 "
            >
              <i class=" relative after:absolute after:top-0 after:left-0 after:h-0 after:w-full hover:after:h-full after:transition-all after:ease-in-out after:duration-500 after:bg-red-800 z-[1] overflow-hidden  w-[70px] h-[70px] flex items-center justify-center text-[40px] text-[#A42125] bg-[#F6F2EC] rounded-full mb-[17px] transition-all duration-500 ease-in-out">
                <span class="icon-meat-8"></span>
              </i>
              <span class="uppercase  text-[16px] font-bold text-[#1E1D1D] flex items-center justify-center">
              Rabbit
              </span>
            </li>
          </ul>

          <div className="tabs-content">
            <div className="tab active-tab fadeInUp animated">
              <div className="row gutter-y-30">
                <div class="gutter-y-30 w-full">
                  <div class="flex flex-wrap mx-[15px]">
                    <div class="w-full md:w-1/2 p-4">
                      <div class=" items-center bg-white rounded-lg  p-4 mb-4 pb-[30px] flex  justify-between bg-transparent gap-[30px] shadow-none border-b border-dashed border-[#EBE3D9]">
                        <div class="flex-shrink-0">
                          <img
                            src="assets/images/pricing/pricing-product-1-1.png"
                            alt="Rabbit with mustard"
                            class="w-24 h-24 "
                          />
                        </div>
                        <div class="flex-1">
                          <h4 class="text-lg font-semibold text-gray-800">
                            <a
                              href="shop-details.html"
                              class="text-[#1e1d1d] text-[20px] uppercase hover:text-red-800 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300 after:bg-red-800"
                            >
                              Rabbit with mustard
                            </a>
                          </h4>
                          <span class="block text-gray-500 text-sm">
                            vacuum package
                          </span>
                        </div>
                        <div class="text-right ml-auto flex justify-center items-center gap-5">
                          <div class="text-gray-600 text-sm">
                            <span class="font-bold text-[16px]">500g</span>
                          </div>
                          <div class="text-red-800 font-bold">
                            <span>$59</span>
                          </div>
                        </div>
                      </div>
                      <div class=" items-center bg-white rounded-lg  p-4 mb-4 pb-[30px] flex  justify-between bg-transparent gap-[30px] shadow-none border-b border-dashed border-[#EBE3D9]">
                        <div class="flex-shrink-0">
                          <img
                            src="assets/images/pricing/pricing-product-1-1.png"
                            alt="Rabbit with mustard"
                            class="w-24 h-24 "
                          />
                        </div>
                        <div class="flex-1">
                          <h4 class="text-lg font-semibold text-gray-800">
                            <a
                              href="shop-details.html"
                              class="text-[#1e1d1d] text-[20px] uppercase hover:text-red-800 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300 after:bg-red-800"
                            >
                              Rabbit with mustard
                            </a>
                          </h4>
                          <span class="block text-gray-500 text-sm">
                            vacuum package
                          </span>
                        </div>
                        <div class="text-right ml-auto flex justify-center items-center gap-5">
                          <div class="text-gray-600 text-sm">
                            <span class="font-bold text-[16px]">500g</span>
                          </div>
                          <div class="text-red-800 font-bold">
                            <span>$59</span>
                          </div>
                        </div>
                      </div>
                      <div class=" items-center bg-white rounded-lg  p-4 mb-4 pb-[30px] flex  justify-between bg-transparent gap-[30px] shadow-none border-b border-dashed border-[#EBE3D9]">
                        <div class="flex-shrink-0">
                          <img
                            src="assets/images/pricing/pricing-product-1-1.png"
                            alt="Rabbit with mustard"
                            class="w-24 h-24 "
                          />
                        </div>
                        <div class="flex-1">
                          <h4 class="text-lg font-semibold text-gray-800">
                            <a
                              href="shop-details.html"
                              class="text-[#1e1d1d] text-[20px] uppercase hover:text-red-800 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300 after:bg-red-800"
                            >
                              Rabbit with mustard
                            </a>
                          </h4>
                          <span class="block text-gray-500 text-sm">
                            vacuum package
                          </span>
                        </div>
                        <div class="text-right ml-auto flex justify-center items-center gap-5">
                          <div class="text-gray-600 text-sm">
                            <span class="font-bold text-[16px]">500g</span>
                          </div>
                          <div class="text-red-800 font-bold">
                            <span>$59</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full md:w-1/2 p-4">
                      <div class=" items-center bg-white rounded-lg  p-4 mb-4 pb-[30px] flex  justify-between bg-transparent gap-[30px] shadow-none border-b border-dashed border-[#EBE3D9]">
                        <div class="flex-shrink-0">
                          <img
                            src="assets/images/pricing/pricing-product-1-1.png"
                            alt="Rabbit with mustard"
                            class="w-24 h-24 "
                          />
                        </div>
                        <div class="flex-1">
                          <h4 class="text-lg font-semibold text-gray-800">
                            <a
                              href="shop-details.html"
                              class="text-[#1e1d1d] text-[20px] uppercase hover:text-red-800 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300 after:bg-red-800"
                            >
                              Rabbit with mustard
                            </a>
                          </h4>
                          <span class="block text-gray-500 text-sm">
                            vacuum package
                          </span>
                        </div>
                        <div class="text-right ml-auto flex justify-center items-center gap-5">
                          <div class="text-gray-600 text-sm">
                            <span class="font-bold text-[16px]">500g</span>
                          </div>
                          <div class="text-red-800 font-bold">
                            <span>$59</span>
                          </div>
                        </div>
                      </div>
                      <div class=" items-center bg-white rounded-lg  p-4 mb-4 pb-[30px] flex  justify-between bg-transparent gap-[30px] shadow-none border-b border-dashed border-[#EBE3D9]">
                        <div class="flex-shrink-0">
                          <img
                            src="assets/images/pricing/pricing-product-1-1.png"
                            alt="Rabbit with mustard"
                            class="w-24 h-24 "
                          />
                        </div>
                        <div class="flex-1">
                          <h4 class="text-lg font-semibold text-gray-800">
                            <a
                              href="shop-details.html"
                              class="text-[#1e1d1d] text-[20px] uppercase hover:text-red-800 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300 after:bg-red-800"
                            >
                              Rabbit with mustard
                            </a>
                          </h4>
                          <span class="block text-gray-500 text-sm">
                            vacuum package
                          </span>
                        </div>
                        <div class="text-right ml-auto flex justify-center items-center gap-5">
                          <div class="text-gray-600 text-sm">
                            <span class="font-bold text-[16px]">500g</span>
                          </div>
                          <div class="text-red-800 font-bold">
                            <span>$59</span>
                          </div>
                        </div>
                      </div>
                      <div class=" items-center bg-white rounded-lg  p-4 mb-4 pb-[30px] flex  justify-between bg-transparent gap-[30px] shadow-none border-b border-dashed border-[#EBE3D9]">
                        <div class="flex-shrink-0">
                          <img
                            src="assets/images/pricing/pricing-product-1-1.png"
                            alt="Rabbit with mustard"
                            class="w-24 h-24 "
                          />
                        </div>
                        <div class="flex-1">
                          <h4 class="text-lg font-semibold text-gray-800">
                            <a
                              href="shop-details.html"
                              class="text-[#1e1d1d] text-[20px] uppercase hover:text-red-800 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300 after:bg-red-800"
                            >
                              Rabbit with mustard
                            </a>
                          </h4>
                          <span class="block text-gray-500 text-sm">
                            vacuum package
                          </span>
                        </div>
                        <div class="text-right ml-auto flex justify-center items-center gap-5">
                          <div class="text-gray-600 text-sm">
                            <span class="font-bold text-[16px]">500g</span>
                          </div>
                          <div class="text-red-800 font-bold">
                            <span>$59</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
