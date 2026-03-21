# Accessibility Standard

## Target
WCAG 2.1 AA compliance.

## Requirements
- All images have descriptive `alt` text
- Colour contrast ratios meet AA minimums (4.5:1 for text, 3:1 for large text)
- All interactive elements are keyboard accessible
- Focus indicators are visible
- Semantic HTML elements (`nav`, `main`, `article`, `header`, `footer`, `section`)
- Skip-to-content link
- ARIA attributes only when semantic HTML is insufficient

## Testing
- Run axe or Lighthouse accessibility audit before deployment
- Manual keyboard navigation test
- Screen reader spot-check
