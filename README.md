# Frank Adeleye — Developer Site

> **Personal developer site showcasing production-ready web applications, engineering decisions, and full-stack development work.**

Built with **Next.js, TypeScript, React, and Tailwind CSS**.

The site serves as the central hub for my development work, featuring selected projects, technical case studies, and the engineering decisions behind them.

## 🌐 Live Site

[**Visit frank-adeleye →**](https://your-render-url.onrender.com)

---

## ✨ Highlights

- 🧑‍💻 **Project Showcase** — Selected full-stack applications and development work
- 📖 **Technical Case Studies** — Detailed breakdowns of architecture, challenges, and engineering decisions
- ⌨️ **Keyboard Navigation** — Desktop navigation using `←` `→` and `Enter`
- 🌓 **Dark / Light Mode** — Persistent theme preference using `localStorage`
- 📱 **Responsive Design** — Designed to remain usable across screen sizes, including very small displays
- ⚡ **Next.js App Router** — Modern routing and component architecture
- 🔷 **TypeScript** — Type-safe component props and application data
- 🎨 **Tailwind CSS** — Utility-first styling with responsive and dark-mode support

---

## 🛠️ Tech Stack

| Technology       | Purpose                                       |
| :--------------- | :-------------------------------------------- |
| **Next.js**      | React framework and application routing       |
| **React**        | UI development                                |
| **TypeScript**   | Type safety and maintainable application code |
| **Tailwind CSS** | Styling and responsive design                 |
| **ESLint**       | Code quality and consistency                  |
| **Geist**        | Application typography                        |

---

## 🧩 Project Structure

```text
frank-adeleye/
│
├── app/
│   ├── case-study/
│   │   └── everafter/
│   │       └── page.tsx
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── KeyboardNavigation.tsx
│   ├── ProjectCard.tsx
│   └── ThemeToggle.tsx
│
├── data/
│   └── projects.ts
│
├── types/
│   └── project.ts
│
├── public/
│
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## ⌨️ Keyboard Navigation

Desktop users can navigate through the portfolio without relying entirely on the mouse.

|   Key   | Action                               |
| :-----: | :----------------------------------- |
|   `←`   | Move to the previous navigation item |
|   `→`   | Move to the next navigation item     |
| `Enter` | Open the currently selected link     |

Arrow-key navigation automatically avoids interfering with text inputs, textareas, and editable elements.

---

## 🌓 Theme System

The site includes a persistent dark/light theme.

The selected theme is stored locally so the user's preference remains available when they return to the site.

```text
Light Mode
     │
     ▼
ThemeToggle
     │
     ▼
document.documentElement
     │
     ▼
localStorage
     │
     └──► "light" / "dark"
```

Tailwind's custom dark-mode variant is used to apply theme-specific styling throughout the application.

---

## 📚 Featured Case Study

### EverAfter

**EverAfter** is a full-stack memory preservation platform that allows users to capture, organize, and revisit meaningful life experiences.

The case study explores:

- Product and domain modeling
- Collection → Memory relationships
- TypeScript architecture
- Responsive UI decisions
- Frontend/backend separation
- Image storage with Cloudinary
- MongoDB data modeling
- Engineering challenges and tradeoffs
- Future product improvements

> **Domain model**
>
> ```text
> Collection
>      │
>      └──► Memory
>             ├── Title
>             ├── Description
>             ├── Images
>             ├── Location
>             └── Visit Date
> ```

A collection represents a group of related experiences, while a memory represents an individual experience within that collection.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have:

- **Node.js** installed
- **npm** installed
- **Git** installed

### Installation

Clone the repository:

```bash
git clone https://github.com/frankoadeleye/frank-adeleye.git
```

Navigate into the project:

```bash
cd frank-adeleye
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

The application will automatically update as you make changes.

---

## 📜 Available Scripts

| Command         | Description                   |
| :-------------- | :---------------------------- |
| `npm run dev`   | Starts the development server |
| `npm run build` | Creates a production build    |
| `npm start`     | Starts the production server  |
| `npm run lint`  | Runs ESLint                   |

---

## 🏗️ Production Build

To verify the application can be built successfully:

```bash
npm run build
```

To run the production build locally:

```bash
npm start
```

---

## 🌐 Deployment

The application is designed to be deployed as a **Next.js application**.

The production deployment is connected to the GitHub repository so changes can be built and deployed from the main branch.

---

## 📌 Why This Repository Exists

This repository contains the source code for my personal developer site.

Rather than treating the site as a static resume, I use it to demonstrate how I approach real software projects—from architecture and data modeling to responsive interfaces, type safety, and engineering tradeoffs.

The goal is to make the **work itself** the primary representation of my development experience.

---

## 👨‍💻 About

**Frank Adeleye**

Full Stack Developer focused on building production-ready web applications with modern JavaScript and TypeScript technologies.

### Core Technologies

```text
React
TypeScript
Next.js
Node.js
Express
MongoDB
Tailwind CSS
```

---

## 📄 License

This project is a personal portfolio and developer site.

The source code is publicly available for reference, but the content, branding, and personal materials are not intended for reuse as another individual's portfolio.
