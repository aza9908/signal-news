# Signal — AI &amp; Robotics channel

A personal, monetized channel by **Azamat Armanuly** &amp; **Kuanysh Magauin** (Astana).
Liquid-glass design, trilingual (EN / ҚАЗ / РУС), with a live AI &amp; robotics news feed
behind a $3 Tribute paywall.

## Files

```
signal/
├── index.html      ← markup (all text carries data-i18n keys)
├── styles.css      ← all styling (liquid glass, palette, layout)
├── app.js          ← config, translations, news feed, paywall
└── assets/
    ├── azamat.jpg  ← full-colour KAIST photo
    └── kuanysh.jpg ← violet→teal duotone portrait
```

## Deploy (pick one)

- **Netlify / Vercel:** drag the whole `signal` folder onto the dashboard. Done.
- **GitHub Pages:** push the folder to a repo, enable Pages on the branch root.
- **Any static host:** upload the folder as-is. No build step, no dependencies.

Open `index.html` locally to preview (some browsers block `fetch` on `file://`,
so the *live* feed may only load once deployed — the built-in fallback stories
always show).

## Configure (2 lines)

Edit the top of `app.js`:

```js
const TRIBUTE_URL = "https://t.me/TributeNewsRU"; // your Tribute / channel link
const ACCESS_CODE = "SIGNAL3";                    // code you give paying subscribers
```

## Edit the translations

All UI text lives in the `I18N` object in `app.js`, split into `en`, `kz`, `ru`.
English is the source of truth and the default. Change any string in place —
keys are shared across all three languages.

## The news feed (why it costs nothing to run)

The feed is fetched **in the visitor's browser** from free Google News RSS
(AI + robotics) via a public RSS→JSON bridge. No server, no API key, no AI
tokens — ever. A dozen hand-written fallback stories load instantly and stay
visible if the live fetch is ever rate-limited. Headlines link to their
original publishers and appear in the source language (English).

## Payment &amp; security notes

- **Tribute** is the recommended path: it charges the $3 and auto-adds buyers to
  your private Telegram channel. No banking details ever touch the site.
- The website unlock (blur + access code) is an **honor layer** — client-side
  code can be bypassed. Put genuinely paid content in the Tribute-gated Telegram
  channel; treat the on-site feed as the teaser/convenience layer.
- Never embed a card number anywhere. A site only ever needs a payment *link*.

## Swap a photo

Replace `assets/azamat.jpg` or `assets/kuanysh.jpg` with a 600×600 image of the
same name. To re-tone Kuanysh's portrait (or drop the duotone entirely), just
overwrite the file.

© 2026 Azamat Armanuly &amp; Kuanysh Magauin. Independent channel; not affiliated
with the publishers or companies mentioned.
