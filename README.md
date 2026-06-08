# NotJuzApp_Assessment


# Day 1 assessment - Build a Semantic HTML Page Skeleton
A multi-section news homepage built with semantic HTML only, no CSS or JavaScript.

## What's included

- Header with site name
- Nav with four links inside a `<ul>`
- Article with a hero heading, intro paragraph, figure with figcaption, `<time>` for publish date, and a blockquote
- Aside with a popular topics list
- Footer with contact details using `<address>`

## HTML decisions

- Used `<article>` for the news content since it is a self-contained, distributable piece
- Used `<section>` inside the article to separate the hero content from the pull quote
- Used `<aside>` for popular topics as it is supplementary to the main article
- Used `<time datetime="2026-06-01">` so the publish date is machine-readable
- Used `<address>` in the footer for contact info, which is its intended semantic purpose
- Used `<blockquote>` for the pull quote rather than a plain paragraph
- Nav links are wrapped in `<ul>` because a list of links is semantically a list


# Day 2 assessment - Map the Browser Journey
Documenting network requests and the full request-response flow using Chrome DevTools on Wikipedia.

## What I documented

- Main HTML file, one CSS file, one JS file, one image file with status code, size and load time
- Full request-response flow from typing the URL to the page appearing on screen

## Flow diagram steps

- DNS lookup converts domain to IP address
- TCP 3-way handshake establishes connection
- TLS handshake encrypts the connection for HTTPS
- Browser sends HTTP GET request and server responds with 200 OK
- Browser parses HTML, builds DOM, then fetches linked CSS, JS and images
- CSSOM built from CSS, combined with DOM into Render Tree
- Layout calculates positions, paint draws pixels and page appears


# Day 3 assessment - Build a Data Table in HTML
A fully semantic HTML data table comparing three high-end smartphones built with HTML only, no CSS, no JavaScript.

## What's included

- Comparison of iPhone 15 Pro, Samsung Galaxy S24, and Google Pixel 8
- Columns for model name, price, battery, camera, and storage
- A summary row in the footer showing the average price
- Caption describing the table content

## HTML decisions

- Used `<caption>` as the first child of `<table>` to describe what the table is about
- Used `scope="col"` on every `<th>` in the header so screen readers know each heading belongs to its column
- Used `<thead>`, `<tbody>`, and `<tfoot>` to give the table proper semantic structure
- Used `colspan="4"` in the `<tfoot>` row to merge the first four cells into a single label for the average price
- Used `border="1"` as an HTML attribute instead of CSS to keep styling out of the file completely


# Day 4 assessment - Create a Navigation Bar
A fixed navigation bar with a hover-triggered dropdown menu, built with HTML and CSS only.

## What's included

- Fixed navbar that stays at the top on scroll
- Hover dropdown under "Services" link
- CTA button on the right side of the navbar
- Responsive layout with breakpoints at 1024px and 768px
- Focus-visible outlines for keyboard accessibility

## CSS decisions

- Used position: fixed for the navbar to keep it on top
- Used position: relative on parent and position: absolute on dropdown for precise placement
- Used inline-block for nav links with font-size: 0 on parent to remove whitespace gaps
- Used box-sizing: border-box reset globally
- Used margin-top: 60px on content to offset the fixed nav height


# Day 5 assessment — The Local Restaurant Website

A complete restaurant homepage for **Spice & Stone** built with HTML and CSS only.

## What's Included

- Hero section with restaurant banner image
- Featured dishes section using inline-block card layout
- About us section with centered image and description
- Opening hours using HTML table
- Book a table section with anchor link from nav
- Footer with address and phone number using `<address>` element

## CSS Decisions

- Used inline-block for dish cards layout
- Used `text-align: center` and `margin: 0 auto` for the about section layout
- Used `border-collapse: collapse` for clean table borders
- Warm color theme using `saddlebrown`, `wheat`, and `antiquewhite`
- Serif font stack (Cambria, Georgia, Times New Roman) for a traditional restaurant feel

## What I Would Improve

- Replace `<div>` with semantic elements like `<nav>`, `<header>`, `<section>`, and `<main>`
- Move the "Book a Table" button inside the hero banner — that is the standard pattern for restaurant websites
- Remove the dead `.hero a` CSS rule — there is no anchor inside the hero section in the HTML
- Convert all `font-size` pixel values to rem units for better accessibility


# Day 6 assessment — CSS Audit and Refactor

## What I Did

This is a full audit and refactor of my Day 5 CSS file for a restaurant webpage. I made five targeted improvements to make the stylesheet cleaner, more maintainable, and more accessible.

---

## Changes Made

### 1. Universal Box-Sizing Reset
Added `*, *::before, *::after { box-sizing: border-box; }` at the very top of the file. This ensures padding and borders are included inside an element's total width and height, preventing unexpected overflow across all sections.

### 2. Converted Font Sizes from px to rem
Replaced every `font-size` pixel value with rem units, using 16px as the base. For example, `48px` became `3rem`, `32px` became `2rem`, and `18px` became `1.125rem`. This makes typography scale correctly with the user's browser font settings.

### 3. Class Selectors Only — No ID Selectors
The stylesheet uses only class selectors throughout (`.nav`, `.hero`, `.card`, etc.). No ID selectors are used. Class selectors have lower specificity than IDs, making styles easier to override and reuse without specificity conflicts.

### 4. Specificity Conflict Resolved
`.nav a` and `.hero a` both style anchor elements but are scoped to their own parent classes. This means neither rule accidentally overrides the other. No `!important` was needed — proper selector scoping was enough to resolve the conflict.

### 5. Added :focus-visible to Interactive Elements
Added `:focus-visible` styles to every interactive element:
- `.nav a` — white outline for nav links
- `.hero a` — white outline for the hero CTA
- `.booking input`, `.booking textarea`, `.booking select` — darkorange outline
- `.booking button` — white outline

This improves keyboard accessibility without affecting mouse users.

---

## Color Palette
| Color | Used For |
|---|---|
| `antiquewhite` | Page background, about section |
| `saddlebrown` | Navbar, hero, booking section, table header |
| `darkorange` | Buttons and CTAs |
| `wheat` | Dishes and hours sections |
| `brown` | Body text, footer background |

---

## Font Stack
```
Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
```
A warm serif stack chosen to match the traditional, classic feel of a restaurant website. Multiple fallbacks ensure consistent rendering across all browsers and operating systems.

---

## Base Font Size Assumption
All rem conversions are based on the browser default of **16px = 1rem**.

---

## Sections Styled
- Navigation bar
- Hero banner
- Dishes / menu cards
- About section
- Opening hours table
- Booking section
- Footer