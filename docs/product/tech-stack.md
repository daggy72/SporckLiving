# Tech Stack

## Frontend

- **HTML5** — Semantic markup
- **TailwindCSS 4.0+** — Utility-first CSS (via CDN for simplicity, or build step if needed)
- **Vanilla JavaScript** — No framework; keep it simple and fast
- **No build tool required** unless design complexity demands it

### Rationale

Static site with no dynamic data fetching, no CMS, no API calls. A framework would add unnecessary complexity and bundle size. TailwindCSS via CDN keeps the setup minimal.

## Hosting

- **Nodion** (https://www.nodion.com) — European PaaS, Buildpack-based deployment from Git
- **Alternative considered**: Vercel — rejected in favour of European-based hosting

### Nodion Compatibility

Nodion deploys via Buildpacks from a Git repository. Two approaches:

1. **Node.js static server** (recommended):
   - `package.json` with `start` script
   - Use `serve` or `express` to serve static files
   - Nodion auto-detects Node.js buildpack

2. **Dockerfile** (alternative):
   - Custom Dockerfile with nginx or similar
   - More control over serving configuration

## Repository

- **GitHub** — Source control and deployment trigger for Nodion

## Image Optimisation

- Compress all images before deployment
- Use modern formats (WebP with fallbacks)
- Lazy load below-the-fold images

## Performance Targets

- **LCP** < 2.5s
- **FID** < 100ms
- **CLS** < 0.1

## Accessibility

- **WCAG 2.1 AA** compliance
- Keyboard navigation
- Screen reader compatible
- Sufficient colour contrast ratios
