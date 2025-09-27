import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
export const DATA = {
  name: "Mike Jattu",
  initials: "MJ",
  url: "https://mikejattu.dev",
  location: "Edmonton, AB",
  locationLink: "https://www.google.com/maps/place/Edmonton,+AB",
  description:
    "Computer Science student and Data Scientist passionate about AI, machine learning, and building impactful applications.",
  summary:
    "I am currently pursuing my Honours Computer Science degree with an AI specialization at the University of Alberta while working as a Junior Data Scientist with the City of Edmonton. I’ve built machine learning models, worked on computer vision research, and developed full-stack applications. I enjoy contributing to projects that combine AI with real-world impact, such as stroke rehabilitation and food waste reduction.",
  avatarUrl: "/headshot2_mike.jpg",
  skills: [
    "Python",
    "C++",
    "Java",
    "TypeScript",
    "React",
    "Node.js",
    "SQL",
    "MongoDB",
    "Docker",
    "TensorFlow",
    "PyTorch",
    "Matlab",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: NotebookIcon, label: "Projects" },
  ],
  contact: {
    email: "sjattu@ualberta.ca",
    tel: "+1-825-889-0012",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mikejattu",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/mikejattu",
        icon: Icons.linkedin,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@mikejattu",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:sjattu@ualberta.ca",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "City of Edmonton",
      href: "https://edmonton.ca",
      badges: [],
      location: "Edmonton, AB",
      title: "Junior Data Scientist",
      logoUrl: "/city.jpg",
      start: "May 2024",
      end: "Present",
      description:
        "Developing AI-driven solutions for municipal projects, focusing on data analysis, visualization, and computer vision models. Worked on projects including hopper oil sands level detection and optimization dashboards for city operations.",
    },
    {
      company: "Faculty of Engineering, University of Alberta",
      href: "https://ualberta.ca",
      badges: [],
      location: "Edmonton, AB",
      title: "Research Assistant",
      logoUrl: "/ualberta.jpg",
      start: "Jan 2024",
      end: "Present",
      description:
        "I engineered and deployed a computer vision solution using a DeepLabV3 segmentation model to monitor sand levels in dump hoppers, achieving 92% accuracy and optimizing oil sands operations within a Linux environment. Concurrently, I further optimized oil sands operations by developing an OPC UA-based communication system that successfully established connectivity with company cameras and other industrial devices."
        },
    {
      company: "Ryan",
      href: "https://ryan.com/canada/",
      badges: [],
      location: "Edmonton, AB",
      title: "Software Developer Intern",
      logoUrl: "/ryan.png",
      start: "May 2024",
      end: "Present",
      description:
        " I designed and developed both VBA macros for Excel to automate complex tasks, enhancing data management efficiency by 90%, and a modern web application (using React, FastAPI, Databricks, and TypeScript) to streamline the lead qualification process for the SHRED team by enabling efficient company information retrieval.",
    },
  ],
  teaching: [
    {
    title: "Teaching Assistant - CMPUT 101  ( Intro to Computing )",
    href: "https://ualberta.ca",
    badges: [],
    location: "Edmonton, AB",
    subtitle: "University of Alberta",
    logoUrl: "/ualberta.jpg",
    start: "May 2025",
    end: "Jun 2025",
    description:
      "I managed a 3-hour lab section of 80 students, simultaneously providing both constructive feedback through grading and direct assistance with labs, assignments, and core lecture content."
      },
    {
    title: "Teaching Assistant - CMPUT 204 (Algorithms I)",
    href: "https://ualberta.ca",
    badges: [],
    location: "Edmonton, AB",
    subtitle: "University of Alberta",
    logoUrl: "/ualberta.jpg",
    start: "Jan 2025",
    end: "Apr 2025",
    description:
      "I provided instructional support by grading student work and offering constructive feedback, assisting with exercises and lecture content, and holding regular office hours to resolve student doubts."
    },
    {
      title: " Teaching Assistant - CMPUT 229 ( Computer Organization and Architecture I )",
      href: "https://ualberta.ca",
      badges: [],
      location: "Edmonton, AB",
      subtitle: "University of Alberta",
      logoUrl: "/ualberta.jpg",
      start: "Jan 2024",
      end: "Apr 2024",
      description:
        "I managed a 3-hour lab section for 80 students, providing both constructive feedback through grading and direct assistance with labs, assignments, and core lecture content.",
    },

  ],
  education: [
    {
      school: "University of Alberta",
      href: "https://ualberta.ca",
      degree: "BSc Honors Computer Science (AI Option)",
      logoUrl: "/ualberta.jpg",
      start: "2022",
      end: "2027 (Expected Graduation)",
    }
  ],
  projects: [
    {
      title: "Mind Motion",
      href: "https://mindmotion.ai",
      dates: "2024 - Present",
      active: true,
      description:
        "An AI-powered stroke rehabilitation assistant that provides tailored exercises, tracks recovery, and offers real-time feedback to patients, making therapy more accessible and effective.",
      technologies: [
        "React Native",
        "Node.js",
        "MongoDB",
        "Google Cloud Vision",
        "Firebase",
        "Express",
      ],
      links: [
        {
          type: "Website",
          href: "https://mindmotion.ai",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mindmotion.png",
      video: "",
    },
    {
      title: "Food Minder",
      href: "https://foodminder.app",
      dates: "2025 - Present",
      active: true,
      description:
        "Cross-platform app to reduce food waste by tracking groceries, predicting expiry dates, scanning receipts, suggesting recipes, and recommending donation centers.",
      technologies: [
        "React Native",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Firebase",
        "OCR",
      ],
      links: [
        {
          type: "Website",
          href: "https://foodminder.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/foodminder.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "HackED 2024",
      dates: "Jan 2024",
      location: "University of Alberta",
      description:
        "Built an AI-powered grocery assistant that helps users reduce food waste. Focused on OCR receipt scanning and expiry prediction.",
      image: "/hacked.png",
      links: [],
    },
    {
      title: "AI for Social Good Hackathon",
      dates: "2023",
      location: "Toronto, ON",
      description:
        "Developed a computer vision model to analyze accessibility features in public spaces and provide real-time feedback for urban design improvements.",
      image: "/aisocialgood.png",
      links: [],
    },
  ],
} as const;
