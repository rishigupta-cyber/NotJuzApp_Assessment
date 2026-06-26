# GreenRoot NGO — Project Planning Document

GreenRoot needs their first website. The brief is clear — warm, approachable, works on phones. Four pages. Here's my plan before writing any code.

---

## 1. Page Map

### index.html
- Navbar with logo and links, hamburger on mobile
- Hero with a headline, one line about the mission, and a CTA button
- About blurb — who GreenRoot is, kept short
- Three impact stats (trees planted, volunteers, communities)
- Three program previews as cards linking to programs.html
- A "get involved" banner near the bottom
- Footer with links and contact info

### programs.html
- Navbar
- Page heading and a short intro
- Program cards in a grid (image, title, description, link)
- A simple "how it works" with three steps
- Footer

### get-involved.html
- Navbar
- Page heading
- Three ways to help — volunteer, donate, share — as cards
- A volunteer sign-up form (name, email, interest, message)
- Footer

### contact.html
- Navbar
- Page heading
- Contact form on one side, address and email on the other
- Footer

---

## 2. Design Tokens

Six colour tokens for the whole site:

| Token | Colour | Hex |
|---|---|---|
| `--color-primary` | Forest green | `#2d6a4f` |
| `--color-primary-dark` | Deeper green for hovers | `#1b4332` |
| `--color-accent` | Warm amber for CTAs | `#f4a261` |
| `--color-bg` | Soft cream background | `#fdf8f0` |
| `--color-text` | Dark charcoal for body text | `#1c1c1c` |
| `--color-muted` | Grey for secondary text | `#6b7280` |

I went with greens because the name is GreenRoot — it's the obvious fit and it actually makes sense for a sustainability org. The amber accent makes buttons pop without feeling aggressive. Cream instead of white keeps it from looking like a corporate site, which the brief specifically said to avoid.

---

## 3. Components

At least six components I'll be building:

| Component | Main elements | What it does |
|---|---|---|
| Navbar | `<header>`, `<nav>`, `<button>` | Site navigation, collapses to hamburger on mobile |
| Hero | `<section>`, `<h1>`, `<a>` | First thing on every page, one clear CTA |
| Program card | `<article>`, `<h2>`, `<p>`, `<a>` | Reusable card, works in a grid, each one is self-contained |
| Stat block | `<section>`, `<dl>`, `<dt>`, `<dd>` | Three numbers with labels, `dl` is the right element for this |
| Form | `<form>`, `<label>`, `<input>`, `<textarea>`, `<button>` | Used on contact and get-involved pages, all inputs properly labelled |
| Footer | `<footer>`, `<nav>` | Closes every page, has its own nav for links |
| Success message | `<div role="status">`, `<p>` | Shows after form submit, JS adds a class, CSS fades it in |

---

## 4. Technical questions

**Mobile nav strategy**

Nav links hide at 375px. A hamburger button appears instead. Clicking it toggles an `.open` class on the link list and flips `aria-expanded` on the button. One event listener in the JS file, no inline handlers. Links stack vertically when open. That's it.

**JavaScript interactions planned**

Three things:
- Hamburger toggle (class + aria-expanded)
- Form success message (prevent default, show confirmation, hide the form)
- Smooth scroll is just `scroll-behavior: smooth` in CSS, no JS needed

**Which page will be hardest**

`get-involved.html`. The top half is a card grid and the bottom half is a form and making those two sections feel like one coherent page rather than two things stuck together is the tricky part. The form also needs the most accessible markup — fieldset, legend, labels, required attributes, and a visible success state. More moving parts than any other page.