"use client";
import { useState, useRef, useEffect } from 'react';
import MobileNav from '../component/MobileNav';
// import SubMenu from '../component/SubMenu'; // Import SubMenu

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const currentPage = 'home'; // Cập nhật giá trị này tương ứng với trang hiện tại
    const mainMenuRef = useRef(null);
    const mobileNavRef = useRef(null);

    useEffect(() => {
        // Lấy tên file từ URL
        const fileName = window.location.href.split("/").pop();

        const mainNavUL = mainMenuRef.current;
        if (mainNavUL) {
            mainNavUL.querySelectorAll("li").forEach(li => {
                const anchor = li.querySelector("a");
                if (anchor && anchor.getAttribute("href") === fileName) {
                    li.classList.add("current");
                }
            });
        }

        const mobileNavContainer = mobileNavRef.current;
        if (mobileNavContainer && mainNavUL) {
            mobileNavContainer.innerHTML = mainNavUL.innerHTML; // Sao chép nội dung
        }
    }, []);

    const toggleMenu = () => {
        setIsOpen(prev => !prev); // Đảo ngược trạng thái của menu
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev); // Đảo ngược trạng thái của menu con
    };

    return (
        <header className="w-full flex justify-start items-center pl-92 font-boskery-heading-font">
            <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} />
            <div className="flex items-center space-x-4" style={{ marginRight: "78px" }}>
                <img src="/assets/images/logo-dark.png" alt="Company Logo" className="w-[100px] h-auto" style={{ maxWidth: "100px" }} />
            </div>

            <div className="w-full">
                <div className="bg-red-700 text-white flex justify-between items-center px-[70px] py-3 hidden md:flex">
                    <div className="flex items-center space-x-4 hidden xxl:flex">
                        <i className="fas fa-envelope"></i>
                        <span className='hover:underline'>needhelp@company.com</span>
                        <i className="fas fa-map-marker-alt"></i>
                        <span className='hover:underline'>85 Ketch Harbour Road Bensalem, PA 19020</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <ul className="list-unstyled topbar__pages flex space-x-4">
                            <li><a href="contact.html" className="text-white hover:text-black">Help</a></li>
                            <li><a href="contact.html" className="text-white hover:text-black">Support</a></li>
                            <li><a href="contact.html" className="text-white hover:text-black">Contact</a></li>
                        </ul>
                        <div className="flex space-x-4">
                            <i className="fab fa-facebook-f hover:text-black"></i>
                            <i className="fab fa-twitter hover:text-black"></i>
                            <i className="fab fa-pinterest hover:text-black"></i>
                            <i className="fab fa-instagram hover:text-black"></i>
                        </div>
                    </div>
                </div>
                <div className="bg-white flex justify-between items-center pl-4">
                    <nav className="relative z-50"> {/* Add a z-index for the entire nav */}
                        <ul className="hidden xxl:flex lg:space-x-6">
                            {['home', 'about', 'services', 'pages', 'shop', 'news', 'login'].map((page) => (
                                <li key={page} className="relative">
                                    <a
                                        href={page === 'login' ? '/page/login' : page === 'home' ? '/' : `/${page}`} // Correct the homepage condition
                                        className={`text-gray-700 hover:text-black hover:font-bold text-[16px] ${currentPage === page ? 'font-bold text-black' : ''}`}
                                        onClick={page === 'pages' ? (e) => { e.preventDefault(); toggleDropdown(); } : undefined}
                                    >
                                        {page.toUpperCase()}
                                    </a>

                                    {/* Submenu for "Pages" */}
                                    {page === 'pages' && (
                                        <ul
                                            className={`absolute left-0 bg-white shadow-lg rounded-md mt-2 transition-all w-[200px] z-50 duration-300 ease-in-out transform ${isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'}`}
                                            style={{ transformOrigin: 'top left' }} // Ensure smooth scaling
                                        >
                                            <li><a href="/page/cart" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Cart</a></li>
                                            <li><a href="/page/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Login</a></li>
                                            <li><a href="/page/register" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Register</a></li>
                                            <li><a href="/page/profile-edit" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Edit Profile</a></li>
                                            <li><a href="/page/PurchaseHistory" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Purchase History</a></li>
                                            <li><a href="/page/ViewOrder" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">View Order</a></li>
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Mobile navigation button */}
                        <div className="mobile-nav__btn mobile-nav__toggler flex flex-col justify-center items-center cursor-pointer xxl:hidden ml-4">
                            <span className="block w-6 h-1 bg-gray-700 mb-1"></span>
                            <span className="block w-6 h-1 bg-gray-700 mb-1"></span>
                            <span className="block w-6 h-1 bg-gray-700"></span>
                        </div>
                    </nav>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 hidden xl:flex gap-[20px]">
                            <span className="main-header__call__icon icon-mobile"></span>
                            <div>
                                <span className="">CALL ANYTIME</span>
                                <span className="block text-black font-bold">+ 92(8800) - 9850</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="search-toggler main-header__search flex items-center text-black hover:text-red-700">
                                <i className="fas fa-search"></i>
                                <span className="sr-only">Search</span>
                            </a>
                            <i className="fas fa-shopping-cart text-black"></i>
                        </div>
                        <a href="contact.html" className="relative-order flex justify-center items-center bg-red-700 text-white ml-[51px] w-[205px] h-[80px] p-0 hidden dt:flex">
                            <span className="relative-order__hover"></span>
                            <span className="relative-order__hover"></span>
                            <span className="relative-order__hover"></span>
                            <span className="relative-order__hover"></span>
                            <span className="relative-order__hover"></span>
                            <span className="relative-order__hover"></span>
                            <span className="relative z-10">Order Now</span>
                            <i className="icon-meat-3 relative z-10 ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
