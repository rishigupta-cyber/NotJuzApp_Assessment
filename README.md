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


# Day 6 Assessment — CSS Audit and Refactor

A full audit and refactor of the Day 5 CSS file for the Spice & Stone restaurant webpage, with five targeted improvements for cleaner code, better maintainability, and improved accessibility.

## What's Included

* Universal box-sizing reset using `*, *::before, *::after`
* All font sizes converted from px to rem units
* Class-only selector strategy — no ID selectors used
* Specificity conflict resolved between `.nav a` and `.hero a`
* `:focus-visible` added to all interactive elements

## CSS Decisions

* Used `box-sizing: border-box` globally so padding and borders are included inside element dimensions, preventing overflow
* Converted every `font-size` pixel value to rem using 16px as the base — `48px` → `3rem`, `32px` → `2rem`, `18px` → `1.125rem`
* Used only class selectors (`.nav`, `.hero`, `.card`, etc.) throughout — class specificity is lower than ID, so styles stay easy to override and reuse
* Scoped `.nav a` and `.hero a` to their parent classes so neither rule bleeds into the other — no `!important` needed
* Added `:focus-visible` to `.nav a`, `.hero a`, `.booking input`, `.booking textarea`, `.booking select`, and `.booking button` for keyboard accessibility without affecting mouse users

## What I Would Improve

* Add a CSS custom properties block at the top for colors like `saddlebrown`, `darkorange`, and `wheat` — right now they are repeated across many rules
* Extract the shared button styles from `.nav a` and `.hero a` into a single reusable `.btn` class
* Add `transition` to focus and hover states so the outline and background changes feel smoother



# Day 7 Assessment — Rebuild the Navbar with Flexbox

A full rebuild of the Day 4 navigation bar using CSS Flexbox, replacing all `inline-block`, `font-size: 0`, and `vertical-align` hacks with a clean flex implementation. The visual result is identical — logo left, links centre, CTA right — but the layout is now handled entirely through `display: flex`.

## What's Included

* `display: flex` on the `nav` container replacing all `inline-block` and `font-size: 0` hacks
* `justify-content: space-between` and `align-items: center` on nav for axis alignment
* `flex-grow`, `flex-shrink`, and `flex-basis` applied to the top-level `ul` for the links area
* `flex-shrink: 0` on `.logo` and `.cta` so they never compress
* `nav > ul` direct child selector so flex rules never bleed into the dropdown
* `display: block` on the dropdown `ul` so items always stack vertically
* CSS comment next to every flex property explaining what it controls in this layout
* Single media query at `600px` for a vertical stacked mobile layout — no JavaScript used

## CSS Decisions

* Used `display: flex` on `nav` so logo, links, and CTA sit in a row naturally — no width hacks or whitespace fixes needed like the old `font-size: 0` trick from Day 4
* Used `justify-content: space-between` on `nav` to push `.logo` to the far left and `.cta` to the far right without hardcoding any widths
* Used `align-items: center` on `nav` to vertically centre all three sections — replaces the old `vertical-align: middle` approach
* Applied `flex-grow: 1`, `flex-shrink: 1`, `flex-basis: 0` on `nav > ul` so the links area takes all remaining space between logo and CTA and starts growing from zero, not from its content size
* Used `justify-content: center` on `nav > ul` to centre the links inside that available space
* Used `flex-shrink: 0` on both `.logo` and `.cta` so they hold their size when the viewport gets narrow
* Used `nav > ul` instead of `nav ul` throughout so flex only targets the top-level links row and the dropdown is completely isolated
* Added `display: block` on `nav > ul > li > ul` so dropdown items always stack vertically regardless of any flex inherited from the parent
* Media query at `600px` switches `flex-direction: column` on both `nav` and `nav > ul` so everything stacks cleanly on mobile with no JavaScript needed

## What I Would Improve

* Add a JavaScript hamburger toggle for mobile so the links are hidden by default and shown on tap — right now they just stack which works but is not ideal for a real mobile nav
* Use `gap` on the flex container instead of padding on individual `li a` elements for cleaner spacing control
* Add CSS custom properties at the top for repeated values like `gold`, `dimgray`, and `darkslategray` so they are easy to update from one place
* Add `transition` to the mobile layout so the direction change feels smooth instead of a hard snap


# Day 8 Assessment — Build a Card Grid with Flexbox

A responsive product card grid built with HTML and CSS Flexbox. Six product cards are displayed in a wrapping grid that adjusts its column count based on viewport width — three columns at 1200px, two at 768px, and one at 375px — using `flex-wrap` and `flex-basis` only, with no media queries or CSS Grid.

## What's Included

- Six product cards each showing an image, product name, short description, price, and an Add to Cart button
- `display: flex` and `flex-wrap: wrap` on the `.grid` container so cards wrap into rows automatically
- `flex: 1 1 280px` on each `.item` so cards grow, shrink, and start from a 280px base width
- `align-items: flex-start` on the grid so rows do not stretch cards to match the tallest in the row
- `align-content: flex-start` on the grid so rows pack toward the top instead of spreading across the container
- `box-shadow` on each card for a polished, lifted appearance
- `object-fit: cover` on images so they crop cleanly without distorting
- A hover state on the Add to Cart button that darkens the background colour

## HTML Decisions

- Used a flat list of `div.item` elements inside `div.grid` — no nested wrappers — because each card only needs one flex child level
- Used `<h3>` for product names since the page already has an `<h1>` heading, keeping the heading hierarchy correct
- Used Unsplash URLs with fixed `w=400&h=250&fit=crop` parameters so every image arrives at the same dimensions before CSS applies `object-fit`
- Kept the price in its own `<p class="price">` rather than inside the description paragraph so it can be styled independently without specificity conflicts

## CSS Decisions

- Used `flex: 1 1 280px` shorthand on `.item` — `flex-grow: 1` lets cards expand to fill row space, `flex-shrink: 1` lets them compress below 280px if needed, and `flex-basis: 280px` sets the starting width from which the browser calculates how many fit per row
- Used `align-items: flex-start` instead of the default `stretch` so shorter cards do not get forced to the height of the tallest card in the same row
- Used `align-content: flex-start` so when cards wrap into multiple rows the rows stay compact at the top rather than spreading to fill the container height
- Used `gap: 20px` on the grid instead of margins on individual cards to control spacing — gap does not add space on the outer edges, avoiding the need for negative margins
- Used `max-width: 1300px` with `margin: 0 auto` on the grid so the layout stays centred and does not stretch too wide on large screens
- Used `object-fit: cover` with a fixed `height: 200px` on `.item img` so all product images are the same height regardless of their original aspect ratio
- Used `display: block` on `.btn` with `margin: 12px` so the button sits on its own line inside the card with even spacing on all sides
- Used `rem` units for all font sizes — `1.1rem` for product names, `0.9rem` for descriptions and the button, `1rem` for prices — so sizes scale with the user's browser font preference

## What I Would Improve

- Add `:focus-visible` to the `.btn` element for keyboard accessibility — right now only the hover state is handled
- Add `transition` to the `.btn` hover so the background colour change feels smooth rather than instant
- Replace the hardcoded colour names `steelblue`, `royalblue`, `tomato`, and `darkslategray` with CSS custom properties at the top of the file so the colour scheme is easy to update from one place
- Add `font-size: rem` to spacing values (padding, margin) as well — right now only font sizes use rem
