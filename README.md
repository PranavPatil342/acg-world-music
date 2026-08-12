# ACG World Music Lounge — Lata Mangeshkar Edition

This version uses the **user-supplied Lata Mangeshkar master list** as its catalogue source.

- 261 supplied list entries
- 211 unique song titles after removing exact duplicate titles
- The supplied list is headed "Hindi + Marathi"
- Individual entries are not language-tagged, so songs are not silently labelled Marathi.
- The website provides a Marathi Classics playlist placeholder and explains why it is empty.
- No commercial MP3 recordings are included.

## Add authorized audio

Put legally obtained/licensed MP3 files in `public/audio/`.

The filename is the normalized song title, e.g.:

`aayega-aanewala.mp3`

`lag-ja-gale.mp3`

`yaara-seeli-seeli.mp3`

The player will attempt to load `/audio/<normalized-title>.mp3`.

## Run

```bash
npm install
npm run dev
```

## Netlify

Build command: `npm run build`

Publish directory: `dist`

Because this repository is already linked to Netlify, committing these files to the `main` branch will trigger a new deployment.
