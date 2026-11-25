# Hannah Yawt — Cybersecurity Portfolio

A responsive, Matrix-inspired portfolio built with HTML, CSS, and JavaScript. It introduces my IT and cybersecurity interests, showcases projects, and provides a contact form.

## Pages

- **Home** (`index.html`): introduction and areas of focus.
- **Projects** (`projects.html`): selected web, cybersecurity, and learning projects.
- **About** (`about.html`): background and interests.
- **Contact** (`contact.html`): accessible contact form and email details.

## Accessibility results

Across all portfolio pages, the reported results are **0 Errors**, **0 Contrast Errors**, and **AIM Score: 10/10**.

## Accessibility fixes

- Added a visible-on-focus skip link to the contact page and retained semantic header, navigation, main, and footer landmarks so keyboard and assistive-technology users can bypass repeated navigation and identify page regions.
- Added accessible names to navigation, labeled sections and asides, and `aria-current="page"` to the active contact link so assistive-technology users can identify site navigation and their current location.
- Added four distinct required contact fields with explicit labels whose `for` values match each input `id`, and grouped them in a fieldset with a descriptive legend so the controls are named and understood as one message.
- Added `novalidate` client-side validation with per-field inline `aria-live="polite"` messages, `aria-describedby` links, and `aria-invalid` state updates so errors are announced beside their fields rather than shown as browser tooltips.
- Styled validation messages with the existing high-contrast Matrix palette so error text remains readable and is not communicated by color alone.
- Added clear form instructions and retained the email fallback because the form opens the visitor's email application instead of transmitting or storing a message on the site.

## Visual design

All pages share the same dark terminal background, green accent palette, typography, borders, and card styling through `style.css`.

- **Proximity:** related content is grouped with spacing and shared containers—for example, each project’s description and technology tags stay together, and contact labels, hints, and inputs are arranged as one field group.
- **Similarity:** repeated panel/card shapes, green accents, and consistent typography show that project cards and page sections belong to the same site.
- **Continuity:** the shared header navigation and footer provide a consistent path through every page.

## WebAIM Contrast Results

The following foreground/background pairs use the exact solid hex colors defined in the CSS palette; ratios are calculated using the WCAG relative-luminance formula.

| Use | Foreground | Background | Contrast ratio | WCAG status |
| --- | --- | --- | ---: | --- |
| Body text | `#EBFFF3` | `#030B08` | 19.08:1 | Pass AAA |
| Headings and green accents | `#9CFFC9` | `#030B08` | 16.64:1 | Pass AAA |
| Primary button label | `#041008` | `#3BFF8F` | 14.67:1 | Pass AAA |
| Form error messages | `#FFB0B0` | `#030B08` | 11.45:1 | Pass AAA |

## Run locally

Open `index.html` in a browser, or serve this folder with any static web server. No build step or dependencies are required.
