# NotJuzApp_Assessment


# Build a Semantic HTML Page Skeleton
Day 1 assessment - A multi-section news homepage built with semantic HTML only, no CSS or JavaScript.

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


# Map the Browser Journey
Day 2 task - Documenting network requests and the full request-response flow using Chrome DevTools on Wikipedia.

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


# Build a Data Table in HTML
Day 3 assessment - A fully semantic HTML data table comparing three high-end smartphones built with HTML only, no CSS, no JavaScript.

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


# Create a Navigation Bar
Day 4 assessment - A fixed navigation bar with a hover-triggered dropdown menu, built with HTML and CSS only.

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


# The Local Restaurant Website
Day 5 assessment - A complete restaurant homepage built with HTML and CSS only.

## What's included

- Hero section with restaurant image
- Featured dishes section using inline-block card layout
- About us section
- Opening hours using HTML table
- Book a table section
- Footer with address and phone number

## CSS decisions

- Used inline-block for dish cards layout
- Used float for about section image and text
- Used border-collapse for clean table borders
- Warm color theme using saddlebrown, wheat and antiquewhite
