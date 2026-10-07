import Link from "next/link";

export const metadata = {
  title: "Homepage Style 2 — Om Interiors",
  description: "Om Interiors Interior Design Website - Homepage Style 2",
};

export default function Index3Page() {
  return (
    <main>
      <a href="#" id="back-to-top"></a>

      <section id="section-intro" className="section-dark text-light no-top no-bottom position-relative overflow-hidden z-1000">
        <div className="mh-800 relative">
          <div className="spacer-double"></div>
          <div className="spacer-double"></div>
          <div className="spacer-single sm-hide"></div>
          <div className="container relative z-2">
            <div className="row g-4">
              <div className="col-md-4">
                <p>We design refined interiors that blend comfort and style, creating spaces that feel inviting and functional while reflecting your personality with thoughtful details and timeless elegance.</p>
              </div>
            </div>
          </div>
          <div className="abs w-80 abs-center bottom-10 z-2 w-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h1 className="fs-sm-10vw mb-0 wow fadeInLeft">Designing Spaces That Feel Like Home</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper" suppressHydrationWarning>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div
                  className="swiper-inner"
                  data-bgimage="url(/images/slider/1.webp)"
                  style={{ backgroundImage: "url('/images/slider/1.webp')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
                >
                  <div className="sw-overlay op-5"></div>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="swiper-inner"
                  data-bgimage="url(/images/slider/2.webp)"
                  style={{ backgroundImage: "url('/images/slider/2.webp')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
                >
                  <div className="sw-overlay op-5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark-1 text-light">
        <div className="container">
          <div className="row g-4 gx-5 align-items-center">
            <div className="col-md-7">
              <div className="subtitle">About Us</div>
              <h2 className="wow fadeInRight" data-wow-delay=".2s">We’re committed to turning your vision into reality, with thoughtful design and attention to detail</h2>
            </div>
            <div className="col-md-6 offset-lg-6">
              <p className="wow fadeInRight" data-wow-delay=".4s">We create spaces that are not only visually stunning but also functional and uniquely yours. Whether it’s a private residence or a commercial space, our interior design services are tailored to bring your vision to life with style and precision.</p>
            </div>
          </div>

          <div className="spacer-double"></div>

          <div className="row g-4">
            <div className="col-md-3 col-sm-6">
              <div className="de_count wow fadeInRight" data-wow-delay=".0s">
                <h3 className="fs-40 mb-0"><span className="timer" data-to="1500" data-speed="3000">0</span>+</h3>
                Design Hours Completed
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="de_count wow fadeInRight" data-wow-delay=".2s">
                <h3 className="fs-40 mb-0"><span className="timer" data-to="75" data-speed="3000">0</span>+</h3>
                Satisfied Clients
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="de_count wow fadeInRight" data-wow-delay=".4s">
                <h3 className="fs-40 mb-0"><span className="timer" data-to="10" data-speed="3000">0</span>+</h3>
                Awards &amp; Recognitions
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="de_count wow fadeInRight" data-wow-delay=".6s">
                <h3 className="fs-40 mb-0"><span className="timer" data-to="4" data-speed="3000">0</span>+</h3>
                Years of Design Experience
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
