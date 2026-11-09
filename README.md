# Hannah Yawt — Cybersecurity Portfolio

A responsive, Matrix-inspired portfolio built with HTML, CSS, and JavaScript. It introduces my IT and cybersecurity interests, showcases projects, and provides a contact form.

## Pages

- **Home** (`index.html`): introduction and areas of focus.
- **Projects** (`projects.html`): selected web, cybersecurity, and learning projects.
- **About** (`about.html`): background and interests.
- **Contact** (`contact.html`): accessible contact form and email details.

## Visual design

All pages share the same dark terminal background, green accent palette, typography, borders, and card styling through `style.css`.

- **Proximity:** related content is grouped with spacing and shared containers—for example, each project’s description and technology tags stay together, and contact labels, hints, and inputs are grouped as form fields.
- **Similarity:** repeated panel/card shapes, green accents, and consistent typography show that project cards and page sections belong to the same site.
- **Continuity:** the shared header navigation and footer provide a consistent path through every page.

## Accessible contact form

The contact form includes explicit labels, a fieldset and legend, native input types, required-field and length checks, visible inline error messages, `aria-invalid`/`aria-describedby` associations, and a live status message. It validates in the browser and then opens a prefilled email in the visitor’s email app; the site does not store or send form data on a server.

## Run locally

Open `index.html` in a browser, or serve this folder with any static web server. No build step or dependencies are required.
