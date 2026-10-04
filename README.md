# Astana Explorer

A responsive multi-page website about **Astana, the capital of Kazakhstan** — a travel guide with
city landmarks, day trips, tour prices and a booking form. The project was built for the
**Web Technologies 1** midterm assignment (Astana IT University).

## Topic

Travel and tourism: a small guide service that helps guests and exchange students explore the
youngest capital of Central Asia. The colours are inspired by the flag of Kazakhstan
(blue and gold).

## Pages

| Page | File | Content |
| --- | --- | --- |
| Home | `index.html` | Hero banner, numbers, benefits, featured destinations, planning section, reviews, call to action |
| About | `about.html` | Team story, project timeline, values, facts about the city, team members |
| Destinations | `destinations.html` | Photo gallery (CSS grid), two day trips, practical tips |
| Tours & Prices | `tours.html` | Comparison table of four tour packages, what is included, FAQ |
| Blog | `blog.html` | Six travel articles as cards |
| Contact | `contact.html` | Booking form, contact information, office hours table |

All pages share the same fixed navigation bar and footer.

## Features implemented

**HTML**

- Semantic tags: `header`, `nav`, `main`, `section`, `figure` / `figcaption`, `footer`
- Headings, paragraphs, ordered and unordered lists, links and images on every page
- Two tables: tour packages (tours page) and office hours (contact page)
- One form with text fields, email, phone, select, date, number, radio buttons, textarea and checkboxes
- `div` and `span` used for grouping and inline text

**CSS**

- Selectors by element, class and id, with hover states and consistent colours
  (`#0d3b66`, `#1b7fbd`, `#f4b223`)
- Flexbox for the header menu, the statistics row and the two-column sections
- CSS Grid for the photo gallery on the destinations page
- Positioning: `position: fixed` for the header and `position: absolute` for the badges on the cards
- Two media queries: tablet (`max-width: 992px`) and mobile (`max-width: 576px`)

**Bootstrap**

- Grid system (`container`, `row`, `col-*`) in all sections
- Components: navbar with collapse, buttons, table, forms
- Utility classes: `text-center`, `mb-5`, `g-4`, `table-responsive`, `text-muted` and others

## Project structure

```
AITU-WT1-Assignment3/
├── index.html
├── about.html
├── destinations.html
├── tours.html
├── blog.html
├── contact.html
├── css/
│   └── style.css
├── images/            # 14 photos from Wikimedia Commons
└── README.md
```

## How to run

Open `index.html` in a browser — no build step or server is needed. Bootstrap and the Google
font are loaded from CDNs, so an internet connection is recommended.

## Live demo

Published with GitHub Pages: <https://cce-li.github.io/AITU-WT1-Assignment3/>

## Deployment (GitHub Pages)

1. Push the project folder to a GitHub repository.
2. Open **Settings → Pages**.
3. Choose **Deploy from a branch**, select `main` and the root folder `/`.
4. Save and wait one or two minutes until the site is published.

## Image credits

All photos are taken from [Wikimedia Commons](https://commons.wikimedia.org) and keep their
original licences:

| File | Original | Author | Licence |
| --- | --- | --- | --- |
| `hero-astana.jpg` | Astana Esil view | Dauren Nabijan | CC0 |
| `bayterek.jpg` | Baiterek | אמר מר | CC BY-SA 4.0 |
| `khan-shatyr.jpg` | Khan-Shatyr shopping mall | Dauren Nabijan | CC0 |
| `nur-astana-mosque.jpg` | Astana-2021-10 - 41 | Vyacheslav Bukharov | CC BY-SA 4.0 |
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

Student project — Astana IT University, Web Technologies 1, midterm assignment.
