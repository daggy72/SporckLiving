# SporckLiving - Claude Code Initial Prompt

Copy and paste the content below when starting a new Claude Code session for this project.

---

## The Prompt

```
I'm working on SporckLiving - a portfolio website built from an Adobe XD design, deployed on Nodion (European PaaS).

## Project Context

**GitHub**: [to be created]

### Key Documentation (read these first)
- Product Mission: `agent-os/product/mission.md`
- Tech Stack: `agent-os/product/tech-stack.md`
- Development Roadmap: `agent-os/product/roadmap.md`

### Tech Stack
- **Markup**: HTML5 (semantic)
- **Styling**: TailwindCSS 4.0+ (via CDN or build)
- **JavaScript**: Vanilla JS (no framework)
- **Hosting**: Nodion (European PaaS, Buildpack-based deployment)
- **Repository**: GitHub

### Design Source
- **Adobe XD Prototype**: https://xd.adobe.com/view/acbc41db-9a55-4613-b918-65a734308669-f9ef/
- All design tokens (colours, fonts, spacing) extracted from the prototype

### Deployment
- Nodion deploys from Git using Buildpacks
- Project uses a simple Node.js static server (`express` or `serve`)
- `package.json` with `start` script required

## Important Notes

- Use **UK English** spelling throughout
- Target **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **WCAG 2.1 AA** accessibility compliance required
- Optimise all images for web
- Include proper meta tags, Open Graph tags, and favicon

---

Please read the product docs and let me know what needs to be done next.
```
