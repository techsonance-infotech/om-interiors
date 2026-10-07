import Link from "next/link";

export const metadata = {
  title: "Homepage Style 5 — Om Interiors",
  description: "Om Interiors Interior Design Website - Homepage Style 5",
};

export default function Index6Page() {
  return (
    <main>
      <a href="#" id="back-to-top"></a>

      <section className="relative overflow-hidden jarallax">
        <div className="spacer-double"></div>
        <div className="container relative z-2">
          <div className="abs pos-sm-relative">
            <div className="row g-4">
              <div className="col-md-12">
                <div className="row g-4">
                  <div className="col-md-8">
                    <div className="text-start">
                      <h1 className="fs-120 fs-sm-10vw mb-0 wow fadeInLeft">Hand Made</h1>
                    </div>
                    <div className="text-md-end">
                      <h1 className="fs-120 fs-sm-10vw mb-0 wow fadeInRight" data-wow-delay=".2s">Furnitures</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <p className="wow fadeInLeft" data-wow-delay=".4s">Lorem ipsum et consectetur dolor enim dolore ut sint aliquip reprehenderit anim enim ut dolor elit. Sunt officia in cupidatat irure commodo sint est sed.</p>
                <div className="text-lg-end">
                  <a href="#" className="btn-main fx-slide wow fadeInRight" data-wow-delay=".6s"><span>Discover Now</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4 align-items-center justify-content-end">
            <div className="col-md-6">
              <div className="spacer-double"></div>
              <img src="/images/misc/c1.webp" className="w-100" alt="" data-0="transform: translateY(0px);" data-1000="transform: translateY(150px);" />
            </div>
          </div>
          <div className="abs top-50 w-20 sm-hide">
            <img src="/images/misc/c2.webp" className="w-100 ms-min-80" alt="" data-0="transform: translateY(0px);" data-1000="transform: translateY(-150px);" />
          </div>
        </div>
      </section>

      <section className="bg-color-op-1">
        <div className="container">
          <div className="row g-4 gx-5 justify-content-between">
            <div className="col-md-7">
              <div className="subtitle">Product Features</div>
              <h2 className="wow fadeInRight" data-wow-delay=".2s">
                Crafted for comfort, designed to elevate your everyday living experience
              </h2>
            </div>
            <div className="col-md-2">
              <div className="spacer-single sm-hide"></div>
              <img src="/images/misc/s1.webp" className="w-150px" alt="" />
            </div>
            <div className="col-md-6 offset-lg-6">
              <p className="wow fadeInRight" data-wow-delay=".4s">
                Every detail is thoughtfully designed to bring together comfort, durability, and timeless style. From supportive cushioning to solid craftsmanship, this sofa is made to enhance your space and everyday relaxation.
              </p>
            </div>
          </div>

          <div className="spacer-double"></div>

          <div className="row g-4 align-items-center">
            <div className="col-md-3">
              <div className="dot-hover relative mb-lg-5 mb-4" data-hover="#dot-1">
                <span className="abs end-0 w-50px h-50px pt-2 circle bg-color d-block text-light fs-24 text-center fw-bold">
                  1
                </span>
                <div className="pe-70 text-end">
                  <h3 className="hs-4">Ergonomic Backrest</h3>
                  <p className="mb-0">
                    Designed to support natural posture with plush padding for lasting comfort.
                  </p>
                </div>
              </div>

              <div className="dot-hover relative mb-lg-5 mb-4" data-hover="#dot-2">
                <span className="abs end-0 w-50px h-50px pt-2 circle bg-color d-block text-light fs-24 text-center fw-bold">
                  2
                </span>
                <div className="pe-70 text-end">
                  <h3 className="hs-4">Padded Armrests</h3>
                  <p className="mb-0">
                    Soft yet structured arm support for relaxing, reading, or lounging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
