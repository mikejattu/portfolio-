import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, PenLine, FlaskConical, FileText, BookOpen } from "lucide-react";
export const DATA = {
  name: "Mike Jattu",
  initials: "MJ",
  url: "https://mikejattu.dev",
  location: "Edmonton, AB",
  locationLink: "https://www.google.com/maps/place/Edmonton,+AB",
  description:
    "Computer Science student and Data Scientist passionate about AI, machine learning, and building impactful applications.",
  summary:
    "I am currently pursuing my Honours Computer Science degree with an AI specialization at the University of Alberta while working as a Junior Data Scientist with the City of Edmonton. I've built machine learning models, worked on computer vision research, and developed full-stack applications. I enjoy contributing to projects that combine AI with real-world impact, such as stroke rehabilitation and food waste reduction.",
  avatarUrl: "/headshot2_mike.jpg",
  cvUrl: "/Mike_Jattu_CV.pdf", // Add your CV to the public folder
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
    { href: "/#research", icon: FlaskConical, label: "Research" },
    { href: "/#publications", icon: FileText, label: "Papers" },
    { href: "/#reading", icon: BookOpen, label: "Reading" },
    { href: "/#projects", icon: NotebookIcon, label: "Projects" },
    { href: "/blog", icon: PenLine, label: "Blog" },
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
      title: " 🏆 1st Place at Hack4Health 2025",
      dates: "Apr 2025",
      location: "Edmonton, AB",
      description:
        "Built Meducation, which is an AI-powered platform that revolutionizes medical education with tools like AI X-ray analysis, smart research summaries, VR case studies, and personalized exam prep to make learning more engaging, efficient, and impactful.",
      image: "/aisocialgood.png",
      links: [],
    },
    {
      title: "2nd Place at Devcon Hackathon 2025",
      dates: "Mar 2025",
      location: "University of Alberta",
      description:
        "Built RideSafe, which is an AI-powered app that enhances public transit safety by detecting real-time threats with computer vision and enabling instant rider reports through a seamless mobile experience.",
      image: "/hacked.png",
      links: [],
    },
    {
      title: "HackED 2025",
      dates: "Feb 2025",
      location: "University of Alberta",
      description:
        "Built FoodMinder, a smart grocery management app that helps reduce food waste, save money, and support sustainability through AI-powered receipt scanning, expiry tracking, recipe suggestions, and donation center recommendations.",
      image: "/hacked.png",
      links: [],
    },
  {
      title: "2nd Place at DevelopEd 2.0 2024",
      dates: "Feb 2025",
      location: "University of Alberta",
      description:
      "Built, Scheduler, a dynamic schedule-making app that helps users balance fixed commitments with flexible tasks, making time management smarter and more adaptable.",
      image: "/hacked.png",
      links: [],
    },
  ],
  
  // Research Interests Statement
  researchInterests: {
    statement: "I am deeply interested in developing AI systems that bridge the gap between theoretical machine learning and real-world applications. My research focuses on **computer vision for industrial automation**, **AI-assisted healthcare**, and **human-centered AI systems**. I am particularly drawn to problems where AI can augment human capabilities rather than replace them, making technology more accessible and impactful for underserved communities.",
    areas: [
      {
        title: "Computer Vision & Industrial AI",
        description: "Developing robust vision systems for real-world industrial applications, including segmentation models for monitoring and automation.",
      },
      {
        title: "AI for Healthcare",
        description: "Building accessible AI tools for medical education, rehabilitation, and diagnostics that can scale to underserved populations.",
      },
      {
        title: "Human-Computer Interaction",
        description: "Designing AI systems that effectively collaborate with humans, focusing on explainability and user-centered design.",
      },
    ],
  },

  // Research Experience
  research: [
    {
      title: "Research Assistant - Computer Vision for Industrial Monitoring",
      institution: "Faculty of Engineering, University of Alberta",
      href: "https://ualberta.ca",
      badges: [],
      logoUrl: "/ualberta.jpg",
      start: "Jan 2024",
      end: "Present",
      description: "Engineered a DeepLabV3 segmentation model for real-time sand level monitoring in dump hoppers, achieving 92% accuracy. Developed OPC UA-based communication system for industrial device connectivity. Deployed solutions in Linux production environment with real-time inference capabilities.",
    },
    {
      title: "Independent Researcher - AI-Powered Stroke Rehabilitation",
      institution: "Mind Motion Project",
      href: "https://mindmotion.ai",
      badges: [],
      logoUrl: "/ualberta.jpg",
      start: "2024",
      end: "Present",
      description: "Developing an AI-powered mobile application to make stroke rehabilitation more accessible. Designed pose estimation algorithms for tracking patient movements during exercises. Implemented real-time feedback system using Google Cloud Vision API.",
    },
  ],

  // Publications & Presentations
  publications: [
    // Example structure - update with your actual publications
    {
      title: "Example: Computer Vision Approaches for Industrial Monitoring Systems",
      authors: ["Mike Jattu", "Collaborator Name"],
      venue: "Conference/Journal Name",
      year: "2025",
      type: "conference", // "conference", "journal", "preprint", "thesis", "poster"
      status: "in-preparation", // "published", "accepted", "under-review", "in-preparation"
      links: {
        paper: "",
        code: "",
        slides: "",
      },
      abstract: "Brief description of the paper...",
    },
    // Add more publications as you have them
  ],

  // Reading List - Books & Papers
  reading: {
    currentlyReading: [
      {
        title: "Deep Learning",
        author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
        type: "book", // "book", "paper", "article"
        link: "https://www.deeplearningbook.org/",
        cover: "📘",
      },
      {
        title: "Attention Is All You Need",
        author: "Vaswani et al.",
        type: "paper",
        link: "https://arxiv.org/abs/1706.03762",
        cover: "📄",
      },
    ],
    completed: [
      {
        title: "Designing Machine Learning Systems",
        author: "Chip Huyen",
        type: "book",
        link: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/",
        cover: "📗",
      },
      {
        title: "Clean Code",
        author: "Robert C. Martin",
        type: "book",
        link: "",
        cover: "📕",
      },
      {
        title: "An Image is Worth 16x16 Words: Transformers for Image Recognition",
        author: "Dosovitskiy et al.",
        type: "paper",
        link: "https://arxiv.org/abs/2010.11929",
        cover: "📄",
      },
    ],
    wantToRead: [
      {
        title: "The Alignment Problem",
        author: "Brian Christian",
        type: "book",
        link: "",
        cover: "📙",
      },
      {
        title: "Superintelligence",
        author: "Nick Bostrom",
        type: "book",
        link: "",
        cover: "📓",
      },
    ],
  },
} as const;
