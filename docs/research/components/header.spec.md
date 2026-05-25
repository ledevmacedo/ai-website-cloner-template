# Header Specification

## Overview
- Target file: `src/components/zerodrift-page.tsx`
- Screenshot: `docs/design-references/zerodrift.ai/desktop-full.png`
- Interaction model: hover-driven links; mobile hamburger visual state.

## DOM Structure
`header` contains logo image, desktop nav links, desktop CTA, mobile menu button.

## Computed Styles
- Header height: 86px
- Desktop max width: 1360px
- Link font: Aeonik, 16px, weight 400, color `rgb(11, 16, 32)`
- CTA: black background `rgb(23, 23, 25)`, white text, 8px radius, uppercase 12px bold

## States & Behaviors
- Link hover: text changes toward orange.
- Mobile below about 768px: desktop nav/CTA hidden; menu icon visible.

## Text Content
Platform, Solutions, Developers, Security, Company, GET DEMO.
