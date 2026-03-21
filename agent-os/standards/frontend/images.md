# Image Standard

## Formats
- Use WebP as primary format
- Provide PNG/JPG fallback via `<picture>` element
- SVG for icons and logos

## Optimisation
- Compress all images before deployment
- Max width: 1920px for full-width hero images
- Use `srcset` for responsive images
- Lazy load all images below the fold (`loading="lazy"`)

## Alt Text
- Descriptive, concise alt text on all `<img>` tags
- Decorative images: `alt=""`
- Never use filenames as alt text
