import Link from "next/link";
import JarallaxSection from "@/components/JarallaxSection";

export default function ProjectStyle3() {
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
          {/* Project 1 */}
          <div className="row g-4 gx-5 align-items-center mb-5">
            <div className="col-lg-7">
              <div className="hover rounded-1 overflow-hidden relative">
                <Link href="/project-single" className="d-block">
                  <img src="/images/renders/render_005.jpg" className="w-100 hover-scale-1-2" style={{ height: "380px", objectFit: "cover" }} alt="Modern Minimalist Living Room" />
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="ps-lg-3">
                <span className="text-muted fw-bold text-uppercase fs-14 me-2">Private Residence</span>
                <span className="text-muted fw-bold text-uppercase fs-14">· 2025</span>
                <h2 className="fs-36 mt-2">Modern Minimalist Living Room</h2>
                <p>A serene open-plan living room focused on architectural purity, warm indirect lighting, and carefully selected luxury furnishings.</p>
                <Link href="/project-single" className="btn-main fx-slide mt-2">
                  <span>View Project</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="spacer-single"></div>

          {/* Project 2 */}
          <div className="row g-4 gx-5 align-items-center mb-5 flex-lg-row-reverse">
            <div className="col-lg-7">
              <div className="hover rounded-1 overflow-hidden relative">
                <Link href="/project-single" className="d-block">
                  <img src="/images/renders/render_015.jpg" className="w-100 hover-scale-1-2" style={{ height: "380px", objectFit: "cover" }} alt="Luxury Contemporary Bedroom Suite" />
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="pe-lg-3">
                <span className="text-muted fw-bold text-uppercase fs-14 me-2">Master Suite</span>
                <span className="text-muted fw-bold text-uppercase fs-14">· 2025</span>
                <h2 className="fs-36 mt-2">Luxury Contemporary Bedroom Suite</h2>
                <p>Designed for rest and rejuvenation, featuring velvet wall panels, ambient linear LEDs, and bespoke built-in storage wardrobes.</p>
                <Link href="/project-single" className="btn-main fx-slide mt-2">
                  <span>View Project</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="spacer-single"></div>

          {/* Project 3 */}
          <div className="row g-4 gx-5 align-items-center mb-5">
            <div className="col-lg-7">
              <div className="hover rounded-1 overflow-hidden relative">
                <Link href="/project-single" className="d-block">
                  <img src="/images/renders/render_032.jpg" className="w-100 hover-scale-1-2" style={{ height: "380px", objectFit: "cover" }} alt="Scandinavian Inspired Kitchen Design" />
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="ps-lg-3">
                <span className="text-muted fw-bold text-uppercase fs-14 me-2">Kitchen</span>
                <span className="text-muted fw-bold text-uppercase fs-14">· 2024</span>
                <h2 className="fs-36 mt-2">Scandinavian Inspired Kitchen Design</h2>
                <p>A bright, ergonomic culinary environment blending natural oak textures, matte white cabinetry, and seamless quartz countertops.</p>
                <Link href="/project-single" className="btn-main fx-slide mt-2">
                  <span>View Project</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="spacer-single"></div>

          {/* Project 4 */}
          <div className="row g-4 gx-5 align-items-center flex-lg-row-reverse">
            <div className="col-lg-7">
              <div className="hover rounded-1 overflow-hidden relative">
                <Link href="/project-single" className="d-block">
                  <img src="/images/renders/render_054.jpg" className="w-100 hover-scale-1-2" style={{ height: "380px", objectFit: "cover" }} alt="Elegant Home Office Workspace" />
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="pe-lg-3">
                <span className="text-muted fw-bold text-uppercase fs-14 me-2">Home Office</span>
                <span className="text-muted fw-bold text-uppercase fs-14">· 2024</span>
                <h2 className="fs-36 mt-2">Elegant Home Office Workspace</h2>
                <p>Tailored workspace engineered for focus and executive presence, featuring acoustic wall treatment and integrated smart charging.</p>
                <Link href="/project-single" className="btn-main fx-slide mt-2">
                  <span>View Project</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
