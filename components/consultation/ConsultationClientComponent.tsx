"use client";

import { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import JarallaxSection from "@/components/JarallaxSection";
import PageLoaderWrapper from "@/components/PageLoaderWrapper";

export default function ConsultationClientComponent() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Full Home Interior",
    propertySize: "Medium (50m² - 120m²)",
    designStyle: "Modern Minimalist",
    timeline: "1-3 Months",
    budgetRange: "$20,000 - $50,000",
    message: "",
    services: [] as string[],
  });

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).WOW) {
      new (window as any).WOW().init();
    }
  }, []);

  const handleCheckboxChange = (serviceName: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(serviceName);
      if (exists) {
        return { ...prev, services: prev.services.filter((s) => s !== serviceName) };
      } else {
        return { ...prev, services: [...prev.services, serviceName] };
      }
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const messageDetails = `
Consultation Request Details:
- Project Type: ${formData.projectType}
- Property Size: ${formData.propertySize}
- Design Style: ${formData.designStyle}
- Timeline: ${formData.timeline}
- Estimated Budget Range: ${formData.budgetRange}
- Additional Services Requested: ${formData.services.length > 0 ? formData.services.join(", ") : "None specified"}

Client Project Description / Notes:
${formData.message || "No additional notes provided."}
    `.trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Consultation Request - ${formData.projectType}`,
          message: messageDetails,
          projectType: formData.projectType,
          propertySize: formData.propertySize,
          designStyle: formData.designStyle,
          timeline: formData.timeline,
          budgetRange: formData.budgetRange,
          services: formData.services,
          isConsultation: true,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || "Failed to submit consultation request. Please try again.");
      }
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLoaderWrapper label="OM INTERIORS CONSULTATION">
      <main>
        <a href="#" id="back-to-top"></a>

        {/* Hero Section */}
        <JarallaxSection className="bg-dark text-light" imageSrc="/images/background/2.webp">
          <div className="container relative z-2">
            <div className="row gy-4 gx-5 align-items-center">
              <div className="col-md-8">
                <div className="spacer-double sm-hide"></div>
                <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">Design Consultation</h1>
                <ul className="crumb wow fadeInUp">
                  <li><Link href="/">Home</Link></li>
                  <li className="active">Consultation</li>
                </ul>
              </div>
              <div className="col-md-4">
                <p className="mb-0 wow fadeInRight" data-wow-delay=".2s">
                  Schedule a personal interior design consultation or estimate for your home or commercial space with our principal design team.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-edge-bottom h-50 op-6"></div>
          <div className="sw-overlay op-5"></div>
        </JarallaxSection>

        {/* Consultation Form & Studio Sidebar */}
        <section>
          <div className="container">
            <div className="row g-5 align-items-start">
              {/* Left Column - Form */}
              <div className="col-lg-8">
                <div className="bg-light rounded-1 p-40 border-gray shadow-sm">
                  {submitted ? (
                    <div className="p-4 bg-white rounded border border-success border-2 shadow-sm">
                      <div className="d-flex align-items-center mb-3">
                        <i className="icofont-check-circled text-success fs-36 me-3"></i>
                        <div>
                          <h3 className="text-dark mb-1">Consultation Request Received!</h3>
                          <p className="mb-0 text-muted fs-14">
                            Your estimate &amp; consultation request has been sent to <strong>studio@om-interior.in</strong>. Omprakash Suthar will contact you within 24 hours.
                          </p>
                        </div>
                      </div>

                      <div className="p-3 bg-light rounded border border-secondary border-opacity-25 mb-4 fs-13 text-dark">
                        <div><strong>Client:</strong> {formData.name} ({formData.email}, {formData.phone})</div>
                        <div><strong>Project Type:</strong> {formData.projectType} ({formData.propertySize})</div>
                        <div><strong>Requested Services:</strong> {formData.services.length > 0 ? formData.services.join(", ") : "Standard Consultation"}</div>
                      </div>

                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            projectType: "Full Home Interior",
                            propertySize: "Medium (50m² - 120m²)",
                            designStyle: "Modern Minimalist",
                            timeline: "1-3 Months",
                            budgetRange: "$20,000 - $50,000",
                            message: "",
                            services: [],
                          });
                        }}
                        className="btn-main px-4 py-2 fs-14"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  ) : (
                    <form name="interior-estimator-form" id="interior-estimator-form" onSubmit={handleSubmit}>
                      {errorMsg && (
                        <div className="p-3 mb-4 bg-danger text-white rounded-1 fs-14">
                          {errorMsg}
                        </div>
                      )}

                      <div className="row g-4">
                        {/* Name */}
                        <div className="col-md-6">
                          <div className="field-set">
                            <label htmlFor="name" className="fw-semibold text-dark mb-1 fs-14">Your Name *</label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              className="form-control"
                              placeholder="Full Name"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                          </div>
                        </div>

                        {/* Email */}
                        <div className="col-md-6">
                          <div className="field-set">
                            <label htmlFor="email" className="fw-semibold text-dark mb-1 fs-14">Email Address *</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="form-control"
                              placeholder="you@example.com"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="col-md-6">
                          <div className="field-set">
                            <label htmlFor="phone" className="fw-semibold text-dark mb-1 fs-14">Phone Number *</label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              className="form-control"
                              placeholder="+91 XXXXX XXXXX"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                          </div>
                        </div>

                        {/* Project Type */}
                        <div className="col-md-6">
                          <div className="field-set">
                            <label htmlFor="project_type" className="fw-semibold text-dark mb-1 fs-14">Project Type</label>
                            <select
                              id="project_type"
                              name="project_type"
                              className="form-select form-control"
                              value={formData.projectType}
                              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                            >
                              <option value="Living Room Design">Living Room Design</option>
                              <option value="Bedroom Interior">Bedroom Interior</option>
                              <option value="Kitchen & Dining Design">Kitchen &amp; Dining Design</option>
                              <option value="Office & Commercial">Office &amp; Commercial Interior</option>
                              <option value="Apartment Renovation">Apartment Renovation</option>
                              <option value="Full Home Interior">Full Villa / Home Interior</option>
                            </select>
                          </div>
                        </div>

                        {/* Property Size */}
                        <div className="col-md-6">
                          <div className="field-set">
                            <label htmlFor="property_size" className="fw-semibold text-dark mb-1 fs-14">Property Size</label>
                            <select
                              id="property_size"
                              name="property_size"
                              className="form-select form-control"
                              value={formData.propertySize}
                              onChange={(e) => setFormData({ ...formData, propertySize: e.target.value })}
                            >
                              <option value="Small (Under 50m² / 500 sq.ft)">Small (Under 50m² / 500 sq.ft)</option>
                              <option value="Medium (50m² - 120m² / 500 - 1300 sq.ft)">Medium (50m² - 120m²)</option>
                              <option value="Large (120m² - 250m² / 1300 - 2700 sq.ft)">Large (120m² - 250m²)</option>
                              <option value="Luxury Residence (250m²+ / 2700+ sq.ft)">Luxury Residence (250m²+)</option>
                            </select>
                          </div>
                        </div>

                        {/* Design Style */}
                        <div className="col-md-6">
                          <div className="field-set">
                            <label htmlFor="design_style" className="fw-semibold text-dark mb-1 fs-14">Design Style</label>
                            <select
                              id="design_style"
                              name="design_style"
                              className="form-select form-control"
                              value={formData.designStyle}
                              onChange={(e) => setFormData({ ...formData, designStyle: e.target.value })}
                            >
                              <option value="Modern Minimalist">Modern Minimalist</option>
                              <option value="Contemporary Luxury">Contemporary Luxury</option>
                              <option value="Neo-Classical">Neo-Classical</option>
                              <option value="Industrial Modern">Industrial Modern</option>
                              <option value="Classic Elegance">Classic Elegance</option>
                              <option value="Japandi / Zen">Japandi / Zen</option>
                            </select>
                          </div>
                        </div>

                        {/* Timeline */}
                        <div className="col-md-6">
                          <div className="field-set">
                            <label htmlFor="timeline" className="fw-semibold text-dark mb-1 fs-14">Project Timeline</label>
                            <select
                              id="timeline"
                              name="timeline"
                              className="form-select form-control"
                              value={formData.timeline}
                              onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                            >
                              <option value="Flexible">Flexible Schedule</option>
                              <option value="1-3 Months">1-3 Months</option>
                              <option value="3-6 Months">3-6 Months</option>
                              <option value="Urgent Execution">Urgent Execution</option>
                            </select>
                          </div>
                        </div>

                        {/* Budget Range */}
                        <div className="col-md-6">
                          <div className="field-set">
                            <label htmlFor="budget_range" className="fw-semibold text-dark mb-1 fs-14">Estimated Budget Range</label>
                            <select
                              id="budget_range"
                              name="budget_range"
                              className="form-select form-control"
                              value={formData.budgetRange}
                              onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                            >
                              <option value="₹5 Lakhs - ₹15 Lakhs">₹5 Lakhs - ₹15 Lakhs</option>
                              <option value="₹15 Lakhs - ₹35 Lakhs">₹15 Lakhs - ₹35 Lakhs</option>
                              <option value="₹35 Lakhs - ₹75 Lakhs">₹35 Lakhs - ₹75 Lakhs</option>
                              <option value="₹75 Lakhs+ Luxury">₹75 Lakhs+ Luxury</option>
                            </select>
                          </div>
                        </div>

                        {/* Additional Services Checkboxes */}
                        <div className="col-md-12">
                          <label className="fw-semibold text-dark mb-2 fs-14">Additional Services Needed</label>
                          <div className="row g-3">
                            {[
                              "Furniture & Sourcing",
                              "Lighting Design",
                              "Custom Cabinetry",
                              "3D Render Visualization",
                              "Decor & Soft Styling",
                              "Turnkey Site Supervision"
                            ].map((service) => (
                              <div key={service} className="col-md-4 col-sm-6">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={`check-${service.replace(/\s+/g, "-")}`}
                                    checked={formData.services.includes(service)}
                                    onChange={() => handleCheckboxChange(service)}
                                    style={{ cursor: "pointer" }}
                                  />
                                  <label className="form-check-label fs-14 text-dark" htmlFor={`check-${service.replace(/\s+/g, "-")}`} style={{ cursor: "pointer" }}>
                                    {service}
                                  </label>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Notes */}
                        <div className="col-md-12">
                          <div className="field-set">
                            <label htmlFor="message" className="fw-semibold text-dark mb-1 fs-14">Project Notes / Requirements</label>
                            <textarea
                              id="message"
                              name="message"
                              className="form-control"
                              rows={4}
                              placeholder="Tell us about your space, preferred colors, specific rooms, or layout requests..."
                              value={formData.message}
                              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                          </div>
                        </div>

                        {/* Submit */}
                        <div className="col-md-12">
                          <button
                            type="submit"
                            id="send_message"
                            className="btn-main w-100 py-3 fs-15 fx-slide"
                            disabled={loading}
                          >
                            <span>{loading ? "Sending Request to studio@om-interior.in..." : "Request Free Consultation"}</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>

              {/* Right Sidebar - Studio Info */}
              <div className="col-lg-4">
                <div className="bg-dark text-light p-4 rounded-1 border-gray shadow-sm mb-4">
                  <h3 className="hs-4 text-white mb-3">Om Interiors Studio</h3>
                  <p className="fs-14 text-white-50 mb-4">
                    Have an urgent architectural or interior inquiry? Contact our studio directly via phone or email for immediate consultation.
                  </p>
                  
                  <div className="border-top border-secondary pt-3 mb-3">
                    <div className="fs-12 text-white-50 uppercase tracking-wide">Studio Direct Phone</div>
                    <h4 className="hs-5 mb-0 mt-1">
                      <a href="tel:+917990114574" className="text-white text-decoration-none">
                        +91 7990114574
                      </a>
                    </h4>
                  </div>

                  <div className="border-top border-secondary pt-3 mb-3">
                    <div className="fs-12 text-white-50 uppercase tracking-wide">Studio Email</div>
                    <h4 className="hs-5 mb-0 mt-1">
                      <a href="mailto:studio@om-interior.in" className="text-white text-decoration-none">
                        studio@om-interior.in
                      </a>
                    </h4>
                  </div>

                  <div className="border-top border-secondary pt-3">
                    <div className="fs-12 text-white-50 uppercase tracking-wide">Studio Locations</div>
                    <p className="fs-14 text-white mb-0 mt-1">Surat &amp; Ahmedabad, Gujarat, India</p>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-1 border-gray shadow-sm">
                  <img
                    src="/images/renders/render_005.jpg"
                    alt="Om Interiors Consultation"
                    className="w-100 rounded-1"
                    style={{ height: "260px", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLoaderWrapper>
  );
}
