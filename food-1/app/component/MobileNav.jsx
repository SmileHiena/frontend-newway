"use client";
import React from 'react';

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <div className={`mobile-nav__wrapper ${isOpen ? 'expanded' : 'hidden'}`}>
            <div className="mobile-nav__overlay" onClick={toggleMenu}></div>
            <div className="mobile-nav__content">
                <span className="mobile-nav__close cursor-pointer" onClick={toggleMenu}>
                    <i className="fa fa-times"></i>
                </span>
                <div className="logo-box">
                    <a href="/" aria-label="logo image">
                        <img
                            src="/assets/images/logo-light.png"
                            width={100}
                            height={100}
                            alt="logo"
                        />
                    </a>
                </div>

                <div className="mobile-nav__container">
                    <ul className="main-menu__list">
                        <li className="dropdown megamenu current">
                            <a href="index.html">Home<button aria-label="dropdown toggler"><i className="fa fa-angle-down"></i></button></a>
                            <ul>
                                <li className="current">
                                    <section className="home-showcase">
                                        <div className="container">
                                            <div className="home-showcase__inner">
                                                <div className="row">
                                                    {Array.from({ length: 4 }).map((_, index) => (
                                                        <div className="col-md-6 col-lg-3" key={index}>
                                                            <div className="demo-one__card">
                                                                <div className="demo-one__image">
                                                                    <img src={`assets/images/home-showcase/home-showcase-${index + 1}.jpg`} alt="" />
                                                                    <div className="demo-one__btns">
                                                                        <a href={`index-${index + 1}.html`} className="boskery-btn demo-one__btn">
                                                                            <span className="boskery-btn__hover"></span>
                                                                            <span className="boskery-btn__hover"></span>
                                                                            <span className="boskery-btn__hover"></span>
                                                                            <span className="boskery-btn__hover"></span>
                                                                            <span className="boskery-btn__hover"></span>
                                                                            <span className="boskery-btn__hover"></span>
                                                                            <span className="boskery-btn__text">Multi Page</span>
                                                                        </a>
                                                                        <a href={`index-${index + 1}-one-page.html`} className="boskery-btn demo-one__btn">
                                                                            <span className="boskery-btn__hover"></span>
                                                                            <span className="boskery-btn__hover"></span>
                                                                            <span className="boskery-btn__hover"></span>
                                                                            <span className="boskery-btn__hover"></span>
                                                                            <span className="boskery-btn__hover"></span>
                                                                            <span className="boskery-btn__hover"></span>
                                                                            <span className="boskery-btn__text">One Page</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="demo-one__content">
                                                                    <h3 className="demo-one__title">
                                                                        <a href={`index-${index + 1}.html`}>Home Page 0{index + 1}</a>
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                    <div className="col-md-6 col-lg-3">
                                                        <div className="demo-one__card">
                                                            <div className="demo-one__image">
                                                                <img src="assets/images/home-showcase/home-showcase-4.jpg" alt="" />
                                                                <div className="demo-one__btns">
                                                                    <a href="index-dark.html" className="boskery-btn demo-one__btn">
                                                                        <span className="boskery-btn__hover"></span>
                                                                        <span className="boskery-btn__hover"></span>
                                                                        <span className="boskery-btn__hover"></span>
                                                                        <span className="boskery-btn__hover"></span>
                                                                        <span className="boskery-btn__hover"></span>
                                                                        <span className="boskery-btn__hover"></span>
                                                                        <span className="boskery-btn__text">View Page</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="demo-one__content">
                                                                <h3 className="demo-one__title">
                                                                    <a href="index-dark.html">Home Dark</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="about.html">About Us</a>
                        </li>
                        <li className="dropdown">
                            <a href="#">Services<button aria-label="dropdown toggler"><i className="fa fa-angle-down"></i></button></a>
                            <ul>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="services-carousel.html">Services Carousel</a></li>
                                <li><a href="service-d-custom-cutting.html">Custom Cutting</a></li>
                                <li><a href="service-d-meat-preparation.html">Meat Preparation</a></li>
                                <li><a href="service-d-meat-packaging.html">Meat Packaging</a></li>
                                <li><a href="service-d-online-ordering.html">Online Ordering</a></li>
                                <li><a href="service-d-beef-tenderloin.html">Beef Tenderloin</a></li>
                                <li><a href="service-d-specialty-product.html">Specialty Product</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#">Pages<button aria-label="dropdown toggler"><i className="fa fa-angle-down"></i></button></a>
                            <ul>
                                <li><a href="team.html">Our Team</a></li>
                                <li><a href="team-carousel.html">Team Carousel</a></li>
                                <li><a href="team-details.html">Team Details</a></li>
                                <li><a href="pricing.html">pricing</a></li>
                                <li><a href="testimonials-carousel.html">Testimonials Carousel 01</a></li>
                                <li><a href="testimonials-carousel-2.html">Testimonials Carousel 02</a></li>
                                <li>
                                    <a href="gallery.html">Gallery</a>
                                    <ul>
                                        <li><a href="gallery.html">Gallery masonry</a></li>
                                        <li><a href="gallery-filter.html">Gallery filter</a></li>
                                        <li><a href="gallery-grid.html">Gallery Grid</a></li>
                                        <li><a href="gallery-carousel.html">Gallery Carousel</a></li>
                                    </ul>
                                </li>
                                <li><a href="faq.html">FAQS</a></li>
                                <li><a href="login.html">Login</a></li>
                                <li><a href="404.html">404 Error</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#">Shop<button aria-label="dropdown toggler"><i className="fa fa-angle-down"></i></button></a>
                            <ul className="sub-menu">
                                <li className="dropdown">
                                    <a href="#">Products<button aria-label="dropdown toggler"><i className="fa fa-angle-down"></i></button></a>
                                    <ul className="sub-menu">
                                        <li><a href="shop.html">No sidebar</a></li>
                                        <li><a href="shop-left.html">Left sidebar</a></li>
                                        <li><a href="shop-right.html">Right sidebar</a></li>
                                    </ul>
                                </li>
                                <li><a href="shop-carousel.html">Products carousel</a></li>
                                <li><a href="shop-details.html">Product details</a></li>
                                <li><a href="cart.html">Cart</a></li>
                                <li><a href="checkout.html">Checkout</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#">News<button aria-label="dropdown toggler"><i className="fa fa-angle-down"></i></button></a>
                            <ul className="sub-menu">
                                <li className="dropdown">
                                    <a href="#">News grid<button aria-label="dropdown toggler"><i className="fa fa-angle-down"></i></button></a>
                                    <ul className="sub-menu">
                                        <li><a href="blog-grid.html">No sidebar</a></li>
                                        <li><a href="blog-grid-left.html">Left sidebar</a></li>
                                        <li><a href="blog-grid-right.html">Right sidebar</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#">News list<button aria-label="dropdown toggler"><i className="fa fa-angle-down"></i></button></a>
                                    <ul className="sub-menu">
                                        <li><a href="blog-list.html">No sidebar</a></li>
                                        <li><a href="blog-list-left.html">Left sidebar</a></li>
                                        <li><a href="blog-list-right.html">Right sidebar</a></li>
                                    </ul>
                                </li>
                                <li><a href="blog-carousel.html">News carousel 01</a></li>
                                <li><a href="blog-carousel-2.html">News carousel 02</a></li>
                                <li><a href="blog-carousel-3.html">News carousel 03</a></li>
                                <li className="dropdown">
                                    <a href="#">News details<button aria-label="dropdown toggler"><i className="fa fa-angle-down"></i></button></a>
                                    <ul className="sub-menu">
                                        <li><a href="blog-details.html">No sidebar</a></li>
                                        <li><a href="blog-details-left.html">Left sidebar</a></li>
                                        <li><a href="blog-details-right.html">Right sidebar</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="contact.html">Contact Us</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="fa fa-envelope"></i>
                            <a href="mailto:needhelp@boskery.com">needhelp@boskery.com</a>
                        </li>
                        <li>
                            <i className="fa fa-phone-alt"></i>
                            <a href="tel:+92(8800)-9850">+ 92(8800) - 9850</a>
                        </li>
                    </ul>
                    <div className="mobile-nav__social">
                        <a href="https://facebook.com">
                            <i className="fab fa-facebook-f" aria-hidden="true"></i>
                            <span className="sr-only">Facebook</span>
                        </a>
                        <a href="https://twitter.com">
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a href="https://pinterest.com">
                            <i className="fab fa-pinterest-p" aria-hidden="true"></i>
                            <span className="sr-only">Pinterest</span>
                        </a>
                        <a href="https://instagram.com">
                            <i className="fab fa-instagram" aria-hidden="true"></i>
                            <span className="sr-only">Instagram</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
