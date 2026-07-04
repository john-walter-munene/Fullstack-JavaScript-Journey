// Render: optimize for LCP, not “interactive”

// Concrete tactics that move LCP today:

// Server-render the above-the-fold content so the LCP element is in the initial HTML. 
// Frameworks like Next.js, Remix, SvelteKit, Nuxt, and Astro do this by default.

// Stream the response so the browser starts parsing and discovering assets before the server is done rendering. 
// React 18’s renderToPipeableStream and <Suspense> boundaries make this incremental: the shell ships immediately and slower fragments arrive as they resolve.

// Inline critical CSS for the above-the-fold styles so first paint isn’t blocked on a stylesheet round-trip.

// Self-host fonts and preload them with crossorigin; web fonts are a common LCP regression.

// Give the LCP image fetchpriority="high" and skip lazy-loading on it.

// The original PRPL essay was written before “render” had standardized success metrics. 
// Anchoring to LCP/INP makes the pillar testable - you can prove a change helped instead of guessing.