"use client";

import { useEffect } from "react";
import Link from "next/link";
import JarallaxSection from "@/components/JarallaxSection";
import PageLoaderWrapper from "@/components/PageLoaderWrapper";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  authorAvatar: string;
  date: string;
  category: string;
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: "Smart layout planning for better space and comfort",
    excerpt: "Discover how thoughtful interior layouts can transform small or large spaces into functional, stylish, and comfortable living environments...",
    image: "/images/blog/1.webp",
    author: "Omprakash Suthar",
    authorAvatar: "/images/testimonial/1.webp",
    date: "10 Jan 2025",
    category: "Space Planning"
  },
  {
    id: 2,
    title: "Choosing materials that elevate modern interiors",
    excerpt: "Learn how selecting the right materials can enhance aesthetics, durability, and overall value in contemporary interior design projects...",
    image: "/images/blog/2.webp",
    author: "Suresh Suthar",
    authorAvatar: "/images/testimonial/2.webp",
    date: "22 Feb 2025",
    category: "Materials & Craft"
  },
  {
    id: 3,
    title: "Common mistakes to avoid in home interior design",
    excerpt: "Uncover frequent interior design mistakes and how to avoid them, from poor lighting choices to mismatched furniture and color schemes...",
    image: "/images/blog/3.webp",
    author: "Khanuram Suthar",
    authorAvatar: "/images/testimonial/3.webp",
    date: "05 Mar 2025",
    category: "Design Advice"
  },
  {
    id: 4,
    title: "Lighting techniques that shape mood and ambiance",
    excerpt: "Explore how layered lighting strategies can dramatically influence atmosphere, enhance depth, and elevate the overall interior experience...",
    image: "/images/blog/4.webp",
    author: "Himanshu Suthar",
    authorAvatar: "/images/testimonial/4.webp",
    date: "18 Mar 2025",
    category: "Lighting Design"
  },
  {
    id: 5,
    title: "Color palettes that create harmony in every room",
    excerpt: "Understand how to combine tones, textures, and accents to achieve balanced interiors that feel cohesive, inviting, and visually refined...",
    image: "/images/blog/5.webp",
    author: "Omprakash Suthar",
    authorAvatar: "/images/testimonial/5.webp",
    date: "02 Apr 2025",
    category: "Color Theory"
  },
  {
    id: 6,
    title: "Maximizing storage without sacrificing design style",
    excerpt: "See how smart storage solutions can keep interiors clean and organized while maintaining elegance, functionality, and seamless design flow...",
    image: "/images/blog/6.webp",
    author: "Suresh Suthar",
    authorAvatar: "/images/testimonial/6.webp",
    date: "15 Apr 2025",
    category: "Furniture & Decor"
  }
];

export default function BlogClientComponent() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).WOW) {
      new (window as any).WOW().init();
    }
  }, []);

  return (
    <PageLoaderWrapper label="OM INTERIORS BLOG">
      <main>
        <a href="#" id="back-to-top"></a>

        {/* Hero Section Banner */}
        <JarallaxSection className="bg-dark text-light" imageSrc="/images/background/2.webp">
          <div className="container relative z-2">
            <div className="row gy-4 gx-5 align-items-center">
              <div className="col-md-8">
                <div className="spacer-double sm-hide"></div>
                <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">Design Blog &amp; Journal</h1>
                <ul className="crumb wow fadeInUp">
                  <li><Link href="/">Home</Link></li>
                  <li className="active">Blog</li>
                </ul>
              </div>
              <div className="col-md-4">
                <p className="mb-0 wow fadeInRight" data-wow-delay=".2s">
                  Explore practical interior design insights, architectural trends, material guides, and expert advice from the Om Interiors studio team.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-edge-bottom h-50 op-6"></div>
          <div className="sw-overlay op-5"></div>
        </JarallaxSection>

        {/* Blog Post Grid Section */}
        <section>
          <div className="container">
            <div className="row g-4 gy-5">
              {posts.map((post, idx) => (
                <div key={post.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${(idx % 3) * 0.2}s`}>
                  <div className="hover h-100 d-flex flex-column justify-content-between">
                    <div>
                      <div className="relative overflow-hidden rounded-1 border-gray shadow-sm">
                        <div className="wow scaleIn">
                          <img
                            src={post.image}
                            className="w-100 hover-scale-1-1 transition"
                            alt={post.title}
                            style={{ height: "240px", objectFit: "cover" }}
                          />
                        </div>
                        <Link href="/blog-single" className="d-block abs w-100 h-100 top-0 start-0"></Link>
                        <div className="abs top-0 start-0 p-3">
                          <span className="badge bg-dark text-white opacity-75 fs-12 uppercase">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="pt-4">
                        <h3 className="fs-20 mb-2">
                          <Link className="text-dark text-decoration-none hover-color transition" href="/blog-single">
                            {post.title}
                          </Link>
                        </h3>
                        <p className="mb-3 text-muted fs-14" style={{ lineHeight: "1.7" }}>
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-top d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <img src={post.authorAvatar} className="w-25px h-25px me-2 circle rounded-circle" alt={post.author} style={{ objectFit: "cover" }} />
                        <span className="fs-13 text-dark fw-bold">{post.author}</span>
                      </div>
                      <div className="fs-13 text-muted">
                        <i className="icofont-ui-calendar id-color me-1"></i>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageLoaderWrapper>
  );
}
