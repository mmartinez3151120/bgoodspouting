import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaBand({
  heading = "NEED NEW GUTTERS? LET'S MAKE IT EASY.",
  text = "Whether you need a full gutter replacement, new seamless gutters, downspouts, or leaf guards, we'll walk you through your options and get you a clear, no-obligation estimate.",
}: {
  heading?: string
  text?: string
}) {
  return (
    <section className="relative overflow-hidden bg-yellow-400 text-black">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 py-10 sm:flex-row sm:py-12">
        <img
          src="/spout-character-peace-sign-transparent.png"
          alt=""
          aria-hidden="true"
          className="hidden w-auto self-end sm:block sm:h-64 lg:h-72"
        />
        <div className="flex-1 text-center sm:text-left">
          <h2 className="font-display text-4xl leading-none sm:text-5xl">{heading}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-black/80 sm:mx-0">{text}</p>
        </div>
        <Button
          asChild
          size="lg"
          className="shrink-0 rounded-md bg-black px-8 py-6 font-condensed text-base font-bold uppercase tracking-wide text-yellow-400 hover:bg-zinc-900"
        >
          <Link href="/#contact">
            Get My Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
