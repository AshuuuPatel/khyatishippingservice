import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Request a Quote | Contact Khyati Shipping Services, Gandhidham" },
      {
        name: "description",
        content:
          "Request a shipping quote from Khyati Shipping Services Pvt Ltd, Gandhidham. Share POL, POD, container type and cargo details, or reach us by phone and email.",
      },
      { property: "og:title", content: "Request a Quote | Khyati Shipping Services" },
      {
        property: "og:description",
        content:
          "Tell us your POL, POD and container requirement and our team will respond with a competitive rate.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const containerTypes = [
  "20' Standard",
  "40' Standard",
  "40' High Cube",
  "20' Open Top",
  "40' Open Top",
  "20' Flat Rack",
  "40' Flat Rack",
  "20' Reefer",
  "40' Reefer",
  "Other / Not sure",
];

function Contact() {
  const [containerType, setContainerType] = useState("");
  const isSpecialContainer = containerType.includes("Open Top") || containerType.includes("Flat Rack");
  const isReefer = containerType.includes("Reefer");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const subject = `Quote request – ${String(data.get("pol") || "POL")} to ${String(
      data.get("pod") || "POD",
    )}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company")}`,
      `Mobile: ${data.get("mobile")}`,
      `Email: ${data.get("email")}`,
      `POL: ${data.get("pol")}`,
      `POD: ${data.get("pod")}`,
      `HS Code: ${data.get("hsCode") || "-"}`,
      `Shipment planning date: ${data.get("planningDate") || "-"}`,
      `Container type: ${containerType || "-"}`,
      ...(isSpecialContainer
        ? [
            `Dimensions: ${data.get("dimensions") || "-"}`,
            `Weight: ${data.get("weight") || "-"}`,
          ]
        : []),
      ...(isReefer
        ? [
            `Temperature: ${data.get("temperature") || "-"}`,
            `Humidity: ${data.get("humidity") || "-"}`,
          ]
        : []),
      "",
      `Remarks: ${data.get("remarks") || "-"}`,
    ].join("\n");

    window.location.href = `mailto:pricing@khyatishipping.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email app with the quote request prepared.");
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="surface-navy">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
            <p className="eyebrow">Contact Us</p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl text-navy-foreground lg:text-5xl">
              Request a quote
            </h1>
            <p className="mt-5 max-w-xl text-navy-foreground/70">
              Share your shipment details and our pricing team will revert with competitive options.
            </p>
          </div>
        </section>

        <section id="quote" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
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
                  <Label htmlFor="mobile">Mobile number</Label>
                  <Input id="mobile" name="mobile" type="tel" required placeholder="+91" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pol">POL (Port of Loading)</Label>
                  <Input id="pol" name="pol" required placeholder="e.g. Mundra" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pod">POD (Port of Discharge)</Label>
                  <Input id="pod" name="pod" required placeholder="e.g. Jebel Ali" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hsCode">HS Code</Label>
                  <Input id="hsCode" name="hsCode" placeholder="e.g. 3901" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="planningDate">Shipment Planning Date</Label>
                  <Input id="planningDate" name="planningDate" type="date" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="container">Container type</Label>
                  <Select value={containerType} onValueChange={setContainerType}>
                    <SelectTrigger id="container">
                      <SelectValue placeholder="Select container type" />
                    </SelectTrigger>
                    <SelectContent>
                      {containerTypes.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {isSpecialContainer && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="dimensions">Dimensions</Label>
                      <Input id="dimensions" name="dimensions" placeholder="Length × width × height" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weight">Weight</Label>
                      <Input id="weight" name="weight" placeholder="e.g. 12,000 kg" />
                    </div>
                  </>
                )}
                {isReefer && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="temperature">Temperature</Label>
                      <Input id="temperature" name="temperature" placeholder="e.g. -18°C" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="humidity">Humidity</Label>
                      <Input id="humidity" name="humidity" placeholder="e.g. 60% RH" />
                    </div>
                  </>
                )}
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="remarks">Remarks</Label>
                  <Textarea
                    id="remarks"
                    name="remarks"
                    rows={5}
                    placeholder="Commodity, number of containers, readiness date…"
                  />
                </div>
              </div>
              <Button type="submit" size="lg" className="mt-8 w-full sm:w-auto">
                Send Request <Send className="ml-1 size-4" />
              </Button>
            </form>

            <div className="space-y-10">
              <div>
                <p className="eyebrow">Head Office</p>
                <ul className="mt-6 space-y-5 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span>
                      Khyati Shipping Services Pvt Ltd
                      <br />
                      Swami Narayan Building, Office No. 11A, 1st Floor,
                      <br />
                      Ward No. 9/C, Gandhidham – 370201, Gujarat, India
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span>
                      <a href="mailto:info@khyatishipping.com" className="hover:text-accent">
                        info@khyatishipping.com
                      </a>
                      <br />
                      <a href="mailto:pricing@khyatishipping.com" className="hover:text-accent">
                        pricing@khyatishipping.com
                      </a>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
                    <a href="tel:+919054731045" className="hover:text-accent">
                      +91 9054731045
                    </a>
                  </li>
                </ul>
              </div>
              <div className="surface-navy p-8">
                <p className="font-display text-xl text-navy-foreground">
                  Your Cargo, Our Commitment.
                </p>
                <p className="mt-3 text-sm text-navy-foreground/70">
                  India · Gulf · Far East · Vietnam · Indonesia · Malaysia · North India ICDs · Iran
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
