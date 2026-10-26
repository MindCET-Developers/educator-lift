# Architecture rules

- All application cohorts use the shared ProjectCard renderer in the apps route, including uploaded-image error fallback, so event projects keep the same gallery presentation.
- Never treat a public Google Form submission URL as a response feed; automated gallery imports require access to its response spreadsheet and must expose only project fields, not private respondent data.
- Event projects are read through server-side Google Sheets connector calls with a five-minute cache; Drive image requests are restricted to file IDs present in the event feed to prevent exposure of unrelated private files.
- Keep app images and media (logos, photos, videos) as real files under `src/assets/` (imported directly) or `public/media/`, never as `.asset.json` CDN pointers: the site is deployed to Vercel, where Lovable's `/__l5e/assets-v1/...` URLs are not served and the images break.
- Never keep two byte-identical files under `src/assets/` or `public/`; import one file everywhere. The build dedupes them under different names on server and client, which makes the image 404. `scripts/check-assets.mjs` (run by `npm run build`) enforces this and the no-`.asset.json` rule.
