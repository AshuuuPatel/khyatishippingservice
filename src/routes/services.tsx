import { createFileRoute } from "@tanstack/react-router";

import documentationImg from "@/assets/documentation.jpg";
import freightImg from "@/assets/freight-forwarding.jpg";
import containersAsset from "@/assets/own-containers.png.asset.json";
import terminalImg from "@/assets/terminal-aerial.jpg";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | NVOCC, Container Trading & Freight Forwarding" },
      {
        name: "description",
        content:
          "NVOCC with own containers, container trading, international freight forwarding and shipping documentation support from Khyati Shipping Services Pvt Ltd.",
      },
      { property: "og:title", content: "Our Services | Khyati Shipping Services" },
      {
        property: "og:description",
        content:
          "Own container NVOCC operations, container trading, freight forwarding and documentation support backed by 10+ years of experience.",
      },
    ],
  }),
  component: Services,
});

const blocks = [
  {
    id: "nvocc",
    label: "01",
    title: "NVOCC – Own Containers",
    body: "At Khyati Shipping Services Pvt. Ltd., we operate as an NVOCC with our own container equipment, providing reliable and flexible containerised shipping solutions. Our focus is on efficient cargo movement, smooth coordination and dependable service, helping customers transport their shipments with confidence across international trade routes.",
    image: containersAsset.url,
    alt: "Four blue shipping containers stacked in pairs at a container yard",
  },
  {
    id: "trading",
    label: "02",
    title: "Container Trading",
    body: "We provide reliable and flexible container trading solutions for shipping, logistics, storage and business operations. We assist customers in sourcing suitable containers with a focus on quality, availability, competitive solutions and professional service. Whether you are looking to buy, sell or source containers, our goal is a smooth and dependable experience from inquiry to delivery.",
    image: terminalImg,
    alt: "Stacked shipping containers at a busy port",
  },
  {
    id: "forwarding",
    label: "03",
    title: "International Freight Forwarding",
    body: "We provide reliable and efficient international freight forwarding services across the world — coordinating sea freight, inland movement and port handling so your cargo keeps moving on schedule, lane after lane.",
    image: freightImg,
    alt: "Container ship, truck and stacked containers at a port",
  },
  {
    id: "documentation",
    label: "04",
    title: "Documentation & Support",
    body: "We are supported by a specialised team with over 10 years of experience in shipping documentation and customer support. Our professionals ensure accurate documentation, smooth coordination, timely updates and dedicated assistance throughout the shipping process — a hassle-free journey from booking to final delivery.",
    image: documentationImg,
    alt: "Bill of lading document on a desk with a pen and laptop",
  },
];

function Services() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="surface-navy">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
            <p className="eyebrow">Our Services</p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl text-navy-foreground lg:text-5xl">
              Flexible logistics, built around your cargo
            </h1>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-navy-foreground/70">
              {blocks.map((b) => (
                <li key={b.id}>
                  <a href={`#${b.id}`} className="hover:text-steel">
                    {b.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {blocks.map((b, i) => (
          <section
            key={b.id}
            id={b.id}
            className={i % 2 === 1 ? "bg-sand scroll-mt-24" : "scroll-mt-24"}
          >
            <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
              <div
                className={`grid gap-12 lg:grid-cols-2 lg:items-center ${
                  i % 2 === 1 ? "lg:[&>figure]:order-first" : ""
                }`}
              >
                <div>
                  <p className="eyebrow">{b.label}</p>
                  <h2 className="rule-accent mt-4 font-display text-3xl lg:text-4xl">{b.title}</h2>
                  <p className="mt-8 text-muted-foreground">{b.body}</p>
                </div>
                <figure>
                  <img
                    src={b.image}
                    alt={b.alt}
                    width={1400}
                    height={1000}
                    loading="lazy"
                    className="w-full rounded-sm object-cover shadow-elev"
                  />
                </figure>
              </div>
            </div>
          </section>
        ))}
      </main>
      <SiteFooter />
    </div>
  );
}
