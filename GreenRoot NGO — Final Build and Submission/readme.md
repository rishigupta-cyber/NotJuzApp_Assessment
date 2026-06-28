# GreenRoot NGO Website

A four-page site for GreenRoot, a community sustainability NGO: a homepage, a programs page, a get-involved page with a volunteer sign-up, and a contact page. Built with plain HTML, one shared `styles.css`, and one shared `app.js` — no frameworks, no build step.

## Colour palette

The site uses six tokens defined once in `:root` and referenced everywhere with `var()`: `--color-primary` (seagreen), `--color-primary-dark` (darkgreen), `--color-accent` (sandybrown), `--color-accent-dark` (chocolate), `--color-bg` (oldlace), and `--color-muted` (dimgray), plus a couple of supporting surface/border tokens. I used CSS colour keywords instead of hex codes so the palette reads as plain English in the stylesheet. Green was the obvious starting point given the name, and it fits a sustainability org without much explaining. The cream background and warm amber accent were there to avoid the colder, corporate feel the brief specifically warned against — the brief said "warm and approachable," and a pure white background with a blue accent would have fought that on every page.

## Most interesting component

The FAQ accordion on the get-involved page. Instead of writing a custom JS toggle with ARIA attributes to fake an accordion, I used native `<details>` and `<summary>` elements. The browser handles focus, keyboard toggling (Enter/Space), and the open/closed state for free, and it degrades gracefully if JavaScript ever fails to load. It's a smaller amount of code than a hand-rolled version and is more reliably accessible.

## One feature I'd add

A real filter on the programs page, letting a visitor narrow the four program cards by time commitment (one-off vs. ongoing) or by age suitability. Right now it's a flat grid, which works fine for four cards but wouldn't scale if GreenRoot added more programs.

## Git commit strategy

I committed after each meaningful chunk of work rather than in one or two large dumps: structure and content first, then the shared stylesheet, then per-page styling, then the JavaScript, then accessibility passes and copy edits. Each commit message describes what changed and why (e.g. "add fieldset/legend to volunteer form for accessibility") rather than something generic like "update files," so the history itself is a readable build log.