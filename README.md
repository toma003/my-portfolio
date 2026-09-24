
```markdown
# Developer Portfolio | Tomalika Paul Toma

A personal developer portfolio built with React and Vite. The application features a dark-themed glassmorphic UI, responsive layouts across devices, custom neon hover states, dynamic typewriter headings, and active scrollspy navigation.

---

## 🌟 Key Features

- **Dynamic Typewriter Hero**: Custom character-by-character typing animation with a blinking neon purple cursor built using native React hooks (`useState`, `useEffect`).
- **Active Scrollspy Navigation**: Synchronized navbar highlighting with animated pills that track viewport coordinates (`scrollY`, `offsetTop`, and bottom boundary detection).
- **Responsive Layout & Grid**: Mobile-first architecture tested across mobile (375px+), tablet/iPad (1032px), and desktop viewports with fluid CSS `clamp()` typography.
- **Glassmorphism Aesthetic**: Dark purple palette featuring frosted-glass backdrops (`backdrop-filter`), ambient neon glow accents, and staggered entrance keyframes.
- **Strict Affordance & Accessibility**: Distinct separation of interactive elements (`cursor: pointer` on buttons/links) and static badges (`cursor: default` on informational cards) to eliminate dead-click confusion.
- **Smooth Scroll-to-Top**: Floating action button that activates dynamically past scroll thresholds with animated transitions.

---

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 / 19
- **Build Tool**: Vite
- **Styling**: Modern CSS3 (CSS Grid, Flexbox, Custom Keyframes, Glassmorphism)
- **Deployment**: GitHub Pages / Vercel

---

## 📁 Project Structure

```text
my-portfolio/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Contact.jsx / Contact.css
│   │   ├── Footer.jsx / Footer.css
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

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v18 or higher recommended)
* npm or yarn

### Installation & Local Setup

1. **Clone the repository**:
```bash
git clone [https://github.com/your-username/my-portfolio.git](https://github.com/your-username/my-portfolio.git)
cd my-portfolio

```


2. **Install dependencies**:
```bash
npm install

```


3. **Start the local development server**:
```bash
npm run dev

```


4. **Run on local network (for mobile/tablet testing)**:
```bash
npm run dev -- --host

```


Open the displayed `Network: http://<your-ip>:5173/` address on your mobile device connected to the same Wi-Fi.
5. **Build for production**:
```bash
npm run build

```



---

## 📬 Contact & Connect

* **Developer**: Tomalika Paul Toma
* **Email**: tomapaul150@gmail.com

```

```
