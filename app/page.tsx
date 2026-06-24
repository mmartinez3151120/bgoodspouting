"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Star,
  ShieldCheck,
  Droplets,
  Wrench,
  Hammer,
  Leaf,
  Ruler,
  Layers,
  Sparkles,
  BadgeCheck,
  MessageCircle,
  Building2,
  CheckCircle2,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Service Areas", href: "#areas" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
]

const SERVICES = [
  {
    n: "01",
    title: "Seamless Gutter Installation",
    desc: "Custom seamless gutters measured and formed on-site for a perfect fit and long-lasting performance.",
    icon: Ruler,
    img: "/gallery/corner-gutters.jpg",
  },
  {
    n: "02",
    title: "Gutter Replacement",
    desc: "Replace old, failing, or undersized gutters with a new seamless system built to last.",
    icon: Layers,
    img: "/gallery/completed-house.jpg",
  },
  {
    n: "03",
    title: "Downspout Installation",
    desc: "Properly sized and routed downspouts that move water safely away from your foundation.",
    icon: Droplets,
    img: "/gallery/green-downspout.jpg",
  },
  {
    n: "04",
    title: "Leaf Guard Installation",
    desc: "Keep leaves and debris out and water flowing with high-quality leaf guard systems.",
    icon: Leaf,
    img: "/gallery/gutter-guards-mesh.jpg",
  },
  {
    n: "05",
    title: "Gutter Repair",
    desc: "Leaking, sagging, or damaged gutters? We find the problem and fix it the right way.",
    icon: Wrench,
    img: "/gutter-worker-on-roof.jpg",
  },
  {
    n: "06",
    title: "Fascia & Soffit Support",
    desc: "Restore and reinforce your fascia and soffit for a clean, finished, weather-tight look.",
    icon: Hammer,
    img: "/gallery/new-construction.jpg",
  },
  {
    n: "07",
    title: "Drainage Solutions",
    desc: "Improve drainage and protect your home with the right runoff and water-management solutions.",
    icon: Droplets,
    img: "/gallery/barn-gutters.jpg",
  },
  {
    n: "08",
    title: "Gutter Cleaning & Maintenance",
    desc: "Keep your gutters working properly year-round with routine cleaning and maintenance.",
    icon: Sparkles,
    img: "/gallery/gutter-guards-close.jpg",
  },
]

const WHY_CHOOSE = [
  { icon: BadgeCheck, label: "Clean, Professional Installations" },
  { icon: Ruler, label: "Seamless Gutter Systems" },
  { icon: ShieldCheck, label: "Protects Your Home & Foundation" },
  { icon: Sparkles, label: "Honest Estimates & Fair Pricing" },
  { icon: MapPin, label: "Local Lancaster County Company" },
  { icon: Leaf, label: "Leaf Guard Options Available" },
  { icon: MessageCircle, label: "Reliable Communication" },
  { icon: Star, label: "25+ Years of Experience" },
]

const FEATURE_BADGES = [
  { icon: BadgeCheck, label: "High-Quality Materials" },
  { icon: Sparkles, label: "Clean & Professional Installation" },
  { icon: ShieldCheck, label: "Built to Last & Built to Protect" },
  { icon: MapPin, label: "Local, Trusted & Dependable" },
]

const AREAS = [
  "Quarryville, PA",
  "Lancaster, PA",
  "Lititz, PA",
  "Ephrata, PA",
  "Manheim, PA",
  "Mount Joy, PA",
  "Elizabethtown, PA",
  "Strasburg, PA",
  "New Holland, PA",
  "Columbia, PA",
  "Willow Street, PA",
  "Akron, PA",
]

const COMMERCIAL = [
  { title: "New Construction Gutters", img: "/gallery/new-construction.jpg" },
  { title: "Multi-Unit Properties", img: "/gallery/completed-house.jpg" },
  { title: "Industrial & Metal Buildings", img: "/gallery/barn-gutters.jpg" },
  { title: "Downspout Systems", img: "/gallery/green-downspout.jpg" },
  { title: "Leaf Protection Solutions", img: "/gallery/gutter-guards-mesh.jpg" },
]

const REVIEWS = [
  {
    name: "Jason R.",
    location: "Lancaster, PA",
    text: "Be Good Spouting did a fantastic job on our new gutters. The crew was professional, on time, and the seamless gutters look perfect. Highly recommend!",
  },
  {
    name: "Melissa T.",
    location: "Lititz, PA",
    text: "We had our gutters replaced and new leaf guards installed. Honest pricing and great communication from start to finish. Couldn't be happier.",
  },
  {
    name: "Mark S.",
    location: "Elizabethtown, PA",
    text: "Great communication, fair pricing, and outstanding workmanship. They cleaned up everything when they were done. Will definitely use them again!",
  },
]

const SERVICE_OPTIONS = [
  "Seamless Gutter Installation",
  "Gutter Replacement",
  "Downspout Installation",
  "Leaf Guard Installation",
  "Gutter Repair",
  "Gutter Cleaning & Maintenance",
  "Commercial / Contractor",
  "Other",
]

const PHONE_DISPLAY = "717-725-5147"
const PHONE_HREF = "tel:+17177255147"
const EMAIL = "johnny@bgoodspouting.com"

const GOOGLE_RATING = "5.0"
const GOOGLE_REVIEW_COUNT = 22
const GOOGLE_REVIEWS_URL = "https://share.google/mGEwptudK0qXOuvkM"

/* ------------------------------------------------------------------ */
/* Small components                                                    */
/* ------------------------------------------------------------------ */

function GoogleG({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001 6.19 5.238 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  )
}

function Stars({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${className} fill-yellow-400 text-yellow-400`} />
      ))}
    </div>
  )
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-condensed text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">{children}</p>
  )
}

const INPUT_CLASS =
  "w-full rounded-md border border-zinc-700 bg-zinc-900/80 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"

type EstimateFormState = {
  fullName: string
  phone: string
  email: string
  address: string
  service: string
  message: string
}

/* The dark "Get a Free Gutter Estimate" card — shared by the hero and the contact section. */
function EstimateForm({
  form,
  setForm,
  onSubmit,
  className = "",
}: {
  form: EstimateFormState
  setForm: (f: EstimateFormState) => void
  onSubmit: (e: React.FormEvent) => void
  className?: string
}) {
  return (
    <div
      className={`rounded-3xl border border-zinc-700/70 bg-zinc-950/90 p-6 shadow-2xl backdrop-blur sm:p-8 ${className}`}
    >
      <h3 className="font-display text-3xl leading-none sm:text-4xl">
        GET A FREE
        <br />
        <span className="text-gold-gradient">GUTTER ESTIMATE</span>
      </h3>
      <form onSubmit={onSubmit} className="mt-6 space-y-3">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <input
            required
            placeholder="Full Name"
            className={INPUT_CLASS}
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          />
          <input
            required
            type="tel"
            placeholder="Phone Number"
            className={INPUT_CLASS}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
        <input
          required
          type="email"
          placeholder="Email Address"
          className={INPUT_CLASS}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          placeholder="Street Address"
          className={INPUT_CLASS}
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />
        <select
          required
          className={`${INPUT_CLASS} ${form.service ? "text-white" : "text-zinc-500"}`}
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
        >
          <option value="" disabled>
            Service Needed
          </option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s} className="text-white">
              {s}
            </option>
          ))}
        </select>
        <textarea
          rows={4}
          placeholder="Message"
          className={INPUT_CLASS}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <Button
          type="submit"
          className="w-full rounded-lg bg-yellow-400 py-6 font-condensed text-base font-bold uppercase tracking-[0.1em] text-black hover:bg-yellow-300"
        >
          Request My Estimate <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <p className="flex items-center justify-center gap-1.5 text-center text-xs text-zinc-400">
          <CheckCircle2 className="h-4 w-4 text-yellow-400" /> Fast. Friendly. No obligation.
        </p>
      </form>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    message: "",
  })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = `Free Estimate Request${form.service ? ` — ${form.service}` : ""}`
    const body = [
      `Name: ${form.fullName}`.trim(),
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Street Address: ${form.address}`,
      `Service Needed: ${form.service || "Not specified"}`,
      "",
      form.message,
    ].join("\n")
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div id="top" className="min-h-screen bg-[#0a0a0b] text-white">
      {/* ===== Header: nav always visible; the bar background appears on scroll ===== */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-zinc-800 bg-black/95 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-black/80"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div
            className={`flex items-center justify-between gap-4 transition-all duration-300 ${
              scrolled ? "py-2" : "py-4"
            }`}
          >
            <a href="#top" className="flex shrink-0 items-center">
              <img
                src="/bgood-logo.png"
                alt="B. Good Spouting"
                className={`w-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] transition-all duration-300 ${
                  scrolled ? "h-14" : "h-24 sm:h-36 lg:h-48"
                }`}
              />
            </a>

            <nav className="hidden items-center gap-7 lg:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-condensed text-sm font-medium uppercase tracking-wide text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)] transition-colors hover:text-yellow-400"
                >
                  {link.label}
                  {link.label === "Services" && <ChevronDown className="ml-1 inline h-3.5 w-3.5" />}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-5 lg:flex">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)] transition-colors hover:text-yellow-400"
              >
                <PhoneCall className="h-5 w-5 text-yellow-400" />
                <span className="font-condensed text-lg font-bold tracking-wide">{PHONE_DISPLAY}</span>
              </a>
              <Button
                asChild
                className="rounded-md bg-yellow-400 font-condensed font-bold uppercase tracking-wide text-black hover:bg-yellow-300"
              >
                <a href="#contact">
                  Get Free Estimate <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>

            <button
              className="text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)] lg:hidden"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="mb-3 rounded-lg border border-zinc-800 bg-black/95 p-4 backdrop-blur lg:hidden">
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded px-2 py-2.5 font-condensed text-base font-medium uppercase tracking-wide text-zinc-200 hover:bg-zinc-900 hover:text-yellow-400"
                  >
                    {link.label}
                  </a>
                ))}
                <a href={PHONE_HREF} className="mt-2 flex items-center gap-2 px-2 py-2 text-yellow-400">
                  <PhoneCall className="h-5 w-5" />
                  <span className="font-condensed text-lg font-bold">{PHONE_DISPLAY}</span>
                </a>
                <Button
                  asChild
                  className="mt-2 rounded-md bg-yellow-400 font-condensed font-bold uppercase text-black hover:bg-yellow-300"
                >
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Free Estimate
                  </a>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* ============================ Hero ============================ */}
      <section className="relative overflow-hidden bg-[#0a0a0b]">
        {/* The hero IS the image — the gold drips are built into its bottom edge */}
        <img
          src="/b-good-spouting-hero-image.png"
          alt="Luxury stone home with copper gutters and downspouts installed by B. Good Spouting"
          className="block w-full select-none"
        />
        {/* Legibility gradient over the dark left side */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent" />

        {/* Headline only — keep the copper / gutter photo and the drips fully visible */}
        <div className="relative z-10 px-4 pb-12 pt-8 lg:absolute lg:inset-0 lg:flex lg:items-center lg:p-0">
          <div className="container mx-auto lg:px-4">
            <div className="max-w-2xl lg:pb-[12%]">
              <SectionEyebrow>Lancaster County, PA</SectionEyebrow>
              <h1 className="font-display mt-4 text-4xl leading-[0.95] drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] sm:text-5xl lg:text-6xl">
                SEAMLESS GUTTERS,
                <br />
                DOWNSPOUTS &amp;
                <br />
                LEAF GUARDS <span className="text-gold-gradient">DONE RIGHT.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
                Be Good Spouting provides professional gutter installation, replacement, leaf guards, and downspouts to
                protect your home from costly water damage.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-md bg-yellow-400 px-7 font-condensed text-base font-bold uppercase tracking-wide text-black hover:bg-yellow-300"
                >
                  <a href="#contact">
                    Get Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-md border-2 border-zinc-600 bg-transparent px-7 font-condensed text-base font-bold uppercase tracking-wide text-white hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
                >
                  <a href="#services">Our Services</a>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="See our 5-star Google reviews"
                  className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
                >
                  <GoogleG className="h-5 w-5" />
                  <Stars className="h-4 w-4" />
                </a>
                <span>Trusted by Lancaster County homeowners · 25+ years experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== Protect feature strip ===================== */}
      <section className="bg-[#141418]">
        <div className="container mx-auto grid items-stretch gap-0 px-0 lg:grid-cols-2">
          {/* Left: gutter / downspout photo with the mascot anchored on it */}
          <div
            className="relative h-72 w-full bg-cover bg-center sm:h-96 lg:h-auto lg:min-h-[460px]"
            style={{ backgroundImage: "url(/gallery/green-downspout.jpg)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#141418]" />
          </div>

          {/* Right: why it matters */}
          <div className="px-4 py-12 lg:px-12 lg:py-16">
            <SectionEyebrow>Protect Your Home</SectionEyebrow>
            <h2 className="font-display mt-3 text-4xl leading-tight sm:text-5xl">
              GUTTERS THAT PROTECT YOUR HOME <span className="text-gold-gradient">FROM THE TOP DOWN</span>
            </h2>
            <p className="mt-5 max-w-xl text-zinc-300">
              Your gutter system does more than move rainwater — it protects your roofline, siding, foundation,
              landscaping, and basement from costly water damage. Be Good Spouting builds reliable gutter and downspout
              systems engineered for Lancaster County weather.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {FEATURE_BADGES.map((b) => (
                <div key={b.label} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-yellow-400 text-black">
                    <b.icon className="h-5 w-5" />
                  </span>
                  <span className="font-condensed text-sm font-semibold uppercase tracking-wide text-zinc-100">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== Residential services ===================== */}
      <section id="services" className="bg-[#0a0a0b] py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <SectionEyebrow>Our Services</SectionEyebrow>
            <h2 className="font-display mt-3 text-4xl sm:text-5xl">
              RESIDENTIAL <span className="text-gold-gradient">GUTTER SERVICES</span>
            </h2>
            <div className="rule-gold mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <Card
                key={s.n}
                className="group overflow-hidden rounded-xl border-zinc-800 bg-zinc-900 p-0 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/60 hover:shadow-2xl"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={s.img || "/placeholder.svg"}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
                  <span className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-md bg-yellow-400 font-display text-lg text-black shadow-lg">
                    {s.n}
                  </span>
                  <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-md bg-black/70 text-yellow-400">
                    <s.icon className="h-5 w-5" />
                  </span>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-condensed text-lg font-bold uppercase tracking-wide text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.desc}</p>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-1 font-condensed text-sm font-semibold uppercase tracking-wide text-yellow-400 transition-colors hover:text-yellow-300"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Why homeowners choose ===================== */}
      <section id="about" className="relative overflow-hidden bg-[#141418] py-16">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="container relative z-10 mx-auto px-4">
          <h2 className="font-display mb-10 text-center text-3xl sm:text-4xl">
            WHY HOMEOWNERS CHOOSE <span className="text-gold-gradient">BE GOOD SPOUTING</span>
          </h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {WHY_CHOOSE.map((w) => (
              <div key={w.label} className="flex flex-col items-center text-center">
                <span className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-yellow-400/40 bg-yellow-400/10 text-yellow-400">
                  <w.icon className="h-7 w-7" />
                </span>
                <span className="font-condensed text-sm font-semibold uppercase tracking-wide text-zinc-200">
                  {w.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Service areas ===================== */}
      <section id="areas" className="bg-[#0a0a0b] py-16 sm:py-20">
        <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <SectionEyebrow>Proudly Serving</SectionEyebrow>
            <h2 className="font-display mt-3 text-4xl sm:text-5xl">
              LANCASTER COUNTY &amp; <span className="text-gold-gradient">SURROUNDING AREAS</span>
            </h2>
            <p className="mt-5 max-w-xl text-zinc-300">
              Based in Lancaster County, Be Good Spouting provides seamless gutter, downspout, leaf guard, and repair
              services for homeowners throughout the surrounding area.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
              {AREAS.map((a) => (
                <li key={a} className="flex items-center gap-2 text-sm text-zinc-200">
                  <MapPin className="h-4 w-4 shrink-0 text-yellow-400" />
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-zinc-500">
              …and surrounding communities within ~50 miles. Not sure if we cover your area? Just ask.
            </p>
          </div>

          {/* Stylized map */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8">
              <div className="absolute inset-0 bg-grid-dark" />
              <div className="relative mx-auto flex h-full w-full items-center justify-center">
                <div className="relative h-3/4 w-3/4 rounded-[40%_55%_45%_60%/55%_45%_60%_45%] bg-yellow-400/90 shadow-[0_0_80px_rgba(250,204,21,0.25)]">
                  {[
                    { t: "Lititz", x: "30%", y: "28%" },
                    { t: "Ephrata", x: "62%", y: "22%" },
                    { t: "Lancaster", x: "48%", y: "52%" },
                    { t: "Mount Joy", x: "20%", y: "60%" },
                    { t: "Quarryville", x: "55%", y: "80%" },
                  ].map((pin) => (
                    <div
                      key={pin.t}
                      className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                      style={{ left: pin.x, top: pin.y }}
                    >
                      <MapPin className="h-6 w-6 fill-black text-black drop-shadow" />
                      <span className="mt-0.5 rounded bg-black/80 px-1.5 py-0.5 font-condensed text-[10px] font-semibold uppercase tracking-wide text-yellow-400">
                        {pin.t}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== Commercial & contractor ===================== */}
      <section className="relative overflow-hidden bg-[#141418] py-16 sm:py-20">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="font-display text-4xl sm:text-5xl">
              COMMERCIAL &amp; <span className="text-gold-gradient">CONTRACTOR SERVICES</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
              From new construction to large-scale properties, Be Good Spouting partners with builders and businesses
              across Lancaster County.
            </p>
            <div className="rule-gold mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {COMMERCIAL.map((c) => (
              <div key={c.title} className="group relative h-44 overflow-hidden rounded-lg border border-zinc-800">
                <img
                  src={c.img || "/placeholder.svg"}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <Building2 className="mb-1 h-5 w-5 text-yellow-400" />
                  <span className="font-condensed text-sm font-bold uppercase leading-tight tracking-wide text-white">
                    {c.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA band ===================== */}
      <section className="relative overflow-hidden bg-yellow-400 text-black">
        <div className="container mx-auto flex flex-col items-center gap-6 px-4 py-10 sm:flex-row sm:py-12">
          <img src="/spout-character-solo.png" alt="" aria-hidden="true" className="hidden h-40 w-auto sm:block" />
          <div className="flex-1 text-center sm:text-left">
            <h2 className="font-display text-4xl leading-none sm:text-5xl">NEED NEW GUTTERS? LET&apos;S MAKE IT EASY.</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-black/80 sm:mx-0">
              Whether you need a full gutter replacement, new seamless gutters, downspouts, or leaf guards, we&apos;ll
              walk you through your options and get you a clear, no-obligation estimate.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="shrink-0 rounded-md bg-black px-8 py-6 font-condensed text-base font-bold uppercase tracking-wide text-yellow-400 hover:bg-zinc-900"
          >
            <a href="#contact">
              Get My Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* ===================== Reviews ===================== */}
      <section id="reviews" className="bg-[#0a0a0b] py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-display text-4xl sm:text-5xl">
              WHAT OUR <span className="text-gold-gradient">CUSTOMERS ARE SAYING</span>
            </h2>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2.5 rounded-full border border-zinc-700 bg-zinc-900/70 px-4 py-2 transition-colors hover:border-yellow-400/60"
            >
              <GoogleG className="h-5 w-5" />
              <span className="font-condensed text-lg font-bold text-white">{GOOGLE_RATING}</span>
              <Stars className="h-4 w-4" />
              <span className="font-condensed text-sm uppercase tracking-wide text-zinc-300">
                {GOOGLE_REVIEW_COUNT} Google Reviews
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <Card key={r.name} className="rounded-xl border-zinc-800 bg-zinc-900">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <Stars className="h-5 w-5" />
                    <GoogleG className="h-6 w-6" />
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-300">&ldquo;{r.text}&rdquo;</p>
                  <div className="mt-5 flex items-center gap-3 border-t border-zinc-800 pt-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 font-display text-black">
                      {r.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-condensed font-bold uppercase tracking-wide text-white">{r.name}</p>
                      <p className="text-xs text-zinc-500">{r.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              asChild
              variant="outline"
              className="rounded-md border-2 border-yellow-400 bg-transparent px-7 font-condensed font-bold uppercase tracking-wide text-yellow-400 hover:bg-yellow-400 hover:text-black"
            >
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
                Read All {GOOGLE_REVIEW_COUNT} Reviews
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ===================== Closing estimate / contact ===================== */}
      <section id="contact" className="relative overflow-hidden bg-[#141418] py-16 sm:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url(/gallery/corner-gutters.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/85 to-black/70" />
        <div className="absolute inset-0 bg-grid-dark" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: pitch + contact details */}
            <div>
              <SectionEyebrow>Get In Touch</SectionEyebrow>
              <h2 className="font-display mt-3 text-4xl leading-tight sm:text-5xl">
                READY TO GET IT <span className="text-gold-gradient">DONE RIGHT?</span>
              </h2>
              <p className="mt-5 max-w-lg text-zinc-300">
                Tell us about your project and we&apos;ll get you a fast, friendly, no-obligation estimate — usually
                within one business day.
              </p>

              <div className="mt-8 max-w-md space-y-4">
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-4 rounded-lg border border-zinc-800 bg-zinc-900/80 p-4 transition-colors hover:border-yellow-400/60"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-yellow-400 text-black">
                    <Phone className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-condensed text-xs uppercase tracking-wide text-zinc-500">Call Us</p>
                    <p className="font-condensed text-lg font-bold text-white">{PHONE_DISPLAY}</p>
                  </div>
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-4 rounded-lg border border-zinc-800 bg-zinc-900/80 p-4 transition-colors hover:border-yellow-400/60"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-yellow-400 text-black">
                    <Mail className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-condensed text-xs uppercase tracking-wide text-zinc-500">Email Us</p>
                    <p className="font-condensed text-lg font-bold text-white">{EMAIL}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 rounded-lg border border-zinc-800 bg-zinc-900/80 p-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-yellow-400 text-black">
                    <Clock className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-condensed text-xs uppercase tracking-wide text-zinc-500">Hours</p>
                    <p className="font-condensed text-lg font-bold text-white">Mon–Fri: 7AM–6PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: the form, with the mascot leaning in from the left */}
            <div className="relative">
              <img
                src="/spout-character-solo.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -left-2 bottom-0 z-20 hidden h-[112%] -translate-x-[78%] drop-shadow-2xl xl:block"
              />
              <EstimateForm form={form} setForm={setForm} onSubmit={handleSubmit} className="relative z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== Footer ===================== */}
      <footer className="border-t border-zinc-800 bg-black">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <img src="/bgood-logo.png" alt="B. Good Spouting" className="h-16 w-auto" />
              <p className="mt-4 max-w-xs text-sm text-zinc-400">
                Professional seamless gutter, downspout, and leaf guard services throughout Lancaster County, PA.
              </p>
              <div className="mt-5 flex gap-3">
                {[Facebook, Instagram, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-700 text-zinc-300 transition-colors hover:border-yellow-400 hover:text-yellow-400"
                    aria-label="Social link"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-700 transition-colors hover:border-yellow-400"
                  aria-label="Google"
                >
                  <GoogleG className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-condensed mb-4 text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
                Contact Us
              </h3>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-yellow-400" /> {PHONE_DISPLAY}
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-yellow-400" /> {EMAIL}
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-yellow-400" /> Quarryville, PA
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-yellow-400" /> Mon–Fri: 7AM–6PM
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-condensed mb-4 text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
                Quick Links
              </h3>
              <ul className="space-y-2.5 text-sm text-zinc-300">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="transition-colors hover:text-yellow-400">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-condensed mb-4 text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
                Our Services
              </h3>
              <ul className="space-y-2.5 text-sm text-zinc-300">
                {SERVICES.slice(0, 5).map((s) => (
                  <li key={s.n}>
                    <a href="#services" className="transition-colors hover:text-yellow-400">
                      {s.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#services" className="font-semibold text-yellow-400 hover:text-yellow-300">
                    View All Services →
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-zinc-800 pt-6 text-xs text-zinc-500 sm:flex-row">
            <p>
              © {new Date().getFullYear()} B. Good Spouting. All rights reserved. Licensed &amp; insured in
              Pennsylvania.
            </p>
            <div className="flex gap-5">
              <a href="#" className="hover:text-yellow-400">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-yellow-400">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
