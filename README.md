# Alex Karimi — Portfolio Website

A modern, animated fullstack developer portfolio built with Next.js 15, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

```bash
# Install dependencies
yarn install

# Run development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Type Animation**: react-type-animation
- **Intersection Observer**: react-intersection-observer
- **Notifications**: react-hot-toast
- **Icons**: lucide-react
- **Language**: TypeScript

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky nav with active section tracking
│   │   └── Footer.tsx       # Footer with social links
│   ├── sections/
│   │   ├── Hero.tsx         # Hero with type animation & floating code
│   │   ├── About.tsx        # About with timeline & highlight cards
│   │   ├── Skills.tsx       # Animated skill bars & tech stack cloud
│   │   ├── Projects.tsx     # Filterable project cards
│   │   ├── Experience.tsx   # Tabbed work experience & certifications
│   │   └── Contact.tsx      # Contact form with social links
│   ├── globals.css          # Global styles & animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page composition
├── public/
│   └── cv-alex-karimi.pdf  # Downloadable CV
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## ✏️ Customization

### Personal Info
Update your details across the section files:
- **Hero.tsx** — Name, tagline, email, social links, stats
- **About.tsx** — Bio, timeline, location
- **Skills.tsx** — Tech skills and proficiency levels
- **Projects.tsx** — Your projects with GitHub/live links
- **Experience.tsx** — Work history and certifications
- **Contact.tsx** — Email, social profiles

### CV/Resume
Replace `public/cv-alex-karimi.pdf` with your own PDF.
Update the download link in `Navbar.tsx` and `About.tsx`.

### Colors & Theme
Edit `tailwind.config.ts` to change:
- `accent` — Primary cyan color (#00D4FF)
- `accent-2` — Purple accent (#7B61FF)
- `accent-3` — Red accent (#FF6B6B)
- `highlight` — Green highlight (#00FFB3)
- `bg` — Background (#080C14)

## 📦 Build for Production

```bash
yarn build
yarn start
```

## 🌐 Deploy to Vercel

```bash
npx vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.

---

Built with ❤️ and too much coffee.
