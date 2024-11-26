export const personalInfo = {
  name: "Your Name",
  role: "Full Stack Developer",
  bio: "Passionate full-stack developer with expertise in modern web technologies. I love building beautiful, responsive, and user-friendly applications that solve real-world problems.",
  location: "San Francisco, CA",
  email: "your.email@example.com",
  availability: "Open to opportunities",
  profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
  backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
};

export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  instagram: "https://instagram.com/yourusername",
};

export const skills = {
  technical: [
    {
      category: "Frontend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Framer Motion", level: 80 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 80 },
        { name: "GraphQL", level: 75 },
      ],
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "CI/CD", level: 75 },
        { name: "Linux", level: 80 },
      ],
    },
  ],
  soft: [
    "Problem Solving",
    "Team Leadership",
    "Agile Methodology",
    "Project Management",
    "Communication",
  ],
};

export const experience = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Company",
    location: "San Francisco, CA",
    period: "2021 - Present",
    description: [
      "Led development of mission-critical applications using React and Node.js",
      "Implemented microservices architecture reducing system latency by 40%",
      "Mentored junior developers and conducted code reviews",
      "Introduced automated testing improving code coverage to 90%",
    ],
    technologies: ["React", "Node.js", "AWS", "MongoDB", "Docker"],
  },
  {
    title: "Full Stack Developer",
    company: "Startup Inc",
    location: "Remote",
    period: "2019 - 2021",
    description: [
      "Built and maintained multiple client-facing applications",
      "Developed RESTful APIs and implemented authentication systems",
      "Optimized database queries improving application performance",
      "Collaborated with design team to implement responsive UI/UX",
    ],
    technologies: ["Vue.js", "Python", "PostgreSQL", "Redis", "AWS"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    location: "New York, NY",
    period: "2018 - 2019",
    description: [
      "Developed responsive web applications using modern JavaScript frameworks",
      "Implemented pixel-perfect designs from Figma mockups",
      "Optimized web performance and accessibility",
      "Worked directly with clients to gather requirements",
    ],
    technologies: ["React", "SASS", "JavaScript", "Webpack", "Jest"],
  },
];

export const projects = [
  {
    title: "AI-Powered Task Manager",
    description: "A smart task management application that uses AI to prioritize and categorize tasks automatically. Features natural language processing for task input and intelligent deadline suggestions.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2069",
    tags: ["React", "Python", "TensorFlow", "MongoDB"],
    liveUrl: "https://project1.com",
    githubUrl: "https://github.com/yourusername/project1",
    highlights: [
      "Implemented machine learning model for task categorization",
      "Built real-time collaboration features",
      "Integrated natural language processing",
      "Developed responsive mobile-first UI",
    ],
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and analytics dashboard. Supports multiple vendors and includes an admin panel.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://project2.com",
    githubUrl: "https://github.com/yourusername/project2",
    highlights: [
      "Implemented secure payment processing",
      "Built analytics dashboard",
      "Integrated inventory management system",
      "Developed vendor management portal",
    ],
  },
  {
    title: "Real-time Collaboration Tool",
    description: "A collaborative workspace application with real-time document editing, video conferencing, and project management features. Includes end-to-end encryption for secure communication.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
    tags: ["React", "WebRTC", "Socket.io", "Redis"],
    liveUrl: "https://project3.com",
    githubUrl: "https://github.com/yourusername/project3",
    highlights: [
      "Implemented WebRTC for video calls",
      "Built real-time document editing",
      "Developed chat system with encryption",
      "Created project management features",
    ],
  },
  {
    title: "Fitness Tracking App",
    description: "Mobile-first fitness tracking application with social features...",
    image: "https://images.unsplash.com/photo-1461088945293-0c17689e48ac?q=80&w=2073",
    tags: ["React Native", "GraphQL", "Node.js"],
    liveUrl: "https://project4.com",
    githubUrl: "https://github.com/yourusername/project4",
    highlights: [
      "Implemented social features",
      "Built mobile-first UI",
      "Integrated GraphQL API",
      "Developed real-time tracking features",
    ],
  },
];

export const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "University Name",
    location: "City, State",
    period: "2016 - 2018",
    description: "Focused on Artificial Intelligence and Distributed Systems. Completed thesis on distributed machine learning systems.",
    achievements: [
      "Published research paper on distributed systems",
      "Graduated with honors (4.0 GPA)",
      "Teaching Assistant for Advanced Algorithms",
    ],
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    school: "University Name",
    location: "City, State",
    period: "2012 - 2016",
    description: "Core focus on software development, algorithms, and data structures. Minor in Mathematics.",
    achievements: [
      "Dean's List all semesters",
      "Led university coding club",
      "Won hackathon competition",
    ],
  },
];

export const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2022",
    url: "https://certification-url.com",
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google",
    date: "2021",
    url: "https://certification-url.com",
  },
  {
    name: "MongoDB Certified Developer",
    issuer: "MongoDB",
    date: "2020",
    url: "https://certification-url.com",
  },
];

export const testimonials = [
  {
    name: "John Doe",
    role: "Project Manager at Tech Corp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2069",
    text: "One of the most talented developers I've worked with. Delivers high-quality code consistently and always meets deadlines.",
  },
  {
    name: "Jane Smith",
    role: "CTO at Startup Inc",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070",
    text: "Exceptional problem-solving skills and great team player. Transformed our development processes and improved overall code quality.",
  },
  {
    name: "Mike Johnson",
    role: "Lead Developer at Digital Co",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070",
    text: "Outstanding technical skills and great mentor. Always willing to help team members and share knowledge.",
  },
];

export const blogPosts = [
  {
    title: "Building Scalable Applications with Microservices",
    date: "2023-12-01",
    summary: "Learn how to design and implement scalable applications using microservices architecture...",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2069",
    url: "/blog/scalable-applications",
    tags: ["Architecture", "Microservices", "Scalability"],
  },
  {
    title: "Modern State Management in React Applications",
    date: "2023-11-15",
    summary: "Exploring different state management solutions in React and when to use them...",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070",
    url: "/blog/react-state-management",
    tags: ["React", "State Management", "Frontend"],
  },
  {
    title: "Optimizing Database Performance",
    date: "2023-11-01",
    summary: "Tips and techniques for improving database performance in production environments...",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
    url: "/blog/database-optimization",
    tags: ["Database", "Performance", "Optimization"],
  },
  {
    title: 'Building Modern Web Applications with Next.js 15',
    summary: 'Learn how to leverage the latest features in Next.js 15 to build fast, responsive, and SEO-friendly web applications.',
    date: '2024-02-15',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070',
    url: '/blog/building-modern-web-applications-nextjs-15',
    tags: ['Next.js', 'React', 'Web Development', 'Performance'],
    readTime: '8 min read'
  },
  {
    title: 'Mastering Framer Motion Animations',
    summary: 'A comprehensive guide to creating smooth, interactive animations in React using Framer Motion.',
    date: '2024-02-10',
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070',
    url: '/blog/mastering-framer-motion-animations',
    tags: ['Animation', 'React', 'Framer Motion', 'UI/UX'],
    readTime: '6 min read'
  },
  {
    title: 'The Power of Tailwind CSS',
    summary: 'Discover how Tailwind CSS can revolutionize your styling workflow and boost development productivity.',
    date: '2024-02-05',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055',
    url: '/blog/power-of-tailwind-css',
    tags: ['CSS', 'Tailwind', 'Web Development', 'Design'],
    readTime: '5 min read'
  },
  {
    title: 'Advanced React Patterns and Best Practices',
    summary: 'Explore advanced React patterns and learn best practices for building scalable applications.',
    date: '2024-01-30',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070',
    url: '/blog/advanced-react-patterns',
    tags: ['React', 'JavaScript', 'Architecture', 'Best Practices'],
    readTime: '10 min read'
  },
  {
    title: 'Optimizing Website Performance',
    summary: 'Learn essential techniques for optimizing your website\'s performance and improving user experience.',
    date: '2024-01-25',
    image: 'https://images.unsplash.com/photo-1461088945293-0c17689e48ac?q=80&w=2069',
    url: '/blog/optimizing-website-performance',
    tags: ['Performance', 'Web Development', 'Optimization', 'UX'],
    readTime: '7 min read'
  },
  {
    title: 'Building a Modern Portfolio Website',
    summary: 'Step-by-step guide on creating a stunning portfolio website using Next.js, Tailwind CSS, and Framer Motion.',
    date: '2024-01-20',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069',
    url: '/blog/building-modern-portfolio-website',
    tags: ['Portfolio', 'Next.js', 'Tailwind', 'Tutorial'],
    readTime: '12 min read'
  }
];
