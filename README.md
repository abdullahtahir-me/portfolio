# Abdullah's Developer Portfolio 🚀

A minimalist, terminal-inspired personal portfolio built to showcase full-stack web applications and physics-based games. Designed with a focus on clean architecture, maintainability, and zero-magic logic.

## 🛠 Tech Stack

* **Frontend Framework:** React 18
* **Build Tool:** Vite (for instant HMR and optimized builds)
* **Styling:** Tailwind CSS v4 (Zero-config, CSS-only integration)
* **Icons:** Lucide React & Custom SVGs
* **Typography:** JetBrains Mono & Fira Code

## ✨ Features

* **Terminal Aesthetic:** Custom typewriter effects, blinking cursors, and CLI-style data presentation.
* **Modular Architecture:** Strictly separated data layers, reusable UI components, and distinct layout sections.
* **Fully Responsive:** Optimized for both desktop and mobile devices.
* **Performance Focused:** Built with Vite for lightning-fast load times and pure client-side rendering.

## 📂 Project Structure

The codebase is organized bottom-up to separate concerns and ensure maintainability:

```text
src/
├── data/
│   └── portfolioData.js       # Centralized JSON-like data (skills, projects, tags)
├── components/
│   ├── ui/                    # Small, reusable, stateless building blocks
│   │   ├── GithubIcon.jsx     # Custom SVG implementation
│   │   ├── NavLink.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── TagBadge.jsx
│   │   ├── TerminalCursor.jsx
│   │   └── TypewriterText.jsx
│   └── layout/                # Major page sections
│       ├── Navbar.jsx         # Navigation and scroll state
│       ├── Hero.jsx           # Landing section
│       ├── About.jsx          # Terminal-style bio
│       ├── Skills.jsx         # Tech stack grid
│       ├── Projects.jsx       # Featured and standard project cards
│       └── Contact.jsx        # Call to action and links
├── index.css                  # Tailwind v4 import
├── App.jsx                    # Root component (Table of Contents)
└── main.jsx                   # Vite entry point