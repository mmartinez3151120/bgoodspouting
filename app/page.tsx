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
import Link from "next/link"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { SERVICES } from "@/lib/services"

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

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
  { title: "New Construction Gutters", img: "/gallery/new-construction-gutter.png" },
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

/* Photo treatment: asymmetric rounded corners (large top-left / bottom-right)
   over a soft sage backing shape offset to the bottom-right — the decorative
   "shadow." Children render on top of the framed image (badges, gradients, labels). */
function PhotoFrame({
  src,
  alt,
  className = "",
  imgClassName = "",
  children,
}: {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  children?: React.ReactNode
}) {
  return (
    <div className={`group relative ${className}`}>
      {/* sage offset backing — the "shadow" */}
      <div
        aria-hidden="true"
        className="absolute -bottom-2.5 -right-2.5 h-full w-full rounded-[1.75rem_0.5rem_1.75rem_0.5rem] bg-[#c9d4b5]"
      />
      <div className="relative h-full w-full overflow-hidden rounded-[1.75rem_0.5rem_1.75rem_0.5rem]">
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
        {children}
      </div>
    </div>
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
  compact = false,
}: {
  form: EstimateFormState
  setForm: (f: EstimateFormState) => void
  onSubmit: (e: React.FormEvent) => void
  className?: string
  compact?: boolean
}) {
  return (
    <div
      className={`rounded-3xl border border-zinc-700/70 bg-zinc-950/90 shadow-2xl backdrop-blur ${
        compact ? "p-5 sm:p-6" : "p-6 sm:p-8"
      } ${className}`}
    >
      <h3 className={`font-display leading-none ${compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl"}`}>
        GET A FREE <span className="text-gold-gradient">GUTTER ESTIMATE</span>
      </h3>
      <form onSubmit={onSubmit} className={compact ? "mt-4 space-y-3" : "mt-6 space-y-3"}>
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
        {!compact && (
          <input
            placeholder="Street Address"
            className={INPUT_CLASS}
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />
        )}
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
        {!compact && (
          <textarea
            rows={4}
            placeholder="Message"
            className={INPUT_CLASS}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        )}
        <Button
          type="submit"
          className={`w-full rounded-lg bg-yellow-400 font-condensed text-base font-bold uppercase tracking-[0.1em] text-black hover:bg-yellow-300 ${
            compact ? "py-4" : "py-6"
          }`}
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
      <SiteHeader />

      {/* ============================ Hero ============================ */}
      <section className="relative z-10 overflow-hidden bg-[#0a0a0b]">
        {/* The hero IS the image — the gold drips are built into its bottom edge */}
        <img
          src="/b-good-spouting-hero-image-soft-clouds-preview.png"
          alt="Luxury stone home with copper gutters and downspouts installed by B. Good Spouting"
          className="block w-full select-none"
        />
        {/* Legibility gradient over the dark left side */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent" />

        {/* Headline only — keep the copper / gutter photo and the drips fully visible */}
        <div className="relative z-10 -mt-10 px-4 pb-12 pt-2 lg:mt-0 lg:absolute lg:inset-0 lg:flex lg:items-start lg:px-0 lg:pb-12 lg:pt-36">
          <div className="container mx-auto lg:px-4">
            <div className="max-w-2xl">
              <SectionEyebrow>Lancaster County, PA</SectionEyebrow>
              <h1 className="font-display mt-3 text-4xl leading-[0.95] drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] sm:text-5xl">
                SEAMLESS GUTTERS,
                <br />
                DOWNSPOUTS &amp;
                <br />
                LEAF GUARDS <span className="text-gold-gradient">DONE RIGHT.</span>
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-zinc-300">
                Professional gutter installation, replacement, leaf guards, and downspouts — protecting Lancaster County
                homes from costly water damage.
              </p>
              <EstimateForm
                form={form}
                setForm={setForm}
                onSubmit={handleSubmit}
                compact
                className="mt-6 max-w-md"
              />
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-medium text-zinc-100 drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">
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
      <section className="relative z-20 -mt-20 bg-gradient-to-b from-transparent via-[#141418] via-24% to-[#141418] pb-10 pt-16 sm:-mt-28 sm:pt-20 lg:-mt-36 lg:pb-14 lg:pt-24">
        <div className="container mx-auto grid items-center gap-8 px-4 lg:grid-cols-2">
          {/* Left: gutter / downspout photo, rounded + sage offset frame */}
          <PhotoFrame
            src="/gallery/high-roof-gutter-installation.png"
            alt="Freshly installed seamless gutters and downspouts on a timber-frame home"
            className="h-72 w-full sm:h-96 lg:h-[460px]"
          />

          {/* Right: why it matters */}
          <div className="py-4 lg:py-8">
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
              <Link key={s.n} href={`/services/${s.slug}`} className="block">
              <Card
                className="group h-full overflow-hidden rounded-xl border-zinc-800 bg-zinc-900 p-0 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/60 hover:shadow-2xl"
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
                  <span className="mt-4 inline-flex items-center gap-1 font-condensed text-sm font-semibold uppercase tracking-wide text-yellow-400 transition-colors group-hover:text-yellow-300">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
              </Link>
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

          {/* Service-area map */}
          <div className="relative">
            <img
              src="/gallery/lancaster-county-and-surrounding-areas-map.png"
              alt="Map of Lancaster County, PA highlighting the towns Be Good Spouting serves within a ~50 mile radius"
              className="w-full rounded-2xl border border-zinc-800 shadow-2xl"
            />
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
              <PhotoFrame
                key={c.title}
                src={c.img || "/placeholder.svg"}
                alt={c.title}
                className="h-44"
                imgClassName="transition-transform duration-500 group-hover:scale-110"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <Building2 className="mb-1 h-5 w-5 text-yellow-400" />
                  <span className="font-condensed text-sm font-bold uppercase leading-tight tracking-wide text-white">
                    {c.title}
                  </span>
                </div>
              </PhotoFrame>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA band ===================== */}
      <section className="relative overflow-hidden bg-yellow-400 text-black">
        <div className="container mx-auto flex flex-col items-center gap-6 px-4 py-10 sm:flex-row sm:py-12">
          <img
            src="/spout-character-peace-sign-transparent.png"
            alt=""
            aria-hidden="true"
            className="hidden w-auto self-end sm:block sm:h-64 lg:h-72"
          />
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

            {/* Right: the form, with the mascot pointing in from the top-right */}
            <div className="relative">
              <img
                src="/spout-character-pointing-at-form.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-4 z-20 hidden w-32 select-none drop-shadow-2xl lg:block lg:w-40"
              />
              <EstimateForm form={form} setForm={setForm} onSubmit={handleSubmit} className="relative z-10" />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
