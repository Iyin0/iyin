import {
  IconBrandGithub,
  IconFile,
  IconMail,
  IconBrandLinkedin,
  IconBrandReact,
  IconStack2,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandFlutter,
  IconBrandAws,
  IconBrandDocker,
  IconBrandGit,
  IconSql,
  IconBrandMongodb,
  IconBrandGraphql,
  IconShoppingBag,
  IconPresentation,
} from "@tabler/icons-react";

export const links = [
  {
    title: "Resume",
    icon: IconFile,
    href: "https://drive.google.com/file/d/1WLTdXK3IeLdsGVMfYlhUJnLtz9rdzTHU/view?usp=sharing",
    target: "_blank",
  },
  {
    title: "GitHub",
    icon: IconBrandGithub,
    href: "https://github.com/Iyin0",
    target: "_blank",
  },
  {
    title: "LinkedIn",
    icon: IconBrandLinkedin,
    href: "https://www.linkedin.com/in/isaac-bilewu/",
    target: "_blank",
  },
  {
    title: "Email",
    icon: IconMail,
    href: "mailto:p2iyinoluwa@gmail.com",
    target: "_blank",
  },
  {
    title: "My Stacks",
    icon: IconStack2,
    href: "#my-stacks",
    target: "_self",
  },
  {
    title: "My Projects",
    icon: IconPresentation,
    href: "#my-projects",
    target: "_self",
  },
];

export const stacks = [
  {
    title: "HTML",
    icon: IconBrandHtml5,
  },
  {
    title: "CSS",
    icon: IconBrandCss3,
  },
  {
    title: "JavaScript",
    icon: IconBrandJavascript,
  },
  {
    title: "TypeScript",
    icon: IconBrandTypescript,
  },
  {
    title: "React",
    icon: IconBrandReact,
  },
  {
    title: "Next.js",
    icon: IconBrandNextjs,
  },
  {
    title: "Tailwind CSS",
    icon: IconBrandTailwind,
  },
  {
    title: "Node.js",
    icon: IconBrandNodejs,
  },
  {
    title: "Flutter",
    icon: IconBrandFlutter,
  },
  {
    title: "AWS",
    icon: IconBrandAws,
  },
  {
    title: "Docker",
    icon: IconBrandDocker,
  },
  {
    title: "Git",
    icon: IconBrandGit,
  },
  {
    title: "MySQL",
    icon: IconSql,
  },
  {
    title: "MongoDB",
    icon: IconBrandMongodb,
  },
  {
    title: "GraphQL",
    icon: IconBrandGraphql,
  },
  {
    title: "Shopofy",
    icon: IconShoppingBag,
  },
];

export const projects =  [
  {
      name: "Valley",
      info: `Valley's LinkedIn AI SDR books sales calls on autopilot with high-intent leads by identifying website visitors,
        scoring every lead to check for ICP, and personalizing every outreach with deep research on every prospect.`,
      stacks: ["Next.js", "Node.js", "Tailwind CSS", 'Nest.js', 'PostgreSQL', 'Prisma ORM','Git', 'Shadcn-UI', 'React-form-hook', 'Zod'],
      about: ``,
      link: 'https://joinvalley.co',
      image: '/images/valley.png'
  },
  {
      name: "Leytro",
      info: "Leytro is a leading insurtech company specialising in usage-based insurance for SMEs. Leytro delivers user-friendly, " +
          "cost-effective, and incentive-driven insurance policies tailored for fleet managers and drivers.",
      stacks: ["Next.js", "SCSS", "Flutter", 'React-form-hook', 'Zod'],
      about: `Leytro incorporates telematics intelligence to continuously assess the driving behaviours of 
      policyholders, offering real-time insights into their driving habits. This capability empowers businesses to optimise their fleet 
      management strategies to seamlessly make insurance payments via the app, utilising a pay-as-you-go approach with fair premiums and incentives 
      for safe driving.`,
      link: 'https://leytro.com',
      image: '/images/leytro.png'
  },
  {
      name: "RapidMedicare",
      info: "This is a telemedicine web app where patients can book appointment with a doctor, get a consultation " +
          "and have their prescription delivered by the nearest pharmacy.",
      stacks: ["Next.js", "SCSS"],
      about: "RapidMedicare is a healthcare technology company that is " +
          "developing a telemedicine platform and a unified patient " +
          "electronic health record (EHR) system to help patients and doctors " +
          "solve the problem of, fragmented patient health records system, " +
          "lack of access to healthcare Services, poor patient compliance " +
          "with meds regardless of location.",
      link: "https://rapidmed.care/",
      image: '/images/rapidmedicare.png'
  },
  {
      name: "Quickly MarketPlace",
      info: "This is an e-commerce platform for students in schools",
      stacks: ["Nest.js", "MySQL", "AWS"],
      about: "This is an e-commerce web app platform which is targeted to help students in schools sell and purchase products easily and safely. The web app focuses on taking care of student's businesses while they can focus on their studies.",
      link: "https://quickly.com.ng/",
      image: '/images/quickly.png'
  },
  {
      name: "Artsy",
      info: "This is an e-commerce web app for art sales and purchases.",
      stacks: ["React", "Typescript", "SCSS"],
      about: "This is an e-commerce web app platform for the sales and purchase of art. Artists and artwork lovers can advertise and trade their arts as NFTs on the platform.",
      link: "https://artsy-by-iyin.netlify.app/",
      image: '/images/artsy.png'
  },

  {
      name: "Musica",
      info: "This is a music webapp that allows users to create and enjoy their personalised playlist anytime.",
      stacks: ["React", "Typescript", "SCSS", "Node.js", "MongoDB"],
      about: "This webapp allows users to create and enjoy their personalised playlist anytime. Users can customize their playlist by including their preferred playlist name and description, as well as a playlist cover.",
      link: "https://musica-by-iyin.netlify.app/",
      image: '/images/musica.png'
  },

  {
      name: "My Debtor",
      info: "This is a fully developed website to assist schools with recovering student debts as well as prevent the admission of a debtor.",
      stacks: ["React", "CSS"],
      about: "My debtor is a school administrative webapp. It's primary function is to help schools recover debts from defaulting students, " +
          "who on many occasions leave for another school without balancing their debts. This app helps other schools track this type of students " +
          "so the will not be admitted to their school, which in turn helps them to prevent the defaulting student from owing in their school.",
      link: "https://mydebtor-by-iyin.netlify.app/",
      image: '/images/mydebtor.png'
  },

  {
      name: "Spotify",
      info: "This is a Spotify web app.",
      stacks: ["React", "CSS"],
      about: "This is a Sporify web app for listening and enjoying your favourite music. It features the use of Spotify API to manage the user's interest and interaction. The user's login is authenticated by Spotify so users' credentials are secure. The user, when logged in can view different playlists suggested on the homepage and through the search page. The user can also control playback of their favourite songs.",
      link: "https://iyin0.github.io/spotify-web/",
      image: '/images/spotify.png'
  },

];
