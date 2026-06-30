import { Ruler, Layers, Droplets, Leaf, Wrench, Hammer, Sparkles, type LucideIcon } from "lucide-react"

export type Service = {
  n: string
  slug: string
  title: string
  desc: string
  icon: LucideIcon
  img: string
}

// Canonical service list — drives the homepage grid, the nav dropdown, the
// footer, and the /services/[slug] pages. Single source of truth.
export const SERVICES: Service[] = [
  {
    n: "01",
    slug: "seamless-gutter-installation",
    title: "Seamless Gutter Installation",
    desc: "Custom seamless gutters measured and formed on-site for a perfect fit and long-lasting performance.",
    icon: Ruler,
    img: "/gallery/corner-gutters.jpg",
  },
  {
    n: "02",
    slug: "gutter-replacement",
    title: "Gutter Replacement",
    desc: "Replace old, failing, or undersized gutters with a new seamless system built to last.",
    icon: Layers,
    img: "/gallery/green-downspout.jpg",
  },
  {
    n: "03",
    slug: "downspout-installation",
    title: "Downspout Installation",
    desc: "Properly sized and routed downspouts that move water safely away from your foundation.",
    icon: Droplets,
    img: "/gallery/completed-house.jpg",
  },
  {
    n: "04",
    slug: "leaf-guard-installation",
    title: "Leaf Guard Installation",
    desc: "Keep leaves and debris out and water flowing with high-quality leaf guard systems.",
    icon: Leaf,
    img: "/gallery/gutter-guards-mesh.jpg",
  },
  {
    n: "05",
    slug: "gutter-repair",
    title: "Gutter Repair",
    desc: "Leaking, sagging, or damaged gutters? We find the problem and fix it the right way.",
    icon: Wrench,
    img: "/gutter-worker-on-roof.jpg",
  },
  {
    n: "06",
    slug: "fascia-soffit-repair",
    title: "Fascia & Soffit Support",
    desc: "Restore and reinforce your fascia and soffit for a clean, finished, weather-tight look.",
    icon: Hammer,
    img: "/gallery/new-construction.jpg",
  },
  {
    n: "07",
    slug: "drainage-solutions",
    title: "Drainage Solutions",
    desc: "Improve drainage and protect your home with the right runoff and water-management solutions.",
    icon: Droplets,
    img: "/gallery/barn-gutters.jpg",
  },
  {
    n: "08",
    slug: "gutter-cleaning",
    title: "Gutter Cleaning & Maintenance",
    desc: "Keep your gutters working properly year-round with routine cleaning and maintenance.",
    icon: Sparkles,
    img: "/gallery/gutter-guards-close.jpg",
  },
]

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug)
