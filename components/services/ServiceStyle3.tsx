import Link from "next/link";
import JarallaxSection from "@/components/JarallaxSection";

export default function ServiceStyle3() {
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
          <div className="row g-4">
            <div className="col-md-6">
              <div className="hover rounded-1 overflow-hidden relative mb-4">
                <Link href="/service-single/furniture-decor-selection">
                  <h3 className="abs bg-color m-3 text-white rounded-1 fs-32 lh-1 p-4 z-3 hover-move-up-100">01</h3>
                  <div className="sw-overlay z-2 op-3"></div>
                  <img src="/images/renders/render_012.jpg" className="w-100 hover-scale-1-2" style={{ height: "320px", objectFit: "cover" }} alt="Furniture & Decor Selection" />
                </Link>
              </div>
              <h3>
                <Link href="/service-single/furniture-decor-selection" className="text-light text-decoration-none hover-color">
                  Furniture & Decor Selection
                </Link>
              </h3>
              <p className="mb-0">Carefully curated furniture and decor pieces that elevate your space while maintaining harmony and balance. We help you choose materials, textures, and accents that reflect your personality and enhance both comfort and visual appeal.</p>
            </div>

            <div className="col-md-6">
              <div className="hover rounded-1 overflow-hidden relative mb-4">
                <Link href="/service-single/concept-development">
                  <h3 className="abs bg-color m-3 text-white rounded-1 fs-32 lh-1 p-4 z-3 hover-move-up-100">02</h3>
                  <div className="sw-overlay z-2 op-3"></div>
                  <img src="/images/renders/render_025.jpg" className="w-100 hover-scale-1-2" style={{ height: "320px", objectFit: "cover" }} alt="Concept Development" />
                </Link>
              </div>
              <h3>
                <Link href="/service-single/concept-development" className="text-light text-decoration-none hover-color">
                  Concept Development
                </Link>
              </h3>
              <p className="mb-0">Transforming ideas into cohesive design concepts tailored to your vision and lifestyle. We define the creative direction, mood, and spatial identity to ensure a strong foundation before moving into detailed execution.</p>
            </div>

            <div className="col-md-6">
              <div className="hover rounded-1 overflow-hidden relative mb-4">
                <Link href="/service-single/renovation-space-planning">
                  <h3 className="abs bg-color m-3 text-white rounded-1 fs-32 lh-1 p-4 z-3 hover-move-up-100">03</h3>
                  <div className="sw-overlay z-2 op-3"></div>
                  <img src="/images/renders/render_045.jpg" className="w-100 hover-scale-1-2" style={{ height: "320px", objectFit: "cover" }} alt="Renovation & Space Planning" />
                </Link>
              </div>
              <h3>
                <Link href="/service-single/renovation-space-planning" className="text-light text-decoration-none hover-color">
                  Renovation & Space Planning
                </Link>
              </h3>
              <p className="mb-0">Maximizing functionality through smart space planning and efficient renovation strategies. We redesign layouts to improve flow, usability, and aesthetics while ensuring every square meter serves a purpose.</p>
            </div>

            <div className="col-md-6">
              <div className="hover rounded-1 overflow-hidden relative mb-4">
                <Link href="/service-single/residential-interior-design">
                  <h3 className="abs bg-color m-3 text-white rounded-1 fs-32 lh-1 p-4 z-3 hover-move-up-100">04</h3>
                  <div className="sw-overlay z-2 op-3"></div>
                  <img src="/images/renders/render_068.jpg" className="w-100 hover-scale-1-2" style={{ height: "320px", objectFit: "cover" }} alt="Residential Interior Design" />
                </Link>
              </div>
              <h3>
                <Link href="/service-single/residential-interior-design" className="text-light text-decoration-none hover-color">
                  Residential Interior Design
                </Link>
              </h3>
              <p className="mb-0">Creating personalized living spaces that combine comfort, style, and functionality. From modern to timeless designs, we tailor every detail to suit your lifestyle and bring warmth into your home.</p>
            </div>

            <div className="col-md-6">
              <div className="hover rounded-1 overflow-hidden relative mb-4">
                <Link href="/service-single/visual-design-rendering">
                  <h3 className="abs bg-color m-3 text-white rounded-1 fs-32 lh-1 p-4 z-3 hover-move-up-100">05</h3>
                  <div className="sw-overlay z-2 op-3"></div>
                  <img src="/images/renders/render_102.jpg" className="w-100 hover-scale-1-2" style={{ height: "320px", objectFit: "cover" }} alt="Visual Design Rendering" />
                </Link>
              </div>
              <h3>
                <Link href="/service-single/visual-design-rendering" className="text-light text-decoration-none hover-color">
                  Visual Design Rendering
                </Link>
              </h3>
              <p className="mb-0">Bringing your ideas to life with realistic 3D visuals that showcase materials, lighting, and spatial composition. This allows you to preview the final result and make confident design decisions before execution.</p>
            </div>

            <div className="col-md-6">
              <div className="hover rounded-1 overflow-hidden relative mb-4">
                <Link href="/service-single/commercial-interior-design">
                  <h3 className="abs bg-color m-3 text-white rounded-1 fs-32 lh-1 p-4 z-3 hover-move-up-100">06</h3>
                  <div className="sw-overlay z-2 op-3"></div>
                  <img src="/images/renders/render_150.jpg" className="w-100 hover-scale-1-2" style={{ height: "320px", objectFit: "cover" }} alt="Commercial Interior Design" />
                </Link>
              </div>
              <h3>
                <Link href="/service-single/commercial-interior-design" className="text-light text-decoration-none hover-color">
                  Commercial Interior Design
                </Link>
              </h3>
              <p className="mb-0">Designing impactful commercial spaces that enhance brand identity and customer experience. We focus on functionality, aesthetics, and atmosphere to create environments that support business goals.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
