
import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  // ==========================================
  // 1. BASIC IDENTITY
  // ==========================================
  name: "Suraj Nawale", 
  firstName: "Suraj",
  title: "AI Automation Engineer & QA Specialist",
  tagline: "From Hardware Precision to Software Autonomy.",
  
  about: "A seasoned Quality Engineer with 3.5 years of technical expertise, bridging the gap between physical system maintenance and digital AI automation.",
  
  detailedBio: "My engineering journey didn't start with code; it started with hardware. As a Certified Maintenance Technician, I learned the core principles of system reliability and preventative maintenance. I've spent the last 3.5 years translating that same 'zero-failure' mindset into the digital world. Today, I architect autonomous AI workflows and robust SDET frameworks that treat software with the same precision as high-performance machinery.",

  // ==========================================
  // 2. CONTACT INFORMATION (EDIT THESE LINKS!)
  // ==========================================
  contact: {
    // Put your professional email here
    email: "srjnawle@gmail.com", 
    
    // Paste your full LinkedIn profile URL here
    linkedin: "https://www.linkedin.com/in/suraj-nawale-24a65a37b/", 
    
    // Paste your Upwork profile URL here (or leave as is if not used)
    upwork: "https://www.upwork.com/freelancers/~0143c22dead37a28da", 
    
    // Paste your GitHub profile URL here (Important for "View Source" proof)
    github: "https://github.com/surajnawle", 
    
    location: "Remote /Pune, India",
    availability: "AVAILABLE_FOR_HIRE"
  },

  // ==========================================
  // 3. CORE VALUES & PHILOSOPHY
  // ==========================================
  personalValues: [
    {
      title: "Mechanical Precision",
      description: "Applying the rigorous standards of physical maintenance to digital codebases and automation logic.",
      icon: "⚙️"
    },
    {
      title: "AI-First Mindset",
      description: "Utilizing Large Language Models to automate complex decision-making processes and feedback loops.",
      icon: "🧠"
    },
    {
      title: "Data Integrity",
      description: "Advanced SQL and ETL auditing ensure that every automated workflow is built on a foundation of truth.",
      icon: "🎯"
    }
  ],

  // ==========================================
  // 4. SERVICES / FREELANCE PACKAGES
  // ==========================================
  services: [
    {
      title: "AI Workflow Design",
      description: "Automating customer feedback loops, email responses, and lead triaging using n8n, OpenAI, and Google Sheets.",
      icon: "🤖"
    },
    {
      title: "E2E Web Automation",
      description: "Building scalable, self-healing test suites with Playwright and Python that ensure 99.9% application uptime.",
      icon: "🛡️"
    },
    {
      title: "Data Pipeline QA",
      description: "Rigorous ETL validation and SQL auditing for large-scale migrations and data warehousing projects.",
      icon: "💾"
    },
    {
      title: "Industrial Logic",
      description: "Applying technician-level troubleshooting to complex software integrations and API architectures.",
      icon: "🔧"
    }
  ],

  // ==========================================
  // 5. SOCIAL PROOF (TESTIMONIALS)
  // ==========================================
  testimonials: [
    {
      name: "Engineering Manager",
      role: "Enterprise Software Group",
      text: "Suraj's ability to bridge QA and AI is unique. He doesn't just find bugs; he builds systems that prevent them from ever happening. His SQL and ETL skills are top-tier."
    },
    {
      name: "Technical Lead",
      role: "E-commerce Solutions",
      text: "The Playwright framework Suraj architected reduced our testing cycle by 70%. He is fast, reliable, and deeply understands the automation lifecycle."
    }
  ],

  // ==========================================
  // 6. FREELANCE PRICING TIERS
  // ==========================================
  packages: [
    {
      name: "System Quality Audit",
      price: "Introductory $199",
      features: [
        "Full Manual System Walkthrough",
        "Bug Identification Report",
        "Automation Feasibility Study",
        "48-Hour Delivery",
        "1-on-1 Strategy Call"
      ]
    },
    {
      name: "AI Workflow Launch",
      price: "Starting at $649",
      features: [
        "n8n or Make.com Setup",
        "AI Sentiment Analysis (OpenAI)",
        "Automated Email/Sheet Logic",
        "Live Monitoring Dashboard",
        "Documentation & Training",
        "Self-Healing Logic"
      ],
      isPopular: true
    },
    {
      name: "Custom SDET Framework",
      price: "Custom Quote",
      features: [
        "Playwright/Python Foundation",
        "GitHub Actions Integration",
        "Parallel Execution Setup",
        "HTML Coverage Reporting",
        "Monthly Maintenance Option",
        "Unlimited Test Scripts"
      ]
    }
  ],

  // ==========================================
  // 7. TECHNICAL SKILLS GRID
  // ==========================================
  skills: [
    {
      name: "AI & No-Code Automation",
      skills: ["n8n", "Make.com", "GitHub Copilot", "Zapier", "OpenAI API"]
    },
    {
      name: "Core Engineering",
      skills: ["Python", "Playwright", "JavaScript", "Cypress", "Pytest"]
    },
    {
      name: "Data & Backend",
      skills: ["ETL Testing", "SQL (Advanced)", "Postman API", "BigQuery", "Data Validation"]
    },
    {
      name: "Technical Foundation",
      skills: ["System Maintenance", "Root Cause Analysis", "Prompt Engineering", "Jira", "SDLC"]
    }
  ],

  // ==========================================
  // 8. WORK HISTORY
  // ==========================================
  experience: [
    {
      company: "Independent Automation (Freelance)",
      role: "AI Automation Architect",
      period: "Jan 2025 – Present",
      type: 'IT',
      description: [
        "Started a specialized consultancy focusing on AI-integrated testing and n8n workflow automation.",
        "Developing autonomous sentiment analysis pipelines for client feedback using OpenAI GPT-4o.",
        "Automating data synchronization between disparate CRM platforms via custom Make.com scenarios.",
        "Leveraging GitHub Copilot and custom prompt engineering to build automation scripts 3x faster than traditional methods."
      ]
    },
    {
      company: "Tech-Enterprise Solutions",
      role: "Senior Software Quality Engineer",
      period: "2021 – 2024",
      type: 'IT',
      description: [
        "Owned the end-to-end automation strategy for a high-traffic fintech platform (3-year tenure).",
        "Architected a scalable Playwright + Python framework that achieved 90% regression coverage.",
        "Validated multi-million record ETL pipelines using advanced SQL auditing and data profiling tools.",
        "Reduced production critical bugs by 60% through proactive API testing and CI/CD integration.",
        "Mentored junior QA associates on automation best practices and SQL optimization."
      ]
    }
  ],

  // ==========================================
  // 9. EDUCATION
  // ==========================================
  education: [
    {
      institution: "Professional Engineering Institute",
      degree: "Bachelor of Computer Science & Engineering",
      period: "2017 – 2021",
      details: "Focused on Software Architecture, Database Management Systems, and Algorithm Design."
    },
    {
      institution: "Technical Training Center",
      degree: "Certified Maintenance Technician",
      period: "Prior to 2021",
      details: "Specialized in mechanical system diagnostics, preventative maintenance, and industrial troubleshooting."
    }
  ],

  // ==========================================
  // 10. PROJECT SHOWCASE
  // ==========================================
  projects: [
    {
      id: "project-1",
      title: "AI Customer Feedback Workflow",
      description: "A comprehensive system that monitors Google Sheets, uses AI to categorize customer reviews, and sends automated replies via Gmail.",
      techStack: ["N8N", "OPENAI", "GOOGLE SHEETS", "MAKE.COM"],
      results: "100% automated response rate with 95% sentiment accuracy.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000"
    },
    {
      id: "project-2",
      title: "Playwright E2E Suite",
      description: "A robust, cross-browser automation suite for enterprise web apps, featuring visual regression testing and detailed HTML reporting.",
      techStack: ["PLAYWRIGHT", "PYTHON", "GITHUB ACTIONS"],
      results: "Reduced regression testing time from 8 hours to 15 minutes.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000"
    }
  ]
};
