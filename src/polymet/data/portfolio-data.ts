export type NavItem = { id: string; label: string };

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

/**
 * Real contact details only. Leave `email` / `cvUrl` empty until real values
 * are available — the UI adapts instead of showing placeholder data.
 * `socials` renders nothing when empty.
 */
export const PROFILE = {
  name: "Muhammad Salman Khan",
  firstName: "Salman",
  initials: "SK",
  title: "Full Stack Developer",
  location: "Karachi, Pakistan",
  email: "muhammadsalman410@gmail.com",
  phone: "03072298340",
  cvUrl: "/muhammad-salman-khan-cv.pdf",
  socials: [{ label: "LinkedIn", href: "https://linkedin.com/in/msk-wd" }] as {
    label: string;
    href: string;
  }[],
};

export const HERO = {
  eyebrow: "FULL STACK DEVELOPER",
  headline: "Building modern, scalable and exceptional web experiences.",
  body: "I'm Muhammad Salman Khan, a Full Stack Developer with a strong frontend focus. I build modern web applications using React, Next.js and TypeScript, backed by Node.js, Express.js, Laravel, Java and Spring Boot.",
  badges: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Nest.js",
    "Php",
    "Laravel",
    "Java",
    "Spring Boot",
  ],
};

export const ABOUT = {
  heading: "Frontend expertise. Full-stack capability.",
  body: "I'm a Full Stack Developer with a strong frontend focus and professional experience building modern, scalable web applications. I specialize in React, Next.js, TypeScript and modern UI development, while also working with Node.js, Express.js, Java and Spring Boot to build APIs and backend services.",
  info: [
    { key: "role", label: "Role", value: "Full Stack Developer" },
    {
      key: "specialization",
      label: "Specialization",
      value: "Frontend-focused Full Stack Development",
    },
    { key: "location", label: "Location", value: "Karachi, Pakistan" },
    { key: "experience", label: "Experience", value: "3+ years" },
    {
      key: "education",
      label: "Education",
      value: "BS Computer Science",
      detail: "Muhammad Ali Jinnah University · 2019–2023 · CGPA 3.58",
    },
    { key: "availability", label: "Availability", value: "Open to remote" },
    {
      key: "focus",
      label: "Primary Focus",
      value: "Modern Web Apps",
    },
  ],
};

export type SkillGroup = {
  id: string;
  title: string;
  description: string;
  skills: string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Core languages and frameworks for the web.",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    id: "ui",
    title: "UI Libraries",
    description: "Component systems and styling toolkits.",
    skills: [
      "Tailwind CSS",
      "Material UI",
      "ShadCN UI",
      "Bootstrap",
      "Ant Design",
      "Vuetify",
    ],
  },
  {
    id: "state",
    title: "State & Forms",
    description: "Predictable state and type-safe forms.",
    skills: [
      "Redux",
      "Redux Toolkit",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Yup",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "APIs and services on the server.",
    skills: ["Node.js", "Express.js", "Laravel", "Java", "Spring Boot"],
  },
  {
    id: "database",
    title: "Database",
    description: "Relational data storage.",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    id: "apis",
    title: "APIs & Integrations",
    description: "Communication, auth and payments.",
    skills: [
      "REST APIs",
      "GraphQL API",
      "WebSockets",
      "Authentication",
      "NextAuth",
      "Stripe",
      "Firebase",
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    description: "Everyday tooling and delivery.",
    skills: ["Git", "GitHub", "CMS/API Workflows", "Chrome Extensions"],
  },
];

export type ExperienceItem = {
  company: string;
  role: string;
  type: string;
  points: string[];
  stack: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Hyperinventive",
    role: "Full Stack Developer",
    type: "Full-time · Karachi, Pakistan · Oct 2023 – Present",
    points: [
      "Built scalable web applications using React.js, Next.js, TypeScript, REST APIs, and relational databases.",
      "Developed RESTful APIs and backend services using Node.js, Express.js, Java, and Spring Boot.",
      "Developed API-driven modules and backend-integrated workflows for scalable applications",
      "Built complex UI systems including Kanban boards, payroll dashboards, and notification systems, improving workflow visibility and team productivity.",
      "Implemented real-time features with WebSockets for instant data updates.",
      "Worked with PostgreSQL and MySQL to support database-driven workflows and business operations.",
      "Replaced third-party tools with integrated business management solutions tailored to internal workflows.",
    ],
    stack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Laravel",
      "Java",
      "Spring Boot",
      "REST APIs",
      "PostgreSQL",
      "MySQL",
      "WebSockets",
    ],
  },
  {
    company: "Externalogix",
    role: "React Developer",
    type: "Part-time · Remote",
    points: [
      "Developed frontend features with React and TypeScript.",
      "Integrated APIs into production user interfaces.",
      "Built interfaces using Ant Design components.",
      "Worked with CMS and API-driven content workflows.",
      "Built a Chrome extension using JavaScript and React.",
      "Delivered responsive, maintainable frontend work.",
    ],
    stack: ["React", "TypeScript", "Ant Design", "JavaScript", "REST APIs"],
  },
];

export type ProjectMockup = "kanban" | "crm" | "forms";

export type Project = {
  id: string;
  index: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  link: string;
  images?: string[];
  stack: string[];
  features: string[];
  mockup: ProjectMockup;
};

export const PROJECTS: Project[] = [
  {
    id: "hyperinventive",
    index: "01",
    name: "Hyperinventive Portal",
    category: "Enterprise Operations Portal · Multi-Role ERP",
    summary:
      "Multi-role operations portal built with React 18 and Vite to manage projects, workforce attendance, payroll, invoicing, and real-time task workflows.",
    description:
      "A comprehensive multi-role enterprise operations dashboard built with React 18, Vite, and Redux Toolkit. It centralizes operations across four distinct user personas (admins, project managers, employees, and clients) with permission-aware routing, clock-in time tracking, drag-and-drop Kanban task boards, PDF payslip generation, client billing, and real-time updates via Socket.IO and FCM.",
    link: "https://credentials-ivory.vercel.app/?project=portal",
    images: [
      "/projects/portal-1.png",
      "/projects/portal-2.png",
      "/projects/portal-3.png",
      "/projects/portal-4.png",
      "/projects/portal-5.png",
      "/projects/portal-6.png",
      "/projects/portal-7.png",
      "/projects/portal-8.png",
      "/projects/portal-9.png",
      "/projects/portal-10.png",
    ],
    stack: [
      "React 18",
      "Vite",
      "Redux Toolkit",
      "Tailwind CSS",
      "Socket.IO",
      "React Beautiful DnD",
      "ApexCharts",
      "Express JS",
      "Node.js",
      "PostgreSQL",
      "FCM (Firebase Cloud Messaging)",
    ],
    features: [
      "Role-Based Access Control (Admin, Manager, Employee, Client)",
      "Drag-and-Drop Task Boards & Review Workflows",
      "Attendance & Clock-In/Out Monitoring",
      "Payroll & PDF Payslip Management",
      "Invoice & Client Billing Tracking",
      "Project Tracking & Hour History",
      "Real-Time Notifications (Socket.IO / FCM)",
    ],
    mockup: "kanban",
  },
  {
    id: "haworth",
    index: "02",
    name: "Haworth Greendeal CRM",
    category: "Enterprise CRM · Operations Dashboard",
    summary:
      "Multi-role CRM and operations dashboard built with Next.js 14, centralizing lead pipelines, job tracking, staff workflows, and analytics.",
    description:
      "A scalable multi-role CRM and operations platform built for service-based businesses using Next.js 14 and Redux Toolkit. It unifies lead management, job tracking, calendar scheduling, staff workflows, and reporting into a single responsive interface backed by JWT authentication and Role-Based Access Control (RBAC).",
    link: "https://credentials-ivory.vercel.app/?project=haworth",
    images: [
      "/projects/haworth-6.png",
      "/projects/haworth-1.png",
      "/projects/haworth-2.png",
      "/projects/haworth-3.png",
      "/projects/haworth-4.png",
      "/projects/haworth-5.png",
      "/projects/haworth-7.png",
    ],
    stack: [
      "Next.js 14",
      "TypeScript",
      "React",
      "Redux Toolkit",
      "Material UI",
      "Tailwind CSS",
      "JWT Auth",
      "Role-Based Access Control (RBAC)",
      "FCM (Firebase Cloud Messaging)",
    ],
    features: [
      "Role-Based Access Control (RBAC)",
      "Lead & Job Status Tracking",
      "Calendar & Diary Workflows",
      "Staff & Commission Management",
      "Dashboard Analytics & Reporting",
      "Persistent User & Filter State",
      "Audit & Trash Management",
    ],
    mockup: "crm",
  },
  {
    id: "volkoh",
    index: "03",
    name: "Volkoh – Creative Design Agency",
    category: "Agency Website · Creative & Digital Design",
    summary:
      "A visually immersive agency website showcasing creative services, portfolio projects, and brand experiences, built with Next.js and GSAP animations.",

    description:
      "A modern, visually engaging website developed for Volkoh, a creative graphic and digital design agency. Built with Next.js and GSAP, the website features smooth scroll-based animations, interactive transitions, dynamic content sections, and immersive project showcases. The experience highlights the agency's creative services, including UI/UX design, custom website design, product design, and web & app development, with a strong focus on visual storytelling, responsive layouts, and performance.",

    link: "https://volkoh.com/",
    images: [
      "/projects/volkoh-1.png",
      "/projects/volkoh-2.png",
      "/projects/volkoh-3.png",
      "/projects/volkoh-4.png"
    ],
    stack: [
      "Next.js",
      "React",
      "JavaScript",
      "GSAP",
      "ScrollTrigger",
      "CSS",
      "Responsive Web Design",
    ],

    features: [
      "GSAP-Powered Animations & Transitions",
      "Smooth Scroll-Based Animations",
      "Interactive Portfolio Showcase",
      "Creative Service Presentation",
      "Dynamic Content Sections",
      "Responsive Layout & UI",
      "Visual Storytelling & Motion Design",
      "Performance-Optimized Frontend",
    ],
    mockup: "crm",
  },
  {
    id: "no-brainer-forms",
    index: "04",
    name: "No Brainer Forms",
    category: "Multilingual SaaS · Estate & Life Planning Platform",
    summary:
      "Subscription-based estate planning SaaS built with Next.js 15 and React 19, featuring guided multi-step form journeys, English/Spanish localization, and Stripe checkout.",
    description:
      "A multi-product estate planning and life-document platform built with Next.js 15, React 19, and TypeScript. It guides users through personalized legal workflows across multiple product packages (Cradle to Teen, College or Not, Committed Couple, Final Wishes) with resume-capable form navigation, Redux-persisted state, next-intl multi-language support (English & Spanish), Stripe coupon/tax checkout, PDF downloads, and an administrative portal.",
    link: "https://credentials-ivory.vercel.app/?project=no-brianer",
    images: [
      "/projects/nobrainer-1.png",
      "/projects/nobrainer-2.png",
      "/projects/nobrainer-3.png",
      "/projects/nobrainer-4.png",
      "/projects/nobrainer-5.png",
      "/projects/nobrainer-6.png",
      "/projects/nobrainer-7.png",
    ],
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "shadcn/ui",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Hook Form",
      "Zod",
      "Stripe",
      "NextAuth",
      "next-intl",
    ],
    features: [
      "Guided Multi-Step Form Workflows with Persisted State",
      "Multi-Product Planning Suites (Family, College, Final Wishes)",
      "Bilingual Experience (English & Spanish via next-intl)",
      "Stripe Checkout with Dynamic Pricing, Taxes & Coupon Redemption",
      "Document Management & PDF Export Capabilities",
      "NextAuth Session Handling & User Account Dashboard",
      "Admin Dashboard for Package, Form & Coupon Management",
    ],
    mockup: "forms",
  },
  {
    id: "aidechoice-crm",
    index: "05",
    name: "AideChoice CRM",
    category: "Healthcare CRM · Role-based Platform",
    summary:
      "Role-based healthcare/home-care agency CRM with dashboards for Admin, Agency, Sub-Admin, and Caregiver roles.",
    description:
      "A role-based healthcare and home-care agency CRM built to support multiple user types with dedicated dashboards and access control. It includes service request tracking, caregiver management, document sharing, customer management, location tracking, and reporting workflows tailored to agency operations.",
    link: "https://credentials-ivory.vercel.app/?project=aidechoice",
    images: [
      "/projects/aidechoice-1.png",
      "/projects/aidechoice-2.png",
      "/projects/aidechoice-3.png",
      "/projects/aidechoice-4.png",
      "/projects/aidechoice-5.png",
      "/projects/aidechoice-6.png",
      "/projects/aidechoice-7.png",
    ],
    stack: [
      "Next.js",
      "React",
      "Material UI",
      "Redux Toolkit",
      "Google Maps API",
      "Stripe",
    ],
    features: [
      "Role-based dashboards",
      "CASL permission access control",
      "Service request board",
      "Caregiver management",
      "Document sharing",
      "Coupon and customer management",
      "Google Maps location tracking",
      "Timesheet and reporting tools",
      "Stripe payments",
      "Multi-step form validation",
    ],
    mockup: "crm",
  },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  icon:
    | "layers"
    | "layout"
    | "server"
    | "palette"
    | "workflow"
    | "plug";
};

export const SERVICES: Service[] = [
  {
    id: "fullstack",
    title: "Full Stack Development",
    description:
      "End-to-end web applications — from the interface down to the API and database.",
    icon: "layers",
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Fast, accessible, maintainable interfaces with React, Next.js and TypeScript.",
    icon: "layout",
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "APIs and services built with Node.js, Express.js, Java and Spring Boot.",
    icon: "server",
  },
  {
    id: "ui",
    title: "UI Development",
    description:
      "Pixel-careful component systems with Tailwind, ShadCN UI, MUI and Ant Design.",
    icon: "palette",
  },
  {
    id: "complex",
    title: "Complex Web Applications",
    description:
      "CRMs, ERP systems, dashboards and real-time applications with rich data flows.",
    icon: "workflow",
  },
  {
    id: "api",
    title: "API Integration",
    description:
      "REST, WebSockets, authentication and payment integrations that just work.",
    icon: "plug",
  },
];

export const PHILOSOPHY = {
  statement: "I care about the details.",
  body: "Good development isn't only about making interfaces look good. It's about creating experiences that are fast, intuitive, maintainable and enjoyable to use.",
  highlights: [
    { id: "performance", label: "Performance" },
    { id: "usability", label: "Usability" },
    { id: "scalability", label: "Scalability" },
    { id: "maintainability", label: "Maintainability" },
    { id: "ux", label: "User Experience" },
  ],
};

export const CONTACT = {
  heading: "Have a project in mind?",
  text: "Let's build something useful, fast and beautifully designed.",
};
