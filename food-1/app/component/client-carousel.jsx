export default function ClientCarousel() {
    return (
      <section className="client-carousel">
        <div className="container">
          <div className="client-carousel__one boskery-owl__carousel boskery-owl__carousel--basic-nav owl-carousel owl-theme owl-loaded owl-drag"
               data-owl-options="{
                   &quot;items&quot;: 1,
                   &quot;margin&quot;: 0,
                   &quot;loop&quot;: true,
                   &quot;smartSpeed&quot;: 700,
                   &quot;nav&quot;: false,
                   &quot;navText&quot;: [&quot;<span className=\&quot;icon-arrow-left\&quot;></span>&quot;,&quot;<span className=\&quot;icon-arrow-right\&quot;></span>&quot;],
                   &quot;dots&quot;: false,
                   &quot;autoplay&quot;: true,
                   &quot;responsive&quot;: {
                       &quot;0&quot;:{
                           &quot;items&quot;: 2,
                           &quot;margin&quot;: 50
                       },
                       &quot;500&quot;:{
                           &quot;items&quot;: 3,
                           &quot;margin&quot;: 70
                       },
                       &quot;768&quot;:{
                           &quot;items&quot;: 4,
                           &quot;margin&quot;: 70
                       },
                       &quot;992&quot;:{
                           &quot;items&quot;: 5,
                           &quot;margin&quot;: 100
                       },
                       &quot;1200&quot;:{
                           &quot;items&quot;: 5,
                           &quot;margin&quot;: 150
                       }
                   }
               }">
            
            <div className="owl-stage-outer">
              <div className="owl-stage"
                   style={{ transform: "translate3d(-2376px, 0px, 0px)", transition: "0.7s", width: "3960px" }}>
                   
                <div className="owl-item cloned" style={{ width: "114px", marginRight: "150px" }}>
                  <div className="client-carousel__one__item">
                    <img src="assets/images/resources/brand-1-1.png" alt="brand logo" />
                  </div>
                </div>
                
                <div className="owl-item cloned" style={{ width: "114px", marginRight: "150px" }}>
                  <div className="client-carousel__one__item">
                    <img src="assets/images/resources/brand-1-2.png" alt="brand logo" />
                  </div>
                </div>
                
                <div className="owl-item cloned" style={{ width: "114px", marginRight: "150px" }}>
                  <div className="client-carousel__one__item">
                    <img src="assets/images/resources/brand-1-3.png" alt="brand logo" />
                  </div>
                </div>
                
                <div className="owl-item cloned" style={{ width: "114px", marginRight: "150px" }}>
                  <div className="client-carousel__one__item">
                    <img src="assets/images/resources/brand-1-4.png" alt="brand logo" />
                  </div>
                </div>
                
                <div className="owl-item cloned" style={{ width: "114px", marginRight: "150px" }}>
                  <div className="client-carousel__one__item">
                    <img src="assets/images/resources/brand-1-5.png" alt="brand logo" />
                  </div>
                </div>
                
                <div className="owl-item" style={{ width: "114px", marginRight: "150px" }}>
                  <div className="client-carousel__one__item">
                    <img src="assets/images/resources/brand-1-1.png" alt="brand logo" />
                  </div>
                </div>
                
                <div className="owl-item" style={{ width: "114px", marginRight: "150px" }}>
                  <div className="client-carousel__one__item">
                    <img src="assets/images/resources/brand-1-2.png" alt="brand logo" />
                  </div>
                </div>
                
                <div className="owl-item" style={{ width: "114px", marginRight: "150px" }}>
                  <div className="client-carousel__one__item">
                    <img src="assets/images/resources/brand-1-3.png" alt="brand logo" />
                  </div>
                </div>
                
                <div className="owl-item" style={{ width: "114px", marginRight: "150px" }}>
                  <div className="client-carousel__one__item">
                    <img src="assets/images/resources/brand-1-4.png" alt="brand logo" />
                  </div>
                </div>
                
                <div className="owl-item active" style={{ width: "114px", marginRight: "150px" }}>
                  <div className="client-carousel__one__item">
                    <img src="assets/images/resources/brand-1-5.png" alt="brand logo" />
                  </div>
                </div>
                
                <div className="owl-item cloned active" style={{ width: "114px", marginRight: "150px" }}>
                  <div className="client-carousel__one__item">
                    <img src="assets/images/resources/brand-1-1.png" alt="brand logo" />
                  </div>
                </div>
                
                <div className="owl-item cloned active" style={{ width: "114px", marginRight: "150px" }}>
                  <div className="client-carousel__one__item">
                    <img src="assets/images/resources/brand-1-2.png" alt="brand logo" />
                  </div>
                </div>
                
                <div className="owl-item cloned active" style={{ width: "114px", marginRight: "150px" }}>
                  <div className="client-carousel__one__item">
                    <img src="assets/images/resources/brand-1-3.png" alt="brand logo" />
                  </div>
                </div>
                
                <div className="owl-item cloned active" style={{ width: "114px", marginRight: "150px" }}>
                  <div className="client-carousel__one__item">
                    <img src="assets/images/resources/brand-1-4.png" alt="brand logo" />
                  </div>
                </div>
                
                <div className="owl-item cloned" style={{ width: "114px", marginRight: "150px" }}>
                  <div className="client-carousel__one__item">
                    <img src="assets/images/resources/brand-1-5.png" alt="brand logo" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="owl-nav disabled">
              <button type="button" role="presentation" className="owl-prev" aria-label="carousel button">
                <span className="icon-arrow-left"></span>
              </button>
              <button type="button" role="presentation" className="owl-next" aria-label="carousel button">
                <span className="icon-arrow-right"></span>
              </button>
            </div>
            
            <div className="owl-dots disabled"></div>
          </div>
        </div>
      </section>
    );
  }
  