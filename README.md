# IOHK

Author: Leandro Dal Molin

Live: [https://iohk-leandro-dm.vercel.app/](https://iohk-leandro-dm.vercel.app/)

## Requirements

- Node v20.1.0
- npm v8.15.5

## Getting Started

- Install: `npm install`
- Dev server: `npm run dev`
- Production build: `npm run build`
- Preview production build: `npm run start`
- Lint: `npm run lint`

## Built with

- Next.js 14
  - SSG
  - Image optimisation
  - React server components
- Tailwind CSS
- TypeScript

## Highlights

- Responsiveness
- Accessibility
  - Semantic HTML
  - Focus styles
  - Disable animations when the user prefers reduced motion
  - Checked with Axe DevTools, WAVE and Lighthouse
- SEO
  - Metadata
  - Heading hierarchy
  - Verified with Lighthouse
- Favicon
- Animations/Transitions
- Mocked data to facilitate future CMS integration
- Polymorphic components
  - Button with "asChild" prop
  - Wrapper with "as" prop
- 100% Lighthouse score on performance, accessibility, best practices and SEO

## Development Tools

- Prettier
- "prettier-plugin-tailwindcss" to sort classes automatically
- [Class Variance Authority](https://cva.style/docs/getting-started/installation#tailwind-css) for component variants, see the Button component.
