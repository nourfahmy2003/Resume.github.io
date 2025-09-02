# Portfolio (Vite + React)

This app is built with [Vite](https://vite.dev) and React 18. It uses Tailwind via CDN and includes a Lenis-powered ScrollStack component.

## Development

```bash
npm install
npm run dev
```

## Deployment

Configure `base` in `vite.config.js` for your repository name. For this project it is `/Resume.github.io/`.

```bash
npm run deploy
```

This builds the site, copies `index.html` to `404.html` to support SPA refreshes, and publishes the `dist` folder to the `gh-pages` branch. Enable GitHub Pages with branch `gh-pages` and folder `/`.
