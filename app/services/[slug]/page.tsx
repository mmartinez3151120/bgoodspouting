import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, PhoneCall, MapPin, Check, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { CtaBand } from "@/components/site/cta-band"
import { EstimateForm } from "@/components/site/estimate-form"
import { PhotoFrame, SectionEyebrow } from "@/components/site/brand"
import { SERVICE_CONTENT } from "@/lib/service-content"
import { getService } from "@/lib/services"
import { AREAS, PHONE_DISPLAY, PHONE_HREF, SITE_URL, BUSINESS_NAME } from "@/lib/site-data"

export function generateStaticParams() {
  return Object.keys(SERVICE_CONTENT).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const content = SERVICE_CONTENT[params.slug]
  if (!content) return {}
  const url = `${SITE_URL}/services/${content.slug}`
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url,
      type: "website",
      images: [{ url: `${SITE_URL}${content.heroImage}` }],
    },
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const content = SERVICE_CONTENT[params.slug]
  const service = getService(params.slug)
  if (!content || !service) notFound()

  const related = content.related
    .map((slug) => getService(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        serviceType: service.title,
        description: content.metaDescription,
        provider: {
          "@type": "LocalBusiness",
          name: BUSINESS_NAME,
          telephone: PHONE_DISPLAY,
          areaServed: "Lancaster County, PA",
        },
        areaServed: AREAS.map((a) => ({ "@type": "City", name: a.replace(", PA", "") })),
        url: `${SITE_URL}/services/${content.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/#services` },
          { "@type": "ListItem", position: 3, name: service.title, item: `${SITE_URL}/services/${content.slug}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: content.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  }

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />

      {/* ============================ Hero ============================ */}
      <section className="relative overflow-hidden border-b border-zinc-900 bg-gradient-to-b from-[#141418] to-[#0a0a0b] pt-28 lg:pt-36">
        <div className="absolute inset-0 bg-grid-dark opacity-50" />
        <div className="container relative z-10 mx-auto grid items-center gap-10 px-4 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            {/* Breadcrumb */}
            <nav className="mb-5 flex items-center gap-1.5 text-xs font-medium text-zinc-500" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-yellow-400">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href="/#services" className="hover:text-yellow-400">
                Services
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-zinc-300">{service.title}</span>
            </nav>

            <SectionEyebrow>Lancaster County, PA</SectionEyebrow>
            <h1 className="font-display mt-3 text-4xl leading-[0.98] sm:text-5xl">{content.h1}</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">{content.heroLede}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-md bg-yellow-400 px-7 font-condensed text-base font-bold uppercase tracking-wide text-black hover:bg-yellow-300"
              >
                <a href="#estimate">
                  Get a Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-md border-2 border-zinc-600 bg-transparent px-7 font-condensed text-base font-bold uppercase tracking-wide text-white hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                <a href={PHONE_HREF}>
                  <PhoneCall className="mr-2 h-5 w-5" /> {PHONE_DISPLAY}
                </a>
              </Button>
            </div>
          </div>

          <PhotoFrame src={content.heroImage} alt={`${service.title} in Lancaster County, PA`} className="h-72 w-full sm:h-96 lg:h-[440px]" />
        </div>
      </section>

      {/* ============================ Overview ============================ */}
      <section className="bg-[#0a0a0b] py-14 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4">
          {content.overview.map((p, i) => (
            <p key={i} className={`text-lg leading-relaxed text-zinc-300 ${i > 0 ? "mt-5" : ""}`}>
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* ============================ Sections ============================ */}
      <section className="bg-[#141418] py-14 sm:py-20">
        <div className="container mx-auto max-w-4xl space-y-12 px-4">
          {content.sections.map((sec) => (
            <div key={sec.h2}>
              <h2 className="font-display text-2xl sm:text-3xl">{sec.h2}</h2>
              <div className="rule-gold mt-4" />
              <p className="mt-5 leading-relaxed text-zinc-300">{sec.body}</p>
              {sec.bullets && (
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {sec.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-zinc-200">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ============================ Process ============================ */}
      {content.process && (
        <section className="bg-[#0a0a0b] py-14 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <SectionEyebrow>How It Works</SectionEyebrow>
              <h2 className="font-display mt-3 text-3xl sm:text-4xl">
                Our <span className="text-gold-gradient">Process</span>
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {content.process.map((step, i) => (
                <div key={step.step} className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
                  <span className="font-display text-3xl text-yellow-400">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-condensed mt-3 text-lg font-bold uppercase tracking-wide text-white">
                    {step.step}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================ Cost note ============================ */}
      {content.costNote && (
        <section className="bg-[#141418] py-12">
          <div className="container mx-auto max-w-3xl px-4">
            <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/5 p-6 sm:p-8">
              <h2 className="font-condensed text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
                What It Costs
              </h2>
              <p className="mt-3 leading-relaxed text-zinc-200">{content.costNote}</p>
            </div>
          </div>
        </section>
      )}

      {/* ============================ Service area ============================ */}
      <section className="bg-[#0a0a0b] py-14 sm:py-20">
        <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <SectionEyebrow>Proudly Serving</SectionEyebrow>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl">
              {service.title} Across <span className="text-gold-gradient">Lancaster County</span>
            </h2>
            <p className="mt-5 max-w-xl text-zinc-300">
              Based in Lancaster County, Be Good Spouting provides {service.title.toLowerCase()} for homeowners and
              businesses throughout the surrounding area — usually with a free estimate within one business day.
            </p>
            <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3">
              {AREAS.map((a) => (
                <li key={a} className="flex items-center gap-2 text-sm text-zinc-200">
                  <MapPin className="h-4 w-4 shrink-0 text-yellow-400" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <img
            src="/gallery/lancaster-county-and-surrounding-areas-map.png"
            alt="Map of Lancaster County, PA highlighting the towns Be Good Spouting serves"
            className="w-full rounded-2xl border border-zinc-800 shadow-2xl"
          />
        </div>
      </section>

      {/* ============================ FAQ ============================ */}
      <section className="bg-[#141418] py-14 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="mb-8 text-center">
            <SectionEyebrow>Questions &amp; Answers</SectionEyebrow>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl">
              {service.title} <span className="text-gold-gradient">FAQs</span>
            </h2>
          </div>
          <div className="space-y-3">
            {content.faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-condensed text-base font-bold uppercase tracking-wide text-white">
                  {f.q}
                  <ChevronRight className="h-5 w-5 shrink-0 text-yellow-400 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 leading-relaxed text-zinc-300">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ Estimate form ============================ */}
      <section id="estimate" className="relative overflow-hidden bg-[#0a0a0b] py-16 sm:py-24">
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="container relative z-10 mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <SectionEyebrow>Get In Touch</SectionEyebrow>
            <h2 className="font-display mt-3 text-4xl leading-tight sm:text-5xl">
              READY TO GET IT <span className="text-gold-gradient">DONE RIGHT?</span>
            </h2>
            <p className="mt-5 max-w-lg text-zinc-300">
              Tell us about your {service.title.toLowerCase()} project and we&apos;ll get you a fast, friendly,
              no-obligation estimate — usually within one business day.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-7 inline-flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/80 p-4 transition-colors hover:border-yellow-400/60"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-yellow-400 text-black">
                <PhoneCall className="h-6 w-6" />
              </span>
              <span>
                <span className="block font-condensed text-xs uppercase tracking-wide text-zinc-500">Call Us</span>
                <span className="font-condensed text-lg font-bold text-white">{PHONE_DISPLAY}</span>
              </span>
            </a>
          </div>
          <EstimateForm defaultService={service.title} className="relative z-10" />
        </div>
      </section>

      {/* ============================ Related services ============================ */}
      {related.length > 0 && (
        <section className="bg-[#141418] py-14 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="font-display text-3xl sm:text-4xl">
                Related <span className="text-gold-gradient">Services</span>
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {related.map((rs) => {
                const Icon = rs.icon
                return (
                  <Link
                    key={rs.slug}
                    href={`/services/${rs.slug}`}
                    className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 transition-all hover:-translate-y-1 hover:border-yellow-400/60"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-yellow-400 text-black">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-condensed text-base font-bold uppercase tracking-wide text-white group-hover:text-yellow-400">
                      {rs.title}
                    </span>
                    <ArrowRight className="ml-auto h-5 w-5 text-yellow-400" />
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
      <SiteFooter />
    </div>
  )
}
