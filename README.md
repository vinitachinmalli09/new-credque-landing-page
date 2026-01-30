## Credque Landing Page (Angular Standalone)

This is a pixel-precise implementation of the Credque marketing/CRM landing page based on the Figma design [`Credque Website`](https://www.figma.com/design/7lI9Ati8BWGJCa5c8ZDFMd/Credque-Website?node-id=224-833).

### Tech stack

- **Angular**: 21, standalone components only
- **TypeScript**: strict mode enabled
- **Styling**: SCSS with centralized design tokens
- **Icons**: `lucide-angular`
- **Reactivity**: Angular Signals (`signal`, `computed`, `effect`, `input`, `output`)

### Getting started

- **Install dependencies**: `npm install`
- **Run dev server**: `npm start` then open `http://localhost:4200`

The app bootstraps `App` (standalone) and renders the full, scrollable landing page with smooth anchor navigation.

### Project structure (UI only)

- `src/styles/_variables.scss` – Figma-derived design tokens (colors, spacing, typography, radii, shadows)
- `src/styles/_mixins.scss` – shared layout and responsive mixins
- `src/app/shared/button` – reusable `cq-button` component
- `src/app/shared/card` – reusable `cq-card` surface component
- `src/app/shared/icon` – reusable `cq-icon` wrapper over `lucide-angular`
- `src/app/component/**` – individual page sections (`header`, `hero-section`, `features`, `onthego`, `how-credque-works`, `built-for-teams`, `credque-advantage`, `testimonials`, `footer`, pricing)

All section components are standalone and orchestrated by `app.html` to form the complete landing page.
