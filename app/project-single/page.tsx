import Link from "next/link";

export const metadata = {
  title: "Modern Minimalist Living Room — Om Interiors",
  description: "Detailed view of Modern Minimalist Living Room project.",
};

export default function ProjectSinglePage() {
  return (
    <main>
      <a href="#" id="back-to-top"></a>

      <section id="section-intro" className="section-dark text-light no-top no-bottom position-relative overflow-hidden z-4 jarallax">
        <img src="/images/renders/render_001.jpg" className="jarallax-img" alt="" />
        <div className="mh-800 relative z-4">
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
                <div className="col-lg-10">
                  <h1 className="fs-sm-10vw mb-0 wow fadeInLeft">Modern Minimalist Living Room</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sw-overlay op-4"></div>
      </section>

      <section>
        <div className="container">
          <div className="row g-4 gx-5 justify-content-end">
            <div className="col-md-6">
              <div className="h-100 relative">
                <div className="subtitle">Project Details</div>
                <h2 className="fs-36 wow fadeInRight" data-wow-delay=".2s">A minimalist residential living room crafted with clean geometry, natural light, and bespoke custom furnishings.</h2>

                <div className="abs pos-sm-relative w-100 bottom-0">
                  <div className="d-flex justify-content-between border-bottom p-2">
                    <div>Client</div>
                    <div>Private Homeowner</div>
                  </div>
                  <div className="d-flex justify-content-between border-bottom p-2">
                    <div>Scope</div>
                    <div>Full Interior Architecture & Styling</div>
                  </div>
                  <div className="d-flex justify-content-between border-bottom p-2">
                    <div>Services</div>
                    <div>Residential Interior Design</div>
                  </div>
                  <div className="d-flex justify-content-between border-bottom p-2">
                    <div>Year</div>
                    <div>2025</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="relative wow zoomIn overflow-hidden rounded-1">
                <img src="/images/renders/render_005.jpg" className="w-100 rounded-1 wow scaleIn" style={{ height: "450px", objectFit: "cover" }} alt="Modern Minimalist Living Room" />
              </div>
            </div>
          </div>

          <div className="spacer-single"></div>

          <div className="row g-4">
            <div className="col-lg-4">
              <a href="/images/renders/render_008.jpg" className="image-popup d-block hover">
                <div className="relative overflow-hidden rounded-1">
                  <div className="absolute start-0 w-100 hover-op-1 p-5 abs-middle z-2 text-center text-white z-3">
                    View
                  </div>
                  <div className="absolute start-0 w-100 h-100 overlay-black-5 hover-op-1 z-2"></div>
                  <img src="/images/renders/render_008.jpg" className="w-100 hover-scale-1-2" style={{ height: "260px", objectFit: "cover" }} alt="Detail 1" />
                </div>
              </a>
            </div>
            <div className="col-lg-4">
              <a href="/images/renders/render_014.jpg" className="image-popup d-block hover">
                <div className="relative overflow-hidden rounded-1">
                  <div className="absolute start-0 w-100 hover-op-1 p-5 abs-middle z-2 text-center text-white z-3">
                    View
                  </div>
                  <div className="absolute start-0 w-100 h-100 overlay-black-5 hover-op-1 z-2"></div>
                  <img src="/images/renders/render_014.jpg" className="w-100 hover-scale-1-2" style={{ height: "260px", objectFit: "cover" }} alt="Detail 2" />
                </div>
              </a>
            </div>
            <div className="col-lg-4">
              <a href="/images/renders/render_022.jpg" className="image-popup d-block hover">
                <div className="relative overflow-hidden rounded-1">
                  <div className="absolute start-0 w-100 hover-op-1 p-5 abs-middle z-2 text-center text-white z-3">
                    View
                  </div>
                  <div className="absolute start-0 w-100 h-100 overlay-black-5 hover-op-1 z-2"></div>
                  <img src="/images/renders/render_022.jpg" className="w-100 hover-scale-1-2" style={{ height: "260px", objectFit: "cover" }} alt="Detail 3" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-color-op-1">
        <div className="container">
          <div className="row g-4 gx-5 justify-content-between align-items-center">
            <div className="col-md-6">
              <div className="h-100 relative">
                <div className="subtitle">Project Details</div>
                <h2 className="wow fadeInRight" data-wow-delay=".2s">Related Projects</h2>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="relative">
                <div className="de-custom-nav d-flex flex-end" data-target="#projects-carousel">
                  <div className="d-prev circle"></div>
                  <div className="d-next circle"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-12">
              <div id="projects-carousel" className="owl-carousel owl-theme owl-2-cols">
                <div className="item">
                  <div className="hover">
                    <div className="relative overflow-hidden">
                      <Link href="/project-single" className="d-block hover relative text-light">
                        <img src="/images/misc/up-right-arrow.webp" className="abs w-80px p-20 z-2 top-0 end-0 p-4 hover-op-1" alt="" />
                        <div className="abs w-50 z-4 p-4 mb-0">
                          <h2 className="fs-36">Modern Minimalist Living Room</h2>
                        </div>
                        <div className="relative overflow-hidden rounded-1 wow scaleIn" data-wow-duration="1.5s">
                          <img src="/images/renders/render_005.jpg" className="w-100 hover-scale-1-2" style={{ height: "360px", objectFit: "cover" }} alt="Modern Minimalist Living Room" />
                        </div>
                        <div className="gradient-edge-top op-5 h-70"></div>
                        <div className="extra-text abs lh-1 m-4 bottom-0 z-4 d-flex">
                          <div className="bg-blur p-2 me-2">Private Residence</div>
                          <div className="bg-blur p-2 me-2">Open Space</div>
                          <div className="bg-blur p-2 me-2">Contemporary</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="hover">
                    <div className="relative overflow-hidden">
                      <Link href="/project-single" className="d-block hover relative text-light">
                        <img src="/images/misc/up-right-arrow.webp" className="abs w-80px p-20 z-2 top-0 end-0 p-4 hover-op-1" alt="" />
                        <div className="abs w-50 z-4 p-4 mb-0">
                          <h2 className="fs-36">Luxury Contemporary Bedroom Suite</h2>
                        </div>
                        <div className="relative overflow-hidden rounded-1 wow scaleIn" data-wow-duration="1.5s">
                          <img src="/images/renders/render_015.jpg" className="w-100 hover-scale-1-2" style={{ height: "360px", objectFit: "cover" }} alt="Luxury Contemporary Bedroom Suite" />
                        </div>
                        <div className="gradient-edge-top op-5 h-70"></div>
                        <div className="extra-text abs lh-1 m-4 bottom-0 z-4 d-flex">
                          <div className="bg-blur p-2 me-2">Master Suite</div>
                          <div className="bg-blur p-2 me-2">Luxury</div>
                          <div className="bg-blur p-2 me-2">Soft Lighting</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
