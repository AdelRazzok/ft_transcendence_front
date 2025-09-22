# 🏓 FT_TRANSCENDENCE FRONTEND

**A futuristic Pong game built with Next.js, React, and TypeScript - The final project of the 42 Common Core curriculum**

[![Next.js](https://img.shields.io/badge/Next.js-14.2.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![React Konva](https://img.shields.io/badge/React_Konva-18.2.10-orange?style=for-the-badge)](https://konvajs.org/)

---

## 🎮 **About The Project**

FT_Transcendence is a modern, browser-based reimagining of the classic Pong game. This frontend application delivers an engaging gaming experience with multiple game modes, AI opponents, tournament systems, and multilingual support. Built as the capstone project of the 42 School curriculum, it showcases advanced web development skills and real-time game mechanics.

### ✨ **Key Features**

- 🎯 **Multiple Game Modes**

  - Single Player (vs AI)
  - Local Multiplayer (2 players)
  - Quatro Mode (4 players)
  - Tournament System

- 🌍 **Internationalization**

  - Support for English, French, and Spanish
  - Dynamic language switching
  - Localized game interface

- 🎨 **Modern UI/UX**

  - Retro-futuristic design with animated backgrounds
  - Responsive layout using Bootstrap
  - Custom pixel-art fonts (Jockey One, Press Start)
  - Smooth animations and transitions

- 🤖 **Advanced AI**

  - Intelligent computer opponents
  - Adjustable difficulty levels
  - Realistic paddle movement patterns

- ⚡ **Real-time Gameplay**
  - 60 FPS game loop
  - Precise collision detection
  - Smooth ball and paddle physics
  - Responsive controls

---

## 🛠 **Technology Stack**

### **Core Technologies**

- **Next.js 14.2.1** - React framework with App Router
- **React 18** - UI library with hooks and context
- **TypeScript 5** - Type-safe JavaScript
- **React Konva 18.2.10** - 2D canvas library for game rendering

### **Styling & UI**

- **Bootstrap 5.3.3** - Responsive CSS framework
- **CSS Modules** - Component-scoped styling
- **Custom Fonts** - Retro gaming aesthetics

### **Internationalization**

- **i18next 23.11.2** - Internationalization framework
- **react-i18next 14.1.0** - React integration for i18n

### **Development Tools**

- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **Git** - Version control

---

## 🚀 **Getting Started**

### **Prerequisites**

Ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn**
- **Git**

### **Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/ft_transcendence_front.git
   cd ft_transcendence_front
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### **Build for Production**

```bash
# Build the application
npm run build

# Start the production server
npm start
```

---

## 🎮 **Game Modes & Controls**

### **Single Player Mode**

- **Objective**: Play against an intelligent AI opponent
- **Controls**:
  - `W` / `S` - Move left paddle up/down
  - `Space` - Start/Pause game

### **Two Player Mode**

- **Objective**: Local multiplayer Pong
- **Controls**:
  - **Player 1**: `W` (up) / `S` (down)
  - **Player 2**: `↑` (up) / `↓` (down)
  - `Space` - Start/Pause game

### **Quatro Mode (4 Players)**

- **Objective**: Four-player Pong with unique mechanics
- **Controls**:
  - **Player 1**: `W` (up) / `S` (down)
  - **Player 2**: `↑` (up) / `↓` (down)
  - **Player 3**: `D` (up) / `C` (down)
  - **Player 4**: `O` (up) / `L` (down)

### **Tournament Mode**

- **Objective**: Competitive bracket-style tournaments
- **Features**: Player registration, bracket visualization, winner tracking

---

## 🎨 **Design & Styling**

### **Visual Theme**

- **Retro-Futuristic**: Inspired by 80s arcade aesthetics
- **Color Palette**: Neon colors on dark backgrounds
- **Typography**: Pixel-perfect fonts (Jockey One, Press Start 2P)
- **Animations**: Smooth transitions and hover effects

### **Responsive Design**

- **Mobile-First**: Optimized for various screen sizes
- **Bootstrap Grid**: Flexible layout system
- **CSS Modules**: Component-scoped styling for maintainability

### **Game Aesthetics**

- **60 FPS Rendering**: Smooth gameplay experience
- **Particle Effects**: Visual feedback for collisions and scoring
- **Dynamic Backgrounds**: Animated GIF backgrounds for immersion

---

## 🌍 **Internationalization (i18n)**

The application supports multiple languages with dynamic switching:

### **Supported Languages**

- 🇺🇸 **English** (default)
- 🇫🇷 **French**
- 🇪🇸 **Spanish**

### **Implementation**

```typescript
// i18n configuration
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
	resources: {
		en: { translation: en },
		fr: { translation: fr },
		es: { translation: es },
	},
	lng: 'en',
})
```

### **Usage**

```tsx
// In components
import { useTranslation } from 'react-i18next'

const { t } = useTranslation()
return <h1>{t('WELCOME')}</h1>
```

---

## 🎯 **Game Logic & Physics**

### **Ball Physics**

- **Collision Detection**: Precise boundary and paddle collision
- **Speed Mechanics**: Dynamic speed changes based on game state
- **Bounce Logic**: Realistic ball physics with angle calculations
- **Scoring System**: Automatic score tracking and game state management

### **AI Implementation**

```typescript
// AI logic for computer opponent
const aiLogic = ({ x, y, ySpeed }: BallPosition) => {
	// Predict ball position
	// Calculate optimal paddle movement
	// Apply difficulty modifiers
	// Update paddle position
}
```

### **Game Loop**

```typescript
// 60 FPS game loop
useEffect(() => {
	const gameLoop = () => {
		handleScore()
		resetBallBounce()
		handleWallCollision()
		handlePaddleCollision()
		handleMovement()
	}
	const interval = setInterval(gameLoop, 1000 / 60)
	return () => clearInterval(interval)
}, [dependencies])
```

---

## 🚀 **Performance Optimizations**

### **React Optimizations**

- **useCallback**: Memoized event handlers to prevent unnecessary re-renders
- **useEffect Dependencies**: Carefully managed dependency arrays
- **Context Optimization**: Separated contexts to minimize re-renders

### **Game Performance**

- **60 FPS Target**: Consistent frame rate for smooth gameplay
- **Efficient Collision Detection**: Optimized algorithms for real-time performance
- **Canvas Optimization**: React Konva for hardware-accelerated rendering

### **Bundle Optimization**

- **Code Splitting**: Automatic page-based code splitting with Next.js
- **Tree Shaking**: Unused code elimination
- **Asset Optimization**: Optimized images and fonts

---

## 🏆 **42 School Project Requirements**

This project fulfills the requirements of the ft_transcendence project at 42 School:

- ✅ **Web Technologies**: Modern frontend framework (Next.js/React)
- ✅ **Real-time Gameplay**: Interactive Pong game with multiple modes
- ✅ **User Interface**: Clean, responsive design with multiple pages
- ✅ **Game Features**: Single/multiplayer modes, tournaments, AI opponents
- ✅ **Security**: Input validation and secure coding practices
- ✅ **Performance**: Optimized for speed and user experience

---

## 🤝 **Contributing**

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### **Development Guidelines**

- Follow TypeScript best practices
- Maintain consistent code style with ESLint/Prettier
- Write meaningful commit messages
- Test thoroughly before submitting PRs

---

## 📝 **License**

This project is part of the 42 School curriculum and is intended for educational purposes.

---

## 👥 **Credits**

**Developed by les Frères Du Purgatoire** 🔥

A collaborative effort showcasing the culmination of skills learned throughout the 42 Common Core curriculum.

### **Special Thanks**

- **42 School** for the comprehensive curriculum
- **The React Community** for excellent documentation and tools
- **Konva.js Team** for the powerful 2D canvas library

---

**Ready to experience the future of Pong? Clone the repo and start playing! 🎮**
