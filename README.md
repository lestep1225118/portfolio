# Portfolio

Personal portfolio site built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Showcases projects and deploys on Vercel.

## Quick start

### Install and run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Deploy on Vercel

1. Push this repo to GitHub (e.g. `lestep1225118/portfolio`).
2. Go to [vercel.com](https://vercel.com), sign in, and click **Add New Project**.
3. Import your GitHub repository and select this project.
4. Set **Framework Preset** to **Next.js** (Vercel will detect it automatically).
5. Click **Deploy**. Your site will be live at a `*.vercel.app` URL.
6. (Optional) Add your custom domain in the project **Settings → Domains**.

## Project structure

- `app/` — Next.js App Router pages (home, projects, about, contact).
- `components/` — Navbar, Footer, ProjectCard, Tag.
- `lib/` — Project data and types.

## Editing content

- **Projects**: Edit `lib/projects.ts` to add or change project entries (name, description, GitHub URL, live URL, tech stack).
- **About / Contact**: Edit `app/about/page.tsx` and `app/contact/page.tsx`. Update the contact page with your real email and LinkedIn URL.
