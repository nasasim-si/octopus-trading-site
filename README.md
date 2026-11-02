# The Octopus Trading — website

Next.js (App Router) build of the homepage designed in Figma
(https://www.figma.com/design/lO0Ng3Bb8syZhaPA1TM7Qx). One page, responsive (desktop 1440 → mobile 390), static output.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build check
```

## Deploy to Vercel

1. Create a GitHub repository and push this folder:
   ```bash
   git init && git add . && git commit -m "The Octopus Trading website"
   git branch -M main
   git remote add origin https://github.com/<you>/octopus-trading-site.git
   git push -u origin main
   ```
2. On vercel.com: **Add New → Project → Import** the repository. Vercel detects Next.js; keep the defaults and press **Deploy**.
3. **Settings → Domains**: add the company domain and set the DNS records Vercel shows.
4. Every push to `main` redeploys automatically.

## Edit company details

All company facts live in `lib/company.js`. Values in `[brackets]` are placeholders still to be supplied by the client:
address, phone, email, website and working hours. Once a real email is set, the "Request a quotation" buttons
open an email with the subject "Quotation request" instead of scrolling to the contact section.

After the domain is known, add `metadataBase: new URL('https://<domain>')` to `metadata` in `app/layout.jsx`
so social previews use absolute image URLs.

## Structure

- `app/page.jsx` — all sections (hero, about, trades, eight arms, why us, process, quality, contact, footer)
- `app/globals.css` — design tokens (colours, container 1200, section 128, type scale) and responsive rules (breakpoints 1180 / 900 / 420)
- `components/` — `Nav` (desktop links + mobile menu), `Button` (split button), `EightArms` (diagram; list on mobile), `Logo`
- `public/` — traced logo SVGs and photos

## Notes

- Photos are AI-generated stand-ins (Gemini). Replace them in `public/images/` with the company's own photography when available; keep the same file names.
- The logo was traced from a 308px raster inside the client's PDF. Swap `public/logo-mark.svg` and `public/logo-wordmark.svg` for the original vectors when supplied.
- Fonts (Funnel Display, Geist) load from Google Fonts via `next/font` and are self-hosted at build time.
- Motion respects `prefers-reduced-motion`.
