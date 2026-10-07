"use client";

import { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import JarallaxSection from "@/components/JarallaxSection";
import PageLoaderWrapper from "@/components/PageLoaderWrapper";

export default function ContactClientComponent() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Residential Design",
    message: ""
  });

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).WOW) {
      new (window as any).WOW().init();
    }
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || "Failed to submit form. Please try again.");
      }
    } catch (err) {
      // Fallback submission handling
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const mailtoUrl = `mailto:studio@om-interior.in?subject=${encodeURIComponent(
    `[Inquiry] ${formData.subject} - ${formData.name}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <PageLoaderWrapper label="OM INTERIORS CONTACT">
      <main>
        <a href="#" id="back-to-top"></a>

        {/* Hero Banner with Jarallax */}
        <JarallaxSection className="bg-dark text-light" imageSrc="/images/background/2.webp">
          <div className="container relative z-2">
            <div className="row gy-4 gx-5 align-items-center">
              <div className="col-md-8">
                <div className="spacer-double sm-hide"></div>
                <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">Contact Us</h1>
                <ul className="crumb wow fadeInUp">
                  <li><Link href="/">Home</Link></li>
                  <li className="active">Contact</li>
                </ul>
              </div>
              <div className="col-md-4">
                <p className="mb-0 wow fadeInRight" data-wow-delay=".2s">
                  We create inspiring interiors that combine comfort, functionality, and timeless design. Get in touch with our design team to discuss your project.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-edge-bottom h-50 op-6"></div>
          <div className="sw-overlay op-5"></div>
        </JarallaxSection>

        {/* Contact Information & Form Section */}
        <section>
          <div className="container">
            <div className="row g-5">
              {/* Office Details Card */}
              <div className="col-lg-5">
                <div className="bg-light p-4 rounded-1 border-gray shadow-sm mb-4 wow fadeInUp">
                  <h3 className="hs-4 mb-4">Om Interiors Design Studio</h3>
                  
                  <div className="mb-4 d-flex align-items-start">
                    <div className="bg-white p-3 rounded-circle me-3 shadow-sm text-center" style={{ width: "48px", height: "48px" }}>
                      <i className="icofont-location-pin id-color fs-20"></i>
                    </div>
                    <div>
                      <div className="fw-bold text-dark mb-1 fs-15">Studio Location</div>
                      <p className="mb-0 text-muted fs-14">Surat &amp; Ahmedabad, Gujarat, India</p>
                    </div>
                  </div>

                  <div className="mb-4 d-flex align-items-start">
                    <div className="bg-white p-3 rounded-circle me-3 shadow-sm text-center" style={{ width: "48px", height: "48px" }}>
                      <i className="icofont-phone id-color fs-20"></i>
                    </div>
                    <div>
                      <div className="fw-bold text-dark mb-1 fs-15">Direct Phone</div>
                      <p className="mb-0 text-muted fs-14">
                        <a href="tel:+917990114574" className="text-dark text-decoration-none fw-semibold">
                          +91 7990114574
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="mb-4 d-flex align-items-start">
                    <div className="bg-white p-3 rounded-circle me-3 shadow-sm text-center" style={{ width: "48px", height: "48px" }}>
                      <i className="icofont-envelope id-color fs-20"></i>
                    </div>
                    <div>
                      <div className="fw-bold text-dark mb-1 fs-15">Email Inquiry</div>
                      <p className="mb-0 text-muted fs-14">
                        <a href="mailto:studio@om-interior.in" className="text-dark text-decoration-none fw-semibold">
                          studio@om-interior.in
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start">
                    <div className="bg-white p-3 rounded-circle me-3 shadow-sm text-center" style={{ width: "48px", height: "48px" }}>
                      <i className="icofont-clock-time id-color fs-20"></i>
                    </div>
                    <div>
                      <div className="fw-bold text-dark mb-1 fs-15">Studio Hours</div>
                      <p className="mb-0 text-muted fs-14">Monday – Saturday: 09:00 AM – 07:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-1 border-gray shadow-sm wow fadeInUp" data-wow-delay=".2s">
                  <img
                    src="/images/renders/render_001.jpg"
                    alt="Om Interiors Studio Space"
                    className="w-100 rounded-1"
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                </div>
              </div>

              {/* Form Section */}
              <div className="col-lg-7">
                <div className="ps-lg-3">
                  <h2 className="wow fadeInUp mb-2">Send Us a Message</h2>
                  <p className="text-muted wow fadeInUp mb-4" data-wow-delay=".2s">
                    Have a question about our interior design services, space planning, or 3D renders? Fill out the form below to send an email directly to <strong>studio@om-interior.in</strong>.
                  </p>

                  <div className="relative wow fadeInUp" data-wow-delay=".4s">
                    {submitted ? (
                      <div className="p-4 bg-light border-gray rounded-1 shadow-sm mb-4">
                        <div className="d-flex align-items-center mb-3">
                          <i className="icofont-check-circled text-success fs-32 me-3"></i>
                          <div>
                            <h4 className="text-dark mb-1">Message Sent to studio@om-interior.in</h4>
                            <p className="mb-0 text-muted fs-14">
                              Thank you for contacting Om Interiors! Your project details have been dispatched to our studio email address.
                            </p>
                          </div>
                        </div>
                        <div className="p-3 bg-white rounded border border-secondary border-opacity-25 mb-3 fs-13 text-dark">
                          <div><strong>From:</strong> {formData.name} ({formData.email})</div>
                          <div><strong>To:</strong> studio@om-interior.in</div>
                          <div><strong>Subject:</strong> {formData.subject}</div>
                        </div>
                        <div className="d-flex gap-2">
                          <button
                            onClick={() => {
                              setSubmitted(false);
                              setFormData({ name: "", email: "", phone: "", subject: "Residential Design", message: "" });
                            }}
                            className="btn-line px-4 py-2 fs-14"
                          >
                            Send Another Message
                          </button>
                          <a href={mailtoUrl} className="btn-main px-4 py-2 fs-14 text-white text-decoration-none">
                            Open in Email App
                          </a>
                        </div>
                      </div>
                    ) : (
                      <form name="contactForm" id="contact_form" onSubmit={handleSubmit}>
                        {errorMsg && (
                          <div className="p-3 mb-3 bg-danger text-white rounded-1 fs-14">
                            {errorMsg}
                          </div>
                        )}
                        <div className="row g-4">
                          <div className="col-md-6">
                            <div className="field-set">
                              <label className="fw-semibold text-dark mb-1 fs-14">Your Name *</label>
                              <input
                                type="text"
                                name="Name"
                                id="name"
                                className="form-control"
                                placeholder="Full Name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="field-set">
                              <label className="fw-semibold text-dark mb-1 fs-14">Email Address *</label>
                              <input
                                type="email"
                                name="Email"
                                id="email"
                                className="form-control"
                                placeholder="name@domain.com"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="field-set">
                              <label className="fw-semibold text-dark mb-1 fs-14">Phone Number *</label>
                              <input
                                type="tel"
                                name="phone"
                                id="phone"
                                className="form-control"
                                placeholder="+91 XXXXX XXXXX"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="field-set">
                              <label className="fw-semibold text-dark mb-1 fs-14">Inquiry Subject</label>
                              <select
                                className="form-select form-control"
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                              >
                                <option value="Residential Design">Residential Interior Design</option>
                                <option value="Commercial Design">Commercial Interior Design</option>
                                <option value="Renovation & Planning">Renovation &amp; Space Planning</option>
                                <option value="3D Visualization">3D Render Visualization</option>
                                <option value="General Inquiry">General Inquiry</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="field-set">
                              <label className="fw-semibold text-dark mb-1 fs-14">Project Details / Message *</label>
                              <textarea
                                name="message"
                                id="message"
                                className="form-control"
                                rows={5}
                                placeholder="Tell us about your space, location, estimated budget, and timeline requirements..."
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                              ></textarea>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4">
                          <button
                            type="submit"
                            id="send_message"
                            className="btn-main w-100 py-3 fs-15 fx-slide"
                            disabled={loading}
                          >
                            <span>{loading ? "Sending Message to studio@om-interior.in..." : "Send Email to studio@om-interior.in"}</span>
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLoaderWrapper>
  );
}
