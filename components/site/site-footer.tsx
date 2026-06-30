import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react"
import { GoogleG } from "@/components/site/brand"
import { NAV_LINKS, PHONE_DISPLAY, EMAIL } from "@/lib/site-data"
import { SERVICES } from "@/lib/services"

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/">
              <img src="/bgood-logo.png" alt="B. Good Spouting" className="h-16 w-auto" />
            </Link>
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
                  <Link href={l.href} className="transition-colors hover:text-yellow-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-condensed mb-4 text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="transition-colors hover:text-yellow-400">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-zinc-800 pt-6 text-xs text-zinc-500 sm:flex-row">
          <p>© {new Date().getFullYear()} B. Good Spouting. All rights reserved. Licensed &amp; insured in Pennsylvania.</p>
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
  )
}
