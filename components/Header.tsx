import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="transparent">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                {/* logo begin */}
                <div id="logo">
                  <Link href="/" className="d-flex align-items-center gap-2">
                    <img className="logo-main" src="/images/om-logo.png" alt="Om Emblem" style={{ height: "38px", width: "auto", filter: "brightness(0) invert(1)" }} />
                    <img className="logo-main" src="/images/om-interior.png" alt="Om Interiors Logo" style={{ filter: "brightness(0) invert(1)" }} />

                    <img className="logo-scroll" src="/images/om-logo.png" alt="Om Emblem" style={{ height: "38px", width: "auto" }} />
                    <img className="logo-scroll" src="/images/om-interior.png" alt="Om Interiors Logo" />

                    <img className="logo-mobile" src="/images/om-logo.png" alt="Om Emblem" style={{ height: "32px", width: "auto" }} />
                    <img className="logo-mobile" src="/images/om-interior.png" alt="Om Interiors Logo" />
                  </Link>
                </div>
                {/* logo end */}
              </div>
              <div className="de-flex-col header-col-mid">
                {/* mainmenu begin */}
                <ul id="mainmenu">
                  <li>
                    <Link className="menu-item" href="/">Home</Link>
                  </li>
                  <li>
                    <Link className="menu-item" href="/services">Services</Link>
                  </li>
                  <li>
                    <Link className="menu-item" href="/projects">Projects</Link>
                  </li>
                  <li>
                    <a className="menu-item" href="#">Pages</a>
                    <ul>
                      <li><Link href="/about">About Us</Link></li>
                      <li><Link href="/faq">FAQ</Link></li>
                      <li><Link href="/testimonials">Testimonials</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link className="menu-item" href="/gallery">Gallery</Link>
                  </li>
                  <li><Link className="menu-item" href="/blog">Blog</Link></li>
                  <li><Link className="menu-item" href="/contact">Contact</Link></li>
                </ul>
                {/* mainmenu end */}
              </div>
              <div className="de-flex-col">
                <div className="menu_side_area">
                  <Link href="/consultation" className="btn-main fx-slide">
                    <span>Free Consultation</span>
                  </Link>
                  <span id="menu-btn"></span>
                </div>

                <div id="btn-extra">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
