"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, PhoneCall, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NAV_LINKS, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site-data"
import { SERVICES } from "@/lib/services"

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-800 bg-black/95 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-black/80"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`flex items-center justify-between gap-4 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
        >
          <Link href="/" className="flex shrink-0 items-center">
            <img
              src="/bgood-logo.png"
              alt="B. Good Spouting"
              className={`w-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] transition-all duration-300 ${
                scrolled ? "h-14" : "h-20 sm:h-28 lg:h-32"
              }`}
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) =>
              link.label === "Services" ? (
                <div key={link.href} className="group relative">
                  <Link
                    href={link.href}
                    className="flex items-center font-condensed text-sm font-medium uppercase tracking-wide text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)] transition-colors hover:text-yellow-400"
                  >
                    Services <ChevronDown className="ml-1 h-3.5 w-3.5" />
                  </Link>
                  {/* Dropdown */}
                  <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-black/95 py-2 shadow-2xl backdrop-blur">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="flex items-center gap-2.5 px-4 py-2.5 font-condensed text-sm font-medium uppercase tracking-wide text-zinc-200 transition-colors hover:bg-zinc-900 hover:text-yellow-400"
                        >
                          <s.icon className="h-4 w-4 shrink-0 text-yellow-400" />
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-condensed text-sm font-medium uppercase tracking-wide text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)] transition-colors hover:text-yellow-400"
                >
                  {link.label}
                </Link>
              ),
            )}
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
              <Link href="/#contact">
                Get Free Estimate <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
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
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded px-2 py-2.5 font-condensed text-base font-medium uppercase tracking-wide text-zinc-200 hover:bg-zinc-900 hover:text-yellow-400"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-1 border-t border-zinc-800 pt-2">
                <p className="px-2 pb-1 font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Our Services
                </p>
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 rounded px-2 py-2 font-condensed text-sm uppercase tracking-wide text-zinc-300 hover:bg-zinc-900 hover:text-yellow-400"
                  >
                    <s.icon className="h-4 w-4 shrink-0 text-yellow-400" />
                    {s.title}
                  </Link>
                ))}
              </div>
              <a href={PHONE_HREF} className="mt-2 flex items-center gap-2 px-2 py-2 text-yellow-400">
                <PhoneCall className="h-5 w-5" />
                <span className="font-condensed text-lg font-bold">{PHONE_DISPLAY}</span>
              </a>
              <Button
                asChild
                className="mt-2 rounded-md bg-yellow-400 font-condensed font-bold uppercase text-black hover:bg-yellow-300"
              >
                <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Free Estimate
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
