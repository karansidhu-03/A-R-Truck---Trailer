import { Wrench, Truck, ClipboardCheck, Cpu, LifeBuoy, Disc3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    slug: "mobile-truck-repair",
    title: "Mobile Truck Repair",
    icon: Wrench,
    description:
      "We bring the shop to wherever your truck is parked — the yard, a job site, or the side of the highway. Most mechanical repairs that would normally mean a tow and a wait can be handled on-site, so your truck gets back to work faster.",
  },
  {
    slug: "trailer-repair",
    title: "Trailer Repair",
    icon: Truck,
    description:
      "Lighting, brakes, suspension, landing gear, and structural repairs for dry vans, flatbeds, and reefers. A trailer that's out of service is a load that isn't moving — we get it road-legal again quickly.",
  },
  {
    slug: "cvip-inspections",
    title: "CVIP Inspections",
    icon: ClipboardCheck,
    description:
      "Commercial Vehicle Inspection Program inspections to keep your truck or trailer compliant and legally on the road. We check it thoroughly and walk you through anything that needs attention before it becomes a bigger problem.",
  },
  {
    slug: "diagnostics",
    title: "Diagnostics",
    icon: Cpu,
    description:
      "Computer diagnostics to pinpoint engine, transmission, and electrical issues instead of guessing. A clear answer on what's wrong means no paying to fix the wrong thing.",
  },
  {
    slug: "roadside-assistance",
    title: "Roadside Assistance",
    icon: LifeBuoy,
    description:
      "Broken down on the shoulder or at a rest stop? Call us and we'll head your way to get you moving again safely, with minimal disruption to your route.",
  },
  {
    slug: "brake-suspension",
    title: "Brake & Suspension Repair",
    icon: Disc3,
    description:
      "Brake jobs, air system work, and suspension repair to keep your rig stable and safe under load — on the highway or backing into a dock.",
  },
];
