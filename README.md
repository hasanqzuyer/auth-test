# React TypeScript Testing Project

A modern React application built with TypeScript, featuring authentication, dashboard layout, and responsive design.

## 🚀 Features

- Authentication system with protected routes
- Responsive dashboard layout
- Modern UI components using Radix UI
- Type-safe development with TypeScript
- Tailwind CSS for styling
- Code splitting and lazy loading
- Toast notifications

## 🛠️ Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Radix UI Components
- React Router DOM v7
- React Hook Form
- React Toastify

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will start at `http://127.0.0.1:3010`

## 🏗️ Project Structure

```
src/
├── assets/         # Static assets (images, icons)
├── components/     # Reusable components
├── contexts/       # React context providers
├── hooks/         # Custom React hooks
├── lib/           # Utility libraries
├── pages/         # Page components
├── routes/        # Route configurations
├── types/         # TypeScript type definitions
└── utils/         # Helper functions and constants
```

## 🔒 Authentication

The project includes a complete authentication system with:
- Login page with email/password
- Protected routes
- Persistent authentication state
- Logout functionality

## 🎨 UI Components

Built with a combination of custom components and Radix UI primitives:
- Dialog/Modal windows
- Dropdown menus
- Sheet (side panel)
- Buttons
- Loading screens

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Sidebar navigation (collapsible on mobile)
- Adaptive layouts for different screen sizes

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

The project includes several configuration files:
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration
- `tailwind.config.js` - Tailwind CSS configuration

## 📄 License

[MIT License](LICENSE)
