import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Khyati Shipping Services" },
      { name: "description", content: "General shipping, booking, documentation, liability and claims terms for Khyati Shipping Services." },
      { property: "og:title", content: "Terms & Conditions | Khyati Shipping Services" },
      { property: "og:description", content: "Review the general terms that apply to shipping enquiries and bookings." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://khyatishippingservice.lovable.app/terms" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://khyatishippingservice.lovable.app/terms" }],
  }),
  component: Terms,
});

const sections = [
  ["Bookings and space", "A booking request is subject to equipment, vessel space, route availability and written confirmation from Khyati Shipping Services. Schedules are estimates until confirmed by the relevant carrier or operating partner."],
  ["Cargo and documentation", "The shipper must provide accurate cargo descriptions, weights, dimensions, values, HS codes and supporting documents before cut-off. Dangerous, temperature-controlled, oversized or restricted cargo must be declared before acceptance."],
  ["Rates and charges", "Rates are based on the information available at the time of quotation. Port charges, customs duties, storage, detention, demurrage, inspections, documentation and other third-party costs may apply when relevant and will be advised where known."],
  ["Transit and delays", "Transit times and sailing dates can change because of weather, port congestion, carrier changes, customs, equipment availability, government action or other events outside reasonable control. We will share material updates when received."],
  ["Liability and cargo protection", "Cargo remains the shipper's responsibility to pack, mark and declare correctly. Liability is governed by the applicable bill of lading, carrier terms, mandatory law and the agreed service scope. Shippers should arrange appropriate marine cargo insurance for the full cargo value."],
  ["Claims and communication", "Any loss, damage, delay or discrepancy should be reported promptly with photographs, delivery records and supporting documents. Claim deadlines and procedures in the applicable transport document will apply."],
  ["Final agreement", "These general terms support enquiries and booking discussions. The final quotation, booking confirmation, bill of lading and applicable carrier conditions take precedence for each shipment."],
];

function Terms() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="surface-navy">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
            <p className="eyebrow">Shipping rules</p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl text-navy-foreground lg:text-5xl">Terms &amp; Conditions</h1>
            <p className="mt-5 max-w-2xl text-navy-foreground/70">General terms for shipping enquiries, quotations and booking coordination.</p>
          </div>
        </section>
        <section className="mx-auto max-w-4xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="border-l-2 border-accent bg-sand p-6 text-sm text-muted-foreground lg:p-8">
            These general terms are intended for operational guidance. Shipment-specific documents and applicable law govern each confirmed movement.
          </div>
          <div className="mt-14 divide-y divide-border border-y border-border">
            {sections.map(([title, body]) => (
              <section key={title} className="py-8">
                <h2 className="font-display text-2xl">{title}</h2>
                <p className="mt-4 leading-7 text-muted-foreground">{body}</p>
              </section>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}