import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Container, FileCheck2, Globe2, Handshake, Package, Ship } from "lucide-react";

import documentationImg from "@/assets/documentation.jpg";
import heroImg from "@/assets/hero-port.jpg";
import terminalImg from "@/assets/terminal-aerial.jpg";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Khyati Shipping Services | NVOCC & Freight Forwarding, Gandhidham" },
      {
        name: "description",
        content:
          "Khyati Shipping Services Pvt Ltd is an NVOCC with own containers offering container trading, international freight forwarding and documentation support from Gandhidham, India.",
      },
      { property: "og:title", content: "Khyati Shipping Services | Connecting Your Cargo" },
      {
        property: "og:description",
        content:
          "Reliable NVOCC solutions, own containers, container trading and freight forwarding across Gulf, Far East, Vietnam, Indonesia, Malaysia and Red Sea.",
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: Ship,
    title: "NVOCC – Own Containers",
    text: "We operate as an NVOCC with our own container equipment for flexible, dependable containerised shipping.",
  },
  {
    icon: Container,
    title: "Container Trading",
    text: "Buy, sell or source containers with a focus on quality, availability and competitive solutions.",
  },
  {
    icon: Globe2,
    title: "International Freight Forwarding",
    text: "Efficient forwarding services across global trade lanes, coordinated end to end.",
  },
  {
    icon: FileCheck2,
    title: "Documentation Support",
    text: "A specialised team with 10+ years of experience keeping paperwork accurate and timely.",
  },
];

const reasons = [
  {
    icon: Ship,
    title: "Reliable Shipping Solutions",
    text: "Connecting businesses with efficient and dependable cargo movement solutions.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    text: "Supporting international trade through our shipping and logistics network.",
  },
  {
    icon: Package,
    title: "Customer-Focused Service",
    text: "Personalised attention and dedicated support for every shipment.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    text: "We grow with our customers by building relationships based on trust and reliability.",
  },
];

function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden">
          <img
            src={heroImg}
            alt="Container ship being worked by gantry cranes at an Indian port at dusk"
            width={1920}
            height={1088}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="hero-scrim absolute inset-0" />
          <div className="relative mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-40">
            <p className="eyebrow">NVOCC · Container Trading · Freight Forwarding</p>
            <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] text-navy-foreground sm:text-5xl lg:text-6xl">
              Connecting your cargo to the world
            </h1>
            <p className="mt-6 max-w-xl text-base text-navy-foreground/75 lg:text-lg">
              Khyati Shipping Services Pvt. Ltd. provides reliable and efficient NVOCC solutions,
              connecting businesses with global shipping opportunities.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/contact" hash="quote">
                  Get a Quote <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-navy-foreground/40 bg-transparent text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            <dl className="mt-16 grid max-w-2xl grid-cols-2 gap-8 border-t border-navy-foreground/15 pt-8 sm:grid-cols-4">
              {[
                ["10+", "Years of experience"],
                ["6", "Indian load ports"],
                ["6", "Trade sectors served"],
                ["4", "Core service lines"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-3xl text-steel">{value}</dt>
                  <dd className="mt-1 text-xs tracking-wide text-navy-foreground/60">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* About preview */}
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">About Us</p>
              <h2 className="rule-accent mt-4 font-display text-3xl lg:text-4xl">
                More than a decade of dependable shipping
              </h2>
              <p className="mt-8 text-muted-foreground">
                Khyati Shipping Services Private Limited is committed to delivering reliable,
                efficient and customer-focused shipping solutions. With more than 10 years of
                experience, we have built strong expertise in international trade, containerised
                cargo movement, documentation and customer support.
              </p>
              <p className="mt-4 text-muted-foreground">
                We specialise in NVOCC Services, NVOCC Agency Services, Container Trading and
                International Freight Forwarding — flexible logistics designed around exporters,
                importers and businesses across global markets.
              </p>
              <Button asChild variant="link" className="mt-6 px-0 text-accent">
                <Link to="/about">
                  Read our story <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={terminalImg}
                alt="Aerial view of a container terminal at sunset"
                width={1600}
                height={1000}
                loading="lazy"
                className="w-full rounded-sm object-cover shadow-elev"
              />
              <div className="absolute -bottom-6 left-6 right-6 bg-card p-6 shadow-card sm:right-auto sm:max-w-xs">
                <p className="font-display text-lg">Every shipment matters</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  We don't just move containers — we help move your business forward.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="surface-navy">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
            <p className="eyebrow">Our Services</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl text-navy-foreground lg:text-4xl">
              Complete containerised shipping capability
            </h2>
            <div className="mt-14 grid gap-px overflow-hidden border border-navy-foreground/10 bg-navy-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <div key={s.title} className="bg-navy p-8">
                  <s.icon className="size-6 text-steel" />
                  <h3 className="mt-6 font-display text-xl text-navy-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm text-navy-foreground/65">{s.text}</p>
                </div>
              ))}
            </div>
            <Button asChild variant="secondary" className="mt-12">
              <Link to="/services">
                Explore all services <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Mission / Vision */}
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="border-l-2 border-accent bg-card p-8 shadow-card lg:p-10">
              <p className="eyebrow">Our Mission</p>
              <p className="mt-5 font-display text-xl leading-relaxed lg:text-2xl">
                To provide reliable, efficient and customer-focused shipping and logistics solutions
                by connecting businesses across global markets.
              </p>
            </div>
            <div className="border-l-2 border-accent bg-card p-8 shadow-card lg:p-10">
              <p className="eyebrow">Our Vision</p>
              <p className="mt-5 font-display text-xl leading-relaxed lg:text-2xl">
                To become a trusted and globally recognised shipping and logistics partner,
                connecting India with the world.
              </p>
            </div>
          </div>
        </section>

        {/* Why choose */}
        <section className="bg-sand">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <img
                src={documentationImg}
                alt="Bill of lading documentation on a desk beside a laptop"
                width={1400}
                height={1000}
                loading="lazy"
                className="w-full rounded-sm object-cover shadow-elev"
              />
              <div>
                <p className="eyebrow">Why Khyati</p>
                <h2 className="rule-accent mt-4 font-display text-3xl lg:text-4xl">
                  Why choose Khyati Shipping Services?
                </h2>
                <div className="mt-10 grid gap-8 sm:grid-cols-2">
                  {reasons.map((r) => (
                    <div key={r.title}>
                      <r.icon className="size-5 text-accent" />
                      <h3 className="mt-4 font-display text-lg">{r.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="surface-navy">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 lg:flex-row lg:items-center lg:px-8">
            <div>
              <h2 className="font-display text-3xl text-navy-foreground lg:text-4xl">
                Ready to move your next shipment?
              </h2>
              <p className="mt-3 text-navy-foreground/70">
                Share your POL, POD and container requirement — our team responds with a competitive
                rate.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact" hash="quote">
                Request a Quote <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
