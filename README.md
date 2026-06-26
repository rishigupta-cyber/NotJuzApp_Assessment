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


# Day 9 Part A Assessment — Responsive Card Grid with Sticky Header

An updated version of the Day 8 product card grid with full responsiveness added using CSS media queries and a sticky header that stays visible while scrolling. Three breakpoints control the column layout, and each card's internal structure switches from a column to a row on mobile so the image sits beside the text instead of above it.

## What's Included

- Sticky header using `position: sticky` and `top: 0` so it stays at the top of the viewport on all screen sizes
- Three-column layout at 1200px and above using `flex: 1 1 300px` on each card
- Two-column layout between 600px and 1199px using `flex: 1 1 calc(50% - 10px)`
- One-column layout below 600px where each card takes `flex: 1 1 100%`
- Card internal layout switches to `flex-direction: row` on mobile so the image sits on the left and text on the right
- `div.item-body` wrapper added inside each card so the text block behaves as a single flex child on mobile
- `focus-visible` outline on nav links and the Add to Cart button for keyboard accessibility
- No `!important` used anywhere — specificity conflicts resolved through selector structure

## HTML Decisions

- Added `<header class="site-header">` with a logo and three nav links as a real landmark element instead of a plain div
- Wrapped all card text content in `<div class="item-body">` so on mobile the image and the entire text block sit side by side as two flex children rather than the image competing with individual paragraphs
- Kept the same six product cards and Unsplash image URLs from Day 8 — only structure changed, not content

## CSS Decisions

- Used `position: sticky` with `top: 0` and `z-index: 100` on the header so it stays at the top while scrolling without taking the page out of document flow the way `position: fixed` would
- Used `flex: 1 1 300px` on desktop so three cards fit naturally in a 1300px container with two 20px gaps — no hardcoded widths needed
- Used `calc(50% - 10px)` as the flex-basis at tablet width so two cards fill the row exactly accounting for the 20px gap between them
- Used `flex-direction: row` on `.item` at mobile width so the image and text sit side by side — this is the nested flex-direction change the task asks for
- Used `flex-shrink: 0` on the image at mobile width so it holds its 120px width even when the card is narrow and text is long
- Used `margin-top: auto` on `.btn` inside `.item-body` so the button always sits at the bottom of the card regardless of how much text is above it
- Used `.item-body .price` as the selector for the price colour so it is naturally more specific than `.item-body p` — no `!important` needed to override the gray set on paragraphs

## What I Would Improve

- Add `transition` to the button hover so the colour change is smooth instead of instant
- Use CSS custom properties for repeated colour values like `steelblue`, `midnightblue`, and `tomato` so the palette is easy to update from one place
- Add `font-size` and spacing values in `rem` consistently — a few padding values still use `px`
- Consider making the sticky header collapse to just the logo on mobile to save vertical space\


# Day 9 Part B Assessment — Full Page Layout with Flexbox

A complete blog-style page layout built entirely with Flexbox for both the macro structure and the micro components inside it. The page has a fixed-width sidebar on the left, a fluid main content area on the right, and a header and footer that span the full width. No floats, no absolute positioning, and no CSS Grid used anywhere.

## What's Included

- Single outer `.page-wrapper` flex container that holds all four sections — header, content area, and footer — in a vertical column
- `display: flex` on `.content-area` creating the sidebar and main content side by side in a horizontal row
- Sidebar fixed at 280px width with `flex-shrink: 0` so it never compresses
- Sidebar stretches to the full height of the content area automatically through flexbox's default `align-items: stretch`
- Vertical nav inside the sidebar using `flex-direction: column` with consistent `gap` between links
- Article preview cards in the main area laid out in a horizontal row using `flex-direction: row` and `flex-wrap: wrap`
- `focus-visible` outlines on nav links, article read-more links, and the subscribe button for keyboard accessibility
- All colour names used — no hex codes anywhere in the stylesheet

## HTML Decisions

- Used a single `div.page-wrapper` as the one outer container the task requires — all flex contexts are nested inside it
- Used `<aside>` for the sidebar and `<main>` for the main content area as proper semantic HTML landmarks
- Used `<article>` for each preview card since each one is a self-contained piece of content with its own heading and description
- Added a trending section in the sidebar to make it feel like a real page rather than a bare wireframe
- Gave each article card a topic tag so categories are visible at a glance

## CSS Decisions

- Used `display: flex` with `flex-direction: column` on `.page-wrapper` so header, content area, and footer stack vertically as a full-page layout
- Used `flex: 1` on `.content-area` so it expands to fill all vertical space between the header and footer — this is what makes the sidebar stretch full height
- Used `width: 280px` and `flex-shrink: 0` on `.sidebar` instead of `flex-basis` to set a truly fixed sidebar width that never changes regardless of available space
- Used `flex: 1` on `.main-content` so it takes all horizontal space remaining after the sidebar's 280px — no width calculation needed
- Used `display: flex` with `flex-direction: column` and `gap: 12px` on `.sidebar-nav` for consistent spacing between nav links without any margin on individual anchor tags
- Used `flex: 1 1 200px` on `.card` so cards grow to fill the row and wrap naturally if the content area is narrow — the same wrapping approach from Part A applied at the micro level
- Used `flex: 1` on `.card p` so the description paragraph expands to fill available card height and pushes the read-more link to the bottom of every card
- Used `min-height: 100vh` on `.page-wrapper` so the footer always sits at the bottom even when there is not enough content to fill the screen

## What I Would Improve

- Add a media query so the sidebar collapses or hides on smaller screens — right now the layout works on desktop but gets tight below 768px
- Use CSS custom properties for `midnightblue`, `darkslategray`, and `gainsboro` since they repeat many times across the file
- Add a hover state on the trending list items so they feel interactive
- Consider adding a subtle left border highlight on the active sidebar nav link to show the current page


# Day 10 Assessment — The Startup Landing Page

A complete marketing landing page for Orbit Analytics, a B2B SaaS company, built with HTML
and CSS Flexbox throughout. The page covers a sticky nav, hero section, features, social
proof, pricing, and footer, and is responsive across desktop, 768px, and 375px.

# What's Included

Sticky navbar using position: sticky that stays at the top while scrolling
Hero section with a single h1 headline, supporting paragraph, and a "Request a Demo" CTA
Features section with three cards, each with an icon, heading, and description
Testimonials section with three customer quote cards
Pricing section with three tiers in a row, the middle tier highlighted as Recommended
Footer using <address> for company contact details
:focus-visible outlines on every link and button across the page, not just the nav
All colours written as named colours (royalblue, darkslategray, gainsboro, etc.) — no hex codes
Two breakpoints: 768px for tablet and 480px for mobile

# HTML Decisions

Used <header>, <nav>, <section>, <footer>, <address>, and <article> instead of generic divs
so the page structure is meaningful to browsers and assistive technologies
Kept heading order strict — h1 for the hero, h2 once per section, h3 for individual
card titles — so the document outline never skips a level
Used <article> for each testimonial card since each one is a self-contained quote with
its own author, similar to the article reasoning from Day 1 and Day 9 Part B
Wrapped the pricing recommended tier in an extra class (.pricing-card--highlight) rather
than a separate element, since it's still the same type of content, just styled differently

# CSS Decisions

Used display: flex with justify-content: space-between on the navbar so the logo sits at
the left edge and the nav links + CTA sit at the right edge with space distributed evenly
Used display: flex with flex-direction: column and align-items: center on the hero so the
headline, paragraph, and CTA stack and stay centred regardless of screen width
Used display: flex with flex-wrap: wrap and flex: 1 1 280px on the feature cards and
testimonial cards, the same wrapping pattern from Day 8, so cards reflow into fewer
columns as the viewport shrinks
Used flex: 1 1 280px on the three pricing cards so they stay equal width on desktop, then
switched to flex-direction: column at 768px so they stack vertically on tablet and mobile
Used transform: scale(1.03) on the highlighted pricing card on desktop only, removing it
in the 768px media query so it doesn't cause overflow issues on smaller screens
Used display: flex with flex-wrap: wrap and justify-content: space-between on the footer
so the logo, address, and copyright sit in a row on desktop and stack on mobile
Replaced every hex colour with a named colour (royalblue, dimgray, whitesmoke, gainsboro,
lightskyblue, etc.) so the palette reads clearly without needing a colour picker

## What I Would Improve

Add CSS custom properties for royalblue and darkslategray since they repeat across many
sections — same improvement noted back in Day 7 and Day 9 Part B
Add a real mobile nav toggle instead of hiding .nav-links completely below 768px
Add transition on the pricing card hover and button hover states for a smoother feel
Add alt-text-equivalent labels to the feature icons for screen readers, since they're
currently just emoji with no aria-label


# Day 11 Assessment — Build an Accessible Contact Form

A fully accessible multi-field contact form built with HTML, CSS, and a small amount of
JavaScript for the success message. Every field has a visible label, the checkbox is grouped
with fieldset and legend, and the entire form is operable using only the keyboard.

## What's Included

- Full Name, Email, Subject (select with four options), Message (textarea), and a
  newsletter opt-in checkbox
- Every input has a visible <label> connected with for/id — no placeholder-as-label
- Checkbox wrapped in <fieldset> and <legend> so screen readers announce the group
  before the checkbox itself
- aria-required="true" on every required field
- :focus-visible outlines on every input, select, textarea, and the submit button
- Hidden success message div below the form, revealed by toggling an is-visible class
- All visual styling and transitions for the success message handled in CSS — JavaScript
  only adds/removes the class
- Fully keyboard navigable: Tab moves through fields in logical order, Space toggles the
  checkbox, Enter submits the form

## HTML Decisions

- Used aria-required="true" instead of the native required attribute, since native
  required blocks form submission on empty fields and would prevent the custom JS
  success-message logic from running during testing
- Removed the empty placeholder option from the Subject select so a real option is
  always selected by default, avoiding a non-choice being submitted
- Used role="status" on the success message div so screen readers announce it
  automatically when it becomes visible, without needing a separate aria-live attribute
- Added a third file, form.js, alongside form.html and form.css — the brief's success
  message requirement needs JavaScript, so HTML and CSS alone can't fully satisfy it

## CSS Decisions

- Used box-sizing: border-box globally, same reset applied since Day 6
- Used rem units throughout for font sizes and spacing, base 16px, consistent with
  Day 6 and Day 8 onward
- Used a warm linen and sienna colour palette with named colours only, continuing the
  no-hex-code approach from Day 9 Part B and Day 10
- Used :focus-visible with outline and outline-offset on every interactive element so
  keyboard focus is visible without affecting mouse users — same pattern as Day 6
- Used accent-color on the checkbox so its checked state matches the sienna theme
  without needing custom checkbox styling
- Success message starts at opacity: 0 and max-height: 0, then transitions to visible
  when JS adds is-visible — keeps all animation logic out of JavaScript

## What I Would Improve

- Add inline validation messages next to each field instead of relying only on
  aria-required and browser defaults
- Add a transition on the input border colour for focus and hover states, similar to
  the button transitions noted back in Day 8 and Day 9 Part A
- Use CSS custom properties for the sienna and linen palette since they repeat across
  many rules — same improvement noted in Day 7, Day 9, and Day 10
- Make the success message dismissible with a close button for better usability


# Day 12 Assessment — Build a Design Token System

A refactor of the Day 9 products page CSS to use a design token system built entirely
on CSS custom properties. Every hardcoded colour name, font size, and spacing value was
replaced with a token defined in a single :root block. A separate tokens.html was built
to display each token visually with its name, value, and purpose.

## What's Included

- Six colour tokens in :root — primary, accent, text, muted, background, and surface
- Five font size tokens from font-size-sm at 0.85rem up to font-size-xl at 1.8rem
- Five spacing tokens from space-xs at 5px up to space-xl at 40px
- Every hardcoded value replaced with var() so a single token change cascades through the entire page
- tokens.html showing each token as a visual swatch or bar with its name, value, and purpose
- Card titles corrected from h3 to h2 to fix the heading hierarchy error flagged in the Day 9 review
- Class names updated to card-grid, product-card, card-content, and add-btn to make the structure clearly distinct

## HTML Decisions

- Fixed the heading hierarchy by changing card titles from h3 to h2 since the page already
  has an h1 — h3 directly under h1 skips a level which causes a W3C warning
- Updated class names across the page so they describe what the element is rather than
  what it looks like — product-card is clearer than item, add-btn is clearer than btn
- Added HTML comments at key structural points to explain the grid layout and card structure

## CSS Decisions

- Defined all tokens in :root so they are globally available and changing one value
  cascades through every rule that references it via var()
- Named tokens semantically — --color-primary instead of --color-steelblue — so the
  token describes its role not its appearance, making it easier to retheme later
- Used --color-surface for card backgrounds and --color-background for the page so the
  two levels of white are clearly separated in purpose
- Kept the spacing scale consistent with the visual weight of the page — space-xs for
  tight internal gaps, space-xl for outer horizontal padding
- The specificity fix from Day 9 is preserved — .card-content .price is more specific
  than .card-content p so the tomato colour overrides gray without !important

## What I Would Improve

- Add transition on button hover using a token so the timing is also part of the system
- Add a --color-price token for the tomato price colour since it is currently the only
  hardcoded colour value remaining in the file
- Extend the token system to cover border-radius and box-shadow values which are still
  hardcoded at 8px and 2px 2px 10px respectively
- Add a dark mode block using prefers-color-scheme that swaps the surface and background
  tokens so the whole page themes automatically without touching any other rule


# Day 13 Assessment — Add JavaScript Interactivity to a Static Page

A full JavaScript interactivity pass added to the Day 5/6 Spice & Stone restaurant page. All four required options were implemented — character counter, back-to-top button, password toggle, and a tab switcher — plus both stretch goals: a dark/light mode toggle persisted with `localStorage`, and a scroll-based nav highlight using `IntersectionObserver`.

## What's Included

- Character counter on the special request textarea that updates live and turns red past 300 characters
- Back-to-top button that fades in after 200px of scroll and smooth-scrolls to the top on click
- Password show/hide toggle on the PIN field that swaps the input `type` and updates the button label and `aria-label` together
- Tab switcher with three panels (Starters, Mains, Desserts) using `role="tab"`, `aria-selected`, and the `hidden` attribute to manage visibility
- Dark/light mode toggle that adds/removes `.dark-mode` on `document.body` and remembers the choice across reloads via `localStorage`
- Nav links that highlight automatically as their matching section scrolls into view, using `IntersectionObserver` with a 0.4 threshold
- Six interactions total, all wired through `querySelector`/`querySelectorAll` and `addEventListener` — zero inline `onclick` attributes anywhere
- A single external `app.js`, with each feature wrapped in its own IIFE and guarded with an early `return` if its elements aren't on the page

## HTML Decisions

- Added `data-section` attributes to each nav link so the `IntersectionObserver` script can match a visible section back to its corresponding link without hardcoding IDs in JS
- Used `type="button"` on the password toggle and tab buttons so they never accidentally submit the booking form or trigger native form behaviour
- Paired the textarea with a `<span id="char-count">` directly below it rather than a `placeholder`, since the counter needs to stay visible while typing
- Used `aria-selected` and `aria-controls` on the tab buttons and `role="tabpanel"` on the panels so the tab pattern is announced correctly, with JS only toggling the `hidden` attribute and the matching ARIA state together
- Placed `#back-to-top` as a standalone fixed button outside the normal page flow, hidden by CSS by default rather than JS, so there's no flash of an unstyled visible button before JS runs

## CSS Decisions

- Kept all animation logic in CSS — `#back-to-top` and `.char-count` use `transition` and a toggled class (`.visible`, `.over-limit`) so JS only ever adds/removes a class, never touches inline styles
- Scoped every dark mode override under `body.dark-mode` as descendant selectors (`.nav`, `.hero`, `.card`, etc.) so light mode styling stays untouched and there's a single switch point
- Used `transition: background-color 0.3s ease, color 0.3s ease` on `body` so the dark mode switch fades smoothly instead of snapping
- Styled `.tab-btn.active` and `.nav-link.nav-active` as plain classes so the JS only ever needs to add or remove one class name per interaction, keeping style decisions out of the script
- Continued the `rem`-based sizing and `:focus-visible` outlines from Day 6 onward across every new interactive element — tabs, theme toggle, password toggle, and back-to-top button

## JavaScript Decisions

- Wrote each of the six features as its own self-contained IIFE so one missing element (e.g. no `#back-to-top` on a page) can't break the others — each function guards itself with `if (!el) return`
- Used the `input` event rather than `change` on the textarea for the character counter, since `change` only fires on blur and wouldn't update the count live as the user types
- Applied the saved theme preference from `localStorage` immediately on load, before attaching the click listener, so returning visitors don't see a flash of the wrong theme
- Used a `scroll` listener checking `window.scrollY > 200` for the back-to-top button, and `window.scrollTo({ top: 0, behavior: 'smooth' })` for the click action
- Toggled the password field's `type` between `password` and `text` and updated the button's text and `aria-label` in the same handler, so the visual state and the accessible name never drift out of sync
- Used `IntersectionObserver` with `{ threshold: 0.4 }` instead of a scroll-position calculation, since it's the purpose-built API for "is this section currently visible" and avoids manual scroll-math

## What I Would Improve

- Throttle or debounce the scroll listener behind the back-to-top button — right now it runs on every scroll event with no rate limiting
- Add left/right arrow key support between tabs to follow the full ARIA tabs keyboard pattern, rather than relying on Tab key order alone
- Check `prefers-color-scheme` as the initial default before falling back to `localStorage`, so first-time visitors with a system dark mode get a sensible starting theme
- Move the hardcoded dark mode hex colours into CSS custom properties, continuing the token system from Day 12, instead of introducing a second hardcoded palette alongside the named-colour one
