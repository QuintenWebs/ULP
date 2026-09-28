# Ubuntu Leadership Program — website

The site for [ubuntuleadershipprogram.nl](https://www.ubuntuleadershipprogram.nl). React + Vite + Tailwind, static, deployed on Vercel from `main`.

```bash
npm install --legacy-peer-deps
npm run dev      # local dev server
npm run build    # production build to dist/public
```

## Content

All copy and imagery live in `client/src/content.json` and are edited through the [Mirantic CMS](https://app.mirantic.com). Elements carry `data-cms-field="path.in.content.json"`; `client/public/cms-bridge.js` connects the page to the editor. Layout, links and colours stay in code.

Images live in `client/public/assets/`. Images uploaded through the CMS are committed to `client/public/uploads/` when you publish.
