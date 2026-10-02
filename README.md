# Developer Portfolio | Tomalika Paul Toma

A responsive personal developer portfolio built with React and Vite. The site features a cyber-navy glassmorphism design, interactive section highlights, custom modal dialogs, and dynamic scrollspy navigation.

---

## 🌟 Key Features

- **Cyber-Navy & Cyan Glassmorphism**: Translucent midnight-navy backdrops with frosted blur effects (`backdrop-filter`), subtle borders, and neon cyan accents.
- **Scrollspy Navigation & Mobile Menu**: Dynamic sticky header with an interactive monogram logo, active-section pill indicators, a standout "Let's Talk" CTA, and an animated mobile drawer menu.
- **Dynamic Typewriter Hero**: Character-by-character typing animation with a blinking neon cursor built using React hooks (`useState`, `useEffect`).
- **Academic Timeline (Education)**: Structured milestone cards displaying degree tracks, institutions, coursework, and live status badges.
- **Interactive Skills & Project Showcases**: Card grids featuring project tag filters, external repository links, and deep-dive modal dialogs for technical overviews.
- **Contact Hub & Form**: Integrated contact card with direct social profiles (GitHub, LinkedIn), email reach-out, and an inquiry form.
- **Smooth Scroll-to-Top**: Floating action button that activates dynamically when scrolling past the hero viewport.

---

## 🛠️ Tech Stack

- **Frontend**: React (Hooks, Component Architecture)
- **Build Tool**: Vite
- **Styling**: Modern CSS3 (Flexbox, CSS Grid, Media Queries, Glassmorphism)
- **Deployment**: Vercel

---

## 📁 Project Structure

```text
my-portfolio/
├── public/
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── profile.jpg
│   │   └── vite.svg
│   ├── components/
│   │   ├── Contact.jsx / Contact.css
│   │   ├── Education.jsx / Education.css
│   │   ├── Hero.jsx / Hero.css
│   │   ├── Navbar.jsx / Navbar.css
│   │   ├── Projects.jsx / Projects.css
│   │   ├── ScrollToTop.jsx / ScrollToTop.css
│   │   └── Skills.jsx / Skills.css
│   ├── data/
│   │   └── projects.js
│   ├── App.jsx / App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```


🚀 Getting Started Locally
1. Clone the repository
```
git clone [https://github.com/your-username/my-portfolio.git](https://github.com/your-username/my-portfolio.git)
cd my-portfolio
```
2. Install dependencies
```
npm install
```
3. Run the development server
```
npm run dev
```
4. Build for production
```
npm run build
```
