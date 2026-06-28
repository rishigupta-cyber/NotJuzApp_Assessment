# GreenRoot NGO Website

A four-page website for GreenRoot, a community sustainability NGO.
Built with plain HTML, one shared `styles.css`, and one shared `app.js`
— no frameworks, no build step.

## Pages

- `index.html` — Homepage with hero, about section, impact stats, 
  program previews, and a CTA banner
- `programs.html` — Full program listings and a three-step how-it-works section
- `get-involved.html` — Three ways to help, a volunteer sign-up form, 
  and an FAQ accordion
- `contact.html` — Contact form alongside address and office hours

## Colour Palette

The site uses six tokens defined once in `:root` and referenced 
everywhere with `var()`: `--color-primary` (seagreen), 
`--color-primary-dark` (darkgreen), `--color-accent` (sandybrown), 
`--color-accent-dark` (chocolate), `--color-bg` (oldlace), and 
`--color-muted` (dimgray), plus supporting surface and border tokens.

CSS colour keywords are used instead of hex codes so the palette reads 
as plain English in the stylesheet. Green was the natural starting point 
given the name and mission. The cream background and warm amber accent 
keep the site away from the colder, corporate feel the brief specifically 
warned against — "warm and approachable" was the ask, and pure white with 
a blue accent would have worked against that on every page.

## Most Interesting Component

The FAQ accordion on `get-involved.html`. Instead of writing a custom JS 
toggle with ARIA attributes to fake an accordion, I used native `<details>` 
and `<summary>` elements. The browser handles focus, keyboard toggling 
(Enter and Space), and the open/closed state for free. It degrades 
gracefully if JavaScript fails to load, and it is more reliably accessible 
than a hand-rolled version with less code.

## One Feature I Would Add Next

A filter on the programs page letting a visitor narrow the four program 
cards by time commitment (one-off vs. ongoing) or by age suitability. 
The flat grid works for four cards but would not scale well if GreenRoot 
added more programs over time.

## Git Commit Strategy

Each commit covers one logical layer of the build — HTML structure first, 
then the shared stylesheet, then JavaScript behaviour, then the README and 
documentation. Commit messages describe what changed and why rather than 
something generic like "update files," so the history reads as a build log 
rather than a list of saves.

## Files

```
index.html
programs.html
get-involved.html
contact.html
styles.css
app.js
README.md
```
