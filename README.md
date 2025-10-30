# Renuja Janith - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring a dark theme with blue accents.

## Features

- 🎨 Modern dark theme with blue color scheme
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 and TypeScript
- 🎭 Smooth animations and transitions
- 🎯 Sections: Home, About, Projects, Skills, Education, Contact
- 🔗 Social media integration (GitHub, LinkedIn)
- 📧 Contact form
- 🎓 Education timeline
- 🏆 Project showcase with technologies used

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Animations:** Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio-website/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## Customization

### Updating Personal Information

1. **Hero Section** (`components/Hero.tsx`): Update name, title, and bio
2. **About Section** (`components/About.tsx`): Modify location and stats
3. **Projects** (`components/Projects.tsx`): Add/edit projects with GitHub links
4. **Skills** (`components/Skills.tsx`): Update technologies and skills
5. **Education** (`components/Education.tsx`): Modify education and certifications
6. **Contact** (`components/Contact.tsx`): Update email and social links

### Replacing Profile Image

Replace the placeholder in `components/Hero.tsx` with your actual photo:

```tsx
<img
  src="/your-photo.jpg"
  alt="Renuja Janith"
  className="w-full h-full object-cover"
/>
```

Place your photo in the `public` folder.

### Changing Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify

1. Push your code to GitHub
2. Connect your repository on [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `.next`

## Contact

**Renuja Janith**
- Email: renujajanith7671@gmail.com
- GitHub: [Renuja-7671](https://github.com/Renuja-7671)
- LinkedIn: [renuja-janith](https://www.linkedin.com/in/renuja-janith-381587279)

## License

This project is open source and available for personal use.

---

Built with ❤️ by Renuja Janith