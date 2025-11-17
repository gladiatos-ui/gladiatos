# Gladiatos - Humanoid Soccer Robotics Team Website

Official website for Gladiatos, a competitive humanoid soccer robotics team from Tim Robotika Universitas Indonesia. We design, build, and program autonomous robots for RoboCup competitions.

![Gladiatos Logo](public/logo.png)

## 🤖 About

Gladiatos is dedicated to advancing humanoid robotics technology through competitive soccer robotics. This website showcases our projects, team members, competition history, and provides information about joining our team.

**Live Site:** [https://gladiatosui.com](https://gladiatosui.com)

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org) (React 19)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **UI Components:** [Styled Components](https://styled-components.com)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **CMS:** [DatoCMS](https://www.datocms.com) (GraphQL API)
- **Font Optimization:** Next.js Font with Google Fonts (Inter, Orbitron)
- **Deployment:** [Vercel](https://vercel.com)
- **Language:** TypeScript

## 📁 Project Structure

```txt
gladiatos_web/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── competitions/       # Competitions page
│   │   ├── contact/            # Contact page
│   │   ├── faq/                # FAQ page
│   │   ├── projects/           # Projects page
│   │   ├── team/               # Team page
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles
│   │   ├── robots.ts           # robots.txt configuration
│   │   └── sitemap.ts          # Sitemap generation
│   ├── components/             # React components
│   │   ├── AboutUs.tsx
│   │   ├── Button.tsx
│   │   ├── CompetitionsGrid.tsx
│   │   ├── CTA.tsx
│   │   ├── FAQItems.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroHome.tsx
│   │   ├── HeroPage.tsx
│   │   ├── Navbar.tsx
│   │   ├── OurTeam.tsx
│   │   ├── ProjectsList.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── ...
│   └── lib/
│       └── registry.tsx        # Styled Components registry
├── public/                     # Static assets
│   ├── logo.png
│   ├── robot-hero.webp
│   └── ...
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/gladiatos-ui/gladiatos.git
    cd gladiatos_web
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env.local` file:

    ```env
    DATOCMS_API_KEY=your_datocms_api_key_here
    ```

4. Run the development server:

    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark/Light Mode** - Theme toggle with persistent state
- **Smooth Animations** - Framer Motion for page transitions and interactions
- **Interactive Background** - Vanta.js dots effect on hero sections
- **CMS Integration** - Dynamic content from DatoCMS (Team, Projects, Competitions, FAQ)
- **SEO Optimized** - Metadata, sitemap, robots.txt, Open Graph, Twitter Cards
- **Accessibility** - ARIA labels, semantic HTML, keyboard navigation
- **Performance** - Next.js Image optimization, font optimization, lazy loading

## 📝 Content Management

Content is managed through DatoCMS. The following models are used:

- **Team Members** (Managerial, Programming, Electrical, Mechanical)
- **Projects** (Title, Description, Images, Tech Stack)
- **Competitions** (Title, Year, Description, Images)
- **FAQ** (Questions and Answers)

GraphQL queries are located in the respective page files (`src/app/*/page.tsx`).

## 🌐 Environment Variables

Required environment variables:

```env
DATOCMS_API_KEY=your_datocms_api_key
```

## 🚢 Deployment

This project is deployed on Vercel with automatic deployments from the `main` branch.

### Custom Domain Setup

1. Add domain in Vercel project settings
2. Configure DNS records at your domain registrar:
   - **A Record:** Points to Vercel's IP
   - **CNAME Record (www):** Points to your Vercel deployment
3. SSL certificates are automatically provisioned by Vercel

## 📊 SEO & Analytics

- **Sitemap:** Automatically generated at `/sitemap.xml`
- **Robots.txt:** Configured at `/robots.txt`
- **Meta Tags:** Open Graph and Twitter Card support
- **Structured Data:** JSON-LD for organization schema (recommended to add)

## 📄 License

Copyright © 2024 Gladiatos - Tim Robotika Universitas Indonesia. All rights reserved.

This project is proprietary software. Unauthorized copying, modification, distribution, or use of this software, via any medium, is strictly prohibited without explicit written permission from the Gladiatos team.

## 📞 Contact

- **Website:** [https://gladiatosui.com](https://gladiatosui.com)
- **Email:** <gladiatos@gmail.com>
- **Instagram:** [@gladiatos.ui](https://instagram.com/gladiatos.ui)
- **LinkedIn:** [Gladiatos](https://linkedin.com/company/gladiatos)
- **GitHub:** [Gladiatos-Programming](https://github.com/Gladiatos-Programming)

## 👥 Team

Made with ❤️ by the Gladiatos team at Universitas Indonesia

---

**Gladiatos** - Building the Future of Soccer Robotics 🤖⚽
