export const resume = {
  name: "Wuraola Adebisi",
  title: "Frontend Engineer",
  links: [
    { label: "Email", href: "mailto:the.wuraola.adebisi@gmail.com" },
    { label: "GitHub", href: "https://github.com/Wuraola-Adebisi" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/wuraola-adebisi/",
    },
  ],
  summary:
    "Designer and frontend engineer who takes digital products from concept to production, combining visual design, interaction design, and technical implementation. Experienced in shaping information architecture, designing responsive interfaces, developing reusable design systems, and building accessible, data-driven web applications. Brings a design-led approach to problem-solving, with the engineering skills to translate interface decisions into polished, functional experiences.",
  projects: [
    {
      name: "Halcyon Studio",
      kind: "Architecture Studio Website",
      bullets: [
        "Designed and built an architecture and interior design portfolio from scratch, treating the website as an extension of the studio's visual identity rather than simply a project gallery.",
        "Built a responsive visual system around typography, imagery, spacing, and reusable layout patterns, including a filterable project archive, six individual case-study pages, studio and contact pages, and interactive hover states.",
        "Solved inconsistent client-style image assets across different resolutions and proportions by building flexible layouts and CSS custom properties that preserved the supplied imagery without forcing it into a rigid treatment.",
      ],
    },
    {
      name: "Momentum",
      kind: "Career Tracker",
      bullets: [
        "Designed and built a full-stack career management product from scratch, including authentication, application tracking, Kanban and table views, notes, interviews, activity history, and analytics.",
        "Implemented email authentication and Google/GitHub OAuth with PostgreSQL row-level security, ensuring users could only access their own data.",
        "Replaced static dashboard concepts with live analytics computed from user activity, and audited the application for accessibility through keyboard handling, focus management, ARIA patterns, and responsive interaction design.",
      ],
    },
    {
      name: "FoodEase",
      kind: "Web Application",
      bullets: [
        "Built a recipe discovery app in React with category browsing, search, and structured metadata, prioritizing fast, intuitive navigation",
        "Built responsive, Tailwind-styled interfaces with scalable component architecture and deployed via Vercel",
      ],
    },
    {
      name: "Tobiloba's Portfolio",
      kind: "Freelance Client Project",
      bullets: [
        "Delivered a portfolio site for a freelance client end-to-end, architecting one codebase to serve two audiences through routed sections without duplicating shared content.",
        "Modelled the client's content in Sanity CMS with audience-tagged fields so one dataset powers both sides of the portfolio, reducing ongoing content maintenance.",
        "Automated deployment with GitHub Actions CI/CD on every push to main and shipped the site to a live custom domain.",
      ],
    },
  ],
  education: {
    degree: "B.A. Communication and Language Arts (Marketing Communications)",
    school: "University of Ibadan",
    years: "2019 – 2024",
  },
  stack: [
    {
      label: "Web Design & Frontend",
      tools: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "React Router",
        "Tailwind CSS",
        "Webflow",
        "Responsive Design",
        "Figma",
      ],
    },
    {
      label: "State & Data",
      tools: [
        "TanStack Query",
        "Zustand",
        "Supabase",
        "PostgreSQL",
        "dnd-kit",
        "Recharts",
      ],
    },
    {
      label: "Backend & Auth",
      tools: ["Supabase Auth", "OAuth (Google/GitHub)", "Row Level Security"],
    },
    {
      label: "UI & Styling",
      tools: [
        "Tailwind CSS",
        "Responsive Design",
        "Figma",
        "UI Animation",
        "Accessibility (ARIA)",
      ],
    },
    {
      label: "CMS & Data",
      tools: ["Sanity (Headless CMS)", "GROQ", "Image Optimization"],
    },
    {
      label: "Tooling & Workflow",
      tools: [
        "Git",
        "GitHub",
        "GitHub Actions (CI/CD)",
        "Vite",
        "Bun",
        "Node.js",
        "ESLint",
        "Vercel",
        "Chrome DevTools",
      ],
    },
    {
      label: "Accessibility & UX",
      tools: [
        "Accessibility",
        "ARIA",
        "Keyboard Navigation",
        "Focus Management",
        "Responsive Interaction Design",
      ],
    },
  ],
};
