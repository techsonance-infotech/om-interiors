import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/lib/servicesData";
import JarallaxSection from "@/components/JarallaxSection";
import PageLoaderWrapper from "@/components/PageLoaderWrapper";
import ServiceSchema from "@/components/schema/ServiceSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import { siteConfig } from "@/config/site";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug];

  if (!service) {
    return {
      title: "Service Details | OM Interior Studio Surat",
    };
  }

  const pageTitle = `${service.title} in Surat | OM Interior Studio`;
  const canonicalUrl = `${siteConfig.url}/service-single/${resolvedParams.slug}`;

  return {
    title: pageTitle,
    description: service.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: service.description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [{ url: service.heroImage ? `${siteConfig.url}${service.heroImage}` : siteConfig.ogImage }],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default async function DynamicServiceSinglePage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug];

  if (!service) {
    notFound();
  }

  const pageUrl = `/service-single/${resolvedParams.slug}`;

  return (
    <PageLoaderWrapper label={service.title}>
      <ServiceSchema
        name={service.title}
        description={service.description}
        url={pageUrl}
        image={service.heroImage}
      />
      <BreadcrumbSchema
        items={[
          { name: "Services", url: "/services" },
          { name: service.title, url: pageUrl },
        ]}
      />
      <main>
        <a href="#" id="back-to-top"></a>

        <JarallaxSection className="bg-dark text-light" imageSrc={service.heroImage}>
          <div className="container relative z-2">
            <div className="row gy-4 gx-5 align-items-center">
              <div className="col-md-8">
                <div className="spacer-double sm-hide"></div>
                <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">
                  {service.title}
                </h1>
                <ul className="crumb wow fadeInUp">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li className="active">{service.title}</li>
                </ul>
              </div>
              <div className="col-md-4">
                <p className="mb-0 wow fadeInRight" data-wow-delay=".2s">
                  We create inspiring interiors that combine comfort, functionality, and timeless design. Every space is thoughtfully tailored to reflect your lifestyle and needs.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-edge-bottom h-50 op-6"></div>
          <div className="sw-overlay op-5"></div>
        </JarallaxSection>

      <section>
        <div className="container">
          <div className="row g-4 justify-content-between">
            <div className="col-lg-6">
              <div className="subtitle wow fadeInUp" data-wow-delay=".2s">{service.subtitle}</div>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">{service.heading}</h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                {service.description}
              </p>
            </div>

            <div className="col-lg-5">
              <div className="bg-dark-1 text-light p-40 rounded-1 wow fadeInUp" data-wow-delay=".8s">
                <h3>Service Highlights</h3>
                <ul className="ul-check">
                  {service.highlights.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-6">
              <div className="text-center mb-5">
                <div className="subtitle wow fadeInUp" data-wow-delay=".0s">{service.includedSubtitle}</div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">{service.includedTitle}</h2>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {service.solutions.map((item, index) => (
              <div key={index} className="col-md-4 wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                <div className="bg-color-op-1 rounded-1 p-40 h-100 relative overflow-hidden">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="w-70px h-70px rounded-1 bg-dark text-light fs-32 text-center pt-3">
                      <i className={item.faIcon || `icofont ${item.icon}`}></i>
                    </div>
                    <span className="fs-14 text-dark fw-600">{item.number}</span>
                  </div>
                  <h3 className="fs-24">{item.title}</h3>
                  <p className="mb-0">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark-1 text-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 offset-lg-3 text-center">
              <div className="text-center">
                <div className="subtitle wow fadeInUp" data-wow-delay=".0s">{service.processSubtitle}</div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">{service.processTitle}</h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {service.processSteps.map((step, index) => {
              const isLast = index === service.processSteps.length - 1;
              return (
                <div
                  key={index}
                  className={`col-6 col-md-3 de-step ${!isLast ? "de-step-arrow" : ""} wow fadeInRight`}
                  data-wow-delay={`${0.4 + index * 0.2}s`}
                >
                  <div className="step-icon mb-3">
                    <i className={`${step.faIcon || `icofont ${step.icon}`} fs-40 id-color`}></i>
                  </div>
                  <h4 className="fw-bold">{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row g-4 gx-5 align-items-center">
            <div className="col-lg-6">
              <img src={service.mainImage} className="img-fluid rounded-1 wow fadeInUp" style={{ width: "100%", height: "450px", objectFit: "cover" }} data-wow-delay=".0s" alt={service.title} />
            </div>

            <div className="col-lg-6">
              <div className="subtitle wow fadeInUp" data-wow-delay=".2s">{service.whyChooseUsSubtitle}</div>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">{service.whyChooseUsTitle}</h2>

              <ul className="ul-check wow fadeInUp" data-wow-delay=".6s">
                {service.whyChooseUsPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      </main>
    </PageLoaderWrapper>
  );
}
