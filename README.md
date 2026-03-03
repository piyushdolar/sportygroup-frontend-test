# 🏆 Sports Leagues Explorer

A modern, high-performance Single Page Application (SPA) developed as part of a technical assignment for the **Sporty Group**. This application allows users to discover sports leagues globally with an optimized, real-time filtering and caching system.

## 🚀 Live Demo

**[Insert Your Vercel/Netlify Link Here]**

---

## 🛠 Tech Stack

- **Framework:** [Vue 3](https://vuejs.org/) (Composition API)
- **State Management:** [Pinia](https://pinia.vuejs.org/) (Chosen for centralized logic and easy caching)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (For utility-first, responsive design)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strictly typed API responses and state)
- **Build Tool:** [Vite](https://vitejs.dev/)

---

## ✨ Features

- **Real-time Filtering:** Instant search by league name and category filter by sport type.
- **Intelligent Caching:** Implemented a badge-caching mechanism in Pinia to prevent redundant API calls when re-visiting or re-clicking league items.
- **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop views using Tailwind's grid system.
- **UX Focused:** Includes loading states, empty result handling, and smooth transitions.

---

## 🏗 Architecture & Folder Structure

To ensure scalability and maintainability, the project follows a clean, component-based structure:

- `src/components/`: Modular UI pieces (SearchBar, LeagueCard, LeagueList).
- `src/store/`: Pinia store handling the "Single Source of Truth" for data and filters.
- `src/services/`: API abstraction layer.
- `src/types/`: Centralized TypeScript interfaces for API responses.

---

## 🧠 Design Decisions

- **Caching Strategy:** To meet the requirement of avoiding repeat calls, I implemented a `badgeCache` object within the Pinia store. Before any `fetch` call for a season badge, the app checks if the ID already exists in the cache.
- **Performance Optimization:** I used a `computed` property with a `Set` to generate the unique list of sports for the dropdown. This ensures that even with 900+ items, the filter remains lightning-fast and the dropdown is always updated based on available data.
- **UX/UI:** Used Tailwind CSS to ensure a mobile-first approach. Since the JD mentions "millions of users per day," I prioritized a lightweight layout with minimal external dependencies.

---

## 🤖 AI Usage Disclosure

In alignment with the assignment guidelines, AI tools were used for:

- **Scaffolding:** Rapidly generating Tailwind utility classes for the responsive grid layout.
- **Data Modeling:** Mapping the JSON responses from TheSportsDB API into TypeScript interfaces.
- **Optimization:** Refining the `computed` filtering logic to handle multi-criteria searches.

---

## 📦 Installation & Setup

### Prerequisites

- Node.js (v18.0 or higher)
- npm or yarn

### Steps

1.  **Clone the repository:**

    ```bash
    git clone [your-github-repo-url]
    cd [your-repo-name]
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run in Development mode:**

    ```bash
    npm run dev
    ```

4.  **Build for Production:**
    ```bash
    npm run build
    ```

---

## 📄 License

This project is licensed under the MIT License.
