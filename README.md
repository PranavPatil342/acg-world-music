# ACG World Music Lounge

A cinematic React/Vite prototype for an internal ACG World employee music experience.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Add songs

Place legally obtained MP3 files in `public/audio/` using the filenames configured in `src/main.jsx`.

The prototype intentionally does not ship copyrighted commercial songs.

## Build for hosting

```bash
npm run build
```

The production output is created in `dist/`.

### Netlify
- Connect this repository to Netlify.
- Build command: `npm run build`
- Publish directory: `dist`

### Cloudflare Pages
- Build command: `npm run build`
- Output directory: `dist`

### Vercel
Import the GitHub repository; Vercel can detect the Vite project.

## Important
For an actual company deployment, add authentication and use company-approved/licensed audio. Do not upload copyrighted songs unless ACG has the required rights.
