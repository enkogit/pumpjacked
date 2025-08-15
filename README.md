# Pumpjacked — Website

A clean, world-class Next.js + Tailwind starter for Pumpjacked with SEO-first defaults.

## Quickstart

```bash
# 1) Install deps
npm i

# 2) Run locally
npm run dev

# 3) Build for prod
npm run build && npm start
```

## Pages
- `/` — Home
- `/how-it-works`
- `/pricing`
- `/faq`
- `/free-card-check` (client form, posts to `/api/card-check` placeholder)

## SEO
- Proper `<title>` & `<meta>` via Next `metadata`
- OpenGraph & Twitter cards using `/public/og.svg`
- `robots.txt` & `sitemap.xml` via App Router functions
- JSON-LD Organization markup in the root layout

## Notes
- The Free Card Check upload form is a client component imported into a server page (so you can safely export `metadata`). Wire `/app/api/card-check/route.ts` to S3/Blob storage for real submissions.
- Update `metadataBase` and the URLs in `robots.ts` and `sitemap.ts` if you deploy to a different domain.
- Tailwind lives in `app/globals.css`. Adjust tokens in `tailwind.config.ts` if you want to tweak branding.
