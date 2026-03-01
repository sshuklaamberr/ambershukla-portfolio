<div align="center">

# ⚡ Amber Shukla — Developer Portfolio

**A cinematic, performance-focused personal portfolio built with React, Framer Motion, and Tailwind CSS.**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-ambershukla--portfolio.vercel.app-4f46e5?style=for-the-badge)](https://ambershukla-portfolio.vercel.app)
[![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646cff?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3-06b6d4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)

</div>

---

## 📸 Preview

> A dark, editorial portfolio with cinematic animations, 3D photo tilt, text scramble effects, and a unified design system across all sections.

---

## ✨ Features

- **Text Scramble Effect** — Name reveal with randomised character cycling on load
- **3D Photo Card** — Mouse-tracked perspective tilt with holographic animated border
- **Typed Role Animation** — Cycling typewriter with smooth delete/retype loop
- **Skill Marquee** — Infinite auto-scrolling tech stack ticker
- **Scroll-triggered Reveals** — `useInView` powered staggered fadeUp animations on every section
- **Project Showcase** — Full-width landscape cards with hover scale, accent glow, and per-project color theming
- **HyperNest Agency Showcase** — Expanded services grid with interactive hover states and tech stack breakdown
- **DSA Practice Section** — LeetCode & GeeksforGeeks platform cards with live stats and video icon support
- **Contact Section** — Copy-to-clipboard info rows, social pills, availability badge, email CTA card
- **Footer** — Animated nav underlines, per-platform social accents, back-to-top scroll
- **Unified Design System** — `#050508` background, 60px indigo grid, dual glow blobs (indigo + amber), `Bebas Neue` + `Plus Jakarta Sans` typography across every section

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite 5 | Build tool & dev server |
| Tailwind CSS 3 | Utility-first styling |
| Framer Motion 11 | Animations & gestures |
| Lucide React | Icon library |

### Fonts
| Font | Usage |
|---|---|
| Bebas Neue | Display headings, numbers, section titles |
| Plus Jakarta Sans | Body text, labels, UI elements |

### Deployment
| Service | Role |
|---|---|
| Vercel | Hosting & CI/CD |
| GitHub | Version control |

---

## 📁 Project Structure

```
ambershukla-portfolio/
├── public/
│   ├── projects/
│   │   ├── portfolio.png       # Project screenshots
│   │   └── hypernest.png
│   └── social/
│       ├── leetcode.mp4        # LeetCode icon video
│       └── gfg.jpg             # GFG icon image
├── src/
│   ├── assets/
│   │   └── amber.jpeg          # Hero photo
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── PracticeShowcase.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>=18.0.0`
- npm `>=9.0.0`

### Installation

```bash
# Clone the repository
git clone https://github.com/sshuklaamberr/ambershukla-portfolio.git

# Navigate into the project
cd ambershukla-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
# Create optimised production build
npm run build

# Preview the production build locally
npm run preview
```

---

## 🌿 Branch Strategy

This project uses a **feature branch workflow** to prevent unreviewed code from reaching production via Vercel's automatic deployments.

```
main                  ← production (auto-deploys to Vercel)
└── feature/*         ← all development work happens here
```

```bash
# Start a new feature
git checkout -b feature/your-feature-name

# Push to GitHub (triggers Vercel preview URL)
git push origin feature/your-feature-name

# After reviewing preview — merge to main
git checkout main
git merge feature/your-feature-name
git push origin main
```

---

## 📦 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server on port 5173 |
| `npm run build` | Build optimised production bundle |
| `npm run preview` | Serve production build locally |
| `npm run lint` | Run ESLint across the codebase |

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| Background | `#050508` | All section backgrounds |
| Grid | `rgba(79,70,229,0.04)` at 60px | Subtle indigo grid overlay |
| Indigo blob | `rgba(79,70,229,0.07)` | Left glow blob |
| Amber blob | `rgba(245,158,11,0.06)` | Right glow blob |
| Primary accent | `#4f46e5` | Indigo — buttons, borders, highlights |
| Secondary accent | `#f59e0b` | Amber — eyebrows, labels, markers |
| Display font | `Bebas Neue` | All headings and large numbers |
| Body font | `Plus Jakarta Sans` | All body text and UI labels |

---

## 📄 License

This project is **not open source**. The code and design are proprietary.  
Do not copy, redistribute, or use any part of this project without explicit permission.

---

<div align="center">

**Designed & built by [Amber Shukla](https://ambershukla-portfolio.vercel.app)**

*B.Tech CSE · SRM University · Open to Opportunities*

</div>
