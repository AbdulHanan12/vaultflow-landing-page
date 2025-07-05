# React Landing Page Assessment

A modern, responsive landing page built with React, Tailwind CSS, and ShadCN UI components. This project demonstrates proficiency in modern React development, component architecture, and pixel-perfect UI implementation.

## 🎯 Assessment Overview

This project showcases the following technical skills and competencies:

### ✅ **Technical Skills Demonstrated**
- **React 18** with modern hooks and functional components
- **Tailwind CSS** for utility-first styling and responsive design
- **ShadCN UI** component library integration and customization
- **Atomic Design Pattern** implementation (atoms, molecules, organisms)
- **Component Composition** and reusability principles
- **State Management** with React hooks (useState, custom hooks)
- **Accessibility** best practices (ARIA labels, semantic HTML)
- **Responsive Design** with mobile-first approach

### ✅ **UI/UX Implementation**
- **Pixel-perfect Figma matching** with exact typography, spacing, and colors
- **Interactive Components** including multi-step modals and dropdowns

## 🛠️ Technical Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| React | UI Library | 18.x |
| Tailwind CSS | Styling Framework | 3.x |
| ShadCN UI | Component Library | Latest |
| Vite | Build Tool & Dev Server | Latest |
| Lucide React | Icon Library | Latest |

## 📁 Project Architecture

```
src/
├── components/
│   ├── atoms/          # Reusable UI primitives
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Dialog.jsx
│   │   ├── LearnerSelect.jsx
│   │   └── NotificationSelect.jsx
│   ├── molecules/      # Simple component combinations
│   │   └── Navbar.jsx
│   └── organisms/      # Complex page sections
│       ├── HeroSection.jsx
│       ├── DashboardPreview.jsx
│       ├── TrustedBySection.jsx
│       └── FeaturesSection.jsx
├── assets/
│   ├── logos/          # Brand assets and icons
│   └── code-block.png  # Content images
├── App.jsx             # Main application component
├── App.css             # Global styles and custom classes
└── main.jsx           # Application entry point
```



## 🚀 Getting Started

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn package manager

### **Installation & Running**
```bash
# Clone repository
git clone <repository-url>
cd react-assessment

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
# Navigate to http://localhost:5173
```

### **Available Scripts**
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📱 Responsive Breakpoints

| Device | Breakpoint | Layout |
|--------|------------|--------|
| Mobile | < 768px | Single column, hamburger menu |
| Tablet | 768px - 1024px | Two-column features, adjusted spacing |
| Desktop | > 1024px | Full layout with all sections |

## 🚀 Deployment Ready

The project is production-ready with:
- Optimized build process
- Static asset optimization
- Environment variable support
- Deployment configurations for major platforms

---

**This assessment demonstrates proficiency in modern React development, component architecture, responsive design, and user experience implementation. The codebase follows industry best practices.**
