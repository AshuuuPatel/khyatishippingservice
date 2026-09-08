import { createFileRoute } from "@tanstack/react-router";
import { Anchor, Globe2 } from "lucide-react";

import heroImg from "@/assets/hero-port.jpg";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/network")({
  head: () => ({
    meta: [
      { title: "Ports & Sectors | Khyati Shipping Services Global Network" },
      {
        name: "description",
        content:
          "Khyati Shipping Services offers cargo movement from Mundra, Kandla, Nhava Sheva, Tuna, Pipavav and North India ICDs to Gulf, Far East, Vietnam, Indonesia, Malaysia and Red Sea.",
      },
      { property: "og:title", content: "Our Global Network | Khyati Shipping Services" },
      {
        property: "og:description",
        content:
          "Load ports across western India and trade sectors covering Gulf, Far East, Vietnam, Indonesia, Malaysia and Red Sea.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Network,
});

const ports = [
  "Mundra",
  "Kandla",
  "Nhava Sheva",
  "Tuna Port",
  "Pipavav Port",
  "North India ICDs",
];

const sectors = ["Gulf", "Far East", "Vietnam", "Indonesia", "Malaysia", "Red Sea"];

function Network() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="surface-navy">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
            <p className="eyebrow">Our Global Network</p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl text-navy-foreground lg:text-5xl">
              From Indian gateways to global trade lanes
            </h1>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Ports we offer services from</p>
              <h2 className="rule-accent mt-4 font-display text-3xl">Load ports &amp; ICDs</h2>
              <ul className="mt-10 divide-y divide-border border-y border-border">
                {ports.map((p) => (
                  <li key={p} className="flex items-center gap-4 py-5">
                    <Anchor className="size-4 text-accent" />
                    <span className="font-display text-xl">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Sectors we offer services to</p>
              <h2 className="rule-accent mt-4 font-display text-3xl">Trade sectors</h2>
              <ul className="mt-10 divide-y divide-border border-y border-border">
                {sectors.map((s) => (
                  <li key={s} className="flex items-center gap-4 py-5">
                    <Globe2 className="size-4 text-accent" />
                    <span className="font-display text-xl">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <img
          src={heroImg}
          alt="Container terminal with cranes loading a vessel"
          width={1920}
          height={1088}
          loading="lazy"
          className="h-[320px] w-full object-cover lg:h-[460px]"
        />

        <section className="bg-sand">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center lg:px-8">
            <p className="eyebrow">Coverage</p>
            <h2 className="mt-4 font-display text-3xl lg:text-4xl">
              India · Gulf · Far East · Vietnam · Indonesia · Malaysia · North India ICDs
            </h2>
            <p className="mt-6 text-muted-foreground">
              We continue to expand our international network so exporters and importers get
              dependable space, equipment and coordination on the lanes that matter to them.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
