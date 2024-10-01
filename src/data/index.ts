import { CSSIcon } from "@/components/icons/tags/css";
import { HTMLIcon } from "@/components/icons/tags/html";
import { JavaScriptIcon } from "@/components/icons/tags/javascript";
import { NextJSIcon } from "@/components/icons/tags/nextjs";
import { OpenAIIcon } from "@/components/icons/tags/openai";
import { ReactIcon } from "@/components/icons/tags/react";
import { SWCIcon } from "@/components/icons/tags/swc";
import { TypeScriptIcon } from "@/components/icons/tags/typescript";
import { ViteIcon } from "@/components/icons/tags/vite";
import { ShadcnIcon } from "@/components/icons/tags/shadcn-ui";
import { TailwindCSSIcon } from "@/components/icons/tags/tailwind-css";
import { AstroIcon } from "@/components/icons/tags/astro";
import { SvelteIcon } from "@/components/icons/tags/svelte";
import { NodeJSIcon } from "@/components/icons/tags/nodejs";
import { VitestIcon } from "@/components/icons/tags/vitest";
import { BootstrapIcon } from "@/components/icons/tags/bootstrap";
import { SupabaseIcon } from "@/components/icons/tags/supabase";
import { ReduxIcon } from "@/components/icons/tags/redux";
import { PNPMIcon } from "@/components/icons/tags/pnpm";
import { VercelIcon } from "@/components/icons/tags/vercel";
import { BasehubIcon } from "@/components/icons/tags/basehub";
import { GraphQLIcon } from "@/components/icons/tags/graphql";
import { AwardIcon, Badge, FileTextIcon, LinkIcon, MailIcon, NewspaperIcon, Search } from "lucide-react";

export const AVATAR = {
  name: "Atef Elsherbeni",
  initials: "AE",
};

export const ABOUT = {
  title: 'Professor at Colorado School of Mines',
  description: `IEEE Life Fellow and ACES Fellow`,
  linkedin: "/assets/linkedin.png",
  linkedinlink:"https://www.linkedin.com/in/atef-elsherbeni-4172733/",
  googlescholar:"/assets/googlescholar.png",
  googlescholarlink:"http://scholar.google.com/citations?user=B3mIYBMAAAAJ&hl=en",
};

export const LINKS = [
  {
    title: "Awards",
    url: "assets/_08_Elsherbeni_Awards_September_2024.pdf",
    icon: AwardIcon,
  },
  {
    title: "Honors",
    url: "/assets/_09_Elsherbeni_Honors_September_2024.pdf", //working on this page
    icon: Badge,
  },
  {
    title: "News",
    url: "/news",
    icon: NewspaperIcon,
  },
  {
    title: "ARC Lab",
    url: "https://arc.elsherbeni.com/",
    icon: Search,
  },
  {
    title: "ACES",
    url: "https://aces-society.org/",
    icon: FileTextIcon,
  },
  {
    title: "EE@Mines",
    url: "https://electrical.mines.edu/",
    icon: LinkIcon,
  },
];
export const NEWS = [
  {
  year:"2024",
  start:"September",
  description: "Dr. Atef Elsherbeni presented two papers and offered a short course at the combined ICEAA and IEEE APWC conferences during 3-6 of September 2024 in Lisbon, Portugal",
  bullet1: "-Paper #1 entitled \"Pyramidally Shaped Absorbing Boundary for FDTD Simulations\" and was coauthored by members of the ARC group: Robert Jones, Joseph Diener, Alec Wess, and Jushua Cast.",
  bullet2: "-Paper #2 entitled \"A Review of Radar Cross-Section evaluation of Canonical and Complex Objects\"",
  bullet3: "-Short course entitled: \"Time Domain Simulation of Electromagnetic Problems Combined with Linear and Nonlinear Circuit Elements\"",
  image1:"assets/ElsherShortCourse.jpg",
  },
  {
  year: "2023", 
  description: "Dr. Atef Elsherbeni received the 2023 Antennas and Propagation Society 2023 Harrington-Mittra Award in Computational Electromagnetics. Award cited Dr. Elsherbeni’s contribution to computational electromagnetics with hardware acceleration techniques.",
  image1:"/assets/Atef_award.jpg",
  image2:"/assets/Harrington-Mittra Award.jpg",
  },
]
export const PUBLICATION = [
  {
    title: "Journal Publications",
    link: "/assets/_01_Elsherbeni_Journal_Articles_August_2024.pdf",
  }, 
  {
    title: "Books",
    link: "/assets/_02_Elsherbeni_Books_Book_Chapters_September_2024.pdf",
  },
  {
    title: "Invited Seminars",
    link: "/assets/_03_Elsherbeni_Invited_Seminars_September_2024.pdf",
  },
  {
    title: "Conference Proceedings",
    link: "/assets/_04_Elsherbeni_Conference_Proceedings_September_2024.pdf",
  },
  {
    title: "Conference Abstracts",
    link: "/assets/_05_Elsherbeni_Conference_Abstracts_September_2024.pdf",
  },
  {
    title: "Software Packages",
    link: "/assets/_06_Elsherbeni_Software_September_2024.pdf",
  },
  {
    title: "Short Courses",
    link: "/assets/_07_Elsherbeni_Short_Courses_September_2024.pdf",
  }
];
export const CAREER = [
  {
    company: "Curriculum Vitae",
    link: "/assets/_00_Elsherbeni_CV_August_2024.pdf",
    badges: ["Hybrid"],
    title: "Software Developer and Technical Researcher",
    start: "Jul, 2021",
    end: "Present",
    description:
      "Developing and researching new technologies and tools for the frontend community.",
  }
  // {
  //   company: "Next.js Argentina",
  //   link: "https://github.com/nextjsargentina",
  //   badges: ["Hybrid"],
  //   title: "Developer Experience Architect",
  //   start: "Aug, 2023",
  //   end: "Present",
  //   description: "Building a non-profit open community of Next.js Argentina.",
  // },
  // {
  //   company: "BaseHub",
  //   link: "https://basehub.com",
  //   badges: ["Remote"],
  //   title: "Developer Relations",
  //   start: "Mar, 2024",
  //   end: "Apr, 2024",
  //   description:
  //     "Working on the product developer team to help developers build better apps with BaseHub CMS and its native AI.",
  // },
  // {
  //   company: "Smat.io",
  //   link: "https://smat.io",
  //   badges: ["Remote"],
  //   title: "QA Tester and Frontend Developer",
  //   start: "Aug, 2022",
  //   end: "Aug, 2023",
  //   description: `Led QA testing, using Jest and Playwright, ensuring web applications perform flawlessly.
  //   Collaborated on TDD implementation, optimizing code quality and minimizing bugs.
  //   Also, contributed to developing user-friendly interfaces with React.js, significantly enhancing user experiences.`,
  // },
  // {
  //   company: "Maker DAO",
  //   link: "https://makerdao.com",
  //   badges: ["Remote"],
  //   title: "Technical Writer and Translator",
  //   start: "Feb, 2022",
  //   end: "Aug, 2022",
  //   description: `Authored and translated technical documentation, including whitepapers,
  //   guides, and tutorials, to facilitate user understanding of blockchain and DeFi concepts.`,
  // },
  // {
  //   company: "El Chaperón",
  //   badges: ["On-site"],
  //   title: "Web Designer and Community Manager",
  //   start: "Jan, 2016",
  //   end: "Jan, 2019",
  //   description: `Responsive website development and design in WordPress.
  //   Online tourist services of the city of Rosario.
  //   Endorsed by the Rosario Hotel Association and Tourist Entity (ETUR).`,
  // },
];

const TAGS = {
  NEXT: {
    name: "Next.js",
    icon: NextJSIcon,
  },
  REACT: {
    name: "React",
    icon: ReactIcon,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    icon: TypeScriptIcon,
  },
  JAVASCRIPT: {
    name: "JavaScript",
    icon: JavaScriptIcon,
  },
  HTML: {
    name: "HTML",
    icon: HTMLIcon,
  },
  CSS: {
    name: "CSS",
    icon: CSSIcon,
  },
  VITE: {
    name: "Vite",
    icon: ViteIcon,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    icon: TailwindCSSIcon,
  },
  SHADCN: {
    name: "Shadcn/ui",
    icon: ShadcnIcon,
  },
  SWC: {
    name: "SWC",
    icon: SWCIcon,
  },
  OPENAI: {
    name: "OpenAI",
    icon: OpenAIIcon,
  },
  ASTRO: {
    name: "Astro",
    icon: AstroIcon,
  },
  SVELTE: {
    name: "Svelte",
    icon: SvelteIcon,
  },
  NODE: {
    name: "Node.js",
    icon: NodeJSIcon,
  },
  VITEST: {
    name: "Vitest",
    icon: VitestIcon,
  },
  BOOTSTRAP: {
    name: "Bootstrap",
    icon: BootstrapIcon,
  },
  SUPABASE: {
    name: "Supabase",
    icon: SupabaseIcon,
  },
  REDUX: {
    name: "Redux",
    icon: ReduxIcon,
  },
  PNPM: {
    name: "PNPM",
    icon: PNPMIcon,
  },
  VERCEL: {
    name: "Vercel",
    icon: VercelIcon,
  },
  BASEHUB: {
    name: "BaseHub",
    icon: BasehubIcon,
  },
  GRAPHQL: {
    name: "GraphQL",
    icon: GraphQLIcon,
  },
};

export const PROJECTS = [
  {
    title: "BaseHub - Next.js blog",
    tags: [
      TAGS.BASEHUB,
      TAGS.CSS,
      TAGS.NEXT,
      TAGS.PNPM,
      TAGS.REACT,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT,
      TAGS.VERCEL,
    ],
    description:
      "A starter guide template blog made with Next.js and BaseHub CMS. It uses the BaseHub API to fetch and display posts.",
    link: {
      github: "https://github.com/basehub-ai/nextjs-blog",
      preview: "https://nextjs-blog-basehub.vercel.app",
    },
    image: "/images/basehub-nextjs-blog.png",
  },
  {
    title: "Basement Challenge",
    tags: [
      TAGS.CSS,
      TAGS.NEXT,
      TAGS.PNPM,
      TAGS.REACT,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT,
    ],
    description: "Basement studio stream challenge.",
    link: {
      github: "https://github.com/emapeire/basement-challenge",
      preview: "https://emapeire-basement-challenge.vercel.app",
    },
    image: "/images/basement-challenge.png",
  },
  {
    title: "Chat With Vader",
    tags: [
      TAGS.JAVASCRIPT,
      TAGS.NEXT,
      TAGS.OPENAI,
      TAGS.REACT,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT,
    ],
    description:
      "A simple chat app that uses the OpenAI API and Vercel AI SDK to chat with Darth Vader.",
    link: {
      github: "https://github.com/emapeire/chat-with-vader",
    },
    image: "/images/chat-with-vader.png",
  },
  {
    title: "Cohere Chat",
    tags: [TAGS.JAVASCRIPT, TAGS.NODE],
    description:
      "A chatbot that uses the Cohere API to generate responses to user input.",
    link: {
      github: "https://github.com/emapeire/cohere-chat",
    },
    image: "/images/cohere-chat.png",
  },
  {
    title: "Comments App",
    tags: [
      TAGS.CSS,
      TAGS.HTML,
      TAGS.JAVASCRIPT,
      TAGS.REACT,
      TAGS.TYPESCRIPT,
      TAGS.VITE,
    ],
    description: "A simple comments app made with React and Vite.",
    link: {
      github: "https://github.com/emapeire/comments-react-query",
    },
    image: "/images/comments-app.png",
  },
  {
    title: "Crud App",
    tags: [
      TAGS.CSS,
      TAGS.HTML,
      TAGS.JAVASCRIPT,
      TAGS.REACT,
      TAGS.REDUX,
      TAGS.TYPESCRIPT,
      TAGS.VITE,
    ],
    description: "A simple CRUD app made with React and Vite.",
    link: {
      github: "https://github.com/emapeire/crud-react-redux",
      preview: "https://emapeire-crud-react-redux.netlify.app",
    },
    image: "/images/crud-app.png",
  },
  {
    title: "Eloquent JavaScript Chat",
    tags: [
      TAGS.NEXT,
      TAGS.OPENAI,
      TAGS.REACT,
      TAGS.SHADCN,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT,
    ],
    description:
      "In this app you will be able to interact with a intelligent llama that will answer your questions about JavaScript.",
    link: {
      github: "https://github.com/emapeire/eloquent-js-chat",
    },
    image: "/images/eloquent-js-chat.png",
  },
  {
    title: "Google Translate UI",
    tags: [
      TAGS.BOOTSTRAP,
      TAGS.CSS,
      TAGS.OPENAI,
      TAGS.HTML,
      TAGS.JAVASCRIPT,
      TAGS.REACT,
      TAGS.TYPESCRIPT,
      TAGS.VITE,
      TAGS.VITEST,
    ],
    description:
      "This is a simple API that uses the OpenAI GPT-4-vision-preview model to generate code from images.",
    link: {
      github: "https://github.com/emapeire/google-translate-clone",
    },
    image: "/images/google-translate-clone.png",
  },
  {
    title: "Image 2 Code",
    tags: [
      TAGS.NEXT,
      TAGS.OPENAI,
      TAGS.REACT,
      TAGS.SHADCN,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT,
    ],
    description:
      "This is a tool that converts images to code. It uses AI to generate code from images. It is based on the GPT-4-vision-preview model.",
    link: {
      github: "https://github.com/emapeire/image-to-code",
    },
    video: "/videos/image-2-code.webm",
  },
  {
    title: "JavaScript Quiz",
    tags: [
      TAGS.CSS,
      TAGS.HTML,
      TAGS.JAVASCRIPT,
      TAGS.REACT,
      TAGS.TYPESCRIPT,
      TAGS.VITE,
    ],
    description: "A simple quiz app made with React and Zustand.",
    link: {
      github: "https://github.com/emapeire/javascript-quiz",
      preview: "https://emapeire-javascript-quiz.netlify.app",
    },
    image: "/images/javascript-quiz.png",
  },
  {
    title: "Mercado Libre Challenge",
    tags: [
      TAGS.CSS,
      TAGS.NEXT,
      TAGS.PNPM,
      TAGS.REACT,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT,
    ],
    description:
      "Challenge to create a product search app using the Mercado Libre API. Built with Next.js and TypeScript.",
    link: {
      github: "https://github.com/emapeire/meli-challenge",
      preview: "https://emapeire-meli-challenge.vercel.app",
    },
    image: "/images/meli-challenge.png",
  },
  {
    title: "Mouse Follower",
    tags: [TAGS.CSS, TAGS.HTML, TAGS.JAVASCRIPT, TAGS.REACT, TAGS.VITE],
    description: "A simple mouse follower app made with React and Vite.",
    link: {
      github: "https://github.com/emapeire/mouse-follower",
      preview: "https://emapeire-mouse-follower.netlify.app",
    },
    video: "/videos/mouse-follower.webm",
  },
  {
    title: "Morty's characters",
    tags: [
      TAGS.CSS,
      TAGS.GRAPHQL,
      TAGS.JAVASCRIPT,
      TAGS.REACT,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT,
    ],
    description:
      "A simple app that lists all Morty's characters. Built with Next.js and GraphQL.",
    link: {
      github: "https://github.com/emapeire/nextjs-graphql",
      preview: "https://emapeire-nextjs-graphql.vercel.app",
    },
    image: "/images/morty-s-characters.png",
  },
  {
    title: "Movie Search App",
    tags: [TAGS.CSS, TAGS.HTML, TAGS.JAVASCRIPT, TAGS.REACT, TAGS.VITE],
    description: "A simple movie search app made with React and Vite.",
    link: {
      github: "https://github.com/emapeire/react-movie-search",
      preview: "https://emapeire-react-movie-search.netlify.app",
    },
    image: "/images/movie-search.png",
  },
  {
    title: "Next.js Chat App",
    tags: [
      TAGS.CSS,
      TAGS.HTML,
      TAGS.JAVASCRIPT,
      TAGS.NEXT,
      TAGS.PNPM,
      TAGS.REACT,
      TAGS.SHADCN,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT,
    ],
    description:
      "NextJS-Chat offers beginners a chat-based interface to learn Next.js and best coding practices through an AI expert.",
    link: {
      github: "https://github.com/nextjsargentina/next.js-chat",
    },
    video: "/videos/nextjs-chat.webm",
  },
  {
    title: "Next.js Releases App",
    tags: [
      TAGS.CSS,
      TAGS.HTML,
      TAGS.JAVASCRIPT,
      TAGS.NEXT,
      TAGS.PNPM,
      TAGS.REACT,
      TAGS.SHADCN,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT,
    ],
    description:
      "NextJS Releases is an App that tracks new releases on NextJS's GitHub repo.",
    link: {
      github: "https://github.com/nextjsargentina/next.js-releases",
      preview: "https://nextjs-releases.vercel.app",
    },
    image: "/images/nextjs-releases-app.png",
  },
  {
    title: "React GPT",
    tags: [TAGS.OPENAI, TAGS.REACT],
    description: "An AI-driven web engineering expert for React community.",
    link: {
      preview: "https://chat.openai.com/g/g-HNcbE0A5n-reactgpt",
    },
    image: "/images/react-gpt.png",
  },
  {
    title: "Screen Recorder",
    tags: [TAGS.CSS, TAGS.HTML, TAGS.JAVASCRIPT],
    description: "Native screen recorder made with MediaRecorder web-api",
    link: {
      github: "https://github.com/emapeire/screen-recorder",
    },
    video: "/videos/screen-recorder.webm",
  },
  {
    title: "Shopping Cart",
    tags: [TAGS.CSS, TAGS.HTML, TAGS.JAVASCRIPT, TAGS.REACT, TAGS.VITE],
    description: "A simple shopping cart app made with React and Vite.",
    link: {
      github: "https://github.com/emapeire/shopping-cart",
      preview: "https://emapeire-shopping-cart.netlify.app",
    },
    image: "/images/shopping-cart.png",
  },
  {
    title: "Space X Launches",
    tags: [TAGS.ASTRO, TAGS.JAVASCRIPT, TAGS.TYPESCRIPT],
    description:
      "A simple app that lists all SpaceX launches. Built with Astro and TypeScript.",
    link: {
      github: "https://github.com/emapeire/spacex-launches",
      preview: "https://emapeire-spacex-launches.vercel.app",
    },
    image: "/images/spacex-launches.png",
  },
  {
    title: "Spotify UI",
    tags: [
      TAGS.ASTRO,
      TAGS.JAVASCRIPT,
      TAGS.REACT,
      TAGS.SVELTE,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT,
    ],
    description: "An open-source Spotify clone built with Svelte and Astro.",
    link: {
      github: "https://github.com/emapeire/spotify-clone",
      preview: "https://emapeire-spotify-clone.vercel.app",
    },
    image: "/images/spotify-clone.png",
  },
  {
    title: "SWC Router",
    tags: [
      TAGS.CSS,
      TAGS.HTML,
      TAGS.JAVASCRIPT,
      TAGS.REACT,
      TAGS.SWC,
      TAGS.VITE,
    ],
    description:
      "Simple single-page applications (SPA) with ease using swc-router. This lightweight routing solution for React applications leverages the speed of SWC.",
    link: {
      github: "https://github.com/emapeire/swc-router",
      preview: "https://npmjs.com/package/swc-router",
    },
    image: "/images/swc-router.png",
  },
  {
    title: "View Transitions API",
    tags: [TAGS.ASTRO, TAGS.JAVASCRIPT],
    description:
      "This is a sample project that demonstrates how to use the View Transitions API with Astro.",
    link: {
      github: "https://github.com/emapeire/view-transitions-api",
      preview: "https://emapeire-view-transitions-api.vercel.app",
    },
    video: "/videos/view-transitions-api.webm",
  },
  {
    title: "Tesla Landing UI",
    tags: [TAGS.ASTRO, TAGS.JAVASCRIPT, TAGS.TAILWIND],
    description:
      "An open-source Tesla landing page built with Astro and Tailwind CSS.",
    link: {
      github: "https://github.com/emapeire/tesla-landing",
      preview: "https://emapeire-tesla-landing.vercel.app",
    },
    video: "/videos/tesla-landing-clone.webm",
  },
  {
    title: "Tic Tac Toe",
    tags: [TAGS.CSS, TAGS.HTML, TAGS.JAVASCRIPT, TAGS.REACT, TAGS.VITE],
    description: "A simple tic-tac-toe game made with React and TypeScript.",
    link: {
      github: "https://github.com/emapeire/tic-tac-toe",
      preview: "https://emapeire-tic-tac-toe.netlify.app",
    },
    image: "/images/tic-tac-toe.png",
  },
  {
    title: "Todo App",
    tags: [
      TAGS.CSS,
      TAGS.HTML,
      TAGS.JAVASCRIPT,
      TAGS.REACT,
      TAGS.TYPESCRIPT,
      TAGS.VITE,
    ],
    description: "A simple todo app made with React and TypeScript.",
    link: {
      github: "https://github.com/emapeire/todo-app-ts",
      preview: "https://emapeire-todo-ts.netlify.app",
    },
    image: "/images/todo-app-ts.png",
  },
  {
    title: "Twitter Follow Card UI",
    tags: [TAGS.CSS, TAGS.HTML, TAGS.JAVASCRIPT, TAGS.REACT, TAGS.VITE],
    description:
      "An open-source Twitter follow card built with React and Vite.",
    link: {
      github: "https://github.com/emapeire/twitter-follow-card",
      preview: "https://emapeire-twitter-follow-card.netlify.app",
    },
    image: "/images/twitter-follow-card.png",
  },
  {
    title: "Twitter UI",
    tags: [
      TAGS.JAVASCRIPT,
      TAGS.NEXT,
      TAGS.REACT,
      TAGS.SUPABASE,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT,
    ],
    description:
      "An open-source Twitter clone built with Next.js and Supabase.",
    link: {
      github: "https://github.com/emapeire/twitter-clone",
    },
    image: "/images/twitter-clone.png",
  },
];
