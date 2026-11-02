# Idle Rats website

The website for **Idle Rats**, the idle auto-battler by SkaRift.

- `index.html`: home page (about the game, Google Play button, links)
- `roster.html`: all 55 rats with portraits, roles, elements, starting stars, skills and leader auras. Tap any rat to open their file
- `site.css`: shared styles for both pages
- Privacy policy lives at https://skarift.github.io/idlerats-legal/

## Publish with GitHub Pages
Settings → Pages → Build and deployment → Source: **Deploy from a branch**, Branch: **main**, folder **/ (root)** → Save. The site appears at `https://skarift.github.io/IdleRatsRoster/` after a minute or two.

## When the game launches on Google Play
The "Coming soon to Google Play" buttons are in `index.html` (hero) and in the nav on both pages. For each one: set `href` to the Play Store URL and remove `aria-disabled="true"`, `tabindex="-1"`, `onclick="return false"` and the `<span class="soon">Soon</span>` badge, and change "Coming soon to" to "Get it on".

## Updating
- Character text and skills live in the `RATS` list near the bottom of `roster.html`.
- Portraits are in `img/` (360×360 WebP, file name = character name in lower case with underscores).
