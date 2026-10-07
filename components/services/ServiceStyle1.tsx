import Link from "next/link";
import JarallaxSection from "@/components/JarallaxSection";

export default function ServiceStyle1() {
  return (
    <main>
      <a href="#" id="back-to-top"></a>

      <JarallaxSection className="bg-dark text-light" imageSrc="/images/background/2.webp">
        <div className="container relative z-2">
          <div className="row gy-4 gx-5 align-items-center">
            <div className="col-md-8">
              <div className="spacer-double sm-hide"></div>
              <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">Services</h1>
              <ul className="crumb wow fadeInUp">
                <li><Link href="/">Home</Link></li>
                <li className="active">Services</li>
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

      <section>
        <div className="container">
          <div id="gallery" className="row g-4">
            <div className="item col-lg-4 col-sm-6">
              <div className="hover">
                <div className="relative overflow-hidden">
                  <Link href="/service-single/furniture-decor-selection" className="d-block hover relative text-light">
                    <img src="/images/misc/up-right-arrow.webp" className="abs w-80px p-20 z-2 top-0 end-0 p-4 hover-op-1" alt="" />
                    <div className="abs z-4 p-4 pb-0 bottom-0 mb-0">
                      <h2 className="fs-40 wow scale-in-mask" data-wow-delay=".6s">Furniture & Decor Selection</h2>
                    </div>
                    <div className="relative overflow-hidden rounded-1 wow scaleIn" data-wow-duration="1.5s">
                      <img src="/images/renders/render_012.jpg" className="w-100 hover-scale-1-2" style={{ height: "340px", objectFit: "cover" }} alt="Furniture & Decor Selection" />
                    </div>
                    <div className="gradient-edge-bottom h-70"></div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="item col-lg-4 col-sm-6">
              <div className="hover">
                <div className="relative overflow-hidden">
                  <Link href="/service-single/concept-development" className="d-block hover relative text-light">
                    <img src="/images/misc/up-right-arrow.webp" className="abs w-80px p-20 z-2 top-0 end-0 p-4 hover-op-1" alt="" />
                    <div className="abs z-4 p-4 pb-0 bottom-0 mb-0">
                      <h2 className="fs-40 wow scale-in-mask" data-wow-delay=".6s">Concept Development</h2>
                    </div>
                    <div className="relative overflow-hidden rounded-1 wow scaleIn" data-wow-duration="1.5s">
                      <img src="/images/renders/render_025.jpg" className="w-100 hover-scale-1-2" style={{ height: "340px", objectFit: "cover" }} alt="Concept Development" />
                    </div>
                    <div className="gradient-edge-bottom h-70"></div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="item col-lg-4 col-sm-6">
              <div className="hover">
                <div className="relative overflow-hidden">
                  <Link href="/service-single/renovation-space-planning" className="d-block hover relative text-light">
                    <img src="/images/misc/up-right-arrow.webp" className="abs w-80px p-20 z-2 top-0 end-0 p-4 hover-op-1" alt="" />
                    <div className="abs z-4 p-4 pb-0 bottom-0 mb-0">
                      <h2 className="fs-40 wow scale-in-mask" data-wow-delay=".6s">Renovation & Space Planning</h2>
                    </div>
                    <div className="relative overflow-hidden rounded-1 wow scaleIn" data-wow-duration="1.5s">
                      <img src="/images/renders/render_045.jpg" className="w-100 hover-scale-1-2" style={{ height: "340px", objectFit: "cover" }} alt="Renovation & Space Planning" />
                    </div>
                    <div className="gradient-edge-bottom h-70"></div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="item col-lg-4 col-sm-6">
              <div className="hover">
                <div className="relative overflow-hidden">
                  <Link href="/service-single/residential-interior-design" className="d-block hover relative text-light">
                    <img src="/images/misc/up-right-arrow.webp" className="abs w-80px p-20 z-2 top-0 end-0 p-4 hover-op-1" alt="" />
                    <div className="abs z-4 p-4 pb-0 bottom-0 mb-0">
                      <h2 className="fs-40 wow scale-in-mask" data-wow-delay=".6s">Residential Interior Design</h2>
                    </div>
                    <div className="relative overflow-hidden rounded-1 wow scaleIn" data-wow-duration="1.5s">
                      <img src="/images/renders/render_068.jpg" className="w-100 hover-scale-1-2" style={{ height: "340px", objectFit: "cover" }} alt="Residential Interior Design" />
                    </div>
                    <div className="gradient-edge-bottom h-70"></div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="item col-lg-4 col-sm-6">
              <div className="hover">
                <div className="relative overflow-hidden">
                  <Link href="/service-single/visual-design-rendering" className="d-block hover relative text-light">
                    <img src="/images/misc/up-right-arrow.webp" className="abs w-80px p-20 z-2 top-0 end-0 p-4 hover-op-1" alt="" />
                    <div className="abs z-4 p-4 pb-0 bottom-0 mb-0">
                      <h2 className="fs-40 wow scale-in-mask" data-wow-delay=".6s">Visual Design Rendering</h2>
                    </div>
                    <div className="relative overflow-hidden rounded-1 wow scaleIn" data-wow-duration="1.5s">
                      <img src="/images/renders/render_102.jpg" className="w-100 hover-scale-1-2" style={{ height: "340px", objectFit: "cover" }} alt="Visual Design Rendering" />
                    </div>
                    <div className="gradient-edge-bottom h-70"></div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="item col-lg-4 col-sm-6">
              <div className="hover">
                <div className="relative overflow-hidden">
                  <Link href="/service-single/commercial-interior-design" className="d-block hover relative text-light">
                    <img src="/images/misc/up-right-arrow.webp" className="abs w-80px p-20 z-2 top-0 end-0 p-4 hover-op-1" alt="" />
                    <div className="abs z-4 p-4 pb-0 bottom-0 mb-0">
                      <h2 className="fs-40 wow scale-in-mask" data-wow-delay=".6s">Commercial Interior Design</h2>
                    </div>
                    <div className="relative overflow-hidden rounded-1 wow scaleIn" data-wow-duration="1.5s">
                      <img src="/images/renders/render_150.jpg" className="w-100 hover-scale-1-2" style={{ height: "340px", objectFit: "cover" }} alt="Commercial Interior Design" />
                    </div>
                    <div className="gradient-edge-bottom h-70"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
