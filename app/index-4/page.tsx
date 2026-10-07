import Link from "next/link";

export const metadata = {
  title: "Homepage Style 3 — Om Interiors",
  description: "Om Interiors Interior Design Website - Homepage Style 3",
};

export default function Index4Page() {
  return (
    <main>
      <a href="#" id="back-to-top"></a>

      <section id="section-intro" className="pt-5">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-3" data-0="transform: translateY(0px);" data-500="transform: translateY(-140px);">
              <img src="/images/misc/s1.webp" className="w-100" alt="" />
            </div>
            <div className="col-lg-6">
              <div className="mx-lg-2">
                <h1 className="fs-120 fs-sm-10vw">Designing Spaces That Feel Like Home</h1>
                <p>We create spaces that are not only visually stunning but also functional and uniquely yours. Whether it’s a private residence or a commercial space, our interior design services are tailored to bring your vision to life with style and precision.</p>
              </div>
            </div>
            <div className="col-md-3" data-0="transform: translateY(0px);" data-500="transform: translateY(140px);">
              <img src="/images/misc/s2.webp" className="w-100 mb-4" alt="" />
              <h2 className="hs-3">Functional & Beautiful Spaces</h2>
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
