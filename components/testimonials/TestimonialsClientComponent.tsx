"use client";

import { useEffect } from "react";
import Link from "next/link";
import JarallaxSection from "@/components/JarallaxSection";
import PageLoaderWrapper from "@/components/PageLoaderWrapper";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  date: string;
  avatar: string;
  rating: number;
  content: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Shah",
    role: "Homeowner",
    location: "Satellite, Ahmedabad",
    date: "12 January 2025",
    avatar: "/images/testimonial/1.webp",
    rating: 5.0,
    content: "Absolutely loved the way our home turned out. Omprakash and the Om Interiors team understood our requirements, lifestyle, and budget perfectly. Every corner feels thoughtfully designed, yet warm and personal."
  },
  {
    id: 2,
    name: "Rahul Mehta",
    role: "Villa Owner",
    location: "SG Highway, Ahmedabad",
    date: "20 January 2025",
    avatar: "/images/testimonial/2.webp",
    rating: 5.0,
    content: "From the initial consultation and 3D renders to the final execution, the entire experience was smooth and transparent. The attention to custom woodwork detail was outstanding."
  },
  {
    id: 3,
    name: "Neha & Amit Patel",
    role: "Apartment Owners",
    location: "Bodakdev, Ahmedabad",
    date: "02 February 2025",
    avatar: "/images/testimonial/3.webp",
    rating: 5.0,
    content: "We wanted a modern minimalist interior for our 4BHK apartment, and the final result exceeded our expectations. The space looks elegant, practical, and reflects our personality."
  },
  {
    id: 4,
    name: "Kavita Desai",
    role: "Homeowner",
    location: "Prahlad Nagar, Ahmedabad",
    date: "10 February 2025",
    avatar: "/images/testimonial/4.webp",
    rating: 5.0,
    content: "What impressed us most was their deep understanding of daily practical needs—storage solutions, ambient lighting, color palettes, and durable materials were all planned seamlessly."
  },
  {
    id: 5,
    name: "Harshil Joshi",
    role: "Commercial Client",
    location: "Commercial Hub, Ahmedabad",
    date: "18 February 2025",
    avatar: "/images/testimonial/5.webp",
    rating: 5.0,
    content: "We needed a sleek, professional office space on a defined budget. Om Interiors delivered smart space optimization and high-impact design without compromising quality."
  },
  {
    id: 6,
    name: "Riya & Kunal Shah",
    role: "Penthouse Owners",
    location: "Sindhu Bhavan, Ahmedabad",
    date: "25 February 2025",
    avatar: "/images/testimonial/6.webp",
    rating: 5.0,
    content: "The entire design process was handled with extreme patience and professionalism. They listened to our vision and kept us informed through every milestone."
  },
  {
    id: 7,
    name: "Mihir Patel",
    role: "Homeowner",
    location: "Bhavnagar",
    date: "03 March 2025",
    avatar: "/images/testimonial/1.webp",
    rating: 5.0,
    content: "Our living room and modular kitchen were completely transformed. The 3D render preview matched the final execution almost 100%. Highly recommended!"
  },
  {
    id: 8,
    name: "Sneha Mehta",
    role: "Homeowner",
    location: "Vadodara",
    date: "14 March 2025",
    avatar: "/images/testimonial/2.webp",
    rating: 5.0,
    content: "We were looking for contemporary elegance balanced with cozy comfort. Omprakash's design suggestions were brilliant and elevated our entire residence."
  },
  {
    id: 9,
    name: "Anand & Sonal Verma",
    role: "Bungalow Owners",
    location: "Gandhinagar",
    date: "28 March 2025",
    avatar: "/images/testimonial/3.webp",
    rating: 5.0,
    content: "Exceptional craftsmanship and timely delivery. Om Interiors turned our new bungalow into a peaceful, luxurious sanctuary. We receive compliments from every guest!"
  }
];

export default function TestimonialsClientComponent() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).WOW) {
      new (window as any).WOW().init();
    }
  }, []);

  return (
    <PageLoaderWrapper label="OM INTERIORS TESTIMONIALS">
      <main>
        <a href="#" id="back-to-top"></a>

        {/* Hero Banner with Jarallax */}
        <JarallaxSection className="bg-dark text-light" imageSrc="/images/background/2.webp">
          <div className="container relative z-2">
            <div className="row gy-4 gx-5 align-items-center">
              <div className="col-md-8">
                <div className="spacer-double sm-hide"></div>
                <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">Client Testimonials</h1>
                <ul className="crumb wow fadeInUp">
                  <li><Link href="/">Home</Link></li>
                  <li className="active">Testimonials</li>
                </ul>
              </div>
              <div className="col-md-4">
                <p className="mb-0 wow fadeInRight" data-wow-delay=".2s">
                  Read genuine reviews and experiences from homeowners, villa owners, and commercial clients who trusted Om Interiors to craft their spaces.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-edge-bottom h-50 op-6"></div>
          <div className="sw-overlay op-5"></div>
        </JarallaxSection>

        {/* Testimonials Grid Section */}
        <section>
          <div className="container">
            <div className="row g-4">
              {testimonials.map((item, idx) => (
                <div key={item.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${(idx % 3) * 0.2}s`}>
                  <div className="border-gray rounded-1 p-30 bg-white shadow-sm h-100 d-flex flex-column justify-content-between transition-all">
                    <div>
                      {/* Card Header: Avatar, Name, Google Badge */}
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div className="d-flex align-items-center">
                          <img
                            className="w-40px circle me-3 rounded-circle"
                            src={item.avatar}
                            alt={item.name}
                            style={{ width: "45px", height: "45px", objectFit: "cover" }}
                          />
                          <div>
                            <div className="text-dark fw-bold lh-1 fs-16">{item.name}</div>
                            <small className="text-muted fs-12">{item.role} • {item.location}</small>
                          </div>
                        </div>
                        <img src="/images/misc/google-icon.webp" className="w-30px" alt="Google Review" style={{ width: "24px" }} />
                      </div>

                      {/* Rating Stars */}
                      <div className="de-rating-ext mb-3">
                        <span className="d-stars text-warning">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="ms-2 text-dark fw-bold fs-14">5.0</span>
                      </div>

                      {/* Content */}
                      <p className="fs-14 text-muted italic mb-3" style={{ lineHeight: "1.7", whiteSpace: "normal", wordBreak: "break-word" }}>
                        &quot;{item.content}&quot;
                      </p>
                    </div>

                    <div className="border-top pt-2 mt-2 d-flex justify-content-between align-items-center">
                      <small className="text-muted fs-12"><i className="fa fa-check-circle text-success me-1"></i> Verified Project Client</small>
                      <small className="text-muted fs-11">{item.date}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="spacer-double"></div>

            {/* Founder Commitment Box with Signature */}
            <div className="bg-light p-5 rounded-1 border-gray relative overflow-hidden">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div className="subtitle mb-2">Our Quality Commitment</div>
                  <h3 className="hs-3 mb-3">Crafting timeless spaces with passion &amp; integrity</h3>
                  <p className="fs-15 text-muted mb-0">
                    &quot;Client satisfaction is the true benchmark of great design. At Om Interiors, we do not just design rooms—we curate living experiences tailored to how you live, work, and thrive.&quot;
                  </p>
                </div>
                <div className="col-md-4 text-md-end mt-4 mt-md-0">
                  <img
                    src="/images/misc/op-signature.png"
                    style={{ height: "65px", width: "auto", display: "inline-block", mixBlendMode: "multiply" }}
                    alt="Omprakash Suthar Signature"
                  />
                  <h4 className="hs-5 mb-0 mt-1">Omprakash Suthar</h4>
                  <span className="fs-13 text-muted">Founder &amp; Principal Designer</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLoaderWrapper>
  );
}
