"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EMAIL, SERVICE_OPTIONS } from "@/lib/site-data"

const INPUT_CLASS =
  "w-full rounded-md border border-zinc-700 bg-zinc-900/80 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"

/* Self-contained estimate form — manages its own state. `compact` drops the
   address + message fields for tight placements (e.g. the hero). `defaultService`
   pre-selects the dropdown on a service page. */
export function EstimateForm({
  className = "",
  compact = false,
  defaultService = "",
}: {
  className?: string
  compact?: boolean
  defaultService?: string
}) {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    service: defaultService,
    message: "",
  })

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
    <div
      className={`rounded-3xl border border-zinc-700/70 bg-zinc-950/90 shadow-2xl backdrop-blur ${
        compact ? "p-5 sm:p-6" : "p-6 sm:p-8"
      } ${className}`}
    >
      <h3 className={`font-display leading-none ${compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl"}`}>
        GET A FREE <span className="text-gold-gradient">GUTTER ESTIMATE</span>
      </h3>
      <form onSubmit={handleSubmit} className={compact ? "mt-4 space-y-3" : "mt-6 space-y-3"}>
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
