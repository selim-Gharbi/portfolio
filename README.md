# Selim Gharbi — Portfolio

Bilingual (English/French) developer portfolio built with React, Vite, Tailwind CSS, Framer Motion and Lucide icons.

## 1. Requirements
- Node.js 20.19+ or 22.12+
- npm
- A GitHub account
- A Vercel account (free Hobby plan)

## 2. Run locally

Open a terminal in this project folder:

```bash
npm install
npm run dev
```

Vite will show a local URL, usually `http://localhost:5173`.

## 3. Build check

```bash
npm run build
npm run preview
```

The production website is generated in the `dist/` folder.

## 4. Personalize before publishing

- Check your email, phone number, GitHub and LinkedIn links in `src/App.jsx`.
- Your CV is included at `public/selim-gharbi-cv.pdf` and the hero section links to it. Replace that file whenever you update your CV.
- Add project repository/demo links only when you have real public URLs. The project cards currently show descriptions and technologies from the CV.
- You can edit the bilingual text in the `copy.en` and `copy.fr` objects in `src/App.jsx`.

## 5. Publish free on Vercel

1. Create a GitHub repository, for example `selim-gharbi-portfolio`.
2. Upload/push all project files to the repository (the `src`, `public` folders and configuration files; do not upload `node_modules`).
3. Go to https://vercel.com/ and sign in with GitHub.
4. Select **Add New → Project**, then import `selim-gharbi-portfolio`.
5. Vercel detects Vite automatically. Confirm:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. Click **Deploy**.
7. After deployment, Vercel gives you a public URL such as `selim-gharbi-portfolio.vercel.app`.

Every push to the connected GitHub repository will trigger a new deployment.

## 6. Optional custom domain

You can connect a domain you own from **Vercel → Project → Settings → Domains**. A custom domain is not included automatically in the free hosting; you need to register it separately.

## Notes
- Hosting on Vercel's free Hobby plan is suitable for a personal portfolio, subject to Vercel's current plan limits and terms.
- The portfolio uses Google Fonts from a CDN. If you prefer fully local fonts, remove the Google Fonts links in `index.html` and use system fonts.
