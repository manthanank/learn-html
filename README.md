# Learn HTML5 🌐

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Docker Image CI](https://github.com/manthanank/learn-html/actions/workflows/docker.yml/badge.svg)](https://github.com/manthanank/learn-html/actions/workflows/docker.yml)
[![Releases](https://github.com/manthanank/learn-html/actions/workflows/releases.yml/badge.svg)](https://github.com/manthanank/learn-html/actions/workflows/releases.yml)
[![HTML5 Living Standard](https://img.shields.io/badge/HTML5-WHATWG%20Standard-E34F26.svg?logo=html5)](https://html.spec.whatwg.org/)
[![Tested with Vitest](https://img.shields.io/badge/Tested%20with-Vitest-yellow.svg?logo=vitest)](https://vitest.dev/)

An exhaustive, battle-tested, enterprise-grade curriculum and reference manual for mastering **HTML5**, semantic web architecture, accessibility (WCAG 2.2 / a11y), responsive multimedia, Web Components, and modern browser rendering internals.

[Getting Started](#-getting-started) • [Semantic Landmarks](#-semantic-html5-architecture) • [Forms & Validation](#-forms-inputs--native-validation) • [Accessibility (a11y)](#-accessibility-a11y--wai-aria-mastery) • [Interview Prep](#-html5-interview-questions--answers) • [Cheat Sheet](#-comprehensive-html5-cheat-sheet)

<br/>

<a href="https://www.buymeacoffee.com/manthanank">
  <img src="public/bmc-button.svg" alt="Buy Me A Coffee" width="180">
</a>

</div>

---

## 📋 Table of Contents

1. [Introduction & Foundations](#-introduction--foundations)
   - [What is HTML5? The WHATWG Living Standard](#what-is-html5)
   - [The Document Object Model (DOM) & Parsing Lifecycle](#the-dom--parsing-lifecycle)
   - [Critical Rendering Path (DOM + CSSOM -> Render Tree)](#critical-rendering-path)
2. [Document Anatomy & Modern SEO Metadata](#-document-anatomy--modern-seo-metadata)
   - [The Standard Document Skeleton (Doctype, html, head, body)](#the-standard-document-skeleton)
   - [Character Encoding & Viewport Configuration](#character-encoding--viewport)
   - [OpenGraph & Twitter Card Metadata](#opengraph--twitter-cards)
   - [Structured Data with JSON-LD](#structured-data-json-ld)
   - [Favicons, Web App Manifests & PWA Icons](#favicons-and-manifests)
3. [Getting Started & Project Setup](#-getting-started)
   - [Project Structure & Architecture](#project-structure)
   - [Available Scripts & Automated Validation](#available-scripts)
4. [Semantic HTML5 Architecture](#-semantic-html5-architecture)
   - [Why Semantics Matter: SEO, Accessibility & Maintainability](#why-semantics-matter)
   - [The "Div Soup" Antipattern](#the-div-soup-antipattern)
   - [Structural Landmarks (header, nav, main, article, section, aside, footer)](#structural-landmarks)
   - [Figures & Media Grouping (figure, figcaption)](#figures-and-captions)
5. [Text Formatting & Typography Semantics](#-text-formatting--typography-semantics)
   - [Heading Hierarchy (h1-h6) & Single H1 Rule](#heading-hierarchy)
   - [Paragraphs & Thematic Breaks (p, hr)](#paragraphs--thematic-breaks)
   - [Inline Semantics (strong vs b, em vs i, mark, time)](#inline-semantics)
   - [Code & Technical Content (pre, code, kbd, samp)](#code-and-technical-content)
   - [Quotes & Citations (blockquote, q, cite)](#quotes-and-citations)
6. [Hyperlinks & Navigation](#-hyperlinks--navigation)
   - [The Anchor Element (a, href)](#anchor-element)
   - [Target Attributes & Security (rel="noopener noreferrer")](#target-attributes--security)
   - [URL Schemes (mailto:, tel:, sms:)](#url-schemes)
   - [In-Page Fragment Anchors & Skip Links](#in-page-fragment-anchors)
7. [Responsive Multimedia & Graphics](#-responsive-multimedia--graphics)
   - [Images Done Right (img, alt, loading="lazy", decoding="async")](#images-done-right)
   - [Adaptive Art Direction with picture, srcset, and sizes](#adaptive-art-direction)
   - [Native Video & Audio (video, audio, track)](#native-video--audio)
   - [Vector Graphics: Inline SVG vs External SVG](#vector-graphics-svg)
   - [Interactive Canvas (canvas)](#interactive-canvas)
   - [Sandboxed Iframes (iframe, sandbox, allow)](#sandboxed-iframes)
8. [Forms, Inputs & Native Validation](#-forms-inputs--native-validation)
   - [Form Structure & Attributes (action, method, enctype)](#form-structure)
   - [Accessible Form Controls (label for, fieldset, legend)](#accessible-form-controls)
   - [HTML5 Input Types in Depth (email, tel, url, number, date, range, color)](#input-types)
   - [Datalists, Selects & Outputs (datalist, select, output)](#datalists-selects-outputs)
   - [Native Constraint Validation API (required, pattern, min/max)](#native-constraint-validation)
9. [Data Tables & Tabular Architecture](#-data-tables--tabular-architecture)
   - [Semantic Table Elements (table, caption, thead, tbody, tfoot)](#semantic-table-elements)
   - [Header Scopes & Grouping (th scope="col|row", colgroup, col)](#header-scopes)
   - [Complex Tables with colspan and rowspan](#complex-tables)
10. [Modern Interactive Elements](#-modern-interactive-elements)
    - [Native Modal Dialogs (dialog, showModal(), ::backdrop)](#native-modal-dialogs)
    - [Zero-JS Collapsible Widgets (details, summary)](#details-and-summary)
    - [The HTML Popover API](#the-html-popover-api)
11. [Web Components & Templating](#-web-components--templating)
    - [Client-Side Templates (template, slot)](#client-side-templates)
    - [Custom Elements Lifecycle](#custom-elements-lifecycle)
    - [Shadow DOM Encapsulation](#shadow-dom-encapsulation)
12. [Accessibility (a11y) & WAI-ARIA Mastery](#-accessibility-a11y--wai-aria-mastery)
    - [WCAG 2.2 Standards & POUR Principles](#wcag-standards)
    - [The First Rule of ARIA](#first-rule-of-aria)
    - [Essential ARIA Attributes (role, aria-label, aria-expanded, aria-live)](#essential-aria-attributes)
    - [Keyboard Navigation & Focus Management](#keyboard-navigation)
13. [Security & Performance Optimization](#-security--performance-optimization)
    - [Content Security Policy (CSP) Headers & Meta Tags](#content-security-policy)
    - [Subresource Integrity (SRI: integrity, crossorigin)](#subresource-integrity)
    - [Script Loading Mechanics (inline, defer, async, type="module")](#script-loading-mechanics)
    - [Resource Hints (preload, prefetch, preconnect, dns-prefetch)](#resource-hints)
14. [HTML5 Interview Questions & Answers](#-html5-interview-questions--answers)
    - [Beginner Questions (1-10)](#beginner-questions)
    - [Intermediate Questions (11-25)](#intermediate-questions)
    - [Senior & Architectural Questions (26-40)](#senior--architectural-questions)
15. [Comprehensive HTML5 Cheat Sheet](#-comprehensive-html5-cheat-sheet)
    - [All Semantic Elements Reference](#all-semantic-elements-reference)
    - [Global Attributes & Event Handlers](#global-attributes)
16. [Community & Contributing](#-community--contributing)
17. [Author & Sponsorship](#-author--sponsorship)

---

## 🌟 Introduction & Foundations

### What is HTML5?

**HTML (HyperText Markup Language)** is the universal foundational language of the World Wide Web. First conceived by Tim Berners-Lee in 1989, HTML has evolved from a rudimentary text-formatting language into **HTML5**, the official **Living Standard** maintained cooperatively by the **WHATWG (Web Hypertext Application Technology Working Group)** comprising browser vendors (Apple, Google, Mozilla, Microsoft).

HTML5 is not merely a syntax upgrade; it is an extensive platform integrating semantic tags, multimedia playback engines, offline client storage, custom element APIs, and accessible document structures.

```
┌─────────────────────────────────────────────────────────────┐
│                    THE MODERN WEB STACK                     │
├────────────────────────┬────────────────────────────────────┤
│ HTML5 (Structure)      │ Semantic Landmarks, Forms, Content │
├────────────────────────┼────────────────────────────────────┤
│ CSS3 (Presentation)    │ Layout, Grid, Flexbox, Animation   │
├────────────────────────┼────────────────────────────────────┤
│ JavaScript (Behavior)  │ Interactivity, APIs, State, Events │
└────────────────────────┴────────────────────────────────────┘
```

### The DOM & Parsing Lifecycle

When a browser receives raw HTML bytes from a server over HTTP, it converts those bytes into a visual page through a deterministic parsing pipeline:

```
[ Raw Network Bytes ]
        │
        ▼
   ┌──────────┐
   │ Characters│ ── Converted from UTF-8 byte stream
   └────┬─────┘
        ▼
   ┌──────────┐
   │  Tokens  │ ── Emits StartTag, EndTag, Characters (Tokenization)
   └────┬─────┘
        ▼
   ┌──────────┐
   │  Nodes   │ ── Created as Object instances with properties
   └────┬─────┘
        ▼
   ┌──────────┐
   │   DOM    │ ── Document Object Model Tree assembled in memory
   └──────────┘
```

### Critical Rendering Path

The **Critical Rendering Path** represents the sequence of operations the browser undertakes to convert the DOM and CSSOM into actual screen pixels:

1. **DOM Construction**: The HTML is parsed into the Document Object Model.
2. **CSSOM Construction**: External stylesheets and `<style>` blocks are parsed into the CSS Object Model.
3. **Render Tree Construction**: The browser intersects DOM and CSSOM, computing which nodes are visible (`display: none` nodes are discarded).
4. **Layout (Reflow)**: Calculates the exact geometry, coordinates, and pixel dimensions of every visible box on the screen.
5. **Paint**: Fills pixels with colors, borders, shadows, and text.
6. **Compositing**: Flattens multiple layers onto the screen GPU canvas.

---

## 📄 Document Anatomy & Modern SEO Metadata

### The Standard Document Skeleton

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Enterprise Web Architecture | Acme Corp</title>
    <meta name="description" content="Production-ready web applications built with modern HTML5 semantics and accessibility." />
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>
```

Key Components:
1. `<!DOCTYPE html>`: Triggers modern **standards mode** in all browsers. Omitting this triggers **quirks mode**, which emulates browser bugs from the 1990s!
2. `<html lang="en">`: Declares the natural language of the document. Crucial for screen reader pronunciation engines and search engine localization.
3. `dir="ltr"`: Specifies text directionality (`ltr` for Left-to-Right; `rtl` for Right-to-Left languages like Arabic and Hebrew).

### Modern SEO & Social Graph Metadata

Search engines and social sharing platforms (Slack, LinkedIn, Twitter/X, Discord) inspect the `<head>` of your HTML to generate rich link preview cards:

```html
<!-- Canonical URL: Prevents duplicate content penalties -->
<link rel="canonical" href="https://example.com/learn-html" />

<!-- OpenGraph Metadata (Facebook, LinkedIn, Discord, Slack) -->
<meta property="og:site_name" content="Learn Web Architecture" />
<meta property="og:type" content="article" />
<meta property="og:title" content="Mastering Modern HTML5 Architecture" />
<meta property="og:description" content="Exhaustive guide to HTML5 semantics, accessibility, and modern web standards." />
<meta property="og:url" content="https://example.com/learn-html" />
<meta property="og:image" content="https://example.com/assets/og-preview.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<!-- Twitter / X Card Metadata -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@manthanank" />
<meta name="twitter:creator" content="@manthanank" />
<meta name="twitter:title" content="Mastering Modern HTML5 Architecture" />
<meta name="twitter:description" content="Exhaustive guide to HTML5 semantics, accessibility, and modern web standards." />
<meta name="twitter:image" content="https://example.com/assets/og-preview.png" />

<!-- Robots Indexing Directives -->
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
```

### Structured Data with JSON-LD

Embedding **JSON-LD (JavaScript Object Notation for Linked Data)** provides search engines like Google with rich machine-readable context, unlocking rich snippets in search results:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Mastering Modern HTML5 Architecture",
  "author": {
    "@type": "Person",
    "name": "Manthan Ankolekar",
    "url": "https://github.com/manthanank"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Acme Education"
  },
  "datePublished": "2026-09-04",
  "description": "Comprehensive curriculum on HTML5 semantics, accessibility, and standards."
}
</script>
```


## 🚀 Getting Started

### Project Structure & Architecture

```
learn-html/
├── .github/                      # CI/CD Workflows and contribution templates
│   ├── workflows/
│   │   ├── docker.yml            # Docker container build & publish
│   │   └── releases.yml          # Semantic versioning & changelog automation
│   ├── copilot-instructions.md   # AI guidelines for HTML5 standards
│   └── pull_request_template.md  # PR quality checklist
├── .vscode/                      # Editor extensions, tasks, launch configs
├── public/                       # Static public assets (badges, favicons)
├── src/                          # Application source code
│   ├── index.html                # Semantic HTML5 showcase page
│   ├── server.ts                 # Lightweight Node.js preview server
│   ├── validator.ts              # DOM structure, SEO, and accessibility validator
│   └── validator.test.ts         # Vitest unit test suite
├── Dockerfile                    # Container definition
├── package.json                  # Dependencies & scripts
├── tsconfig.json                 # TypeScript configuration
├── CHANGELOG.md                  # Release version history
├── CODE_OF_CONDUCT.md            # Community code of conduct
├── CONTRIBUTING.md               # Contribution guidelines
├── SECURITY.md                   # Security vulnerability reporting
└── README.md                     # Comprehensive technical documentation
```

### Available Scripts

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Starts development server with live reload via `tsx watch` |
| `npm run build` | Compiles TypeScript validator and server via `tsc` |
| `npm start` | Launches production HTTP server serving `index.html` at port 3000 |
| `npm test` | Runs the Vitest test suite validating HTML semantics and a11y |
| `npm run test:watch` | Runs Vitest in interactive watch mode |

---

## 🏛️ Semantic HTML5 Architecture

### Why Semantics Matter

**Semantic HTML** means using elements according to their real-world meaning, rather than solely for their visual styling.
1. **Accessibility (a11y)**: Screen readers create an auditory outline of your page using semantic landmarks (`main`, `nav`, `header`), allowing visually impaired users to jump directly to primary content without reading through 50 links.
2. **Search Engine Optimization (SEO)**: Search engine crawlers parse your heading hierarchy and distinguish primary articles from peripheral sidebars (`aside`).
3. **Maintainability & Clean Code**: Clean, readable markup that eliminates "div soup".

### The "Div Soup" Antipattern

```html
<!-- ❌ THE OLD "DIV SOUP" ANTIPATTERN (Meaningless to browsers and screen readers) -->
<div id="header">
  <div class="logo">Acme</div>
  <div id="menu">
    <div class="menu-item"><a href="/home">Home</a></div>
  </div>
</div>
<div id="content">
  <div class="post">
    <div class="post-title">Blog Title</div>
    <div class="post-body">Content...</div>
  </div>
</div>
<div id="footer">Copyright 2026</div>

<!-- ✅ THE MODERN SEMANTIC HTML5 ARCHITECTURE -->
<header>
  <div class="logo">Acme</div>
  <nav aria-label="Main Navigation">
    <ul>
      <li><a href="/home">Home</a></li>
    </ul>
  </nav>
</header>
<main>
  <article>
    <header>
      <h1>Blog Title</h1>
    </header>
    <p>Content...</p>
  </article>
</main>
<footer>
  <p>&copy; 2026 Acme Corp</p>
</footer>
```

### Structural Landmarks

```
┌────────────────────────────────────────────────────────┐
│                        <header>                        │
│ ┌────────────────────────────────────────────────────┐ │
│ │                        <nav>                       │ │
│ └────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────┬─────────────┐
│                  <main>                  │   <aside>   │
│ ┌──────────────────────────────────────┐ │             │
│ │              <article>               │ │             │
│ │ ┌──────────────────────────────────┐ │ │             │
│ │ │             <section>            │ │ │             │
│ │ └──────────────────────────────────┘ │ │             │
│ └──────────────────────────────────────┘ │ │             │
└──────────────────────────────────────────┴─────────────┘
┌────────────────────────────────────────────────────────┐
│                        <footer>                        │
└────────────────────────────────────────────────────────┘
```

1. **`<header>`**: Represents introductory content, branding, headings, or navigational aids. Can appear at document root or inside `<article>` / `<section>`.
2. **`<nav>`**: Designates major navigational blocks. Not all links belong in `<nav>`—only primary site or section navigation.
3. **`<main>`**: Represents the primary, dominant content of the document. **There must be only one visible `<main>` per page**, and it must not be a descendant of `<header>`, `<nav>`, `<aside>`, or `<footer>`.
4. **`<article>`**: Represents an independent, self-contained composition that could be syndicated or redistributed on its own (e.g. blog post, product card, forum message).
5. **`<section>`**: Represents a standalone thematic grouping of content, typically with its own heading (`<h2>`-`<h6>`).
6. **`<aside>`**: Represents secondary content tangentially related to the main content (callouts, author bios, related links, sidebars).
7. **`<footer>`**: Contains metadata, author information, copyright notices, and legal links.

---

## ✍️ Text Formatting & Typography Semantics

### Heading Hierarchy (`<h1>`-`<h6>`)

Headings construct the logical document outline:
- **Rule of Thumb**: Exactly **one `<h1>` per page** representing the primary topic of the document.
- **Never skip heading levels**: Moving from `<h2>` directly to `<h4>` breaks accessibility navigation for screen readers.

### Inline Semantics

| Element | Visual Default | Semantic Meaning | Correct Use Case |
| :--- | :--- | :--- | :--- |
| `<strong>` | **Bold** | Strong importance or urgency | Warning notices, critical words |
| `<b>` | **Bold** | Stylistic offset without extra importance | Product names, lead keywords |
| `<em>` | *Italic* | Stressed emphasis (changes vocal inflection) | "I *really* like this" |
| `<i>` | *Italic* | Alternate voice, technical term, foreign phrase | Latin names, internal thoughts |
| `<mark>` | Highlight | Content marked or highlighted for reference | Search result query matches |
| `<time>` | Normal | Machine-readable date or time | `<time datetime="2026-09-04">Sept 4</time>` |
| `<small>` | Smaller | Side comments, legal disclaimers, copyrights | Terms of service, copyright notices |
| `<del>` / `<ins>` | Strikethrough / Underline | Deleted / Inserted edits in text | Editorial revisions, price changes |

### Code & Technical Content

```html
<!-- Single inline code snippet -->
Use the <code>npm test</code> command to execute the test suite.

<!-- User keyboard input -->
Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to terminate the process.

<!-- Computer program output -->
The console returned <samp>404 Not Found</samp>.

<!-- Preformatted multi-line code block -->
<pre><code class="language-typescript">
function greet(name: string): string {
  return `Hello, ${name}!`;
}
</code></pre>
```

---

## 🔗 Hyperlinks & Navigation

### The Anchor Element (`<a>`)

Hyperlinks are the glue of the Web:

```html
<!-- External Link with Security Hardening -->
<a href="https://github.com/manthanank" target="_blank" rel="noopener noreferrer">
  Visit GitHub Profile
</a>
```

> [!IMPORTANT]
> Whenever using `target="_blank"`, you **must specify `rel="noopener noreferrer"`**.
> Without `noopener`, the newly opened page gains access to your window's `window.opener` JavaScript object and can silently redirect your users to a malicious phishing page (Reverse Tabnabbing attack).

### Specialized URL Schemes

```html
<!-- Email link with pre-filled subject and body -->
<a href="mailto:manthan.ank46@gmail.com?subject=Inquiry&body=Hello%20Manthan,">Send Email</a>

<!-- Direct Telephone dialer -->
<a href="tel:+1234567890">Call Support</a>

<!-- Direct SMS trigger -->
<a href="sms:+1234567890?body=Subscribe">Send SMS</a>
```

### In-Page Fragment Anchors & Skip Links

```html
<!-- Skip to Main Content Link (Essential for Keyboard Accessibility) -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Jump to Section -->
<a href="#section-pricing">Jump to Pricing</a>

<section id="section-pricing">
  <h2>Pricing Plans</h2>
</section>
```


## 🖼️ Responsive Multimedia & Graphics

### Images Done Right

Modern web images require optimization for performance, Cumulative Layout Shift (CLS), and accessibility:

```html
<img
  src="/images/hero-800w.webp"
  alt="Engineering team analyzing cloud telemetry charts on a monitor"
  width="800"
  height="450"
  loading="lazy"
  decoding="async"
/>
```

Best Practices:
1. **Explicit `width` and `height`**: Providing integer dimensions allows the browser to calculate the image's aspect ratio before bytes download, completely eliminating **Cumulative Layout Shift (CLS)**.
2. **`loading="lazy"`**: Defers loading images below the fold until the user scrolls near them, dramatically cutting initial page payload.
3. **`decoding="async"`**: Decodes image bytes off the main UI thread, preventing scroll stutter.
4. **Descriptive `alt`**: Conveys the information and purpose of the image. If an image is purely decorative, use `alt=""` so screen readers ignore it.

### Adaptive Art Direction with `<picture>`, `srcset`, and `sizes`

The `<picture>` element allows serving modern image formats (AVIF, WebP) with automatic fallbacks, or changing image cropping across screen widths:

```html
<picture>
  <!-- Serve ultra-efficient AVIF format to browsers that support it -->
  <source srcset="/images/banner.avif" type="image/avif" />
  
  <!-- Fallback to WebP -->
  <source srcset="/images/banner.webp" type="image/webp" />

  <!-- Mobile Cropped Image for small viewports -->
  <source media="(max-width: 600px)" srcset="/images/banner-mobile.jpg" />

  <!-- Standard default fallback -->
  <img
    src="/images/banner-desktop.jpg"
    alt="Developer workstation with multiple monitors"
    width="1200"
    height="630"
    loading="lazy"
  />
</picture>
```

Resolution Switching with `srcset` and `sizes`:

```html
<img
  srcset="
    /images/photo-400.jpg 400w,
    /images/photo-800.jpg 800w,
    /images/photo-1200.jpg 1200w
  "
  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 800px"
  src="/images/photo-800.jpg"
  alt="Sunset over the ocean"
/>
```

### Native Video & Audio

HTML5 enables rich multimedia streaming without third-party plugins (Flash):

```html
<video controls width="800" height="450" poster="/media/poster.jpg" preload="metadata">
  <source src="/media/demo.webm" type="video/webm" />
  <source src="/media/demo.mp4" type="video/mp4" />
  
  <!-- Accessible Captions and Subtitles -->
  <track
    kind="subtitles"
    src="/media/subtitles-en.vtt"
    srclang="en"
    label="English"
    default
  />
  <track
    kind="captions"
    src="/media/captions-en.vtt"
    srclang="en"
    label="English Captions"
  />
  
  <p>Your browser does not support HTML5 video. <a href="/media/demo.mp4">Download video</a>.</p>
</video>
```

Native Audio:

```html
<audio controls preload="none">
  <source src="/audio/podcast-ep1.opus" type="audio/ogg; codecs=opus" />
  <source src="/audio/podcast-ep1.mp3" type="audio/mpeg" />
  <p>Your browser does not support native audio. <a href="/audio/podcast-ep1.mp3">Download audio</a>.</p>
</audio>
```

### Vector Graphics: Inline SVG vs Canvas

```html
<!-- Accessible Inline SVG (Crisp on all DPI displays, styleable with CSS) -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" aria-label="Search Icon">
  <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" />
  <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" stroke-width="2" />
</svg>

<!-- High-Performance Scriptable Canvas for 2D/WebGL Rendering -->
<canvas id="game-canvas" width="800" height="600">
  Your browser does not support HTML5 Canvas.
</canvas>
```

### Sandboxed Iframes

Embedding third-party widgets or applications securely:

```html
<iframe
  src="https://trusted-partner.com/widget"
  title="Interactive Pricing Calculator"
  width="100%"
  height="400"
  loading="lazy"
  sandbox="allow-scripts allow-same-origin allow-forms"
  referrerpolicy="no-referrer"
></iframe>
```

Security Best Practices for `iframe`:
- `sandbox`: Restricts the frame’s capabilities (prevents top-navigation, popup creation, and unrestricted script execution).
- `title`: Mandatory for screen reader accessibility so users know what content the iframe encapsulates.


## 📝 Forms, Inputs & Native Validation

### Accessible Form Controls & Structure

Forms collect user input and submit it to a server. To achieve WCAG 2.2 accessibility, every single input **must be programmatically tied to a visible `<label>`**:

```html
<form action="/api/checkout" method="POST" enctype="application/x-www-form-urlencoded">
  <!-- Grouping related fields with fieldset and legend -->
  <fieldset>
    <legend>Billing Address</legend>

    <!-- Explicit label association via for and id -->
    <div class="form-group">
      <label for="billing-name">Full Name <span aria-hidden="true">*</span></label>
      <input type="text" id="billing-name" name="name" required autocomplete="name" />
    </div>

    <div class="form-group">
      <label for="billing-email">Email Address <span aria-hidden="true">*</span></label>
      <input type="email" id="billing-email" name="email" required autocomplete="email" />
    </div>
  </fieldset>
</form>
```

### HTML5 Input Types in Depth

HTML5 introduces specialized input types that display optimized virtual keyboards on mobile devices (iOS, Android) and provide client-side validation out of the box:

| Input Type | Mobile Keyboard Triggered | Built-in Browser Validation |
| :--- | :--- | :--- |
| `type="email"` | `@` and `.com` shortcuts | Validates against standard email syntax |
| `type="tel"` | Full numeric phone dialpad | Does not validate format unless paired with `pattern` |
| `type="url"` | `.com`, `/`, and URL shortcuts | Enforces `http://` or `https://` protocol prefix |
| `type="number"` | Number pad | Enforces digits, supports `min`, `max`, and `step` |
| `type="date"` | Native platform date picker | Enforces YYYY-MM-DD ISO format |
| `type="range"` | Slider control | Selects numeric value within min/max bounds |
| `type="color"` | Native platform color picker | Emits 7-character hexadecimal string (`#ff5500`) |
| `type="file"` | File browser dialog | Accepts constraints: `accept="image/png, .pdf"`, `multiple` |

### Specialized Form Helpers: `<datalist>` & `<output>`

#### 1. Autocomplete Search with `<datalist>`
Combines the flexibility of a text input with the convenience of a dropdown:

```html
<label for="browser-choice">Choose your primary browser:</label>
<input list="browsers" id="browser-choice" name="browser" placeholder="Type or select..." />

<datalist id="browsers">
  <option value="Google Chrome"></option>
  <option value="Mozilla Firefox"></option>
  <option value="Apple Safari"></option>
  <option value="Microsoft Edge"></option>
  <option value="Brave"></option>
</datalist>
```

#### 2. Live Calculation Output with `<output>`

```html
<form oninput="total.value = parseInt(qty.value) * parseInt(price.value)">
  <label for="qty">Quantity:</label>
  <input type="number" id="qty" name="qty" value="2" min="1" />

  <label for="price">Unit Price ($):</label>
  <input type="number" id="price" name="price" value="25" min="1" />

  <p>Total Cost: $<output name="total" for="qty price">50</output></p>
</form>
```

### Native Constraint Validation API

Modern browsers validate forms automatically without requiring heavy JavaScript libraries:

```html
<form id="signup-form">
  <!-- Required and length constraints -->
  <label for="username">Username (3-20 letters):</label>
  <input
    type="text"
    id="username"
    name="username"
    required
    minlength="3"
    maxlength="20"
    pattern="^[a-zA-Z0-9_-]+$"
    title="Username must contain only alphanumeric characters, underscores, or hyphens."
  />

  <!-- Numeric range constraints -->
  <label for="age">Age (Must be at least 18):</label>
  <input type="number" id="age" name="age" required min="18" max="120" />

  <button type="submit">Create Account</button>
</form>
```

Styling Validation States with CSS:

```css
/* Style valid inputs */
input:valid {
  border-color: #22c55e;
}

/* Style invalid inputs only when the user has interacted with them */
input:user-invalid {
  border-color: #ef4444;
}
```

JavaScript Constraint Validation Integration:

```javascript
const emailInput = document.getElementById('billing-email');

emailInput.addEventListener('input', () => {
  if (emailInput.validity.typeMismatch) {
    emailInput.setCustomValidity('Please enter a corporate email address (e.g. name@company.com)');
  } else {
    emailInput.setCustomValidity(''); // Reset custom error to mark valid
  }
});
```


## 📊 Data Tables & Tabular Architecture

Tables represent structured two-dimensional data. Tables must never be used for page layout:

```html
<table>
  <caption>Quarterly Engineering Department Financials</caption>
  <colgroup>
    <col class="col-quarter" />
    <col class="col-revenue" />
    <col class="col-expenses" />
  </colgroup>
  <thead>
    <tr>
      <th scope="col">Quarter</th>
      <th scope="col">Revenue</th>
      <th scope="col">Operating Expenses</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Q1 2026</th>
      <td>$1,250,000</td>
      <td>$820,000</td>
    </tr>
    <tr>
      <th scope="row">Q2 2026</th>
      <td>$1,420,000</td>
      <td>$890,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Total</th>
      <td>$2,670,000</td>
      <td>$1,710,000</td>
    </tr>
  </tfoot>
</table>
```

Accessibility Rules for Tables:
1. **`<caption>`**: Mandatory table title read by screen readers to describe the purpose of the data.
2. **`<th scope="col|row">`**: Explicitly informs assistive technologies whether a header cell labels a column or a row.

---

## ⚡ Modern Interactive Elements

### Native Modal Dialogs (`<dialog>`)

Prior to HTML5, creating accessible modals required hundreds of lines of JavaScript to manage focus trapping, ARIA attributes, and backdrop rendering. HTML5 provides this natively:

```html
<!-- Trigger Button -->
<button type="button" onclick="document.getElementById('profile-modal').showModal()">
  Edit Profile
</button>

<!-- Native Dialog -->
<dialog id="profile-modal" aria-labelledby="modal-title">
  <h2 id="modal-title">Edit User Profile</h2>
  <p>Update your public account information below:</p>

  <!-- Native Form with method="dialog" closes the modal on submit! -->
  <form method="dialog">
    <label for="display-name">Display Name:</label>
    <input type="text" id="display-name" value="Manthan Ankolekar" />

    <menu>
      <button type="button" onclick="document.getElementById('profile-modal').close('cancel')">
        Cancel
      </button>
      <button type="submit" value="save">Save Changes</button>
    </menu>
  </form>
</dialog>
```

Styling the Backdrop with CSS:

```css
dialog {
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Style the native browser backdrop */
dialog::backdrop {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(4px);
}
```

Key Methods:
- `dialog.showModal()`: Opens as a top-layer modal, creates native backdrop, traps keyboard focus inside, and handles <kbd>ESC</kbd> to close.
- `dialog.show()`: Opens as a non-modal popup without backdrop or focus trapping.
- `dialog.close(returnValue)`: Closes the dialog.

### Zero-JS Collapsible Disclosure (`<details>` & `<summary>`)

Create accessible accordions and collapsible FAQs with zero JavaScript:

```html
<details>
  <summary>What is the return policy?</summary>
  <p>You can return any undamaged product within 30 days of purchase for a full refund.</p>
</details>

<!-- Multiple items with exclusive open state (name attribute in modern HTML) -->
<details name="faq">
  <summary>How do I reset my password?</summary>
  <p>Navigate to Settings -> Security -> Reset Password.</p>
</details>
<details name="faq">
  <summary>Where can I download invoices?</summary>
  <p>Invoices are located in your Billing dashboard.</p>
</details>
```

### The HTML Popover API

The Popover API provides native declarative tooltips, menus, and dropdowns without JavaScript:

```html
<!-- Trigger Button referencing popover ID -->
<button popovertarget="my-popover">Toggle Notification Menu</button>

<!-- Popover Element -->
<div id="my-popover" popover>
  <h3>Notifications</h3>
  <p>You have 3 unread messages.</p>
</div>
```

---

## 🧩 Web Components & Templating

Web Components are a suite of native browser features enabling reusable, encapsulated custom elements:

### 1. Client-Side `<template>` & `<slot>`

Content inside `<template>` is parsed by the browser but **not rendered or executed** until cloned with JavaScript:

```html
<template id="user-card-template">
  <style>
    .card {
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 1rem;
      background: white;
    }
    .name { font-weight: bold; color: #0f172a; }
  </style>
  <div class="card">
    <p class="name"><slot name="username">Default User</slot></p>
    <p class="role"><slot name="userrole">Guest</slot></p>
  </div>
</template>
```

### 2. Custom Elements & Shadow DOM

```javascript
class UserCard extends HTMLElement {
  constructor() {
    super();
    // Attach encapsulated Shadow DOM
    const shadow = this.attachShadow({ mode: 'open' });
    const template = document.getElementById('user-card-template').content;
    shadow.appendChild(template.cloneNode(true));
  }
}

// Register custom HTML tag
customElements.define('user-card', UserCard);
```

Using the Custom Element in HTML:

```html
<user-card>
  <span slot="username">Manthan Ankolekar</span>
  <span slot="userrole">Principal Engineer</span>
</user-card>
```


## ♿ Accessibility (a11y) & WAI-ARIA Mastery

Web accessibility ensures that websites, tools, and technologies are designed so that people with disabilities (visual, auditory, motor, cognitive) can use them.

### WCAG 2.2 Standards & The POUR Principles

1. **Perceivable**: Information and user interface components must be presentable to users in ways they can perceive (e.g. text alternatives for non-text content, transcripts for audio).
2. **Operable**: Interface components and navigation must be operable via keyboard without requiring a mouse.
3. **Understandable**: Information and operation of the user interface must be clear, readable, and predictable.
4. **Robust**: Content must be robust enough to be reliably interpreted by a wide variety of user agents, including assistive technologies.

### The First Rule of ARIA

> **"If you can use a native HTML5 element or attribute with the semantics and behavior you require, then do so rather than repurposing an element and adding ARIA."**

```html
<!-- ❌ BAD: Div pretending to be a button with ARIA hack -->
<div role="button" tabindex="0" onclick="submit()" onkeydown="handleKey()">Submit</div>

<!-- ✅ GOOD: Native semantic button with built-in accessibility and keyboard focus! -->
<button type="button" onclick="submit()">Submit</button>
```

### Essential ARIA Attributes

| ARIA Attribute | Purpose | Practical Example |
| :--- | :--- | :--- |
| `aria-label` | Provides an invisible accessible text label | `<button aria-label="Close dialog">&times;</button>` |
| `aria-labelledby` | References the ID of another element that acts as its label | `<section aria-labelledby="sec-head">` |
| `aria-describedby` | References supplementary descriptive or helper text | `<input aria-describedby="pass-rules">` |
| `aria-expanded` | Tells screen readers if a collapsible menu/accordion is open | `<button aria-expanded="true">Menu</button>` |
| `aria-hidden` | Hides decorative elements or icons from screen readers | `<svg aria-hidden="true">...</svg>` |
| `aria-live` | Announces dynamic content updates to screen readers (`polite` vs `assertive`) | `<div aria-live="polite" id="cart-counter">3 items</div>` |

---

## 🔒 Security & Performance Optimization

### Content Security Policy (CSP)

CSP restricts the domains from which scripts, styles, images, and fonts can load, preventing Cross-Site Scripting (XSS) attacks:

```html
<meta
  http-equiv="Content-Security-Policy"
  content="
    default-src 'self';
    script-src 'self' 'nonce-rAnd0m123' https://trustedscripts.com;
    style-src 'self' https://fonts.googleapis.com;
    font-src 'self' https://fonts.gstatic.com;
    img-src 'self' data: https://images.unsplash.com;
    frame-ancestors 'none';
  "
/>
```

### Subresource Integrity (SRI)

When loading third-party scripts or styles from public CDNs, **Subresource Integrity** guarantees that the file has not been maliciously tampered with or modified:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>
```

### Script Loading Mechanics: `defer` vs `async` vs `type="module"`

How `<script>` tags load affects browser parsing and rendering performance:

```
HTML Parsing:    ==============================>
<script>:        =======[Fetch & Exec]========> (Blocks HTML parsing!)
<script defer>:  ============[Fetch]===========> (Executes after DOM is ready, in order!)
<script async>:  ======[Fetch]===             > (Executes immediately when fetched, out of order!)
<script type="module">: Automatically deferred!
```

```html
<!-- 1. Default (Render-Blocking): Halts DOM parsing while downloading and running -->
<script src="script.js"></script>

<!-- 2. Defer: Downloads asynchronously without blocking; executes in order AFTER DOM is built (Best for dependencies) -->
<script src="bundle.js" defer></script>

<!-- 3. Async: Downloads asynchronously; executes immediately when ready, pauses HTML parsing (Best for analytics) -->
<script src="analytics.js" async></script>

<!-- 4. Module: ES Module; automatically deferred, scoped strictly, supports import/export -->
<script type="module" src="main.js"></script>
```

### Resource Hints & Preloading

Instruct the browser to establish early connections or prioritize critical assets:

```html
<!-- 1. Preconnect: Warm up DNS, TCP, and TLS handshake to external origin -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- 2. DNS-Prefetch: Resolve domain IP ahead of time -->
<link rel="dns-prefetch" href="https://api.example.com" />

<!-- 3. Preload: High-priority download for critical asset needed in current page (hero image, critical font) -->
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="/images/hero.webp" as="image" />

<!-- 4. Prefetch: Low-priority background download for assets likely needed on NEXT navigation -->
<link rel="prefetch" href="/checkout.js" />
```


## 🎯 HTML5 Interview Questions & Answers

### Beginner Questions

#### 1. What does `<!DOCTYPE html>` do?
It is an instruction to the web browser that the document is written in HTML5. It triggers modern **standards mode** across all browsers and prevents the browser from dropping into **quirks mode** (which emulates legacy bugs from the 1990s).

#### 2. What is the difference between an element and a tag?
A **tag** is the syntax used to mark the beginning or end of an element (e.g. `<p>` or `</p>`). An **element** consists of the start tag, its attributes, the content inside, and the closing tag (e.g. `<p class="lead">Hello World</p>`).

#### 3. Why is the `alt` attribute mandatory on `<img>` elements?
The `alt` attribute provides alternative text for users who cannot view images, including screen reader users who rely on the description to understand content, and users on poor network connections where images fail to load. For purely decorative images, `alt=""` must still be provided so assistive devices skip them.

#### 4. What is the difference between `<b>` and `<strong>`?
- `<b>` styles text in bold for stylistic distinction without imparting any additional importance or urgency.
- `<strong>` indicates strong importance, seriousness, or urgency, which screen readers announce with emphasized vocal inflection.

#### 5. What is the difference between `<i>` and `<em>`?
- `<i>` formats text in italics for alternate voice or mood (technical terms, foreign phrases, thoughts).
- `<em>` indicates stressed emphasis, which alters the grammatical meaning of the sentence when spoken aloud.

#### 6. What are void (self-closing) elements in HTML5?
Elements that cannot contain child nodes or closing tags. Examples include `<img>`, `<input>`, `<br>`, `<hr>`, `<meta>`, and `<link>`. In HTML5, trailing slashes like `<img />` are optional.

#### 7. How do you open a link in a new browser tab safely?
Using `target="_blank"` paired strictly with `rel="noopener noreferrer"`:
```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit Site</a>
```

#### 8. What is the purpose of `<meta name="viewport" content="width=device-width, initial-scale=1.0">`?
It instructs mobile browsers to render the page at the device's actual screen width (1:1 scale) rather than rendering a scaled-down 980px desktop viewport.

#### 9. What are the primary structural semantic tags in HTML5?
`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, and `<footer>`.

#### 10. How do you create an HTML comment?
Using `<!-- This is a comment -->`. Comments are visible in page source inspection but not rendered to the screen.

---

### Intermediate Questions

#### 11. What is the difference between `<section>` and `<article>`?
- `<article>` represents a self-contained, independent piece of composition that can be syndicated or reused standalone (blog post, news story, comment card).
- `<section>` represents a thematic grouping of content, typically with a heading, that forms part of a larger document.

#### 12. Explain the difference between `script`, `script defer`, and `script async`.
- `<script>`: Pauses HTML parsing, fetches the script, executes it immediately, and then resumes HTML parsing.
- `<script defer>`: Fetches the script asynchronously in parallel with HTML parsing. Executes only after the HTML document has finished parsing, in exact document order.
- `<script async>`: Fetches the script asynchronously in parallel, but executes immediately as soon as it downloads, pausing HTML parsing and executing out of order.

#### 13. What is the purpose of the `<picture>` element compared to `<img>` with `srcset`?
- `srcset` with `sizes` provides resolution switching (serving different resolutions of the exact same image depending on screen density).
- `<picture>` enables **art direction** (serving completely different image crops or modern formats like AVIF/WebP based on media queries or browser format support).

#### 14. What are data attributes (`data-*`)?
Custom attributes prefixed with `data-` (e.g. `data-user-id="101"`) that store custom private data on elements without affecting presentation. They are accessible in JavaScript via the `element.dataset` object.

#### 15. How does the native `<dialog>` element work?
`<dialog>` provides a native browser modal. When opened with `dialog.showModal()`, it automatically renders in the browser's top layer with a native `::backdrop`, locks scrolling, and traps keyboard focus inside.

#### 16. What is the difference between `<meter>` and `<progress>`?
- `<progress>` indicates the completion progress of an ongoing task (e.g., download progress: 45%).
- `<meter>` represents a scalar measurement within a known range, or a fractional value (e.g., disk usage: 80GB out of 100GB).

#### 17. How does the `<template>` element work?
Content inside `<template>` is parsed into a DocumentFragment by the browser but **not rendered, evaluated, or loaded** (images don't download, scripts don't run) until instantiated and cloned into the active DOM via JavaScript.

#### 18. What is Subresource Integrity (SRI)?
A security mechanism allowing browsers to verify that resources fetched from third-party CDNs have not been tampered with. It compares a cryptographic hash of the file with the expected `integrity` attribute value.

#### 19. What is the purpose of `autocomplete` attributes on form inputs?
Providing specific autocomplete tokens (e.g. `autocomplete="name"`, `autocomplete="cc-number"`, `autocomplete="current-password"`) helps browser password managers and autofill engines populate forms accurately while preventing identity theft.

#### 20. What is the difference between `localStorage`, `sessionStorage`, and Cookies?
- `localStorage`: Stores 5-10MB of key-value string data with no expiration (persists until manually cleared).
- `sessionStorage`: Stores 5MB of data scoped to the current browser tab (cleared when the tab is closed).
- Cookies: Store up to 4KB of data, can be set with expiration dates, and are automatically sent to the server with every HTTP request.

---

### Senior & Architectural Questions

#### 21. Explain the browser Critical Rendering Path and how HTML authoring impacts it.
The CRP consists of: DOM Construction -> CSSOM Construction -> Render Tree -> Layout -> Paint -> Composite.
HTML impacts it because:
1. Unoptimized `<script>` tags block DOM parsing.
2. Unsized images trigger costly Layout reflows after downloading.
3. Excessive DOM depth (>32 levels or >1,500 nodes) increases layout calculation time exponentially.

#### 22. What are the Web Components standards and how do they function?
Web Components comprise three primary native browser standards:
1. **Custom Elements**: The JavaScript API (`customElements.define`) to define new HTML tags and their lifecycle callbacks (`connectedCallback`, `disconnectedCallback`).
2. **Shadow DOM**: Private, encapsulated DOM subtree isolated from external CSS and JavaScript selectors.
3. **HTML Templates**: The `<template>` and `<slot>` elements for declarative markup templates and content projection.

#### 23. What is the First Rule of ARIA and when should ARIA be applied?
"If you can use a native HTML element with the semantics and behavior you require, do not use ARIA."
ARIA should only be applied to bridge gaps when native HTML semantics do not exist for a specific complex widget (e.g. `role="tablist"`, `role="combobox"`).

#### 24. What are Layout Shifts (CLS) and how do HTML attributes mitigate them?
Cumulative Layout Shift (CLS) measures unexpected visual movement of elements during page load. Always specifying `width` and `height` aspect ratio attributes on `<img>`, `<video>`, and `<iframe>` reserves the exact layout box space before the asset downloads, completely eliminating layout jumps.

#### 25. Explain the security implications of `iframe` embedding and how the `sandbox` attribute mitigates them.
An unhardened `iframe` can execute arbitrary JavaScript, navigate the parent window, read storage, and trigger popups. Adding `sandbox="allow-scripts allow-same-origin"` enforces the principle of least privilege, isolating untrusted third-party code from the host application.

---

## 📑 Comprehensive HTML5 Cheat Sheet

### Common Semantic Tags Reference

```html
<!-- Document & Head -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
</head>

<!-- Structure -->
<header>Header content</header>
<nav>Navigation links</nav>
<main>Main document content</main>
<article>Independent article</article>
<section>Thematic section</section>
<aside>Sidebar or secondary content</aside>
<footer>Footer info</footer>

<!-- Forms -->
<form action="/submit" method="POST">
  <fieldset>
    <legend>Title</legend>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required autocomplete="email">
  </fieldset>
</form>

<!-- Dialog Modal -->
<dialog id="my-dialog">
  <p>Modal content</p>
  <form method="dialog"><button>Close</button></form>
</dialog>
```

---

## 🤝 Community & Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project (`https://github.com/manthanank/learn-html/fork`)
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: add AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please make sure to read the [Contributing Guide](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md).

---

## 👤 Author & Sponsorship

**Manthan Ankolekar**

- GitHub: [@manthanank](https://github.com/manthanank)
- Website: [manthanank.github.io](https://manthanank.github.io)
- LinkedIn: [Manthan Ankolekar](https://www.linkedin.com/in/manthanank/)

<div align="center">

If this curriculum or project helped you master HTML5, please consider supporting my work:

<a href="https://www.buymeacoffee.com/manthanank">
  <img src="public/bmc-button.svg" alt="Buy Me A Coffee" width="200">
</a>

<br/><br/>

⭐ **Star this repository** if you found it valuable!

</div>
