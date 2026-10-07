import Link from "next/link";
import JarallaxSection from "@/components/JarallaxSection";
import PageLoaderWrapper from "@/components/PageLoaderWrapper";

export const metadata = {
  title: "About Us — Om Interiors",
  description: "Learn more about Om Interiors team, craft, and design vision.",
};

export default function AboutPage() {
  return (
    <PageLoaderWrapper label="OM INTERIORS ABOUT">
      <main>
        <a href="#" id="back-to-top"></a>

        {/* Hero Banner with Jarallax */}
        <JarallaxSection className="bg-dark text-light" imageSrc="/images/background/2.webp">
          <div className="container relative z-2">
            <div className="row gy-4 gx-5 align-items-center">
              <div className="col-md-8">
                <div className="spacer-double sm-hide"></div>
                <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">About Us</h1>
                <ul className="crumb wow fadeInUp">
                  <li><Link href="/">Home</Link></li>
                  <li className="active">About Us</li>
                </ul>
              </div>
              <div className="col-md-4">
                <p className="mb-0 wow fadeInRight" data-wow-delay=".2s">
                  We create inspiring interiors that combine comfort, functionality, and timeless design. Every space is thoughtfully tailored to reflect your lifestyle and needs.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-edge-bottom h-50 op-6"></div>
          <div className="sw-overlay op-5"></div>
        </JarallaxSection>

        {/* About Story & Counter Stats */}
        <section>
          <div className="container">
            <div className="row g-4 gx-5 justify-content-end align-items-center">
              <div className="col-md-6">
                <div className="relative wow zoomIn overflow-hidden rounded-1">
                  <img src="/images/renders/render_005.jpg" className="w-100 rounded-1 wow scaleIn" style={{ height: "480px", objectFit: "cover" }} alt="Om Interiors Design Studio" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="subtitle">About Us</div>
                <h2 className="wow fadeInRight" data-wow-delay=".2s">We’re committed to turning your vision into reality</h2>
                <p className="wow fadeInRight" data-wow-delay=".4s">
                  We create spaces that go beyond being visually stunning—they are thoughtfully designed to be highly functional, deeply personal, and a true reflection of who you are. Every project we undertake is approached with a careful balance of creativity and practicality, ensuring that each element not only looks beautiful but also serves a meaningful purpose in your daily life.
                </p>
                <div className="text-end wow fadeInRight" data-wow-delay=".6s">
                  <img src="/images/misc/op-signature.png" style={{ height: "65px", width: "auto", display: "inline-block", mixBlendMode: "multiply" }} alt="Omprakash Suthar Signature" />
                  <h3 className="hs-5 mb-0">Omprakash Suthar</h3>
                  <span className="fs-14 text-muted">Founder &amp; Principal Designer</span>
                </div>
              </div>
            </div>

            <div className="spacer-double"></div>

            {/* Counter Stats */}
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

        {/* Testimonials Banner with Jarallax */}
        <JarallaxSection className="text-light" imageSrc="/images/background/1.webp">
          <div className="sw-overlay op-6"></div>
          <div className="container relative z-2">
            <div className="row g-4 justify-content-center">
              <div className="col-md-4">
                <div className="subtitle">Testimonials</div>
              </div>
              <div className="col-md-7">
                <div className="owl-single-dots owl-carousel owl-theme">
                  <div className="item">
                    <span className="d-stars d-block mb-3">
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                    </span>
                    <h2 className="mb-4 wow fadeInUp">&ldquo;Absolutely loved the way our home turned out. The designer understood our requirements, lifestyle, and budget perfectly. Every corner feels thoughtfully designed.&rdquo;</h2>
                    <span className="wow fadeInUp">Priya Shah, Homeowner</span>
                  </div>
                  <div className="item">
                    <span className="d-stars d-block mb-3">
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                    </span>
                    <h2 className="mb-4 wow fadeInUp">&ldquo;From initial consultation to final execution, the entire experience was smooth and professional. The team paid attention to every small detail.&rdquo;</h2>
                    <span className="wow fadeInUp">Rahul Mehta, Homeowner</span>
                  </div>
                  <div className="item">
                    <span className="d-stars d-block mb-3">
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                    </span>
                    <h2 className="mb-4 wow fadeInUp">&ldquo;We wanted a modern yet warm interior for our home, and the final result exceeded our expectations. Beautifully reflects our personality.&rdquo;</h2>
                    <span className="wow fadeInUp">Neha &amp; Amit Patel, Homeowners</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </JarallaxSection>

        {/* Team Members Section */}
        <section>
          <div className="container">
            <div className="row mb-3 g-4 gx-5 align-items-center justify-content-between">
              <div className="col-lg-4 wow fadeIn" data-wow-delay=".2s">
                <div className="subtitle">Our Team</div>
                <h2 className="wow fadeInRight">Meet the Experts Behind Our Work</h2>
              </div>
              <div className="col-lg-4">
                <p>Our team of passionate professionals delivers exceptional results. With diverse expertise and a shared vision, we bring innovative ideas to life and exceed expectations.</p>
              </div>
              <div className="col-lg-4">
                <div className="relative">
                  <div className="de-custom-nav d-flex flex-end" data-target="#team-carousel">
                    <div className="d-prev circle"></div>
                    <div className="d-next circle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row g-4">
              <div className="col-lg-12">
                <div id="team-carousel" className="owl-2-cols owl-carousel owl-theme wow fadeIn" data-wow-delay=".2s">
                  <div className="item">
                    <div className="bg-light rounded-1 overflow-hidden">
                      <div className="row g-0 align-items-center">
                        <div className="col-sm-6">
                          <img src="/images/renders/render_012.jpg" className="w-100" style={{ height: "240px", objectFit: "cover" }} alt="Omprakash Suthar" />
                        </div>
                        <div className="col-sm-6">
                          <div className="p-3 text-center">
                            <h3 className="mb-0 fs-20">Omprakash Suthar</h3>
                            <p className="mb-2 fs-14">Founder &amp; Principal Designer</p>
                            <div className="social-icons">
                              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="bg-hover-2 text-hover-white fa-brands fa-instagram"></i></a>
                              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><i className="bg-hover-2 text-hover-white fa-brands fa-whatsapp"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="bg-light rounded-1 overflow-hidden">
                      <div className="row g-0 align-items-center">
                        <div className="col-sm-6">
                          <img src="/images/renders/render_025.jpg" className="w-100" style={{ height: "240px", objectFit: "cover" }} alt="Suresh Suthar" />
                        </div>
                        <div className="col-sm-6">
                          <div className="p-3 text-center">
                            <h3 className="mb-0 fs-20">Suresh Suthar</h3>
                            <p className="mb-2 fs-14">Principal Joinery Craftsman</p>
                            <div className="social-icons">
                              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="bg-hover-2 text-hover-white fa-brands fa-instagram"></i></a>
                              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><i className="bg-hover-2 text-hover-white fa-brands fa-whatsapp"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="bg-light rounded-1 overflow-hidden">
                      <div className="row g-0 align-items-center">
                        <div className="col-sm-6">
                          <img src="/images/renders/render_045.jpg" className="w-100" style={{ height: "240px", objectFit: "cover" }} alt="Khanuram Suthar" />
                        </div>
                        <div className="col-sm-6">
                          <div className="p-3 text-center">
                            <h3 className="mb-0 fs-20">Khanuram Suthar</h3>
                            <p className="mb-2 fs-14">Master Carpenter &amp; Site Manager</p>
                            <div className="social-icons">
                              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="bg-hover-2 text-hover-white fa-brands fa-instagram"></i></a>
                              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><i className="bg-hover-2 text-hover-white fa-brands fa-whatsapp"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="bg-light rounded-1 overflow-hidden">
                      <div className="row g-0 align-items-center">
                        <div className="col-sm-6">
                          <img src="/images/renders/render_068.jpg" className="w-100" style={{ height: "240px", objectFit: "cover" }} alt="Himanshu Suthar" />
                        </div>
                        <div className="col-sm-6">
                          <div className="p-3 text-center">
                            <h3 className="mb-0 fs-20">Himanshu Suthar</h3>
                            <p className="mb-2 fs-14">3D Visualizer &amp; Spatial Planner</p>
                            <div className="social-icons">
                              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="bg-hover-2 text-hover-white fa-brands fa-instagram"></i></a>
                              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><i className="bg-hover-2 text-hover-white fa-brands fa-whatsapp"></i></a>
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
      </main>
    </PageLoaderWrapper>
  );
}
