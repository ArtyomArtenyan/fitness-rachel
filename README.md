# Fitness Rachel

A fitness coach portfolio interface built with React and TypeScript. The page presents training services, programs, and results through reusable sections and motion effects.

[Live demo](https://fitness-rachel.vercel.app/)

## Features

- Responsive sections for services, programs, process, results, about, FAQ, and contact.
- Before-and-after image comparison with pointer dragging and preset reveal controls.
- Scroll reveal animations through a shared `FadeIn` component.
- Data-driven content for services, programs, process steps, and FAQs.
- Local fonts, images, and video assets.

The contact section stores input in React state but does not submit messages to a backend. Chat and call destinations are placeholders. Fitness content does not represent the developer's credentials or client results.

## Stack

React 19, TypeScript 6, Vite 8, Tailwind CSS 4, Framer Motion, Lucide React, React Icons, and SVGR.

## Local setup

Use Node.js 22.12+ and npm.

```bash
git clone https://github.com/ArtyomArtenyan/fitness-rachel.git
cd fitness-rachel
npm ci
npm run dev
```

Open the URL printed by Vite, usually `http://localhost:5173`. No environment variables or external services are required by the current application.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Run TypeScript project checks and create `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Architecture

```text
src/
  App.tsx          Page composition
  main.tsx         React entry point
  sections/        Page sections and their content data
  components/      Shared layout, buttons, navigation, and motion
  assets/          Local media, icons, and fonts
  index.css        Global styles and Tailwind configuration
```

`App.tsx` composes the page from section components. `ComparisonSlider.tsx` uses refs and `requestAnimationFrame` to update the image reveal during pointer movement. Vite plugins integrate React, Tailwind, and SVG imports.

## Current scope

This is a frontend portfolio project. Booking, payment, and message delivery are not implemented. No automated test script or license file is included in the current repository.
