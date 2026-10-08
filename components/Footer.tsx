export default function Footer() {
  return (
    <footer className="text-light">
      <div className="container">
        <div className="row g-custom-x">
          <div className="col-md-6">
            <div className="d-flex align-items-center gap-2">
              <img src="/images/om-logo.png" alt="Om Emblem" style={{ height: "42px", width: "auto", filter: "brightness(0) invert(1)" }} />
              <img src="/images/om-interior.png" className="w-150px" alt="Om Interiors Logo" style={{ filter: "brightness(0) invert(1)" }} />
            </div>
            <div className="spacer-20"></div>
            <p className="op-7">
              We are a full-service interior design studio specializing in residential and commercial spaces. Our team of experienced designers works closely with clients to create customized, functional, and visually striking environments.
            </p>
            <div className="spacer-10"></div>
            <div className="social-icons mb-sm-30">
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="https://www.instagram.com/_om.interiors_?stkn=Mjd3cmx1bHgzOGNr" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-youtube"></i></a>
              <a href="https://wa.me/917990114574" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>

          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-between">
              <h2 className="text-light">Get in Touch</h2>
              <img src="/images/ui/up-right-arrow.webp" className="w-60px op-5" alt="" />
            </div>

            <div className="widget">
              <div className="op-5 fs-15 text-light">Email</div>
              <h3><a href="mailto:studio@om-interior.in" className="text-light">studio@om-interior.in</a></h3>

              <div className="spacer-20"></div>

              <div className="op-5 fs-15 text-light">Phone</div>
              <h3><a href="tel:+917990114574" className="text-light">+91 7990114574</a></h3>

              <div className="spacer-20"></div>

              <div className="op-5 fs-15 text-light">Office Location</div>
              <h3 className="text-light">Surat, Gujarat</h3>

              <div className="spacer-20"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="subfooter">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center text-light op-6">
              Copyright 2026 Om Interiors
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
