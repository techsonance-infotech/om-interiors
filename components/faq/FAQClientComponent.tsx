"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import JarallaxSection from "@/components/JarallaxSection";
import PageLoaderWrapper from "@/components/PageLoaderWrapper";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const designFAQs: FAQItem[] = [
  {
    id: "a1",
    question: "What interior design services do you offer?",
    answer: "We provide residential and commercial interior design, space planning, concept development, material selection, 3D visualization, and full project execution styling."
  },
  {
    id: "a2",
    question: "How do I start a design project with Om Interiors?",
    answer: "Simply contact us or request a free consultation through our website. We’ll discuss your vision, spatial requirements, budget, and project timeline."
  },
  {
    id: "a3",
    question: "Do you handle both residential and commercial spaces?",
    answer: "Yes, we design luxury residences, modern apartments, corporate offices, retail spaces, and hospitality interiors tailored to each client's unique brand and lifestyle."
  },
  {
    id: "a4",
    question: "What is included in your design process?",
    answer: "Our end-to-end process includes initial concept creation, detailed mood boards, 2D layout planning, 3D photo-realistic renders, material & furniture sourcing, site execution management, and final interior styling."
  },
  {
    id: "a5",
    question: "How long does an interior design project take?",
    answer: "Timelines vary depending on project scope. Single room redesigns may take 2 to 4 weeks, whereas full home or commercial renovations typically take 2 to 4 months."
  },
  {
    id: "a6",
    question: "Do you provide furniture and decor sourcing?",
    answer: "Yes, we assist with curating and sourcing bespoke furniture, custom lighting fixtures, premium wall treatments, textiles, and decorative accessories."
  },
  {
    id: "a7",
    question: "Can you work with existing furniture or architectural layouts?",
    answer: "Absolutely. We seamlessly integrate cherished heirloom pieces or existing layouts into our modern design schemes to enhance aesthetic cohesion and functionality."
  },
  {
    id: "a8",
    question: "Do you offer renovation and space planning services?",
    answer: "Yes, we offer structural renovation guidance, partition planning, electrical/lighting layout design, and ergonomic space optimization."
  },
  {
    id: "a9",
    question: "What design styles do you specialize in?",
    answer: "We specialize in Modern, Minimalist, Contemporary, Neo-Classical, and Luxury Transitional interior design styles customized to client preferences."
  },
  {
    id: "a10",
    question: "Do you provide 3D renderings or visual previews?",
    answer: "Yes, we create high-definition 3D architectural renders so you can preview materials, colors, lighting, and layout prior to physical construction."
  }
];

const processFAQs: FAQItem[] = [
  {
    id: "b1",
    question: "How do I track the progress of my interior project?",
    answer: "We provide regular site updates, milestone walkthroughs, and weekly progress reports so you are completely informed at every stage of execution."
  },
  {
    id: "b2",
    question: "Do you provide ongoing communication during project execution?",
    answer: "Yes, a dedicated project manager is assigned to your project to ensure continuous updates via phone, email, and scheduled site visits."
  },
  {
    id: "b3",
    question: "What if I want to revise the initial design concept?",
    answer: "Design revisions are an essential step of our planning phase. We refine 3D layouts and material boards based on your feedback until you are 100% satisfied."
  },
  {
    id: "b4",
    question: "Can I make changes during on-site project execution?",
    answer: "Minor mid-project adjustments can be incorporated. Major structural alterations during execution are evaluated for impact on schedule and material costs before approval."
  },
  {
    id: "b5",
    question: "Do you offer support after project completion and handover?",
    answer: "Yes, we provide comprehensive post-handover support, maintenance guidance, and warranty assistance on custom woodwork and installed fittings."
  }
];

const pricingFAQs: FAQItem[] = [
  {
    id: "c1",
    question: "What pricing options do you offer?",
    answer: "We offer transparent, flexible pricing models including fixed project design fees, square-footage-based pricing, and full turnkey project management options."
  },
  {
    id: "c2",
    question: "Do you provide detailed cost estimates before starting?",
    answer: "Yes, we provide itemized financial estimates breaking down design fees, raw materials, custom joinery, loose furniture, lighting, and labor charges."
  },
  {
    id: "c3",
    question: "How are materials and furniture procurement costs handled?",
    answer: "Procurement costs are transparently detailed based on selected vendor prices and material specifications with no hidden markup charges."
  }
];

export default function FAQClientComponent() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [openId, setOpenId] = useState<string | null>("a1");

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).WOW) {
      new (window as any).WOW().init();
    }
  }, []);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const tabs = [
    { title: "Design & Planning", data: designFAQs },
    { title: "Process & Support", data: processFAQs },
    { title: "Pricing & Details", data: pricingFAQs },
  ];

  return (
    <PageLoaderWrapper label="OM INTERIORS FAQ">
      <main>
        <a href="#" id="back-to-top"></a>

        {/* Hero Header Banner */}
        <JarallaxSection className="bg-dark text-light" imageSrc="/images/background/2.webp">
          <div className="container relative z-2">
            <div className="row gy-4 gx-5 align-items-center">
              <div className="col-md-8">
                <div className="spacer-double sm-hide"></div>
                <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">Frequently Asked Questions</h1>
                <ul className="crumb wow fadeInUp">
                  <li><Link href="/">Home</Link></li>
                  <li className="active">FAQ</li>
                </ul>
              </div>
              <div className="col-md-4">
                <p className="mb-0 wow fadeInRight" data-wow-delay=".2s">
                  Find answers to common questions regarding our interior design process, residential &amp; commercial services, project timelines, and transparent pricing.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-edge-bottom h-50 op-6"></div>
          <div className="sw-overlay op-5"></div>
        </JarallaxSection>

        {/* FAQ Content Section */}
        <section>
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-8">
                <div className="de-tab">
                  {/* TAB NAV */}
                  <ul className="d-tab-nav mb-4" style={{ display: "flex", gap: "10px", listStyle: "none", padding: 0 }}>
                    {tabs.map((tab, idx) => (
                      <li
                        key={idx}
                        className={activeTab === idx ? "active-tab" : ""}
                        onClick={() => {
                          setActiveTab(idx);
                          setOpenId(tab.data[0]?.id || null);
                        }}
                        style={{
                          cursor: "pointer",
                          padding: "10px 22px",
                          borderRadius: "4px",
                          fontWeight: 600,
                          fontSize: "15px",
                          transition: "all 0.3s ease",
                          background: activeTab === idx ? "var(--primary-color, #ab8e66)" : "#f5f5f5",
                          color: activeTab === idx ? "#ffffff" : "#333333"
                        }}
                      >
                        {tab.title}
                      </li>
                    ))}
                  </ul>

                  {/* TAB CONTENT */}
                  <div className="accordion mt-4">
                    <div className="accordion-section">
                      {tabs[activeTab].data.map((faq) => {
                        const isOpen = openId === faq.id;
                        return (
                          <div
                            key={faq.id}
                            className="accordion-s1 mb-3"
                            style={{
                              border: "1px solid #e5e5e5",
                              borderRadius: "6px",
                              overflow: "hidden",
                              transition: "all 0.3s ease",
                              boxShadow: isOpen ? "0 4px 15px rgba(0,0,0,0.05)" : "none"
                            }}
                          >
                            <div
                              className={`accordion-section-title d-flex justify-content-between align-items-center p-3 ${isOpen ? "active" : ""}`}
                              onClick={() => toggleAccordion(faq.id)}
                              style={{
                                cursor: "pointer",
                                fontWeight: 600,
                                fontSize: "16px",
                                color: isOpen ? "var(--primary-color, #ab8e66)" : "#222222",
                                background: isOpen ? "#fcfcfc" : "#ffffff",
                                userSelect: "none"
                              }}
                            >
                              <span>{faq.question}</span>
                              <span style={{ fontSize: "18px", fontWeight: "bold", marginLeft: "12px", color: isOpen ? "var(--primary-color, #ab8e66)" : "#888" }}>
                                {isOpen ? "−" : "+"}
                              </span>
                            </div>
                            {isOpen && (
                              <div
                                className="accordion-section-content p-3 pt-0"
                                style={{
                                  fontSize: "14px",
                                  lineHeight: "1.7",
                                  color: "#555555",
                                  borderTop: "1px solid #f0f0f0",
                                  marginTop: "8px",
                                  paddingTop: "12px"
                                }}
                              >
                                {faq.answer}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Callout Card */}
              <div className="col-lg-4">
                <div className="bg-light p-4 rounded-1 border-gray shadow-sm relative overflow-hidden">
                  <div className="subtitle mb-2">Need More Clarification?</div>
                  <h3 className="hs-4 mb-3">Have a specific question about your space?</h3>
                  <p className="fs-14 text-muted mb-4">
                    Our principal designer, Omprakash Suthar, and our architectural team are happy to assist you with tailored consultation for your upcoming project.
                  </p>
                  <img
                    src="/images/renders/render_007.jpg"
                    alt="Om Interiors Studio Consult"
                    className="w-100 rounded-1 mb-4"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="d-grid gap-2">
                    <Link href="/consultation" className="btn-main text-center fx-slide">
                      <span>Book Free Consultation</span>
                    </Link>
                    <Link href="/contact" className="btn-line text-center">
                      <span>Contact Us Direct</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="spacer-double"></div>

            {/* Bottom Contact Strip */}
            <div className="bg-dark text-light p-5 rounded-1 relative overflow-hidden jarallax">
              <div className="row align-items-center">
                <div className="col-lg-8 mb-3 mb-lg-0">
                  <h2 className="mb-2">Ready to transform your home or commercial office?</h2>
                  <p className="mb-0 text-white-50">
                    Let’s bring your vision to life with functional planning and premium 3D design visualizations.
                  </p>
                </div>
                <div className="col-lg-4 text-lg-end">
                  <Link href="/contact" className="btn-main fx-slide">
                    <span>Get Started Today</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLoaderWrapper>
  );
}
