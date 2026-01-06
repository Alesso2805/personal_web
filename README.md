# Alessandro Portfolio Website

A modern, responsive, and bilingual personal portfolio website built with React, featuring advanced animations and smooth scrolling.

![Project Preview](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop)

## 🌟 Features

*   **Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile devices.
*   **Bilingual Support**: Instant toggle between English (EN) and Spanish (ES).
*   **Smooth Scrolling**: Implemented using [Lenis](https://lenis.darkroom.engineering/) for a premium feel.
*   **Advanced Animations**: Powered by [GSAP](https://greensock.com/gsap/) (ScrollTrigger, Text Reveal).
*   **Modern UI/UX**: Dark mode aesthetic with neon accents, glassmorphism, and custom typography.
*   **Component Architecture**: Clean, folder-based structure for maintainability.

## 🛠️ Tech Stack

*   **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
*   **Styling**: Pure CSS3 (CSS Variables, Flexbox/Grid, Media Queries)
*   **Animations**: GSAP (GreenSock Animation Platform)
*   **Scroll**: Lenis
*   **Icons**: React Icons (FontAwesome/Material)

## 📂 Project Structure

```bash
src/
├── components/           # Reusable UI components
│   ├── Contact/          # Contact section layout & styles
│   ├── CVSection/        # Resume/Experience details
│   ├── Hero/             # Landing page banner
│   ├── Projects/         # Horizontal scroll project showcase
│   ├── LanguageToggle/   # EN/ES switcher
│   └── SmoothScroll/     # Lenis wrapper integration
├── context/              # Global state management
│   └── LanguageContext   # Translation provider
├── data/                 # Static content
│   └── translations.js   # Dictionary for EN/ES text
└── App.jsx               # Main application entry
```

## 🚀 Getting Started

### Prerequisites

*   Node.js (v18+ recommended)
*   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build for Production

To create a production-ready build:

```bash
npm run build
```

This will generate static files in the `dist/` directory, optimized for deployment.

## 🎨 Customization

*   **Colors**: Edit `src/index.css` to update CSS variables (`--accent-color`, `--bg-color`).
*   **Content**: Update `src/data/translations.js` to modify text for both languages.
*   **Images**: Replace image URLs in `src/components/Projects/Projects.jsx`.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
