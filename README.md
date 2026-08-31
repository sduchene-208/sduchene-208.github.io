# Steven Duchene — Portfolio

A visual, responsive, single-page professional portfolio built with plain HTML, CSS, and vanilla JavaScript.

## Files

- `index.html` — portfolio structure and editable content
- `styles.css` — theme, layout, animations, responsive design
- `script.js` — mobile navigation, cursor glow, scroll reveals
- `README.md` — setup and deployment notes

## Run locally

Open `index.html` directly in a browser, or run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## GitHub Pages

For `sduchene-208.github.io`:

```bash
git init
git add index.html styles.css script.js README.md
git commit -m "Redesign professional portfolio"
git branch -M main
git remote add origin https://github.com/sduchene-208/sduchene-208.github.io.git
git push -u origin main
```

Then GitHub → repository → Settings → Pages → Deploy from a branch → `main` → `/ (root)`.

## Resume

The site links to the OneDrive resume supplied for the portfolio. If desired, replace that with a local PDF under an `assets/` folder and update the resume links in `index.html`.

## Re-theming

All primary visual colors are CSS custom properties at the top of `styles.css`.
