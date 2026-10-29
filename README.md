# Anshul Awasthi: portfolio

A static-first personal portfolio built with Next.js (App Router), TypeScript and Tailwind CSS v4.
No database, no CMS, no API keys.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Checks before you deploy:

```bash
npm run lint
npm run typecheck
npm run build
npm run start      # preview the production build
```

## Edit the content (no layout code needed)

| What | Where |
| --- | --- |
| Name, email, LinkedIn, hero, proof numbers, "how I think", about, contact | `src/content/site.ts` |
| Case studies (all three, plus any new ones) | `src/content/case-studies.ts` |
| Colours, fonts | `src/app/globals.css` (the `@theme` block) |

**Add a case study:** copy one object in `case-studies.ts`, change the `slug` and text. The page at
`/work/<slug>`, the homepage card, the sitemap and the "next story" link are created automatically.
(To give a new card its own visual, add a component in `ProjectVisuals.tsx` and map it in `SelectedWork.tsx`.)

## Placeholders ("your input needed")

Anything I couldn't take from your brief or resume is a `{ type: "placeholder" }` block in `case-studies.ts`.
They show as amber notes while you run `npm run dev` and are **hidden on production builds**, so unfinished
thoughts never go public by accident. Search for `placeholder` to find them all, replace each with real text
(a `{ type: "p", text: "..." }` block), and delete the note.

Set `NEXT_PUBLIC_SHOW_PLACEHOLDERS=true` only if you want them visible on a deployed preview.

## Replace screenshots

1. Put images in `public/images/<case-study>/` (about 1600x1000 works well, PNG or WebP).
2. In `case-studies.ts`, add `src` to the matching screenshot block:
   `{ type: "screenshot", alt: "...", caption: "...", src: "/images/subcontracting/orders.png" }`
3. Write a meaningful `alt`. Screenshot slots with no `src` are hidden on production builds.

Remove or blur any customer names, vendor names or confidential data before using real screenshots.

## Update the resume

Replace `public/resume/Anshul_Awasthi_APM_Resume2026.pdf` with the new file, using the same name
(or update `site.resume` in `site.ts`). The Resume links are only rendered when the file exists.

## Deploy

Set one environment variable first: `NEXT_PUBLIC_SITE_URL=https://your-domain.com` (used for share previews,
canonical URLs and the sitemap).

**Vercel:** push the project to GitHub, go to vercel.com, choose *Add New, Project*, import the repo, add the
environment variable, deploy. No other settings are needed.

**Netlify:** push to GitHub, choose *Add new site, Import an existing project*, pick the repo. Build command
`npm run build`; Netlify detects Next.js automatically. Add the environment variable under
*Site configuration, Environment variables*.

## Connect a personal domain

- **Vercel:** Project, *Settings, Domains*, add your domain, then add the DNS records Vercel shows
  (an A record for the root domain and a CNAME for `www`) at your registrar.
- **Netlify:** *Domain management, Add a domain*, then either switch to Netlify DNS or add the records shown.

HTTPS certificates are issued automatically. After the domain works, update `NEXT_PUBLIC_SITE_URL` and redeploy.
