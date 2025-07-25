import React, { useState, useEffect, useRef } from 'react';

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to scroll to a section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
    }
  };

  // Intersection Observer for fade-in effect
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Optional: Unobserve after visible if animation should only play once
            // observer.unobserve(entry.target);
          } else {
            // Optional: Remove class if you want animation to replay on scroll back
            // entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  // Data extracted from the resume (unchanged from previous version)
  const personalData = {
    name: "FATHIMA AFRA A.M",
    phone: "+91-9916851796",
    location: "Palakkad, Kerala",
    email: "afraarakkal@gmail.com",
    linkedin: "https://www.linkedin.com/in/fathima-afra-a-m-a43634307/", // Placeholder, add actual LinkedIn URL
    github: "https://github.com/fathimaafra", // Placeholder, add actual GitHub URL
    tagline: "Innovating at the Intersection of AI and Web Development",
    about: "A passionate and results-driven Computer Science and Design student with hands-on experience in Agentic AI, web development, and machine learning. Eager to contribute to innovative software solutions and leverage cutting-edge technologies to solve real-world problems. Proficient in a variety of programming languages and frameworks, with a strong foundation in front-end development and a keen interest in intelligent automation.",
  };

  const educationData = [
    {
      degree: "B. Tech Computer Science and Design",
      institution: "Government Engineering College Kozhikode",
      years: "2022-2026",
      cgpa: "8.88",
      location: "Kozhikode, Kerala",
    },
    {
      degree: "Higher Secondary School in Computer Science",
      institution: "Kanikkamatha Convent English Medium Girls Higher Secondary School",
      years: "2020-2022",
      percentage: "97.9%",
      location: "Palakkad, Kerala",
    },
    {
      degree: "Secondary School Class X",
      institution: "Royale Concorde International School-CBSE",
      years: "2016-2020",
      percentage: "89.9%",
      location: "Mysore, Karnataka",
    },
  ];

  const experienceData = [
    {
      title: "Software Developer (Onsite Intern)",
      company: "Leuwint Technologies Private Limited",
      duration: "May 2025 - June 2025",
      location: "Software Technology Park, NIDA, Palakkad, Kerala",
      responsibilities: [
        "Contributed to the development of software solutions, applying principles of agentic AI for automation.",
        "Utilized React.js and React Native to build and enhance front-end components for internal and client applications.",
      ],
    },
    {
      title: "Data Science and Machine Learning Intern",
      company: "STEM Robotics",
      duration: "January 2023 - February 2023",
      location: "", // Location not specified in resume for this entry
      responsibilities: [
        "Completed a 15-day internship in Data Science and Machine Learning.",
        "Gained hands-on experience with data preprocessing, model building, and evaluation.",
        "Worked with tools like Python, pandas, and scikit-learn for analysis and modeling.",
      ],
    },
  ];

  const projectsData = [
    {
      title: "Web Automation using Agentic AI",
      technologies: "Agentic AI, Playwright",
      description: "Developed web automation solutions leveraging agentic AI principles with Playwright, focusing on designing intelligent agents to autonomously perform tasks and interact with web environments.",
      image: "https://placehold.co/600x400/3A3A3A/E0E0E0?text=Web+Automation+AI", // Placeholder image updated for dark theme
       
    },
    {
      title: "Mobile Automation using Agentic AI",
      technologies: "Agentic AI, Appium",
      description: "Developed mobile automation solutions leveraging agentic AI principles with Appium, focusing on designing intelligent agents to autonomously perform tasks and interact with mobile environments.",
      image: "https://placehold.co/600x400/3A3A3A/E0E0E0?text=Mobile+Automation+AI", // Placeholder image updated for dark theme
      link: "#", // Placeholder link
    },
    {
      title: "Braille Detection using AI",
      technologies: "AI, Web Development, Image Processing, Machine Learning",
      description: "Created an AI-powered web application for detecting and interpreting Braille. Implemented image processing and machine learning techniques for accurate Braille recognition. Developed interactive games within the application to facilitate Braille language learning and integrated audio and PDF converters.",
      image: "https://placehold.co/600x400/3A3A3A/E0E0E0?text=Braille+Detection+AI", // Placeholder image updated for dark theme
      link: "#", // Placeholder link
    },
    {
      title: "Online Rig Booking App",
      technologies: "React Native, Node.js",
      description: "Built the front-end of an online rig booking mobile application using React Native. Designed a user-friendly interface with features for browsing, booking, and managing rig rentals. Developed two separate applications: one for customers and one for rig owners.",
      image: "https://placehold.co/600x400/3A3A3A/E0E0E0?text=Rig+Booking+App", // Placeholder image updated for dark theme
      link: "#", // Placeholder link
    },
  ];

  const skillsData = {
    languages: ["Python", "Java", "C", "SQL", "PHP", "HTML", "CSS", "JavaScript"],
    technologies: ["Node.js", "React.js", "React Native", "GitHub", "AR/VR", "OpenCV"],
    developerTools: ["VS Code", "PyCharm"],
    softSkills: ["Leadership", "Management", "Communication", "Problem-solving", "Teamwork", "Adaptability"],
  };

  const certificationsData = [
    "Responsive Web Design (FreeCodeCamp)",
    "Javascript Algorithms and Data Structures (Beta) (FreeCodeCamp)",
    "Machine Learning with Python (FreeCodeCamp)",
    "React JS (Scaler)",
    "Mastering Generative AI and ChatGPT (GeeksforGeeks)",
    "NodeJS (Simplilearn)",
  ];

  const extracurricularData = [
    "Fluent in English, Malayalam, Hindi, and Kannada.",
    "Passionionate about teaching; conducted classes on web development and Python programming through TinkerHub and IEEE.",
    "Actively volunteered with TinkerHub, including participation in organizing hackathons.",
    "Served as Head Girl in school, demonstrating leadership and organizational skills.",
  ];

  return (
    <div className="font-sans text-light bg-dark-primary antialiased">
      {/* Tailwind CSS CDN */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Cormorant Garamond (for headings/navbar) and EB Garamond (for body) */}
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&family=EB+Garamond:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <style>
        {`
          body {
            font-family: 'EB Garamond', serif; /* Changed body font to EB Garamond */
            background-image: url('https://www.transparenttextures.com/patterns/lined-paper.png'); /* Subtle paper texture */
            background-repeat: repeat;
            background-size: 100px; /* Adjust size as needed */
            background-blend-mode: multiply; /* Blend with background color */
          }
          h1, h2, h3, h4 {
            font-family: 'Cormorant Garamond', serif;
          }
          html {
            scroll-behavior: smooth;
          }
          /* Custom Color Palette */
          :root {
            --dark-primary: #1E1E1E; /* Main background */
            --dark-secondary: #2C2C2C; /* Card/secondary section background */
            --text-light: #F5F5F5; /* Off-white for general text */
            --text-dark: #1C1C1C; /* Vintage ink black for text on lighter backgrounds */
            --accent-gold-light: #C3B091; /* Muted gold for highlights/hover */
            --accent-gold-dark: #B8860B; /* Dark Goldenrod - for headings/highlights, buttons */
            --accent-olive: #6E6658; /* Desaturated olive */
            --accent-burgundy: #6B2E2E; /* Deep burgundy */

            /* Navbar Specific Colors */
            --navbar-bg: #D4A017; /* Mustard Yellow */
            --navbar-text: #1E1E1C; /* Deep ink black */
            --navbar-hover-text: rgba(30, 30, 28, 0.8); /* Slightly lighter black on hover */
            --navbar-active-border: #1E1E1C; /* Deep ink black for active underline */
            --join-button-bg: #3B2F2F; /* Dark brown for Join Now button */
            --join-button-text: #F5F5DC; /* Cream for Join Now button text */

            /* Button Colors (Mustard Yellow for general site buttons) */
            --button-primary: #DAA520; /* Goldenrod */
            --button-primary-dark: #B8860B; /* Dark Goldenrod */
          }

          .bg-dark-primary { background-color: var(--dark-primary); }
          .bg-dark-secondary { background-color: var(--dark-secondary); }
          .text-light { color: var(--text-light); }
          .text-accent { color: var(--accent-gold-dark); }
          .bg-button-primary { background-color: var(--button-primary); }
          .hover\\:bg-button-primary-dark:hover { background-color: var(--button-primary-dark); }
          .border-accent-gold { border-color: var(--accent-gold-dark); }
          .hover\\:text-accent-gold:hover { color: var(--accent-gold-light); }

          /* Navbar specific styling */
          .nav-link.active {
            border-bottom: 2px solid var(--navbar-active-border);
            color: var(--navbar-text); /* Active link text color */
            font-weight: 700; /* Make active link bolder */
          }
          .navbar-shadow {
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Deeper shadow */
          }
          .navbar-border-bottom {
            border-bottom: 1px solid rgba(0, 0, 0, 0.1); /* Subtle border for dark navbar */
          }

          /* Fade-in on scroll animation */
          .fade-in-section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
          .fade-in-section.is-visible {
            opacity: 1;
            transform: translateY(0);
          }

          /* Glassmorphism effect for cards (subtle) */
          .glassmorphism-card {
            background-color: rgba(44, 44, 44, 0.7); /* bg-dark-secondary with transparency */
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border: 1px solid rgba(224, 224, 224, 0.1); /* light border for depth */
          }
        `}
      </style>

      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-[var(--navbar-bg)] navbar-shadow z-50 bg-opacity-90 backdrop-filter backdrop-blur-lg navbar-border-bottom transition-all duration-300 ease-in-out">
        <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold text-[var(--navbar-text)] font-['Cormorant_Garamond']"> {/* Calligraphic font for brand name */}
            <a href="#home" onClick={() => scrollToSection('home')}>Fathima Afra A.M.</a>
          </div>
          <div className="hidden md:flex items-center space-x-8"> {/* Added items-center for vertical alignment */}
            <a href="#home" onClick={() => scrollToSection('home')} className={`nav-link text-[var(--navbar-text)] hover:text-[var(--navbar-hover-text)] transition-all duration-300 ease-in-out pb-2 uppercase tracking-wider font-['Cormorant_Garamond'] ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
            <a href="#projects" onClick={() => scrollToSection('projects')} className={`nav-link text-[var(--navbar-text)] hover:text-[var(--navbar-hover-text)] transition-all duration-300 ease-in-out pb-2 uppercase tracking-wider font-['Cormorant_Garamond'] ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a> {/* Changed to Projects */}
            <a href="#certifications" onClick={() => scrollToSection('certifications')} className={`nav-link text-[var(--navbar-text)] hover:text-[var(--navbar-hover-text)] transition-all duration-300 ease-in-out pb-2 uppercase tracking-wider font-['Cormorant_Garamond'] ${activeSection === 'certifications' ? 'active' : ''}`}>Library</a>
            <a href="#about" onClick={() => scrollToSection('about')} className={`nav-link text-[var(--navbar-text)] hover:text-[var(--navbar-hover-text)] transition-all duration-300 ease-in-out pb-2 uppercase tracking-wider font-['Cormorant_Garamond'] ${activeSection === 'about' ? 'active' : ''}`}>About</a>
            <a href="#contact" onClick={() => scrollToSection('contact')} className={`nav-link text-[var(--navbar-text)] hover:text-[var(--navbar-hover-text)] transition-all duration-300 ease-in-out pb-2 uppercase tracking-wider font-['Cormorant_Garamond'] ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
            {/* Removed "Join Now" button */}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[var(--navbar-text)] hover:text-[var(--navbar-hover-text)] focus:outline-none transition-all duration-300 ease-in-out">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </nav>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[var(--navbar-bg)] pb-4 shadow-inner transition-all duration-300 ease-in-out">
            <div className="flex flex-col items-center space-y-4">
              <a href="#home" onClick={() => scrollToSection('home')} className="text-[var(--navbar-text)] hover:text-[var(--navbar-hover-text)] transition-all duration-300 ease-in-out uppercase tracking-wider font-['Cormorant_Garamond']">Home</a>
              <a href="#projects" onClick={() => scrollToSection('projects')} className="text-[var(--navbar-text)] hover:text-[var(--navbar-hover-text)] transition-all duration-300 ease-in-out uppercase tracking-wider font-['Cormorant_Garamond']">Projects</a> {/* Changed to Projects */}
              <a href="#certifications" onClick={() => scrollToSection('certifications')} className="text-[var(--navbar-text)] hover:text-[var(--navbar-hover-text)] transition-all duration-300 ease-in-out uppercase tracking-wider font-['Cormorant_Garamond']">Library</a>
              <a href="#about" onClick={() => scrollToSection('about')} className="text-[var(--navbar-text)] hover:text-[var(--navbar-hover-text)] transition-all duration-300 ease-in-out uppercase tracking-wider font-['Cormorant_Garamond']">About</a>
              <a href="#contact" onClick={() => scrollToSection('contact')} className="text-[var(--navbar-text)] hover:text-[var(--navbar-hover-text)] transition-all duration-300 ease-in-out uppercase tracking-wider font-['Cormorant_Garamond']">Contact</a>
              {/* Removed "Join Now" button */}
            </div>
          </div>
        )}
      </header>

      <main className="pt-20"> {/* Padding top to account for fixed header */}
        {/* Home/Hero Section */}
        <section id="home" className="relative bg-gradient-to-br from-[#1A1A1A] to-[#333333] text-light py-20 md:py-32 flex items-center justify-center min-h-screen">
          <div className="container mx-auto px-6 text-center fade-in-section" ref={(el) => (sectionRefs.current[0] = el)}>
            <div className="animate-fade-in-down">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 uppercase">
                Hi, I'm <span className="text-accent">{personalData.name}</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                {personalData.tagline}
              </p>
              <div className="space-x-4">
                <a href="#projects" onClick={() => scrollToSection('projects')} className="bg-button-primary text-text-dark hover:bg-button-primary-dark px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300 transform hover:scale-105">
                  View My Work
                </a>
                <a href="#contact" onClick={() => scrollToSection('contact')} className="border-2 border-text-light text-text-light hover:bg-button-primary hover:border-button-primary text-text-dark px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300 transform hover:scale-105">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
          {/* Curved section divider */}
          <svg className="absolute bottom-0 left-0 w-full h-auto text-dark-primary" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,0 L0,50 C200,100 400,0 600,50 C800,100 1000,0 1200,50 C1400,100 1440,50 1440,0 L1440,100 L0,100 L0,0 Z"></path>
          </svg>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-dark-primary relative z-10">
          <div className="container mx-auto px-6 fade-in-section" ref={(el) => (sectionRefs.current[1] = el)}>
            <h2 className="text-4xl font-bold text-center text-accent mb-12 uppercase">About Me</h2>
            <div className="flex flex-col md:flex-row items-center md:space-x-12">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <img
                  src="me.jpg"
                  alt="Fathima Afra A.M."
                  className="rounded-full shadow-lg w-64 h-64 mx-auto object-cover border-4 border-accent-gold"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/3A3A3A/E0E0E0?text=Photo"; }}
                />
              </div>
              <div className="md:w-2/3 text-lg text-light leading-relaxed">
                <p className="mb-4">{personalData.about}</p>
                <h3 className="text-2xl font-semibold text-accent mb-4 uppercase">Education</h3>
                {educationData.map((edu, index) => (
                  <div key={index} className="mb-4 p-4 bg-dark-secondary rounded-lg shadow-md glassmorphism-card">
                    <h4 className="text-xl font-semibold text-accent-gold-dark">{edu.degree}</h4>
                    <p className="text-light">{edu.institution} ({edu.years})</p>
                    <p className="text-gray-400">{edu.location} {edu.cgpa && `| CGPA: ${edu.cgpa}`} {edu.percentage && `| Percentage: ${edu.percentage}`}</p>
                  </div>
                ))}
                <div className="mt-6 flex space-x-4 justify-center md:justify-start">
                  <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="bg-button-primary text-text-dark px-6 py-2 rounded-full hover:bg-button-primary-dark transition duration-300 shadow-md transform hover:scale-105">
                    LinkedIn
                  </a>
                  <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300 shadow-md transform hover:scale-105">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24 bg-dark-secondary relative z-10">
          <div className="container mx-auto px-6 fade-in-section" ref={(el) => (sectionRefs.current[2] = el)}>
            <h2 className="text-4xl font-bold text-center text-accent mb-12 uppercase">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <SkillCategory title="Languages" skills={skillsData.languages} />
              <SkillCategory title="Technologies/Frameworks" skills={skillsData.technologies} />
              <SkillCategory title="Developer Tools" skills={skillsData.developerTools} />
              <SkillCategory title="Soft Skills" skills={skillsData.softSkills} />
            </div>
          </div>
          {/* Curved section divider */}
          <svg className="absolute bottom-0 left-0 w-full h-auto text-dark-primary" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,0 L0,50 C200,100 400,0 600,50 C800,100 1000,0 1200,50 C1400,100 1440,50 1440,0 L1440,100 L0,100 L0,0 Z"></path>
          </svg>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 md:py-24 bg-dark-primary relative z-10">
          <div className="container mx-auto px-6 fade-in-section" ref={(el) => (sectionRefs.current[3] = el)}>
            <h2 className="text-4xl font-bold text-center text-accent mb-12 uppercase">Experience</h2>
            <div className="space-y-12">
              {experienceData.map((exp, index) => (
                <div key={index} className="bg-dark-secondary p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 glassmorphism-card transform hover:scale-[1.01]">
                  <h3 className="text-2xl font-bold text-accent-gold-dark mb-2">{exp.title}</h3>
                  <p className="text-xl text-light mb-2">{exp.company} {exp.location && `| ${exp.location}`}</p>
                  <p className="text-md text-gray-400 mb-4">{exp.duration}</p>
                  <ul className="list-disc list-inside text-light space-y-2">
                    {exp.responsibilities.map((res, i) => (
                      <li key={i}>{res}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* Curved section divider */}
          <svg className="absolute bottom-0 left-0 w-full h-auto text-dark-secondary" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,0 L0,50 C200,100 400,0 600,50 C800,100 1000,0 1200,50 C1400,100 1440,50 1440,0 L1440,100 L0,100 L0,0 Z"></path>
          </svg>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 bg-dark-secondary relative z-10">
          <div className="container mx-auto px-6 fade-in-section" ref={(el) => (sectionRefs.current[4] = el)}>
            <h2 className="text-4xl font-bold text-center text-accent mb-12 uppercase">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projectsData.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
          {/* Curved section divider */}
          <svg className="absolute bottom-0 left-0 w-full h-auto text-dark-primary" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,0 L0,50 C200,100 400,0 600,50 C800,100 1000,0 1200,50 C1400,100 1440,50 1440,0 L1440,100 L0,100 L0,0 Z"></path>
          </svg>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-16 md:py-24 bg-dark-primary relative z-10">
          <div className="container mx-auto px-6 fade-in-section" ref={(el) => (sectionRefs.current[5] = el)}>
            <h2 className="text-4xl font-bold text-center text-accent mb-12 uppercase">Certifications & Extracurriculars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-accent mb-6 uppercase">Certifications</h3>
                <ul className="list-disc list-inside text-light space-y-3">
                  {certificationsData.map((cert, index) => (
                    <li key={index} className="p-3 bg-dark-secondary rounded-md shadow-sm glassmorphism-card transform hover:scale-[1.01] transition duration-300">{cert}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-accent mb-6 uppercase">Extracurricular Activities</h3>
                <ul className="list-disc list-inside text-light space-y-3">
                  {extracurricularData.map((activity, index) => (
                    <li key={index} className="p-3 bg-dark-secondary rounded-md shadow-sm glassmorphism-card transform hover:scale-[1.01] transition duration-300">{activity}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-[#1A1A1A] to-[#333333] text-light">
          <div className="container mx-auto px-6 text-center fade-in-section" ref={(el) => (sectionRefs.current[6] = el)}>
            <h2 className="text-4xl font-bold mb-8 uppercase text-accent">Get in Touch</h2>
            <p className="text-xl mb-12 opacity-90">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="max-w-xl mx-auto bg-dark-secondary p-8 rounded-lg shadow-lg text-light glassmorphism-card">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-left text-sm font-medium text-light">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:ring-button-primary focus:border-button-primary bg-gray-800 text-light"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-left text-sm font-medium text-light">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:ring-button-primary focus:border-button-primary bg-gray-800 text-light"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-left text-sm font-medium text-light">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:ring-button-primary focus:border-button-primary bg-gray-800 text-light"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-button-primary text-text-dark py-3 rounded-md font-semibold hover:bg-button-primary-dark transition duration-300 shadow-md transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="mt-12 text-lg space-y-4">
              <p>Email: <a href={`mailto:${personalData.email}`} className="underline hover:text-accent-gold-light">{personalData.email}</a></p>
              <p>Phone: {personalData.phone}</p>
              <p>Location: {personalData.location}</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-gold-light transition duration-300">
              {/* LinkedIn Icon - using a simple SVG placeholder for now */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-gold-light transition duration-300">
              {/* GitHub Icon - using a simple SVG placeholder for now */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.08-.731.084-.716.084-.716 1.192.085 1.816 1.29 1.816 1.29 1.065 1.815 2.802 1.292 3.495.987.108-.767.418-1.291.76-1.593-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.293-1.552 3.301-1.23 3.301-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.197-6.091 8.197-11.387c0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Reusable SkillCategory Component
const SkillCategory = ({ title, skills }) => (
  <div className="bg-dark-secondary p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 glassmorphism-card transform hover:scale-[1.01]">
    <h3 className="text-2xl font-semibold text-accent-gold-dark mb-4 uppercase">{title}</h3>
    <ul className="list-none space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center text-light">
          <svg className="w-5 h-5 text-accent-gold-light mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

// Reusable ProjectCard Component
const ProjectCard = ({ project }) => (
  <div className="bg-dark-secondary rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2 glassmorphism-card">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover"
      onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/3A3A3A/E0E0E0?text=${encodeURIComponent(project.title)}`; }}
    />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-light mb-2">{project.title}</h3>
      <p className="text-accent-gold-dark font-medium mb-3">{project.technologies}</p>
      <p className="text-gray-400 text-base mb-4">{project.description}</p>
    </div>
  </div>
);

export default App;
