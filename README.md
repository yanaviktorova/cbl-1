# CBL-1™ landing page

Responsive landing page for **CBL-1™ by Clean Bathroom Labs**, built from the Figma file *CBL-1* (desktop 1440 px + mobile 390 px).

**Stack:** Next.js (App Router) · React · TypeScript · Tailwind CSS · Schibsted Grotesk (self-hosted via Fontsource)

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build: `npm run build && npm start`

## Structure

```
app/
  layout.tsx        page <head>, font, metadata
  page.tsx          assembles the sections
  globals.css       design tokens (colors, font) from Figma
components/
  SiteHeader.tsx  Hero.tsx  Problem.tsx  ProductOverview.tsx
  HowItWorks.tsx  DesignFit.tsx  Waitlist.tsx  WaitlistForm.tsx  SiteFooter.tsx
  ui.tsx            shared pieces (container, headings, badge, eyebrow)
public/
  images/           product photos
  icons/            SVG icons
```

One markup for all screen sizes: mobile styles are the base, desktop styles start at the `lg` breakpoint (1024 px).

## Things to configure

| What | Where |
| --- | --- |
| Waitlist email delivery | set `NEXT_PUBLIC_WAITLIST_ENDPOINT` (Formspree / Mailchimp / Google Apps Script URL). Without it the form validates and shows a success message but does not store emails. |
| Product video | `VIDEO_URL` in `components/HowItWorks.tsx` |
| Contact link | `CONTACT_HREF` in `components/SiteFooter.tsx` |

## Deploy

Push to GitHub → import the repo on [vercel.com](https://vercel.com) → Deploy. No extra settings needed.
