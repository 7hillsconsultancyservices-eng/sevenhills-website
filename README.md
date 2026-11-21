# SevenHills Website

Public website for SevenHills (SHCData, shcdata.ca).
Clinical Data Management & Pharma Technology.
Legal name: SEVENHILLS CONSULTANCY SERVICES INCORPORATED, incorporated in Ontario, Canada on June 13, 2024, based in Scarborough, Toronto.

Built with Astro as a fully static site. No backend, no database, no paid services.

## Pages

- `/` Home: hero, the problem with disconnected clinical tools, the 8-stage platform flow, Why SevenHills, services index
- `/platform/` The platform, stage by stage, with a worked example and validation design commitments
- `/services/` All 8 service areas, what we do and key deliverables for each
- `/about/` Who we are, our approach, and the SHCData vision
- `/careers/` Areas of hiring across the 8 departments, introductions by email
- `/contact/` Contact form (validates in the browser and opens the visitor's email app, nothing is stored on the site) and contact details
- `404.html`, `sitemap.xml`, `robots.txt` are generated automatically

## Run it locally

You need Node.js 18 or newer.

```bash
npm install     # first time only, installs dependencies
npm run dev     # local preview, usually http://localhost:4321
```

## Build it

```bash
npm run build   # creates the finished site in the dist/ folder
npm run preview # preview the built site locally
```

The `dist/` folder is the complete website. That is the folder you upload to a host.

## Deploy it free

Any static host works. The build command is `npm run build` and the publish folder is `dist` on all of them:

- Netlify: connect the project, build command `npm run build`, publish directory `dist`
- Vercel: import the project, framework preset Astro, output is handled automatically
- Cloudflare Pages: build command `npm run build`, build output directory `dist`

## Custom domain: shcdata.ca (GitHub Pages)

The site is deployed with GitHub Pages. The `public/CNAME` file sets the custom domain to `shcdata.ca`, and the GitHub Actions workflow in `.github/workflows/deploy.yml` rebuilds and republishes the site on every push to `main`.

DNS at Porkbun for the root domain `shcdata.ca` (add these, and do not delete the Zoho email MX / TXT records):

- A records pointing to GitHub Pages: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- Optional: a `www` CNAME record pointing to `<github-username>.github.io`

After DNS updates, enable "Enforce HTTPS" in the repo under Settings, then Pages.

## Using the real logo

The header currently draws the SevenHills wordmark as text and SVG (Seven in dark slate, Hills in teal, 3 teal peaks). To use the official logo image instead, save it as:

```
public/SevenHills-Logo-v2-3Mountains.png
```

and rebuild. The site detects that file automatically and uses it in the header and footer, no code change needed.

## Changing content

Most text, the 8 platform stages, the 8 services, navigation, and company details live in one file:

```
src/data/site.ts
```

Page layouts are in `src/pages/`, shared pieces (header, footer, logo) in `src/components/`, and all styling in `src/styles/global.css`.

## Contact form

The form has no backend by design. On submit it validates the fields and opens the visitor's email app with the message addressed to 7hillsconsultancyservices@gmail.com. To collect messages directly later, replace the mailto step in `src/pages/contact.astro` (marked with a comment) with a POST to a serverless form endpoint.

## Notes

- The site honestly describes the platform as in development. Do not add client names, testimonials, or certifications until they are real.
- Never use em dashes in website copy. Use commas, colons, parentheses, or plain hyphens.
