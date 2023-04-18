import {
  hoobank,
  gericht,
  deliciousss,
  weatherapp,
  gpt3,
  evogym,
  shoppy,
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  sass,
  reactjs,
  reactNative,
  redux,
  tailwind,
  git,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "SASS",
    icon: sass,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React Native",
    icon: reactNative,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Skills",
    iconBg: "#E6DEDD",
    points: [
      "HTML",
      "CSS / SASS",
      "JavaScript / TypeScript",
      "React JS",
      "React Native",
      "Responsive Design",
      "API Handling",
      "SEO",
      "Git",
      "Debugging and Troubleshooting",
    ],
  },
  {
    title: "Familiarity with libraries such as:",
    iconBg: "#E6DEDD",
    points: [
      "Redux / Redux-Toolkit",
      "React Routing / Hooks / Context",
      "Axios",
      "Formik",
      "Tailwind CSS",
      "React Splides",
      "Framer Motion",
      "React Three Fiber",
      "React Tilt",
      "Email JS",
    ],
  },
];

const projects = [
  {
    name: "Weather App",
    description:
      "Weather App that allows users to search for daily and weekly weather forecast.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-accordion-library",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: weatherapp,
    source_code_link: "https://github.com/manuelsaneh/Weather-App",
    web_link: "https://weatherapp-444.netlify.app",
  },
  {
    name: "HooBank",
    description:
      "A ReactJS Concept Bank Site.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: hoobank,
    source_code_link: "https://github.com/manuelsaneh/HooBank",
    web_link: "https://hoobank-concept.netlify.app",
  },
  {
    name: "GPT-3",
    description:
      "A ReactJS Concept AI Site.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: gpt3,
    source_code_link: "https://github.com/manuelsaneh/GPT-3-OpenAI",
    web_link: " https://gpt3-000.netlify.app",
  },
  {
    name: "Shoppy Dashboard",
    description:
      "A ReactJS DashBoard Concept Site with Ecommerce, Charts, light and dark mode. Plus Calender, Kanban, Editor and Color-Picker Apps included",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion-library",
        color: "pink-text-gradient",
      },
      {
        name: "react-hooks",
        color: "green-text-gradient",
      },
      {
        name: "react-context",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: shoppy,
    source_code_link: "https://github.com/manuelsaneh/Shoppy-Dashboard",
    web_link: "https://shoppy-dashboard-111.netlify.app",
  },
  {
    name: "Gericht's Restaurant",
    description:
      "A ReactJS Concept Restaurant Site.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: gericht,
    source_code_link: "https://github.com/manuelsaneh/Gericht-Resto",
    web_link: "https://gericht-restaurant-1.netlify.app",
  },
  {
    name: "deliciousss",
    description:
      "A ReactJS Recipes Site that allows you to view and search for recipes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "styled-components",
        color: "blue-text-gradient",
      },
      {
        name: "react-router",
        color: "green-text-gradient",
      },
      {
        name: "react-hooks",
        color: "green-text-gradient",
      },
      {
        name: "react-splides",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: deliciousss,
    source_code_link: "https://github.com/manuelsaneh/deliciousss",
    web_link: "https://deliciousss-222.netlify.app",
  },
  {
    name: "EvoGym",
    description:
      "A ReactJS Gym and Fitness Site.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
      {
        name: "react-hooks",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: evogym,
    source_code_link: "https://github.com/manuelsaneh/EvoGym",
    web_link: " https://evogym-fitness.netlify.app",
  },
];

export { services, technologies, experiences, projects };