export const SOCIAL = [{
    name: "linkedin",
    link: "https://www.linkedin.com/in/septianscp/",
    img: "/assets/icons/social/linkedin.svg"
}, {
    name: "Email",
    link: "mailto:septianscp@gmail.com",
    img: "/assets/icons/social/email.svg"
}, {
    name: "Github",
    link: "https://github.com/septianscp",
    img: "/assets/icons/social/github.svg"
}, {
    name: "Instagram",
    link: "https://github.com/septianscp",
    img: "/assets/icons/social/instagram.svg"
}]

export const SKILL = [{
    name: "React",
    img: "/assets/icons/skill/icon-react.svg"
}, {
    name: "Next.js",
    img: "/assets/icons/skill/icon-nextjs.svg"
}, {
    name: "TypeScript",
    img: "/assets/icons/skill/icon-typescript.svg"
},
{
    name: "JavaScript",
    img: "/assets/icons/skill/icon-javascript.svg"
},
{
    name: "Git",
    img: "/assets/icons/skill/icon-git.svg"
},
{
    name: "Figma",
    img: "/assets/icons/skill/icon-figma.svg"
}]

export const WORK_EXPERIENCE = [{
    company_name_role: "Frontend Developer → Frontend Team Lead , Renos",
    year: "2021 - 2026",
    company_logo: "/assets/icons/company/logo-renos.png",
    job_description: "Built and maintained React and Next.js applications used in production for internal teams and customers. Translated UI/UX designs into reusable, scalable components, improving development consistency across the frontend codebase. Integrated frontend features with backend APIs, handling loading states, errors, and edge cases in real-world scenarios. Took ownership as Frontend Team Lead, leading task breakdowns, estimations, and delivery planning. Reviewed pull requests and enforced frontend standards to maintain code quality and performance. Collaborated closely with product, backend, and QA teams to ensure smooth and timely feature delivery."
},
{
    company_name_role: "Frontend Developer, Lab Me Analitycs",
    year: "2019 - 2020",
    company_logo: "/assets/icons/company/logo-labme.png",
    job_description: "Collaborated with UX designers to implement functional, user-friendly interfaces based on design specifications. Integrated frontend components with backend APIs and delivered responsive React-based web applications."
},
{
    company_name_role: "Frontend Developer, Ink & Canvas",
    year: "2017 - 2021",
    company_logo: "/assets/icons/company/logo-inc.png",
    job_description: "Implemented responsive web interfaces from design mockups for multiple client projects. Developed and maintained frontend features while working closely with designers and stakeholders."
},
];

export const PROJECTS = [
    {
  title: "Renos Seller Center",
  subtitle: "Seller Management Platform (Web & Mobile WebView)",
  img: "/assets/images/project/project.png",
  description:
    "Renos Seller Center is a seller management platform that enables sellers to manage products, promotions, storefronts, and performance metrics through a web application and mobile WebView experience.",
  link: "https://seller.renos.id",
  menus: [
    {
      title: "Overview",
      description: "",
      type: "text",
      value: [
        "Renos Seller Center is a seller management platform accessible through a web application and a mobile WebView experience.",
        "It centralizes seller operations such as product management, promotions, storefront customization, and performance monitoring, while using a single web-based codebase to support both desktop and mobile usage."
      ]
    },
    {
      title: "Purpose",
      description: "",
      type: "bullet",
      value: [
        "Centralize seller operations into a single platform",
        "Support both desktop and mobile access using one web codebase",
        "Maintain consistent UI and behavior across platforms",
        "Reduce development and maintenance overhead",
        "Enable sellers to manage their business efficiently from anywhere"
      ]
    },
    {
      title: "Key Features",
      description: "",
      type: "bullet",
      value: [
        "Product management for creating and maintaining product listings",
        "Discount and promotion management",
        "Voucher creation and management",
        "Product bundling to increase sales value",
        "Statistics and metrics dashboard showing key performance indicators",
        "Storefront layout customization for seller branding",
        "In-platform seller chat",
        "Responsive layouts optimized for mobile WebView usage",
        "Shared UI components powered by Renos UI"
      ]
    },
    {
      title: "Tech Stack",
      description: "",
      type: "bullet",
      value: [
        "React / Next.js",
        "TypeScript",
        "Renos UI (Shared Component Library)",
        "REST API Integration",
        "Token-based Authentication"
      ]
    },
    {
      title: "Role",
      description: "",
      type: "text",
      value: [
        "Worked closely with product managers, designers, and backend engineers to build and maintain the Seller Center web application. Responsibilities included implementing seller-facing features, integrating APIs, optimizing responsive behavior for mobile WebView, and ensuring UI consistency across platforms."
      ]
    }
  ],
  images: [
    "/assets/images/portfolio/renos-seller/1.png",
    "/assets/images/portfolio/renos-seller/2.png",
    "/assets/images/portfolio/renos-seller/3.png",
    "/assets/images/portfolio/renos-seller/4.png",
    "/assets/images/portfolio/renos-seller/5.png"
  ]
},
    {
    title: "Renos UI",
    subtitle: "Shared React Component Library for Multi-Platform Applications",
    img: "/assets/images/project/project.png",
    description: "Renos UI is a shared React component library built by the Renos frontend team to speed up development and standardize UI across Seller, Buyer, and Backoffice platforms.",
    link: "https://renos-ui.vercel.app/",
    menus:[
        {
            title:'Overview',
            description:'',
            type:'text',
            value: ['Renos UI is a shared React component library built by the Renos frontend team to speed up development and standardize UI across Seller, Buyer, and Backoffice platforms', 'It enables teams to reuse common components, maintain consistency, and deliver features faster across multiple applications']
        },
        {
            title:'Purpose',
            description:'',
            type:'bullet',
            value: [
                'Speed up frontend development across teams','Standardize UI components and interaction patterns','Reduce repeated implementation between applications','Improve maintainability and developer experience'
            ]
        },
         {
            title:'Key Features',
            description:'',
            type:'bullet',
            value: [
                'Reusable and composable React components',
                'Design-system driven styling with Styled Components & Styled System',
                'Fully typed components using TypeScript',
                'Optimized ESM & CommonJS builds with Rollup',
                'Interactive component documentation via Storybook',
                'Automated testing with Jest',
                'Enforced code quality using ESLint, Prettier, and Husky'
            ]
        },
        {
            title:'Tech Stack',
            description:'',
            type:'bullet',
            value: [
            'React',
            'TypeScript',
            'Styled Components',
            'Styled System',
            'Sass',
            'Rollup',
            'Storybook',
            'Jest & Testing Library'
            ]
        },
        {
            title:'Role',
            description:'',
            type:'text',
            value: ['Worked collaboratively with the frontend team to design, build, and maintain shared UI components. Responsibilities included implementing reusable components, supporting multiple platform use cases, maintaining, and improving adoption across teams.']
        }
    ],
    images: [
        '/assets/images/portfolio/renos-ui/renos-ui.jpg',
        '/assets/images/portfolio/renos-ui/renos-ui_1.png',
        '/assets/images/portfolio/renos-ui/renos-ui_2.png',
        '/assets/images/portfolio/renos-ui/renos-ui_3.png',
        '/assets/images/portfolio/renos-ui/renos-ui_4.png',
        '/assets/images/portfolio/renos-ui/renos-ui_5.png',
        '/assets/images/portfolio/renos-ui/renos-ui_6.png',
        '/assets/images/portfolio/renos-ui/renos-ui_7.png'
    ]
},
{
  title: "Labme Analytic",
  subtitle: "Blood Test Analytics Dashboard",
  img: "/assets/images/project/project.png",
  description:
    "Labme Analytic is a React-based dashboard that visualizes blood test results into clear and structured health insights, helping users understand laboratory data through charts, metrics, and historical trends.",
  link: "https://labme.ai/",
  menus: [
    {
      title: "Overview",
      description: "",
      type: "text",
      value: [
        "Labme Analytic is a data visualization dashboard built using React to present blood test results in a clear and user-friendly interface.",
        "The application transforms complex laboratory data into structured metrics, visual indicators, and trends that make health data easier to understand."
      ]
    },
    {
      title: "Purpose",
      description: "",
      type: "bullet",
      value: [
        "Simplify the presentation of blood test results",
        "Help users understand health metrics through visual data",
        "Enable tracking of lab results over time",
        "Present medical data in a clear and structured dashboard"
      ]
    },
    {
      title: "Key Features",
      description: "",
      type: "bullet",
      value: [
        "Blood test result visualization using charts and indicators",
        "Health metric overview with trend comparison",
        "Normal range indicators for laboratory values",
        "Historical data comparison across multiple tests",
        "Category-based grouping of blood parameters",
        "Clean and data-focused dashboard layout",
        "Responsive UI built with React components"
      ]
    },
    {
      title: "Tech Stack",
      description: "",
      type: "bullet",
      value: [
        "React",
        "JavaScript",
        "Charting & data visualization libraries",
        "REST API integration",
        "CSS / Component-based styling"
      ]
    },
    {
      title: "Role",
      description: "",
      type: "text",
      value: [
        "Worked as a Frontend Developer to build and maintain a React-based analytics dashboard, focusing on data visualization, component structure, and clear presentation of complex medical information."
      ]
    }
  ],
  images: [
    "/assets/images/portfolio/labme/1.png",
    "/assets/images/portfolio/labme/2.png",
    "/assets/images/portfolio/labme/3.png",
    "/assets/images/portfolio/labme/4.png",
    "/assets/images/portfolio/labme/5.png",
    "/assets/images/portfolio/labme/6.png" 
  ]
},
{
  title: "LIA Digital",
  subtitle: "Enterprise Education Management System",
  img: "/assets/images/project/project.png",
  description:
    "LIA Digital is an internal web application built for one of the largest education institutions in Indonesia, supporting academic and operational processes across more than 50 branches nationwide.",
  link: "https://digital.lia.co.id/",
  menus: [
    {
      title: "Overview",
      description: "",
      type: "text",
      value: [
        "LIA Digital is a centralized web application designed to support academic and operational workflows for a large-scale education institution with over 50 branches in Indonesia.",
        "The system consolidates multiple modules into a single platform to streamline academic management, human resources, finance, and online student registration."
      ]
    },
    {
      title: "Purpose",
      description: "",
      type: "bullet",
      value: [
        "Centralize academic and operational processes across branches",
        "Support large-scale internal users with different roles and responsibilities",
        "Improve efficiency in academic, HR, and financial workflows",
        "Provide a unified system for student registration and administration"
      ]
    },
    {
      title: "Key Features",
      description: "",
      type: "bullet",
      value: [
        "Academic module for managing classes, schedules, and academic data",
        "Human Resource module for employee and staff management",
        "Finance module for financial records and operational transactions",
        "Online registration module for student enrollment",
        "Role-based access across different internal departments",
        "Dashboard-style interfaces for daily operational usage",
        "Consistent UI using a shared admin template"
      ]
    },
    {
      title: "Tech Stack",
      description: "",
      type: "bullet",
      value: [
        "AngularJS",
        "HTML5",
        "CSS",
        "BlurAdmin Template"
      ]
    },
    {
      title: "Role",
      description: "",
      type: "text",
      value: [
        "Worked as a Frontend Developer to build and maintain multiple internal modules, including Academic, Human Resource, Finance, and Online Registration. Responsibilities included implementing UI components, integrating frontend logic, and adapting the admin template to meet real operational requirements across multiple branches."
      ]
    }
  ],
  images: [
    "/assets/images/portfolio/lia-digital/1.png",
    "/assets/images/portfolio/lia-digital/2.png",
    "/assets/images/portfolio/lia-digital/3.png",
    "/assets/images/portfolio/lia-digital/4.png",
    "/assets/images/portfolio/lia-digital/5.png",
  ]
}


]