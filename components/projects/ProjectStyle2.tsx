import Link from "next/link";
import JarallaxSection from "@/components/JarallaxSection";

export default function ProjectStyle2() {
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
            <div className="col-md-4 col-sm-6">
              <div className="hover rounded-1 overflow-hidden relative mb-4">
                <Link href="/project-single">
                  <img src="/images/renders/render_005.jpg" className="w-100 hover-scale-1-2" style={{ height: "280px", objectFit: "cover" }} alt="Modern Minimalist Living Room" />
                </Link>
              </div>
              <h3>Modern Minimalist Living Room</h3>
              <div className="d-flex mb-3">
                <span className="me-3 bg-light px-3 fs-14 rounded-1">Private Residence</span>
                <span className="me-3 bg-light px-3 fs-14 rounded-1">Open Space</span>
              </div>
              <p className="mb-0">Contemporary living room design with clean lines, open layouts, and a timeless minimalist aesthetic.</p>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="hover rounded-1 overflow-hidden relative mb-4">
                <Link href="/project-single">
                  <img src="/images/renders/render_015.jpg" className="w-100 hover-scale-1-2" style={{ height: "280px", objectFit: "cover" }} alt="Luxury Contemporary Bedroom Suite" />
                </Link>
              </div>
              <h3>Luxury Contemporary Bedroom Suite</h3>
              <div className="d-flex mb-3">
                <span className="me-3 bg-light px-3 fs-14 rounded-1">Master Suite</span>
                <span className="me-3 bg-light px-3 fs-14 rounded-1">Luxury</span>
              </div>
              <p className="mb-0">Elegant bedroom suite featuring refined finishes, soft lighting, and premium comfort elements.</p>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="hover rounded-1 overflow-hidden relative mb-4">
                <Link href="/project-single">
                  <img src="/images/renders/render_032.jpg" className="w-100 hover-scale-1-2" style={{ height: "280px", objectFit: "cover" }} alt="Scandinavian Inspired Kitchen Design" />
                </Link>
              </div>
              <h3>Scandinavian Inspired Kitchen Design</h3>
              <div className="d-flex mb-3">
                <span className="me-3 bg-light px-3 fs-14 rounded-1">Kitchen</span>
                <span className="me-3 bg-light px-3 fs-14 rounded-1">Nordic Style</span>
              </div>
              <p className="mb-0">Bright and functional kitchen design inspired by Scandinavian simplicity and minimalist principles.</p>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="hover rounded-1 overflow-hidden relative mb-4">
                <Link href="/project-single">
                  <img src="/images/renders/render_054.jpg" className="w-100 hover-scale-1-2" style={{ height: "280px", objectFit: "cover" }} alt="Elegant Home Office Workspace" />
                </Link>
              </div>
              <h3>Elegant Home Office Workspace</h3>
              <div className="d-flex mb-3">
                <span className="me-3 bg-light px-3 fs-14 rounded-1">Home Office</span>
                <span className="me-3 bg-light px-3 fs-14 rounded-1">Productivity</span>
              </div>
              <p className="mb-0">A modern workspace designed to improve focus, productivity, and comfort for remote professionals.</p>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="hover rounded-1 overflow-hidden relative mb-4">
                <Link href="/project-single">
                  <img src="/images/renders/render_076.jpg" className="w-100 hover-scale-1-2" style={{ height: "280px", objectFit: "cover" }} alt="Warm Rustic Dining Room Concept" />
                </Link>
              </div>
              <h3>Warm Rustic Dining Room Concept</h3>
              <div className="d-flex mb-3">
                <span className="me-3 bg-light px-3 fs-14 rounded-1">Dining Area</span>
                <span className="me-3 bg-light px-3 fs-14 rounded-1">Rustic</span>
              </div>
              <p className="mb-0">Warm and welcoming dining space featuring natural wood textures and timeless rustic charm.</p>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="hover rounded-1 overflow-hidden relative mb-4">
                <Link href="/project-single">
                  <img src="/images/renders/render_098.jpg" className="w-100 hover-scale-1-2" style={{ height: "280px", objectFit: "cover" }} alt="Luxury Bathroom With Marble Finish" />
                </Link>
              </div>
              <h3>Luxury Bathroom With Marble Finish</h3>
              <div className="d-flex mb-3">
                <span className="me-3 bg-light px-3 fs-14 rounded-1">Bathroom</span>
                <span className="me-3 bg-light px-3 fs-14 rounded-1">Marble</span>
              </div>
              <p className="mb-0">Premium bathroom interior showcasing marble surfaces, elegant fixtures, and luxury detailing.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
