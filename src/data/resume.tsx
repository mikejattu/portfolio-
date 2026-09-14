import { Icons } from "@/components/icons";
import {
  FileText,
  FlaskConical,
  HomeIcon,
  NotebookIcon,
  PenLine,
} from "lucide-react";

export const DATA = {
  name: "Mike Jattu",
  initials: "MJ",
  url: "https://mikejattu.vercel.app",
  location: "Edmonton, AB",
  locationLink: "https://www.google.com/maps/place/Edmonton,+AB",
  description:
    "Honors Computer Science student and data scientist building practical AI and computer vision systems.",
  summary:
    "I am pursuing a **BSc Honors in Computer Science with an AI Option** at the University of Alberta. My work spans computer vision research for industrial monitoring, open-source traffic analytics, and software that connects AI systems to real operational data.",
  avatarUrl: "/headshot2_mike.jpg",
  cvUrl: "/Mike_Jattu_CV.pdf",
  skills: [
    "Python",
    "C++",
    "Java",
    "TypeScript",
    "React",
    "Node.js",
    "FastAPI",
    "SQL",
    "MongoDB",
    "Docker",
    "TensorFlow",
    "PyTorch",
    "Databricks",
    "Computer Vision",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#research", icon: FlaskConical, label: "Research" },
    { href: "/#publications", icon: FileText, label: "Papers" },
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
        url: "https://www.linkedin.com/in/mikejattu",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:sjattu@ualberta.ca",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "City of Edmonton",
      href: "https://github.com/CityofEdmonton/cityvision",
      badges: ["Open Source"],
      location: "Edmonton, AB",
      title: "Data Scientist",
      logoUrl: "/city.jpg",
      start: "May 2025",
      end: "Dec 2025",
      description:
        "Developed and deployed a vehicle-detection model and data pipeline for continuous training and lifecycle management. The open-source traffic system reduced vehicle-detection infrastructure costs by about 65%.",
    },
    {
      company: "Ryan",
      href: "https://ryan.com/canada/",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/ryan.png",
      start: "May 2024",
      end: "Apr 2026",
      description:
        "Developed MCP-based chatbots that connect multiple business data sources and built a lead-qualification web application that reduced information retrieval time by 60%.",
    },
  ],
  teaching: [
    {
      title: "Undergraduate Teaching Assistant",
      href: "https://www.ualberta.ca/en/computing-science/index.html",
      badges: [],
      location: "Edmonton, AB",
      subtitle: "University of Alberta",
      logoUrl: "/ualberta.jpg",
      start: "Sept 2024",
      end: "Present",
      description:
        "Supported courses in introductory computing, algorithms, computer architecture, machine learning, honors calculus, and honors linear algebra through labs, office hours, grading, and student feedback.",
    },
  ],
  education: [
    {
      school: "University of Alberta",
      href: "https://www.ualberta.ca/",
      degree: "BSc Honors in Computer Science, AI Option",
      logoUrl: "/ualberta.jpg",
      start: "2022",
      end: "May 2027",
    },
  ],
  projects: [
    {
      title: "Guardian",
      href: "https://github.com/aryankumar2811/shift_simulator",
      dates: "2026",
      active: true,
      description:
        "Scenario-based learning platform that helps ESL learners prepare for the Alberta Basic Security Training exam with multilingual and voice support.",
      technologies: ["TypeScript", "React", "AI", "Speech"],
      links: [
        {
          type: "Source",
          href: "https://github.com/aryankumar2811/shift_simulator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "RideSafe",
      href: "https://github.com/mikejattu/RideSafe",
      dates: "2025",
      active: true,
      description:
        "Real-time public-transit safety application that uses a Vision Transformer to detect threats and supports immediate rider reporting.",
      technologies: ["Computer Vision", "Vision Transformer", "Python", "React"],
      links: [
        {
          type: "Source",
          href: "https://github.com/mikejattu/RideSafe",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "FoodMinder",
      href: "https://github.com/samia225/FoodMinder",
      dates: "2025",
      active: true,
      description:
        "AI-assisted grocery manager with receipt OCR, expiry reminders, recipe suggestions, and nearby food-donation discovery.",
      technologies: ["OCR", "TypeScript", "React Native", "Firebase"],
      links: [
        {
          type: "Source",
          href: "https://github.com/samia225/FoodMinder",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "3rd Place, DevCon Hackathon 2026",
      dates: "2026",
      location: "University of Alberta",
      description:
        "Built Guardian, a multilingual, voice-enabled training platform for security certification learners.",
      image: "",
      links: [
        {
          title: "Source",
          href: "https://github.com/aryankumar2811/shift_simulator",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "1st Place, Hack4Health 2025",
      dates: "2025",
      location: "Edmonton, AB",
      description:
        "Built an AI-assisted medical education experience focused on making complex clinical material easier to explore.",
      image: "",
      links: [],
    },
    {
      title: "2nd Place, DevCon Hackathon 2025",
      dates: "2025",
      location: "University of Alberta",
      description:
        "Built RideSafe, a real-time threat-detection and rider-reporting application for public transit.",
      image: "",
      links: [
        {
          title: "Source",
          href: "https://github.com/mikejattu/RideSafe",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
  researchInterests: {
    statement:
      "My research interests lie in **reinforcement learning**, **machine learning theory**, **continual and adaptive learning**, and **reliable machine learning**. I am particularly interested in understanding how learning algorithms behave, characterizing their reliability and uncertainty, and developing robust decision-making methods for changing environments. I also have a strong background in **computer vision**, especially segmentation-based systems and uncertainty-aware prediction.",
    areas: [
      {
        title: "Reinforcement Learning",
        description:
          "Learning algorithms for robust sequential decision-making under uncertainty.",
      },
      {
        title: "Machine Learning Theory",
        description:
          "Understanding the behavior, guarantees, and limitations of learning methods.",
      },
      {
        title: "Continual & Adaptive Learning",
        description:
          "Methods that adapt reliably as data, tasks, and environments change.",
      },
      {
        title: "Reliable Machine Learning",
        description:
          "Uncertainty-aware models and dependable prediction, including segmentation-based computer vision.",
      },
    ],
  },
  research: [
    {
      title: "Undergraduate Research Assistant",
      institution: "PDASA Lab, University of Alberta",
      href: "https://apps.ualberta.ca/directory/person/bhuang",
      badges: [],
      logoUrl: "/ualberta.jpg",
      start: "Jan 2025",
      end: "Sept 2026",
      description:
        "Developed a vision-based soft sensor using DeepLabV3 semantic segmentation and contour post-processing to estimate oil-sands levels in dump hoppers, reaching 92% accuracy under industrial conditions.",
    },
  ],
  publications: [
    {
      title: "Oil-Sands Level Identification in a Dump Hopper",
      authors: ["Mike Jattu", "K. H. S. Sekhon", "S. S. Bhase", "Biao Huang"],
      venue: "University of Alberta, manuscript in preparation",
      year: "2025",
      type: "preprint",
      status: "in-preparation",
      links: {},
      abstract:
        "A vision-based soft-sensing method combining DeepLabV3 semantic segmentation with contour post-processing to estimate hopper fill levels from industrial camera footage.",
    },
  ],
  reading: {
    currentlyReading: [
      {
        title: "Deep Learning",
        author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
        type: "book",
        link: "https://www.deeplearningbook.org/",
        cover: "Book",
      },
      {
        title: "Attention Is All You Need",
        author: "Vaswani et al.",
        type: "paper",
        link: "https://arxiv.org/abs/1706.03762",
        cover: "Paper",
      },
    ],
    completed: [
      {
        title: "Designing Machine Learning Systems",
        author: "Chip Huyen",
        type: "book",
        link: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/",
        cover: "Book",
      },
      {
        title: "An Image is Worth 16x16 Words",
        author: "Dosovitskiy et al.",
        type: "paper",
        link: "https://arxiv.org/abs/2010.11929",
        cover: "Paper",
      },
    ],
    wantToRead: [
      {
        title: "The Alignment Problem",
        author: "Brian Christian",
        type: "book",
        link: "",
        cover: "Book",
      },
      {
        title: "Superintelligence",
        author: "Nick Bostrom",
        type: "book",
        link: "",
        cover: "Book",
      },
    ],
  },
} as const;
