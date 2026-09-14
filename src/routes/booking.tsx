import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, CheckCircle2, Route as RouteIcon, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Shipment | Khyati Shipping Services" },
      {
        name: "description",
        content: "Share route, cargo, container and schedule details to start a shipment booking with Khyati Shipping Services.",
      },
      { property: "og:title", content: "Book a Shipment | Khyati Shipping Services" },
      { property: "og:description", content: "Plan your next shipment with Khyati Shipping Services." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://khyatishippingservice.lovable.app/booking" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://khyatishippingservice.lovable.app/booking" }],
  }),
  component: Booking,
});

const ports = ["Mundra", "Kandla", "Nhava Sheva", "Tuna Port", "Pipavav Port", "North India ICDs"];
const sectors = ["Gulf", "Far East", "Vietnam", "Indonesia", "Malaysia", "Red Sea"];
const containers = ["20' Standard", "40' Standard", "40' High Cube", "20' Open Top", "40' Open Top", "20' Flat Rack", "40' Flat Rack", "20' Reefer", "40' Reefer"];

function Booking() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [container, setContainer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Booking request – ${origin || "Origin"} to ${destination || "Destination"}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company") || "-"}`,
      `Email: ${data.get("email")}`,
      `Mobile: ${data.get("mobile") || "-"}`,
      `Origin: ${origin || "-"}`,
      `Destination sector: ${destination || "-"}`,
      `Container: ${container || "-"}`,
      `Cargo detail: ${data.get("cargoDetail")}`,
      `Preferred sailing date: ${data.get("sailingDate") || "-"}`,
      `Remarks: ${data.get("remarks") || "-"}`,
    ].join("\n");

    setSubmitted(true);
    window.location.href = `mailto:info@khyatishipping.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="surface-navy">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
            <p className="eyebrow">Shipment planning</p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl text-navy-foreground lg:text-5xl">Book your next shipment</h1>
            <p className="mt-5 max-w-xl text-navy-foreground/70">
              Tell us where your cargo is going, what it needs and when it should move. Our team will confirm space and next steps.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              {submitted ? (
                <div className="bg-card p-8 shadow-card lg:p-10">
                  <CheckCircle2 className="size-9 text-accent" />
                  <h2 className="mt-6 font-display text-3xl">Booking details prepared</h2>
                  <p className="mt-4 text-muted-foreground">
                    Your email app should open with the booking request addressed to info@khyatishipping.com. Our team can confirm availability and schedule.
                  </p>
                  <Button type="button" variant="outline" className="mt-8" onClick={() => setSubmitted(false)}>
                    Submit another booking
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card p-8 shadow-card lg:p-10">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" required placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company name</Label>
                      <Input id="company" name="company" placeholder="Company / firm" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" required placeholder="you@company.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mobile">Mobile number</Label>
                      <Input id="mobile" name="mobile" type="tel" placeholder="+91" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="origin">Route from</Label>
                      <Select value={origin} onValueChange={setOrigin} required>
                        <SelectTrigger id="origin"><SelectValue placeholder="Select load port" /></SelectTrigger>
                        <SelectContent>{ports.map((port) => <SelectItem key={port} value={port}>{port}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="destination">Route to</Label>
                      <Select value={destination} onValueChange={setDestination} required>
                        <SelectTrigger id="destination"><SelectValue placeholder="Select destination sector" /></SelectTrigger>
                        <SelectContent>{sectors.map((sector) => <SelectItem key={sector} value={sector}>{sector}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="container">Container type</Label>
                      <Select value={container} onValueChange={setContainer} required>
                        <SelectTrigger id="container"><SelectValue placeholder="Select container type" /></SelectTrigger>
                        <SelectContent>{containers.map((type) => <SelectItem key={type} value={type}>{type}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sailingDate">Preferred sailing date</Label>
                      <Input id="sailingDate" name="sailingDate" type="date" required />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="cargoDetail">Cargo detail</Label>
                      <Textarea id="cargoDetail" name="cargoDetail" required rows={4} placeholder="Commodity, quantity, packing and special handling needs" />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="remarks">Remarks</Label>
                      <Textarea id="remarks" name="remarks" rows={4} placeholder="Temperature, humidity, dimensions or other requirements" />
                    </div>
                  </div>
                  <Button type="submit" size="lg" className="mt-8">Request booking confirmation <Send /></Button>
                </form>
              )}
            </div>

            <aside className="space-y-8">
              <div>
                <RouteIcon className="size-6 text-accent" />
                <h2 className="mt-4 font-display text-2xl">A clearer booking brief</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">Route, cargo, equipment and schedule details help our team return a useful confirmation instead of a generic response.</p>
              </div>
              <div className="border-l-2 border-accent bg-sand p-7">
                <CalendarDays className="size-5 text-accent" />
                <p className="mt-4 font-display text-xl">Schedule with confidence</p>
                <p className="mt-2 text-sm text-muted-foreground">We will review your requested sailing date, equipment needs and lane availability.</p>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}