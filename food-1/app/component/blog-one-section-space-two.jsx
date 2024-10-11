import React from 'react';

const BlogOneSectionSpaceTwo = () => {
  return (
    <section className="blog-one section-space-two" id="news">
      <div className="container">
        <div className="sec-title sec-title--center">
          <img src="assets/images/shapes/sec-title-s-1.png" alt="latest news" className="sec-title__img" />
          <h6 className="sec-title__tagline">latest news</h6>
          <h2 className="sec-title__title">
            latest news from the <br /> blog post
          </h2>
        </div>
        <div className="row gutter-y-30">
          {/* Blog Card 1 */}
          <div className="col-md-6 col-lg-4">
            <div
              className="blog-card wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="000ms"
              style={{
                visibility: 'hidden',
                animationDuration: '1500ms',
                animationDelay: '0ms',
                animationName: 'none',
              }}
            >
              <div className="blog-card__content">
                <div className="blog-card__top">
                  <div className="blog-card__date">
                    <span>25</span> <span>june</span>
                  </div>
                  <ul className="list-unstyled blog-card__meta">
                    <li>
                      <a href="#">
                        <span className="icon-user"></span>
                        by Admin
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-chat"></span>
                        2 Comments
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="blog-card__image">
                  <img
                    src="assets/images/blog/blog-1-1.jpg"
                    alt="The 10 best principles of storage for different types of meat"
                  />
                  <a href="blog-details-right.html" className="blog-card__hover">
                    <span className="sr-only">
                      The 10 best principles of storage for different types of meat
                    </span>
                    <div className="blog-card__hover__box blog-card__hover__box--1"></div>
                    <div className="blog-card__hover__box blog-card__hover__box--2"></div>
                    <div className="blog-card__hover__box blog-card__hover__box--3"></div>
                    <div className="blog-card__hover__box blog-card__hover__box--4"></div>
                  </a>
                </div>
                <h3 className="blog-card__title">
                  <a href="blog-details-right.html">
                    The 10 best principles of storage for different types of meat
                  </a>
                </h3>
              </div>
              <a href="blog-details-right.html" className="blog-card__link">
                Read more
                <span className="icon-right"></span>
              </a>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="col-md-6 col-lg-4">
            <div
              className="blog-card wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
              style={{
                visibility: 'hidden',
                animationDuration: '1500ms',
                animationDelay: '200ms',
                animationName: 'none',
              }}
            >
              <div className="blog-card__content">
                <div className="blog-card__top">
                  <div className="blog-card__date">
                    <span>25</span> <span>june</span>
                  </div>
                  <ul className="list-unstyled blog-card__meta">
                    <li>
                      <a href="#">
                        <span className="icon-user"></span>
                        by Admin
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-chat"></span>
                        2 Comments
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="blog-card__image">
                  <img
                    src="assets/images/blog/blog-1-2.jpg"
                    alt="Our meat Freshness you can taste and quality you can trust"
                  />
                  <a href="blog-details-right.html" className="blog-card__hover">
                    <span className="sr-only">
                      Our meat Freshness you can taste and quality you can trust
                    </span>
                    <div className="blog-card__hover__box blog-card__hover__box--1"></div>
                    <div className="blog-card__hover__box blog-card__hover__box--2"></div>
                    <div className="blog-card__hover__box blog-card__hover__box--3"></div>
                    <div className="blog-card__hover__box blog-card__hover__box--4"></div>
                  </a>
                </div>
                <h3 className="blog-card__title">
                  <a href="blog-details-right.html">
                    Our meat Freshness you can taste and quality you can trust
                  </a>
                </h3>
              </div>
              <a href="blog-details-right.html" className="blog-card__link">
                Read more
                <span className="icon-right"></span>
              </a>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="col-md-6 col-lg-4">
            <div
              className="blog-card wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="400ms"
              style={{
                visibility: 'hidden',
                animationDuration: '1500ms',
                animationDelay: '400ms',
                animationName: 'none',
              }}
            >
              <div className="blog-card__content">
                <div className="blog-card__top">
                  <div className="blog-card__date">
                    <span>25</span> <span>june</span>
                  </div>
                  <ul className="list-unstyled blog-card__meta">
                    <li>
                      <a href="#">
                        <span className="icon-user"></span>
                        by Admin
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-chat"></span>
                        2 Comments
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="blog-card__image">
                  <img
                    src="assets/images/blog/blog-1-3.jpg"
                    alt="Experience the difference of truly exceptional beef meat"
                  />
                  <a href="blog-details-right.html" className="blog-card__hover">
                    <span className="sr-only">
                      Experience the difference of truly exceptional beef meat
                    </span>
                    <div className="blog-card__hover__box blog-card__hover__box--1"></div>
                    <div className="blog-card__hover__box blog-card__hover__box--2"></div>
                    <div className="blog-card__hover__box blog-card__hover__box--3"></div>
                    <div className="blog-card__hover__box blog-card__hover__box--4"></div>
                  </a>
                </div>
                <h3 className="blog-card__title">
                  <a href="blog-details-right.html">
                    Experience the difference of truly exceptional beef meat
                  </a>
                </h3>
              </div>
              <a href="blog-details-right.html" className="blog-card__link">
                Read more
                <span className="icon-right"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogOneSectionSpaceTwo;
