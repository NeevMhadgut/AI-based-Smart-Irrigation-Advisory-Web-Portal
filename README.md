# AI-Based Smart Irrigation Advisory System 🌱

## Project Overview
This project is a comprehensive front-end web portal designed to help farmers and agricultural officers optimize water usage. By simulating an AI-driven dashboard, the portal provides real-time soil moisture status, automated irrigation schedules, localized weather forecasting, and multimedia training resources. 

This repository contains the front-end user interface developed using semantic **HTML5** and modern **CSS3** features, completing a series of web development lab experiments.

## Features & Modules
* **Centralized Farm Dashboard:** Built with CSS Flexbox for a responsive sidebar and main content layout.
* **Interactive Training Resources:** Product-style "Book Cards" utilizing the CSS Box Model and drop shadows.
* **Equipment Store & Price List:** Clean, zebra-striped HTML tables with collapsed borders for readability.
* **Media & Awareness Center:** Embedded HTML5 `<audio>` and `<video>` elements for farmer education.
* **Visual Image Gallery:** A uniform image grid using CSS `object-fit` and `transform: scale()` hover zoom effects.
* **Registration Portal:** A styled HTML web form featuring accessible labels, fieldsets, and focus states.
* **Animated Alerts:** A glowing, CSS keyframe-animated promotional pop-up box with z-index overlays.

## Technologies Used
* **HTML5:** Semantic structuring (header, main, aside, footer, nav, article).
* **CSS3:** Inline, internal, and external stylesheets covering styling, Flexbox layout, Box Model, pseudo-classes (`:hover`, `:focus`, `nth-child`), and `@keyframes` animations.
* **JavaScript:** Basic inline scripting for portal welcome alerts and pop-up dismissal.

## Project Structure
```text
/smart-irrigation-portal
│
├── index.html               # Main homepage
├── dashboard.html           # Flexbox layout dashboard
├── gallery.html             # Image gallery with CSS zoom effects
├── book.html                # Training materials (CSS Box Model cards)
├── irrigation-table.html    # Equipment price list (Styled Tables)
├── registration.html        # User registration form
├── weather.html             # Weather forecasting module
├── media.html               # Audio/Video awareness page
├── special-offer.html       # Animated glowing pop-up offer
│
├── css/                     # (Or keep in root folder)
│   ├── style.css            # Global site theme
│   ├── nav.css              # Navigation and Gallery grid styling
│   ├── table.css            # Table zebra-striping rules
│   ├── form.css             # Form UI styling
│   ├── layout.css           # Flexbox layout rules
│   └── effects.css          # Keyframe animations and pop-up overlays
│
├── images/                  # Contains all .jpg and .png assets
└── media/                   # Contains .mp4 and .mp3 multimedia files
