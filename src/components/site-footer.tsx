import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import logo from "@/assets/khyati-logo.jpg.asset.json";

export function SiteFooter() {
  return (
    <footer className="surface-navy">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Khyati Shipping Services logo"
              width={48}
              height={35}
              loading="lazy"
              className="h-9 w-auto rounded-sm bg-navy-foreground/95 p-0.5"
            />
            <span className="font-display text-lg tracking-wide">
              KHYATI SHIPPING SERVICES PVT LTD
            </span>
          </div>
          <p className="mt-5 max-w-md text-sm text-navy-foreground/70">
            NVOCC operations with own containers, container trading, international freight
            forwarding and documentation support — backed by more than a decade of experience.
          </p>
          <p className="mt-6 font-display text-xl text-steel">Your Cargo, Our Commitment.</p>
        </div>

        <div>
          <h3 className="eyebrow">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm text-navy-foreground/75">
            <li>
              <Link to="/about" className="hover:text-steel">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-steel">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/network" className="hover:text-steel">
                Ports &amp; Sectors
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-steel">
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm text-navy-foreground/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-steel" />
              <span>
                Swami Narayan Building, Office No. 11A, 1st Floor, Ward No. 9/C, Gandhidham –
                370201, Gujarat, India
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-steel" />
              <span>
                <a href="mailto:info@khyatishipping.com" className="hover:text-steel">
                  info@khyatishipping.com
                </a>
                <br />
                <a href="mailto:pricing@khyatishipping.com" className="hover:text-steel">
                  pricing@khyatishipping.com
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-steel" />
              <a href="tel:+919054731045" className="hover:text-steel">
                +91 9054731045
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto max-w-7xl px-5 py-6 text-xs text-navy-foreground/50 lg:px-8">
          © {new Date().getFullYear()} Khyati Shipping Services Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
