"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Automatically close mobile menu on page transition
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsPagesOpen(false);
  }, [pathname]);

  // Handle header sticky class on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const togglePagesSubmenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPagesOpen((prev) => !prev);
  };

  return (
    <header className={`transparent ${isScrolled ? "header-sticky header-light header-bg" : ""} ${isMobileMenuOpen ? "menu-open" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10 align-items-center justify-content-between">
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

              <div className={`de-flex-col header-col-mid ${isMobileMenuOpen ? "open" : ""}`}>
                {/* mainmenu begin */}
                <ul id="mainmenu" className={isMobileMenuOpen ? "mobile-active" : ""}>
                  <li>
                    <Link className={`menu-item ${pathname === "/" ? "active" : ""}`} href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className={`menu-item ${pathname === "/services" ? "active" : ""}`} href="/services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link className={`menu-item ${pathname === "/projects" ? "active" : ""}`} href="/projects">
                      Projects
                    </Link>
                  </li>
                  <li className={`has-child ${isPagesOpen ? "open-sub" : ""}`}>
                    <a className="menu-item" href="#" onClick={togglePagesSubmenu}>
                      Pages <span className="submenu-arrow">{isPagesOpen ? "▲" : "▼"}</span>
                    </a>
                    <ul style={{ display: isPagesOpen ? "block" : undefined }}>
                      <li>
                        <Link className={pathname === "/about" ? "active" : ""} href="/about">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link className={pathname === "/faq" ? "active" : ""} href="/faq">
                          FAQ
                        </Link>
                      </li>
                      <li>
                        <Link className={pathname === "/testimonials" ? "active" : ""} href="/testimonials">
                          Testimonials
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link className={`menu-item ${pathname === "/gallery" ? "active" : ""}`} href="/gallery">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link className={`menu-item ${pathname === "/blog" ? "active" : ""}`} href="/blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className={`menu-item ${pathname === "/contact" ? "active" : ""}`} href="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
                {/* mainmenu end */}
              </div>

              <div className="de-flex-col">
                <div className="menu_side_area d-flex align-items-center gap-2">
                  <Link href="/consultation" className="btn-main fx-slide">
                    <span>Free Consultation</span>
                  </Link>

                  <button 
                    id="menu-btn" 
                    type="button" 
                    className={`menu-toggle-btn ${isMobileMenuOpen ? "menu-open" : ""}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle navigation menu"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
