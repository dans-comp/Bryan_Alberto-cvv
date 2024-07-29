import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { ConsultlyLogo } from "@/images/logos";

export const RESUME_DATA = {
  name: "Bryan Alberto",
  initials: "BA",
  location: "Dallas, Texas, United States",
  about:
    "Passionate Full Stack Developer focused on creating innovative and efficient solutions.",
  summary:
    "Eager to grow my software development skills.",
  avatarUrl: "", // Add your profile photo URL here
  personalWebsiteUrl: "",
  contact: {
    email: "bryancorrea98@hotmail.com",
    tel: "+2146834885",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/dans-comp",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bryan-alberto-04307b203",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/bryan_2cool",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Frisco High School",
      degree: "High school diploma",
      start: "2013",
      end: "2017",
    },
  ],
  work: [
    {
      company: "UPS",
      link: "https://www.jobs-ups.com",
      badges: ["onsite"],
      title: "Unloader",
      start: "2024",
      end: null,
      description:
        "Unload trucks and place packages on the conveyor belt.",
    },
    {
      company: "Amazon",
      link: "https://www.amazon.jobs",
      badges: ["onsite"],
      title: "Delivery Driver",
      start: "2021",
      end: "2024",
      description:
        "Load van at the warehouse in the morning, then deliver packages to customers.",
    },
    {
      company: "Walgreens",
      link: "https://www.walgreens.com/locator/walgreens-5775+fm+423-frisco-tx-75036/id=10920",
      badges: ["onsite"],
      title: "Cashier",
      start: "2020",
      end: "2021",
      description:
        "Assist customers and complete transactions at checkout.",
    },
    {
      company: "PetSmart",
      link: "https://www.petsmart.com/",
      badges: ["onsite"],
      title: "Cashier",
      start: "2019",
      end: "2020",
      description:
        "Answer customer questions and process transactions at checkout.",
    },
  ],
  skills: [
    "JavaScript",
    "Spanish",
  ],
  projects: [
    {
      title: "Nox About Me Website",
      techStack: [
        "GitHub",
        "Claude",
        "Cursor",
      ],
      description:
        "A website that showcases my skills and background.",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/dans-comp/project-alpha",
      },
    },
    {
      title: "E-commerce Store",
      techStack: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
      ],
      description:
        "A full-stack e-commerce platform with product listings, shopping cart, and secure checkout.",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/dans-comp/e-commerce-store",
      },
    },
  ],
} as const;