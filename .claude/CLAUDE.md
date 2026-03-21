# CLAUDE.md - SporckLiving

> Project-Specific Configuration for SporckLiving
> Extends: `@~/.claude/CLAUDE.md` (global config, shared via iCloud DevShared)
> Workspace: `@~/Library/Mobile Documents/com~apple~CloudDocs/DevProjects/CLAUDE.md`
> Last Updated: 2026-03-21

## Development Environment

This project lives on the **MacBook Pro** (iCloud DevProjects). Claude Code commands, agents, and settings are shared with the Mac Mini via `DevShared/claude/` on iCloud Drive. See `DevShared/claude/README.md` for details.

## Project Overview

**Name**: SporckLiving
**Type**: Portfolio Website
**Purpose**: Personal/professional portfolio website built from an Adobe XD design
**Stack**: Static site (HTML + TailwindCSS + Vanilla JS) deployed on Nodion

## Key Documentation (in agent-os/product/)

- Mission: `agent-os/product/mission.md`
- Tech Stack: `agent-os/product/tech-stack.md`
- Roadmap: `agent-os/product/roadmap.md`

## Tech Stack

- **Markup**: HTML5 (semantic)
- **Styling**: TailwindCSS 4.0+ (via CDN or build)
- **JavaScript**: Vanilla JS (no framework)
- **Hosting**: Nodion (European PaaS, deploys from Git via Buildpacks)
- **Repository**: GitHub

## Design Source

- **Adobe XD Prototype**: https://xd.adobe.com/view/acbc41db-9a55-4613-b918-65a734308669-f9ef/
- Design extracted via Playwright browser automation
- All colours, typography, spacing, and layout derived from the XD prototype

## Deployment Platform: Nodion

Nodion (https://www.nodion.com) is a European PaaS alternative to Vercel.
- Deploys from Git repositories using Buildpacks
- Requires either:
  - `package.json` with a `start` script (Node.js static server), or
  - `Dockerfile` for custom static serving
- **No Vercel-specific features** (no serverless functions, no edge config)

## Development Commands

```bash
npm install        # Install dependencies
npm start          # Start local server (serves static files)
npm run build      # Build for production (if using build step)
```

## Content & Copy

- Use **UK English** spelling throughout all copy
- Content extracted from Adobe XD prototype

## Performance & Accessibility

- Target **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **WCAG 2.1 AA** accessibility compliance required
- Optimise images for web (compress, modern formats)
- Proper meta tags, Open Graph tags, and favicon

## AgentOS 3.0

This project uses AgentOS 3.0 commands:
- `/plan-product` - Product planning
- `/shape-spec` - Spec creation with standards
- `/discover-standards` - Extract patterns from codebase
- `/inject-standards` - Auto-inject relevant standards
