import { createFileRoute } from "@tanstack/react-router";

import terminalImg from "@/assets/terminal-aerial.jpg";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Khyati Shipping Services Pvt Ltd | 10+ Years in Shipping" },
      {
        name: "description",
        content:
          "Learn about Khyati Shipping Services Pvt Ltd, a Gandhidham-based NVOCC with over 10 years of expertise in containerised cargo, documentation and customer support.",
      },
      { property: "og:title", content: "About Khyati Shipping Services Pvt Ltd" },
      {
        property: "og:description",
        content:
          "Over a decade of expertise in international trade, containerised cargo movement, documentation and customer support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="surface-navy">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
            <p className="eyebrow">About Us</p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl text-navy-foreground lg:text-5xl">
              Every shipment is an important part of our customer's business
            </h1>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-20 lg:px-8">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-foreground">
                Khyati Shipping Services Private Limited
              </strong>{" "}
              is committed to delivering reliable, efficient and customer-focused shipping
              solutions. With more than 10 years of experience in the shipping industry, we have
              built strong expertise in international trade, containerised cargo movement,
              documentation and customer support.
            </p>
            <p>
              We specialise in{" "}
              <strong className="text-foreground">
                NVOCC Services, NVOCC Agency Services, Container Trading and International Freight
                Forwarding
              </strong>
              , offering flexible logistics solutions designed to meet the requirements of
              exporters, importers and businesses across global markets. From booking and
              documentation to cargo movement and coordination, our focus is on professional service
              with clear communication and dependable support.
            </p>
            <p>
              Our experienced and specialised team brings over 10 years of expertise in
              documentation and customer support, helping ensure smooth coordination and timely
              assistance throughout the shipping process.
            </p>
            <p>
              At Khyati Shipping Services, we believe that every shipment is more than just cargo —
              it is an important part of our customer's business. Over the years, our commitment to
              customer support, competitive solutions, timely coordination, transparent communication
              and reliable service has helped us build long-term relationships.
            </p>
            <p>
              With over a decade of experience, we continue to move forward with one clear
              commitment — delivering dependable shipping solutions and growing together with our
              customers.
            </p>
          </div>
        </section>

        <img
          src={terminalImg}
          alt="Aerial view of a container port with cranes and ships"
          width={1600}
          height={1000}
          loading="lazy"
          className="h-[320px] w-full object-cover lg:h-[440px]"
        />

        <section className="bg-sand">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:px-8">
            <div className="border-l-2 border-accent bg-card p-8 shadow-card">
              <p className="eyebrow">Our Mission</p>
              <p className="mt-5 font-display text-xl leading-relaxed">
                To provide reliable, efficient and customer-focused shipping and logistics solutions
                by connecting businesses across global markets.
              </p>
            </div>
            <div className="border-l-2 border-accent bg-card p-8 shadow-card">
              <p className="eyebrow">Our Vision</p>
              <p className="mt-5 font-display text-xl leading-relaxed">
                To become a trusted and globally recognised shipping and logistics partner,
                connecting India with the world. We aim to build a strong international network,
                continuously improve our services and create long-term value for our customers
                through reliability, innovation and excellence.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
