// Per-service page content, structured from local-SEO keyword research.
// Each page's keywords map to its title, H1, H2 section headings, and FAQ.

export type Faq = { q: string; a: string }
export type ContentSection = { h2: string; body: string; bullets?: string[] }
export type ProcessStep = { step: string; detail: string }

export type ServiceContent = {
  slug: string
  metaTitle: string
  metaDescription: string
  h1: string
  heroLede: string
  heroImage: string
  overview: string[]
  sections: ContentSection[]
  process?: ProcessStep[]
  costNote?: string
  faqs: Faq[]
  related: string[]
}

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  "seamless-gutter-installation": {
    slug: "seamless-gutter-installation",
    metaTitle: "Seamless Gutter Installation in Lancaster County, PA | Be Good Spouting",
    metaDescription:
      "Custom seamless gutter installation across Lancaster County, PA. Aluminum & copper, 5\" and 6\" K-style, formed on-site for a leak-free fit. Free estimates — 25+ years experience.",
    h1: "Seamless Gutter Installation in Lancaster County, PA",
    heroLede:
      "Custom seamless gutters measured and formed on-site for a perfect, leak-resistant fit — backed by 25+ years protecting Lancaster County homes and businesses.",
    heroImage: "/gallery/luxury-copper-gutters.jpg",
    overview: [
      "Seamless gutters are formed from a single continuous run of metal with no joints along the length of your roofline — which means far fewer places to leak, clog, or fail. We roll each section to the exact length of your home on a truck-mounted machine, so the only seams are at the corners and downspout outlets.",
      "From standard aluminum to premium copper, in 5\" and 6\" K-style profiles, we install seamless gutter systems sized for Lancaster County's heavy spring rains, freeze-thaw winters, and mature tree canopy.",
    ],
    sections: [
      {
        h2: "Why Choose Seamless Gutters Over Sectional?",
        body: "Sectional gutters are joined every few feet, and every joint is a future leak. Seamless gutters eliminate those weak points for a cleaner look and a longer service life.",
        bullets: [
          "Fewer joints means dramatically fewer leaks and clogs",
          "Clean, continuous lines that complement your home",
          "Custom-fit to your exact rooflines — no gaps or overlaps",
          "Typically installed in a single day",
        ],
      },
      {
        h2: "Custom On-Site Gutter Forming — Built to Fit Your Home",
        body: "Our crews measure every run and form your gutters right in your driveway, so each piece fits your home precisely. This is a pro-only process — DIY sectional gutters can't match the fit, and on-site forming protects your warranty.",
      },
      {
        h2: "Gutter Materials & Sizes: Aluminum, Copper, 5\" & 6\" K-Style",
        body: "We help you choose the right material and capacity for your roof. Aluminum is the durable, cost-effective standard (20–30 year lifespan); copper is a premium, decades-long upgrade (50+ years). For larger roofs and heavy tree cover, 6\" K-style moves significantly more water than the standard 5\".",
      },
    ],
    process: [
      { step: "Free On-Site Estimate", detail: "We measure your rooflines and recommend the right size, material, and downspout layout." },
      { step: "On-Site Forming", detail: "Your seamless gutters are rolled to the exact length of each run." },
      { step: "Professional Installation", detail: "Properly pitched and securely hung, with outlets and downspouts placed for ideal drainage." },
      { step: "Cleanup & Walkthrough", detail: "We clean up completely and walk the finished system with you." },
    ],
    costNote:
      "Seamless aluminum gutters in our area typically run about $8–$15 per linear foot installed; 6\" and specialty profiles run higher, and copper is a premium upgrade. Every home is different — we provide a clear, no-obligation written estimate after measuring.",
    faqs: [
      { q: "How much does seamless gutter installation cost?", a: "For most Lancaster County homes, seamless aluminum gutters run roughly $8–$15 per linear foot installed, depending on size, height, and downspout count. Copper costs more. We give you an exact written price after an on-site measurement." },
      { q: "Are seamless gutters worth it?", a: "Yes. By eliminating the joints found in sectional gutters, seamless systems leak far less, clog less, and last longer — which is why they're the standard for quality installations." },
      { q: "What size gutters do I need — 5 inch or 6 inch?", a: "5\" K-style handles most homes, but larger roofs, steep pitches, and heavy tree cover often call for 6\" gutters, which carry about 40% more water. We recommend the right size based on your roof during the estimate." },
      { q: "How long do seamless gutters last?", a: "Aluminum seamless gutters typically last 20–30 years with basic maintenance; copper can last 50 years or more." },
      { q: "What's the difference between seamless and sectional gutters?", a: "Sectional gutters are pre-cut pieces joined together every few feet, creating many potential leak points. Seamless gutters are formed in one continuous piece per run, with seams only at corners and outlets." },
      { q: "Can you install seamless gutters yourself?", a: "No — seamless gutters require a truck-mounted forming machine and proper pitching to drain correctly. It's a professional installation, and doing it right protects your home and any warranty." },
      { q: "Do I need gutter guards with seamless gutters?", a: "Guards aren't required, but in tree-heavy areas they greatly reduce cleaning and clogs. We can install leaf guards along with your new gutters." },
    ],
    related: ["gutter-replacement", "downspout-installation", "leaf-guard-installation"],
  },

  "gutter-replacement": {
    slug: "gutter-replacement",
    metaTitle: "Gutter Replacement in Lancaster County, PA | Be Good Spouting",
    metaDescription:
      "Seamless gutter replacement in Lancaster County, PA. We remove and haul away your old gutters and install a new system built to last. Honest pricing & free estimates.",
    h1: "Seamless Gutter Replacement in Lancaster County, PA",
    heroLede:
      "Old, sagging, or leaking gutters? We remove the old system, haul it away, and install new seamless gutters engineered to protect your home for decades.",
    heroImage: "/gallery/completed-house.jpg",
    overview: [
      "When gutters are past the point of repair, replacing them with a new seamless system is the smarter long-term investment. We handle the entire job — tear-out, disposal, and a clean new installation — so you never have to think about your gutters again.",
      "Failing gutters don't just look bad; they let water damage your fascia, siding, foundation, and basement. Replacing them protects the much more expensive parts of your home.",
    ],
    sections: [
      {
        h2: "Signs It's Time to Replace Your Gutters",
        body: "A few small leaks can be repaired, but these signs usually mean it's time for a full replacement:",
        bullets: [
          "Cracks, splits, or holes along multiple sections",
          "Sagging or gutters pulling away from the fascia",
          "Separated seams and persistent leaks",
          "Peeling exterior paint, rust, or water pooling at the foundation",
          "Gutters that are 20+ years old",
        ],
      },
      {
        h2: "Gutter Repair vs. Replacement: How to Decide",
        body: "We'll always tell you the honest answer. As a rule of thumb, if repairs would cost more than about half the price of replacement — or the system is widely rusted, sagging, or 20+ years old — replacement is the better value. For isolated issues, we'll simply repair them.",
      },
      {
        h2: "Old Gutter Removal & Disposal — Included",
        body: "We remove your existing gutters and downspouts and haul everything away as part of the job. You won't be left with a pile of old metal or surprise disposal fees.",
      },
    ],
    process: [
      { step: "Inspection & Estimate", detail: "We assess your current system and give you an honest repair-or-replace recommendation." },
      { step: "Removal & Disposal", detail: "Old gutters and downspouts are taken down and hauled away." },
      { step: "Seamless Installation", detail: "New gutters are formed on-site and installed with proper pitch and downspout placement." },
      { step: "Final Walkthrough", detail: "We clean up and confirm everything drains correctly." },
    ],
    costNote:
      "A full seamless gutter replacement for a typical Lancaster County home generally falls in the range of $1,200–$3,500+, depending on linear footage, material, number of stories, and downspouts. We provide an exact written quote after measuring.",
    faqs: [
      { q: "When should you replace your gutters?", a: "Replace your gutters when they're widely cracked, rusted, sagging, separating at the seams, or more than about 20 years old — especially if you're seeing water damage at the foundation or fascia." },
      { q: "Should I repair or replace my gutters?", a: "If the problem is isolated (a leaky seam or one sagging section), repair is usually best. If failures are widespread or repair costs approach half the price of new gutters, replacement is the better long-term value." },
      { q: "How much does it cost to replace gutters?", a: "Most full replacements in our area run about $1,200–$3,500 or more, based on footage, material, home height, and downspout count. We give you an exact written estimate for free." },
      { q: "How long do gutters last?", a: "Aluminum gutters typically last 20–30 years, and copper can last 50+ years. Lifespan depends on maintenance, tree cover, and how well they were installed." },
      { q: "Do you remove and dispose of the old gutters?", a: "Yes. Tear-out and haul-away of your old gutters and downspouts is included in every replacement." },
      { q: "How long does a gutter replacement take?", a: "Most homes are completed in a single day. Larger or multi-story homes may take longer." },
    ],
    related: ["seamless-gutter-installation", "gutter-repair", "leaf-guard-installation"],
  },

  "downspout-installation": {
    slug: "downspout-installation",
    metaTitle: "Downspout Installation in Lancaster County, PA | Be Good Spouting",
    metaDescription:
      "Downspout installation & replacement in Lancaster County, PA. Properly sized and routed downspouts that move water safely away from your foundation. Free estimates.",
    h1: "Downspout Installation & Replacement in Lancaster County, PA",
    heroLede:
      "Properly sized and routed downspouts that carry water safely away from your foundation — for homes and businesses across Lancaster County.",
    heroImage: "/gallery/green-downspout.jpg",
    overview: [
      "Your gutters catch the water; your downspouts decide where it goes. Undersized, clogged, or poorly routed downspouts dump water right against your foundation — the leading cause of wet basements, erosion, and cracked footings.",
      "We design and install downspout systems that are correctly sized, properly spaced, and routed to discharge well away from your home.",
    ],
    sections: [
      {
        h2: "Seamless Downspout Installation for Homes & Businesses",
        body: "Whether you're adding downspouts, replacing damaged ones, or rerouting water away from a problem area, we install clean, securely fastened downspouts that match your gutters and your home.",
      },
      {
        h2: "How Many Downspouts Does Your Home Need? (Sizing & Spacing)",
        body: "As a general rule, you want one downspout for roughly every 20–40 feet of gutter run, and the right size for your roof. A 3\"x4\" downspout carries nearly twice the water of a standard 2\"x3\" — important for large roofs and heavy Lancaster County downpours.",
      },
      {
        h2: "Downspout Extensions vs. Underground Drainage",
        body: "Surface extensions are simple and affordable but can be a trip hazard and an eyesore. Buried, solid-pipe drainage carries water invisibly across walkways and lawns to a safe discharge point. We install both and help you choose what's right for your property.",
      },
      {
        h2: "Protecting Your Foundation: Where Water Should Drain",
        body: "Downspout water should discharge at least 6–10 feet from your foundation. We make sure every outlet sends water somewhere safe — never pooling against the house.",
      },
    ],
    costNote:
      "Downspout work is usually priced per run; new or replacement downspouts commonly run about $80–$300 each installed, with underground drainage adding more. We'll quote your exact layout for free.",
    faqs: [
      { q: "How many downspouts do I need?", a: "Plan on roughly one downspout for every 20–40 feet of gutter, with more on large or steep roofs. We'll calculate the right number and placement for your home." },
      { q: "Where should downspout water drain?", a: "Water should be discharged at least 6–10 feet from your foundation, onto a slope or into a drainage system — never right beside the house." },
      { q: "What size downspout do I need (2x3 vs 3x4)?", a: "2\"x3\" works for smaller roofs, but 3\"x4\" downspouts move nearly twice the water and clog less — a better choice for larger roofs and heavy rain." },
      { q: "Downspout extensions or underground drainage — which is better?", a: "Extensions are cheaper and simpler; underground drainage is cleaner, hides the pipe, and carries water farther. The best choice depends on your yard and budget." },
      { q: "What's the difference between a gutter and a downspout?", a: "Gutters run horizontally along your roofline to collect water; downspouts run vertically to carry that water down and away from the house." },
      { q: "Can I bury my downspouts underground?", a: "Yes. We install buried, solid-pipe drainage with proper slope and a safe discharge point so water moves away invisibly." },
    ],
    related: ["seamless-gutter-installation", "drainage-solutions", "gutter-replacement"],
  },

  "leaf-guard-installation": {
    slug: "leaf-guard-installation",
    metaTitle: "Gutter Guard & Leaf Guard Installation in Lancaster County, PA | Be Good Spouting",
    metaDescription:
      "Gutter guard & leaf guard installation in Lancaster County, PA. Micro-mesh and screen guards that keep leaves out and end the cleaning. Free estimates, 25+ years.",
    h1: "Leaf Guard & Gutter Guard Installation in Lancaster County, PA",
    heroLede:
      "Stop climbing ladders to clean your gutters. We install high-quality gutter guards that keep leaves and debris out while letting water flow freely.",
    heroImage: "/gallery/gutter-guards-mesh.jpg",
    overview: [
      "Gutter guards (also called leaf guards or gutter protection) cover your gutters so leaves, pine needles, and debris stay out while water flows through. In Lancaster County's tree-heavy neighborhoods, they're one of the best upgrades you can make.",
      "We install professional-grade guards — including micro-mesh systems — that dramatically cut down on cleaning and protect your home from the overflow and clogs that damage fascia and foundations.",
    ],
    sections: [
      {
        h2: "Types of Gutter Guards We Install",
        body: "Not all guards are equal. We help you pick the right system for your home and budget:",
        bullets: [
          "Micro-mesh — stainless steel mesh that blocks even fine debris and pine needles; longest-lasting",
          "Perforated / screen guards — a solid budget option for larger leaves",
          "Reverse-curve and solid covers for specific rooflines",
        ],
      },
      {
        h2: "Do Gutter Guards Really Work? — And Are They Worth It?",
        body: "Quality guards work. They won't make gutters 100% maintenance-free, but they end routine clean-outs, prevent the clogs that cause overflow, and protect the expensive parts of your home. For most homeowners with trees nearby, they pay for themselves in saved cleanings and avoided water damage.",
      },
      {
        h2: "Less Cleaning, More Protection: Benefits & Warranty",
        body: "Guards keep water flowing, reduce the risk of ice dams and overflow, and let you skip the ladder. We install with manufacturer and workmanship warranties, and — unlike national brands — you get a local company that stands behind the work.",
      },
    ],
    costNote:
      "Installed gutter guards typically run about $5–$15 per linear foot depending on the system, with premium micro-mesh at the higher end. That's a fraction of what national brands charge — we'll give you a transparent local quote.",
    faqs: [
      { q: "Do gutter guards work?", a: "Yes — quality guards keep leaves and debris out while letting water through, preventing the clogs and overflow that damage gutters and homes. They reduce maintenance, though they don't eliminate it entirely." },
      { q: "Are gutter guards worth it?", a: "For most homes with nearby trees, yes. The savings on repeat cleanings and the protection against water damage usually outweigh the upfront cost." },
      { q: "How much do gutter guards cost?", a: "Installed guards generally run about $5–$15 per linear foot depending on the type, with micro-mesh at the higher end. We provide a free, no-pressure estimate." },
      { q: "What are the best gutter guards?", a: "Stainless micro-mesh guards are the most effective for our area because they block fine debris and pine needles and last 20+ years. We'll recommend the best fit for your roof and trees." },
      { q: "Do you still need to clean gutters with gutter guards?", a: "Guards are low-maintenance, not no-maintenance. You'll skip routine clean-outs, but an occasional top-off inspection keeps everything flowing — which we can handle for you." },
      { q: "Can gutter guards be added to existing gutters?", a: "In most cases, yes — guards can be installed on sound existing gutters. If your gutters are failing, we'll talk through repair or replacement first." },
    ],
    related: ["gutter-cleaning", "seamless-gutter-installation", "gutter-repair"],
  },

  "gutter-repair": {
    slug: "gutter-repair",
    metaTitle: "Gutter Repair in Lancaster County, PA | Be Good Spouting",
    metaDescription:
      "Fast, honest gutter repair in Lancaster County, PA. We fix leaks, sagging, separated seams, and downspout clogs — and tell you honestly when repair beats replacement.",
    h1: "Seamless Gutter Repair in Lancaster County, PA",
    heroLede:
      "Leaking, sagging, or pulling away from the house? We diagnose the real problem and fix it the right way — fast, local, and honest.",
    heroImage: "/gutter-worker-on-roof.jpg",
    overview: [
      "Gutter problems rarely fix themselves, and a small leak today becomes fascia rot and a wet basement tomorrow. Our crews respond quickly across Lancaster County to find and fix the issue at its source.",
      "We repair what should be repaired — and we'll tell you honestly when a repair isn't worth it.",
    ],
    sections: [
      {
        h2: "Common Gutter Problems We Fix",
        body: "If you're seeing any of these, we can help:",
        bullets: [
          "Leaks at seams, corners, and downspout outlets",
          "Sagging gutters or gutters pulling away from the fascia",
          "Loose or backed-out hangers and fasteners",
          "Clogged or disconnected downspouts",
          "Failed, cracked sealant and improper pitch",
        ],
      },
      {
        h2: "Leaking, Sagging & Pulling-Away Gutters",
        body: "Most leaks come from failed seams and sealant or improper slope; sagging usually means the hangers have failed or the fascia behind them is compromised. We re-secure, reseal, re-pitch, or replace the affected sections so your gutters drain like new.",
      },
      {
        h2: "Should You Repair or Replace Your Gutters?",
        body: "We follow a simple, honest rule: if your gutters are structurally sound and the repair is cost-effective, we fix them. If repairs would run more than about half the cost of replacement — or the system is widely rusted, sagging, or 20+ years old — we'll tell you, so you don't pour money into a system that's already done.",
      },
    ],
    costNote:
      "Minor repairs like resealing a seam or re-securing a section often run about $150–$400; larger repairs cost more. We'll give you a clear price before any work starts.",
    faqs: [
      { q: "Is it cheaper to repair or replace gutters?", a: "Repair is cheaper when the damage is isolated and the system is otherwise sound. When failures are widespread or repairs approach half the cost of new gutters, replacement is the better value — and we'll tell you honestly which makes sense." },
      { q: "How much does it cost to repair gutters?", a: "Minor fixes such as resealing seams or re-securing a run typically cost about $150–$400. Larger repairs, like replacing damaged sections, cost more. You'll get a clear estimate up front." },
      { q: "When should you repair vs. replace gutters?", a: "Repair isolated leaks, sags, and clogs on a sound system. Replace when the gutters are widely rusted, repeatedly leaking, sagging across multiple runs, or more than ~20 years old." },
      { q: "Why do my gutters leak?", a: "Most leaks occur at seams, corners, and downspout joints where sealant has failed, or where the gutter isn't pitched correctly so water sits and overflows. Both are repairable." },
      { q: "Why are my gutters sagging or pulling away from the house?", a: "Usually the hangers or fasteners have loosened, the gutters are weighed down by debris, or the fascia behind them has rotted. We identify the cause and fix it properly." },
      { q: "Can you reseal gutters instead of replacing them?", a: "Yes — if the gutters are otherwise in good shape, resealing seams and joints is a cost-effective fix we do often." },
    ],
    related: ["gutter-replacement", "seamless-gutter-installation", "gutter-cleaning"],
  },

  "fascia-soffit-repair": {
    slug: "fascia-soffit-repair",
    metaTitle: "Fascia & Soffit Repair in Lancaster County, PA | Be Good Spouting",
    metaDescription:
      "Fascia & soffit repair and replacement in Lancaster County, PA. We fix rotted fascia, replace soffit, and protect the boards your gutters depend on. Free estimates.",
    h1: "Fascia & Soffit Repair and Replacement in Lancaster County, PA",
    heroLede:
      "Rotted fascia or sagging soffit? We restore the boards your gutters hang from and your roofline depends on — for a clean, weather-tight finish.",
    heroImage: "/gallery/new-construction.jpg",
    overview: [
      "Your fascia and soffit are the finishing boards along your roofline — and they're what your gutters actually hang from. When they rot, your gutters lose their anchor and water gets into your roof structure.",
      "We repair and replace damaged fascia and soffit, address the water problem that caused the damage, and finish with a clean, low-maintenance result.",
    ],
    sections: [
      {
        h2: "What Are Fascia and Soffit? (and How They Differ)",
        body: "Fascia is the vertical board running along the edge of your roof, where the gutters attach. Soffit is the underside panel that closes in the eave and ventilates your attic. Together they protect your roofline and give it a finished look.",
      },
      {
        h2: "Signs Your Fascia or Soffit Needs Repair",
        body: "Catching damage early keeps it from spreading into rafters and roof decking:",
        bullets: [
          "Soft, rotted, or crumbling fascia board",
          "Peeling paint or visible water stains along the roofline",
          "Sagging gutters that have pulled the fascia loose",
          "Holes, gaps, or pest activity in the soffit",
        ],
      },
      {
        h2: "How Fascia & Soffit Protect Your Gutters and Roof",
        body: "Clogged, overflowing gutters are the number-one cause of fascia rot — water spills behind the gutter and soaks the board. That's why we look at the whole system: fix the boards, and make sure your gutters and downspouts aren't the reason they failed.",
      },
      {
        h2: "Materials: Wood, Aluminum & Fascia Capping",
        body: "We work in wood and aluminum, and we offer aluminum fascia capping (wrap) that covers the wood in a durable, finished metal skin so it won't rot or need repainting.",
      },
    ],
    costNote:
      "Fascia and soffit work is typically priced per linear foot or by the section; many repairs fall in the $6–$20 per linear foot range, with full replacements higher. We'll quote your project after a free inspection.",
    faqs: [
      { q: "What is fascia and soffit?", a: "Fascia is the board along the edge of your roof that your gutters attach to. Soffit is the panel underneath the eave that closes off and ventilates the overhang." },
      { q: "What's the difference between fascia and soffit?", a: "Fascia is vertical and faces outward at the roofline; soffit is horizontal and faces down, tucked under the roof overhang." },
      { q: "How much does it cost to replace fascia and soffit?", a: "Costs vary with material and length, but repairs often run about $6–$20 per linear foot, and full replacements cost more. We provide a free written estimate." },
      { q: "What are the signs of rotted fascia?", a: "Soft or crumbling board, peeling paint, water stains, sagging gutters, and visible gaps are all signs the fascia needs attention." },
      { q: "Why does fascia rot?", a: "The most common cause is clogged or overflowing gutters spilling water behind the board. Fixing the gutters is part of fixing the fascia." },
      { q: "What is fascia capping or wrap?", a: "Fascia capping wraps the wood board in a custom-bent aluminum skin, giving a clean, low-maintenance finish that won't rot or need repainting." },
    ],
    related: ["gutter-replacement", "gutter-cleaning", "seamless-gutter-installation"],
  },

  "drainage-solutions": {
    slug: "drainage-solutions",
    metaTitle: "Drainage Solutions in Lancaster County, PA | Be Good Spouting",
    metaDescription:
      "Drainage solutions in Lancaster County, PA — underground downspout drainage, French drains, dry wells, and yard drainage to protect your foundation. Free estimates.",
    h1: "Drainage Solutions for Lancaster County Homes & Businesses",
    heroLede:
      "Standing water, a wet basement, or runoff pooling at the foundation? We design drainage systems that carry water safely away and keep your property dry.",
    heroImage: "/gallery/high-roof-gutter-installation.png",
    overview: [
      "Gutters and downspouts catch the rain — but if that water has nowhere good to go, it ends up against your foundation, in your basement, or pooling in your yard. We design and install drainage systems that finish the job.",
      "From buried downspout lines to full French drains and dry wells, we solve the water problems that damage foundations and ruin landscaping.",
    ],
    sections: [
      {
        h2: "Underground Downspout Drainage",
        body: "We bury solid-pipe lines from your downspouts and carry the water — with proper slope — to a safe discharge point well away from the house. No more splash blocks, trip hazards, or water dumping at the foundation.",
      },
      {
        h2: "French Drains, Dry Wells & Catch Basins",
        body: "For chronic standing water and saturated soil, a French drain intercepts and redirects groundwater, while dry wells and catch basins collect and disperse runoff underground. We spec the right system for your conditions.",
      },
      {
        h2: "Foundation & Yard Drainage",
        body: "Lancaster County's clay-heavy soils hold water. We grade, route, and drain so runoff moves away from your foundation and out of low spots — protecting your basement, your footings, and your lawn.",
      },
      {
        h2: "Signs You Have a Drainage Problem",
        body: "Standing water hours after rain, a damp or leaking basement, eroded mulch and soil, ice patches in winter, or water stains on foundation walls all point to a drainage issue worth solving.",
      },
    ],
    costNote:
      "Underground downspout runs commonly start around $150–$350 each, and French drains typically run about $10–$35 per linear foot depending on depth and length. We'll assess your property and quote it for free.",
    faqs: [
      { q: "How do I redirect downspout water away from my house?", a: "The reliable fix is a buried, sloped drainage line that carries downspout water to a discharge point 10+ feet from the foundation — much cleaner and more effective than surface splash blocks." },
      { q: "How much does a French drain cost?", a: "French drains typically run about $10–$35 per linear foot installed, depending on depth, length, and access. We provide a free on-site assessment and quote." },
      { q: "How do I fix standing water or pooling near my foundation?", a: "We diagnose the cause — poor grading, undersized drainage, or downspouts dumping at the house — then install the right combination of regrading, buried drainage, French drain, or dry well to move the water away." },
      { q: "What is an underground downspout drainage system?", a: "It's a buried, solid-pipe line connected to your downspouts that carries roof water underground to a safe outlet, instead of letting it spill beside your foundation." },
      { q: "French drain vs. dry well — which is better?", a: "A French drain redirects water away along a sloped trench; a dry well collects and slowly disperses it underground. The right choice depends on where the water comes from and where it can go — we'll recommend the best fit." },
      { q: "How far should downspouts drain from the foundation?", a: "At least 6–10 feet away. Discharging closer than that is a leading cause of wet basements and foundation issues." },
    ],
    related: ["downspout-installation", "seamless-gutter-installation", "gutter-replacement"],
  },

  "gutter-cleaning": {
    slug: "gutter-cleaning",
    metaTitle: "Gutter Cleaning in Lancaster County, PA | Be Good Spouting",
    metaDescription:
      "Professional gutter cleaning & maintenance in Lancaster County, PA. Spring & fall clean-outs, downspout flushing, and recurring plans. Safe, insured crews. Free quotes.",
    h1: "Gutter Cleaning & Maintenance in Lancaster County, PA",
    heroLede:
      "Keep your gutters flowing and your home protected with professional cleaning and maintenance — no ladders, no risk, no clogs.",
    heroImage: "/gallery/worker-thumbs-up.jpg",
    overview: [
      "Clogged gutters overflow, rot your fascia, and send water straight into your foundation. Regular cleaning is the cheapest insurance there is for your home — and it keeps your whole gutter system working the way it should.",
      "Our insured crews clean gutters and downspouts for homes and businesses across Lancaster County, with one-time and recurring options.",
    ],
    sections: [
      {
        h2: "Professional Gutter Cleaning for Homes & Businesses",
        body: "We remove leaves and debris from your gutters, flush the downspouts to confirm they drain, and bag the debris — leaving your gutters clean and your property tidy.",
      },
      {
        h2: "How Often Should You Clean Your Gutters?",
        body: "Most Lancaster County homes need cleaning at least twice a year — in late spring and in fall after the leaves drop. Homes surrounded by pines or oaks may need it more often. Fall cleaning is especially important to prevent winter ice dams.",
      },
      {
        h2: "Recurring Maintenance Plans & Inspections",
        body: "Don't want to think about it? We offer recurring twice-yearly (or quarterly) maintenance so your gutters are cleaned and inspected on schedule, and small issues get caught before they become repairs.",
      },
      {
        h2: "Tired of Cleaning? Add Gutter Guards",
        body: "If you're cleaning gutters constantly, leaf guards can nearly eliminate the chore. We can clean now and protect for good with a guard system.",
      },
    ],
    costNote:
      "Professional gutter cleaning typically runs about $100–$250 for an average single-story home, with two-story and larger homes higher. Recurring plans are discounted. We'll quote your home for free.",
    faqs: [
      { q: "How much does gutter cleaning cost?", a: "Most single-story homes run about $100–$250 per cleaning; two-story and larger homes cost more. Recurring maintenance plans are discounted." },
      { q: "How often should you clean your gutters?", a: "At least twice a year — late spring and fall — and more often if you have pine or oak trees nearby. Fall cleaning is key to preventing winter ice dams." },
      { q: "What is the best time of year to clean gutters?", a: "Late spring (after seeds and blossoms drop) and fall (after the leaves come down) are the two most important times in Lancaster County." },
      { q: "Is it worth paying someone to clean gutters?", a: "For most homeowners, yes — it removes the ladder risk, gets the downspouts flushed properly, and catches small problems early. It's inexpensive compared to the water damage clogged gutters cause." },
      { q: "Do gutter guards eliminate cleaning?", a: "Quality guards drastically reduce cleaning and end routine clear-outs, though an occasional inspection is still smart. They're a great upgrade if you're tired of cleaning." },
      { q: "What happens if you don't clean your gutters?", a: "Clogged gutters overflow, which rots fascia and soffit, causes basement leaks and foundation issues, and can lead to ice dams in winter." },
    ],
    related: ["leaf-guard-installation", "gutter-repair", "fascia-soffit-repair"],
  },
}
