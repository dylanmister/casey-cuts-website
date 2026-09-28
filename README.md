# Casey Cuts

Mobile-first React/Vite website for Casey Chambers. Run `npm install`, then `npm run dev`. `npm run build` creates the deployable `dist/` folder; `npm run preview` previews that build. On PowerShell with restricted script execution, use `npm.cmd`.

## Content handoff

- `src/config.js`: replace `PROFILE_PHOTO` with Casey’s portrait URL. The visible labeled placeholder disappears automatically.
- Add real haircut photos and vertical clips to `GALLERY_MEDIA` in the same file. Each entry has `id`, `src`, `type`, and `alt`. Set `SHOW_GALLERY_NOTE` to false when ready. Videos use native controls, inline playback, and metadata-only loading.
- Replace `INSTAGRAM_URL` and `INSTAGRAM_HANDLE` in the same config. The current Instagram homepage and `@yourhandle` are explicit placeholders. Casey’s real handle is needed before importing Instagram photos.
- Casey’s physical location is intentionally private and shared after confirmation. Confirm the location and his process for sharing it; no invented address is published.
- Wire the clearly marked `submitBooking` function in `src/booking.js` to a real form service. The current form validates input and displays a demo completion state; it sends and stores nothing. A text-message link lets the visitor send a request themselves. Once connected, update preview wording in `Booking` and only return `mode: 'sent'` after delivery. Appointments must remain request-based, never automatically confirmed.
- After choosing the production domain, add its canonical URL and `og:url` and make `og:image` an absolute production URL in `index.html`.

## Brand assets

Inline CC monogram in `src/main.jsx`, SVG favicon at `public/favicon.svg`, and a square profile mark at `public/cc-profile.svg` (export to PNG before uploading to Instagram). Colors are CSS variables in `src/styles.css`.

Generated editorial hero: `public/images/barber-tools.webp`. Made using the built-in imagegen tool, converted to WebP. This is decorative imagery, not Casey’s portfolio. Prompt is preserved in `IMAGE_PROMPT.md`.

## Verification

`npm test` runs Playwright against installed Microsoft Edge: mobile navigation, layout overflow, hero loading, structured data, conditional booking inputs, validation, pricing selection, and the explicit demo completion state. Change the browser channel in `playwright.config.js` if Edge is unavailable.
