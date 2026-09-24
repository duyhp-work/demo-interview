# ABC株式会社 — Vercel Ready

Static HTML/CSS/JS website based on the ABC demo design.

## Important Vercel fix

This package is intentionally deployable from the repository root. `index.html` is at the root, not inside `interface/`.

Use these Vercel settings:
- Framework Preset: Other
- Root Directory: `.` (repository root)
- Build Command: empty
- Output Directory: empty
- Install Command: empty

Then deploy/redeploy.

## Local test

Open `index.html` directly or run a local static server.

## Pages
- `/` — Home
- `/works.html` — Works
- `/company.html` — Company
- `/contact.html` — Contact
- `/privacy.html` — Privacy Policy

All company information is fictional.
