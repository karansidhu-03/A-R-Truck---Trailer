import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import logoAsset from "@/assets/ar-logo.png";

export function Footer() {
  return (
    <footer className="bg-[var(--navy-dark)] text-white/90 mt-0">
      <div className="container-x py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-white/5 p-3 ring-1 ring-white/10">
              <img
                src={logoAsset}
                alt="A&R Truck & Trailer Repairs Ltd."
                className="h-16 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <div className="font-display font-extrabold uppercase tracking-wide text-white">
                A&amp;R Truck &amp; Trailer Repairs
              </div>
              <div className="text-[11px] text-white/60 tracking-[0.2em] uppercase">
                Mobile Commercial Vehicle Repair
              </div>
            </div>
          </div>

          <p className="mt-4 max-w-md text-sm text-white/70 leading-relaxed">
            We bring the shop to wherever your truck is parked — yard, job site,
            or the shoulder of the highway. Get your rig back to work faster.
          </p>
        </div>

        <div>
          <div className="font-display font-bold text-white mb-3">
            Quick Links
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="text-white/70 hover:text-[var(--safety)]">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-white/70 hover:text-[var(--safety)]"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white/70 hover:text-[var(--safety)]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white/70 hover:text-[var(--safety)]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-display font-bold text-white mb-3">Contact</div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-[var(--safety)] shrink-0" />
              <a href="tel:+18257604242" className="hover:text-[var(--safety)]">
                (825) 760-4242
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-[var(--safety)] shrink-0" />
              <a
                href="mailto:arrepairsalberta@gmail.com"
                className="hover:text-[var(--safety)] break-all"
              >
                arrepairsalberta@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-[var(--safety)] shrink-0" />
              <span className="text-white/70">
                Calgary, Airdrie, Okotoks,
                <br />
                Cochrane, Chestermere & Area
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row gap-2 justify-between text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} A&amp;R Truck &amp; Trailer Repairs
            Ltd. All rights reserved.
          </div>
          <div>Proudly serving Calgary & Area · Available for dispatch</div>
        </div>
      </div>
    </footer>
  );
}
