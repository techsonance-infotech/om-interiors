import Link from "next/link";
import JarallaxSection from "@/components/JarallaxSection";

export default function ProjectStyle1() {
  return (
    <main>
      <a href="#" id="back-to-top"></a>

      <JarallaxSection className="bg-dark text-light" imageSrc="/images/background/2.webp">
        <div className="container relative z-2">
          <div className="row gy-4 gx-5 align-items-center">
            <div className="col-md-8">
              <div className="spacer-double sm-hide"></div>
              <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">Projects</h1>
              <ul className="crumb wow fadeInUp">
                <li><Link href="/">Home</Link></li>
                <li className="active">Projects</li>
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
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="hover">
                <div className="relative overflow-hidden">
                  <Link href="/project-single" className="d-block hover relative text-light">
                    <img src="/images/misc/up-right-arrow.webp" className="abs w-80px p-20 z-2 top-0 end-0 p-4 hover-op-1" alt="" />
                    <div className="abs w-50 z-4 p-4 mb-0">
                      <h2 className="fs-36">Modern Minimalist Living Room</h2>
                    </div>
                    <div className="relative overflow-hidden rounded-1 wow scaleIn" data-wow-duration="1.5s">
                      <img src="/images/renders/render_005.jpg" className="w-100 hover-scale-1-2" style={{ height: "380px", objectFit: "cover" }} alt="Modern Minimalist Living Room" />
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

            <div className="col-lg-6">
              <div className="hover">
                <div className="relative overflow-hidden">
                  <Link href="/project-single" className="d-block hover relative text-light">
                    <img src="/images/misc/up-right-arrow.webp" className="abs w-80px p-20 z-2 top-0 end-0 p-4 hover-op-1" alt="" />
                    <div className="abs w-50 z-4 p-4 mb-0">
                      <h2 className="fs-36">Luxury Contemporary Bedroom Suite</h2>
                    </div>
                    <div className="relative overflow-hidden rounded-1 wow scaleIn" data-wow-duration="1.5s">
                      <img src="/images/renders/render_015.jpg" className="w-100 hover-scale-1-2" style={{ height: "380px", objectFit: "cover" }} alt="Luxury Contemporary Bedroom Suite" />
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

            <div className="col-lg-6">
              <div className="hover">
                <div className="relative overflow-hidden">
                  <Link href="/project-single" className="d-block hover relative text-light">
                    <img src="/images/misc/up-right-arrow.webp" className="abs w-80px p-20 z-2 top-0 end-0 p-4 hover-op-1" alt="" />
                    <div className="abs w-50 z-4 p-4 mb-0">
                      <h2 className="fs-36">Scandinavian Inspired Kitchen Design</h2>
                    </div>
                    <div className="relative overflow-hidden rounded-1 wow scaleIn" data-wow-duration="1.5s">
                      <img src="/images/renders/render_032.jpg" className="w-100 hover-scale-1-2" style={{ height: "380px", objectFit: "cover" }} alt="Scandinavian Inspired Kitchen Design" />
                    </div>
                    <div className="gradient-edge-top op-5 h-70"></div>
                    <div className="extra-text abs lh-1 m-4 bottom-0 z-4 d-flex">
                      <div className="bg-blur p-2 me-2">Kitchen</div>
                      <div className="bg-blur p-2 me-2">Nordic Style</div>
                      <div className="bg-blur p-2 me-2">Minimalist</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hover">
                <div className="relative overflow-hidden">
                  <Link href="/project-single" className="d-block hover relative text-light">
                    <img src="/images/misc/up-right-arrow.webp" className="abs w-80px p-20 z-2 top-0 end-0 p-4 hover-op-1" alt="" />
                    <div className="abs w-50 z-4 p-4 mb-0">
                      <h2 className="fs-36">Elegant Home Office Workspace</h2>
                    </div>
                    <div className="relative overflow-hidden rounded-1 wow scaleIn" data-wow-duration="1.5s">
                      <img src="/images/renders/render_054.jpg" className="w-100 hover-scale-1-2" style={{ height: "380px", objectFit: "cover" }} alt="Elegant Home Office Workspace" />
                    </div>
                    <div className="gradient-edge-top op-5 h-70"></div>
                    <div className="extra-text abs lh-1 m-4 bottom-0 z-4 d-flex">
                      <div className="bg-blur p-2 me-2">Home Office</div>
                      <div className="bg-blur p-2 me-2">Productivity</div>
                      <div className="bg-blur p-2 me-2">Modern</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hover">
                <div className="relative overflow-hidden">
                  <Link href="/project-single" className="d-block hover relative text-light">
                    <img src="/images/misc/up-right-arrow.webp" className="abs w-80px p-20 z-2 top-0 end-0 p-4 hover-op-1" alt="" />
                    <div className="abs w-50 z-4 p-4 mb-0">
                      <h2 className="fs-36">Warm Rustic Dining Room Concept</h2>
                    </div>
                    <div className="relative overflow-hidden rounded-1 wow scaleIn" data-wow-duration="1.5s">
                      <img src="/images/renders/render_076.jpg" className="w-100 hover-scale-1-2" style={{ height: "380px", objectFit: "cover" }} alt="Warm Rustic Dining Room Concept" />
                    </div>
                    <div className="gradient-edge-top op-5 h-70"></div>
                    <div className="extra-text abs lh-1 m-4 bottom-0 z-4 d-flex">
                      <div className="bg-blur p-2 me-2">Dining Area</div>
                      <div className="bg-blur p-2 me-2">Rustic</div>
                      <div className="bg-blur p-2 me-2">Natural Wood</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hover">
                <div className="relative overflow-hidden">
                  <Link href="/project-single" className="d-block hover relative text-light">
                    <img src="/images/misc/up-right-arrow.webp" className="abs w-80px p-20 z-2 top-0 end-0 p-4 hover-op-1" alt="" />
                    <div className="abs w-50 z-4 p-4 mb-0">
                      <h2 className="fs-36">Luxury Bathroom With Marble Finish</h2>
                    </div>
                    <div className="relative overflow-hidden rounded-1 wow scaleIn" data-wow-duration="1.5s">
                      <img src="/images/renders/render_098.jpg" className="w-100 hover-scale-1-2" style={{ height: "380px", objectFit: "cover" }} alt="Luxury Bathroom With Marble Finish" />
                    </div>
                    <div className="gradient-edge-top op-5 h-70"></div>
                    <div className="extra-text abs lh-1 m-4 bottom-0 z-4 d-flex">
                      <div className="bg-blur p-2 me-2">Bathroom</div>
                      <div className="bg-blur p-2 me-2">Marble</div>
                      <div className="bg-blur p-2 me-2">Premium Finish</div>
                    </div>
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
