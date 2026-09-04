# HTML5 Development Guidelines

## Project Standards & Philosophy
- Adhere strictly to the W3C / WHATWG HTML Living Standard.
- Prioritize semantic markup (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`) over generic `<div>` containers.
- Enforce accessibility (a11y) standards matching WCAG 2.2 AA compliance: all images must have descriptive `alt` text, all form inputs must have associated `<label>` elements, and interactive controls must be keyboard operable.
- Implement responsive media patterns (`<picture>`, `srcset`, `sizes`, `loading="lazy"`).
- Maintain an automated test suite verifying DOM structures, ARIA accessibility, and SEO meta tags.

## Code & Quality Guidelines
- Indent HTML and TypeScript by 2 spaces.
- Unit test all validators with Vitest (`npm test`).
- Ensure TypeScript builds cleanly with `npm run build` (`tsc`).
