# Astana Explorer

A responsive multi-page website about **Astana, the capital of Kazakhstan** — a travel guide with
city landmarks, day trips, tour prices and a booking form. The project was built as the Midterm
Project for the **Web Technologies 1** course (Astana IT University).

## Topic

Travel and tourism: a small guide service that helps guests and exchange students explore the
youngest capital of Central Asia. The design follows the colours of the national flag (sky blue
and gold) and uses the "city of the future" theme in the photos and copywriting.

## Pages

| Page | File | Contents |
| --- | --- | --- |
| Home | `index.html` | Hero banner, quick travel facts, service benefits, featured destinations, planning section, testimonial carousel, CTA |
| About | `about.html` | Team story, photo timeline, values, "Astana in numbers" table, team cards |
| Destinations | `destinations.html` | Filterable photo gallery (Grid), day trips to Burabay and Korgalzhyn, practical tips |
| Tours & Prices | `tours.html` | Comparison table of 4 tour packages, schedule table of upcoming group tours, FAQ accordion |
| Travel Blog | `blog.html` | Article cards, sticky sidebar (categories, popular posts, tags), pagination |
| Contact & Booking | `contact.html` | Booking/contact form with validation, contact cards, office hours table, embedded map |

All pages share the same fixed navigation bar and footer.

## Features implemented

**HTML (semantic structure)**

- Semantic tags: `header`, `nav`, `main`, `section`, `article`, `aside`, `figure`/`figcaption`, `footer`
- Headings, paragraphs, ordered/unordered lists, links and images on every page
- Tables: tour comparison table, group tour schedule, city facts, office hours
- Forms: booking form (contact page) and newsletter form (footer of every page)
- `div` and `span` used for grouping and for inline styling (badges, highlighted words, avatar initials)

**CSS**

- CSS custom properties (colours, fonts, radii, shadows) for a consistent theme
- Element, class, ID and pseudo-class selectors; hover/focus states
- Flexbox: navigation bar, feature cards, hero actions, timeline, footer columns
- CSS Grid: statistics strip, gallery grid, card rows
- Positioning: `fixed` header and "back to top" button, `absolute` badges/dates/overlay inside
  `relative` containers, `sticky` blog sidebar
- Responsive media queries for tablet (≤ 991.98 px), small tablet (≤ 767.98 px) and
  mobile (≤ 575.98 px)

**Bootstrap 5**

- Grid system (`container`, `row`, `col-*`) on every section
- Components: navbar with collapse, carousel, accordion, breadcrumbs, pagination, alerts, badges
- Utility classes: spacing (`mt-*`, `py-*`, `gap-*`), `text-center`, `d-flex`, `table-responsive`, buttons

**JavaScript (progressive enhancement)**

- Sticky header state and back-to-top button
- Booking form validation with Bootstrap validation classes and a success message
- Newsletter form e-mail check
- Gallery filter by category
- Scroll-reveal animations, automatic current year in the footer

## Project structure

```
AITU-WT1-Assignment3/
├── index.html          # Home page
├── about.html          # About the project and the team
├── destinations.html   # Gallery and day trips
├── tours.html          # Packages, prices and schedule
├── blog.html           # Blog articles and sidebar
├── contact.html        # Booking form and contacts
├── css/
│   └── style.css       # Custom stylesheet (theme, layout, media queries)
├── js/
│   └── main.js         # Interactions and form validation
├── images/             # 14 photos (Wikimedia Commons) + SVG favicon
└── README.md
```

## How to run

1. Download or clone the repository.
2. Open `index.html` in any browser — no build step or server is required.
3. Optional: start a local server for a cleaner preview:

   ```bash
   python -m http.server 8000
   ```

   then open <http://localhost:8000>.

Bootstrap, Bootstrap Icons and Google Fonts are loaded from CDNs, so an internet connection is
recommended for the exact styling (photos and layout work offline as well).

## Live demo

Published with GitHub Pages: `https://<username>.github.io/AITU-WT1-Assignment3/`

## Deployment (GitHub Pages)

1. Create a new repository on GitHub and push this project folder to the `main` branch.
2. On GitHub open **Settings → Pages**.
3. Under *Build and deployment* choose **Deploy from a branch**, select `main` and `/ (root)`.
4. Save; the site becomes available at `https://<username>.github.io/<repository>/`.

## Image credits

All photos are downloaded from [Wikimedia Commons](https://commons.wikimedia.org) and keep their
original licences:

| File | Original | Author | Licence |
| --- | --- | --- | --- |
| `hero-astana.jpg` | Astana Esil view | Dauren Nabijan | CC0 |
| `bayterek.jpg` | Baiterek | אמר מר | CC BY-SA 4.0 |
| `khan-shatyr.jpg` | Khan-Shatyr shopping mall | Dauren Nabijan | CC0 |
| `nur-astana-mosque.jpg` | Nur Astana Mosque 02 | Davide Mauro | CC BY-SA 4.0 |
| `palace-peace.jpg` | Palace of Peace and Reconciliation (pyramid) | Nikolamikovic82 | CC0 |
| `national-museum.jpg` | National Museum of the Republic of Kazakhstan 01 | Davide Mauro | CC BY-SA 4.0 |
| `astana-opera.jpg` | The State Opera and Ballet Theatre "Astana Opera" | Nikolamikovic82 | CC0 |
| `ishim-river.jpg` | Astana-Ishim-River-embankment-7797 | Vmenkov | CC BY-SA 3.0 |
| `burabay.jpg` | View at Burabay National Reservation | TEHb K0CM0CA | CC BY-SA 4.0 |
| `korgalzhyn.jpg` | Korgalzhinskiy Nature Reserve | Tomiris | CC BY-SA 3.0 |
| `astana-night.jpg` | Night at Esil District, Astana | Matti Blume | CC BY-SA 4.0 |
| `nur-sultan-street.jpg` | Ak Orda palace panorama | Angenoir | CC BY-SA 4.0 |
| `central-park.jpg` | Fountain in Lovers Park | Bernard Gagnon | CC0 |
| `trip-food.jpg` | Kazakh cuisine Besjbarmak | Girdi | CC BY 2.5 |

## Author

Student project — Astana IT University, Web Technologies 1, Midterm Assignment.
