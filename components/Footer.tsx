export default function Footer() {
  return (
    <footer className="footer-light">
      <div className="container">
        <div className="row g-custom-x">
          <div className="col-md-6">
            <div className="d-flex align-items-center gap-2">
              <img src="/images/om-logo.png" alt="Om Emblem" style={{ height: "42px", width: "auto" }} />
              <img src="/images/om-interior.png" className="w-150px" alt="Om Interiors Logo" />
            </div>
            <div className="spacer-20"></div>
            <p>
              We are a full-service interior design studio specializing in residential and commercial spaces. Our team of experienced designers works closely with clients to create customized, functional, and visually striking environments.
            </p>
            <div className="spacer-10"></div>
            <div className="social-icons mb-sm-30 text-center">
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="https://www.instagram.com/_om.interiors_?stkn=Mjd3cmx1bHgzOGNr" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-youtube"></i></a>
              <a href="https://wa.me/917990114574" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>

          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-between">
              <h2>Get in Touch</h2>
              <img src="/images/ui/up-right-arrow.webp" className="w-60px op-5" alt="" />
            </div>

            <div className="widget">
              <div className="op-5 fs-15">Email</div>
              <h3><a href="mailto:studio@om-interior.in" className="text-dark">studio@om-interior.in</a></h3>

              <div className="spacer-20"></div>

              <div className="op-5 fs-15">Phone</div>
              <h3><a href="tel:+917990114574" className="text-dark">+91 7990114574</a></h3>

              <div className="spacer-20"></div>

              <div className="op-5 fs-15">Office Location</div>
              <h3>Surat, Gujarat</h3>

              <div className="spacer-20"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="subfooter">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              Copyright 2026 Om Interiors
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
