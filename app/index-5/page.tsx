import Link from "next/link";

export const metadata = {
  title: "Homepage Style 4 — Om Interiors",
  description: "Om Interiors Interior Design Website - Homepage Style 4",
};

export default function Index5Page() {
  return (
    <main>
      <a href="#" id="back-to-top"></a>

      <section id="section-intro">
        <div className="container">
          <div className="row g-4 align-items-center justify-content-between">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12">
                  <div className="text-start">
                    <h1 className="fs-120 fs-sm-10vw mb-0 wow fadeInLeft">Design Beyond</h1>
                  </div>
                  <div className="text-lg-end">
                    <h1 className="fs-120 fs-sm-10vw mb-0 wow fadeInRight" data-wow-delay=".2s">Ordinary Living</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <p className="wow fadeInUp" data-wow-delay=".4s">Lorem ipsum et consectetur dolor enim dolore ut sint aliquip reprehenderit anim enim ut dolor elit.</p>
            </div>
            <div className="col-lg-4">
              <div className="d-flex align-items-center justify-content-end wow fadeInUp" data-wow-delay=".9s">
                <div className="relative me-4">
                  <img src="/images/testimonial/1.webp" className="w-50px circle ms-min-10" alt="" />
                  <img src="/images/testimonial/2.webp" className="w-50px circle ms-min-10" alt="" />
                  <img src="/images/testimonial/3.webp" className="w-50px circle ms-min-10" alt="" />
                </div>
                <div className="fw-600 fs-14 lh-1-5"><span className="fs-16 fw-bold text-dark">23k</span><br />happy customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-0 overflow-hidden" aria-label="section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="relative overflow-hidden">
                <div className="owl-custom-nav menu-float" data-target="#carousel-6">
                  <a className="btn-next"></a>
                  <a className="btn-prev"></a>
                  <div id="carousel-6" className="owl-single owl-carousel owl-theme">
                    <div className="item">
                      <div className="relative">
                        <div className="overflow-hidden">
                          <img src="/images/slider-wide/1.webp" className="w-100" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="relative">
                        <div className="overflow-hidden">
                          <img src="/images/slider-wide/2.webp" className="w-100" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="relative">
                        <div className="overflow-hidden">
                          <img src="/images/slider-wide/3.webp" className="w-100" alt="" />
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

      <section>
        <div className="container">
          <div className="row g-4 gx-5 justify-content-between">
            <div className="col-md-7">
              <div className="subtitle">About Us</div>
              <h2 className="wow fadeInRight" data-wow-delay=".2s">We’re committed to turning your vision into reality, with thoughtful design and attention to detail</h2>
            </div>
            <div className="col-md-2">
              <div className="spacer-single sm-hide"></div>
              <img src="/images/misc/s1.webp" className="w-150px" alt="" />
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
