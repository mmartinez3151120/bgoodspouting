import type React from "react"
import { Star } from "lucide-react"

export function GoogleG({ className = "h-6 w-6" }: { className?: string }) {
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

export function Stars({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${className} fill-yellow-400 text-yellow-400`} />
      ))}
    </div>
  )
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-condensed text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">{children}</p>
  )
}

/* Photo treatment: asymmetric rounded corners (large top-left / bottom-right)
   over a soft sage backing shape offset to the bottom-right — the decorative
   "shadow." Children render on top of the framed image. */
export function PhotoFrame({
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
      <div
        aria-hidden="true"
        className="absolute -bottom-2.5 -right-2.5 h-full w-full rounded-[1.75rem_0.5rem_1.75rem_0.5rem] bg-[#c9d4b5]"
      />
      <div className="relative h-full w-full overflow-hidden rounded-[1.75rem_0.5rem_1.75rem_0.5rem]">
        <img src={src || "/placeholder.svg"} alt={alt} className={`h-full w-full object-cover ${imgClassName}`} />
        {children}
      </div>
    </div>
  )
}
