# ProdNet Portfolio

A professional, responsive portfolio website for the ProdNet project – a platform connecting producers with investors.

## Features

- ✨ Modern, clean, minimal design
- 📱 Fully responsive (mobile-first)
- 🎨 Subtle professional animations
- ⚡ Built with React + TypeScript
- 🔗 Sticky header navigation (Project • Problem • Solution • Audience • Features • Contact)
- 👥 Team section with real member names
- 📞 Contact section (Instagram, telephone, email placeholders)

## Getting Started

### Prerequisites

- Node.js (recommend LTS v18) – newer Node 22 may show CRA warnings
- npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Running the Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This will create an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/              # React components
│   ├── Header.tsx           # Sticky navigation bar
│   ├── Cover.tsx            # Landing section (title + team)
│   ├── ProjectIdea.tsx      # Project idea
│   ├── Problem.tsx          # Problem statement
│   ├── Solution.tsx         # Solution overview
│   ├── TargetAudience.tsx   # Target audience
│   ├── Features.tsx         # Platform features + placeholders
│   ├── Contact.tsx          # Contact info section
├── App.tsx                  # Main app component
└── index.tsx                # Entry point
```

## Features Overview

### Content Sections

1. **Cover Page** - Project name, subtitle, description, and team members
2. **Project Idea** - Core concept explanation
3. **The Problem** - Issues being addressed
4. **The Solution** - How ProdNet solves the problems
5. **Target Audience** - Farmers, Artisans, and Investors
6. **Main Features** - 5 key platform features
7. **Contact** - Instagram, telephone, and email placeholders

## Customization

### Updating Team Members

Edit `src/components/Cover.tsx` to adjust the member names.

### Adding Screenshots

Replace the screenshot placeholders in `src/components/Features.tsx` with real screenshots.

### Logo

Place or replace `prodnet-logo.png` in the `public` folder.

## Technologies Used

- **React** - UI framework
- **TypeScript** - Type safety
- **CSS3** - Styling and animations
- **Inter Font** - Typography

## Design Principles

- Mobile-first responsive design
- Clean typography with strong spacing
- Neutral colors with green accent (#2ecc71)
- Subtle, professional animations
- No heavy elements for optimal performance

## License

This project is created for ProdNet.

## Contact

For more information about ProdNet, please use the Contact section.
