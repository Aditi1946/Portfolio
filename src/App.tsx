import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Code2, Layers, Zap, BookOpen, Calendar, Award, ArrowRight, Star, Coffee, Rocket } from 'lucide-react';

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [stats, setStats] = useState({ projects: 0, skills: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    const counters = [
      { key: 'projects', target: 4, duration: 2000 },
      { key: 'skills', target: 15, duration: 2500 }
    ];

    counters.forEach(({ key, target, duration }) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setStats(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setStats(prev => ({ ...prev, [key]: Math.floor(start) }));
        }
      }, 16);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "E-Commerce Website",
      description: "Full-featured online shopping platform with user authentication, shopping cart, product search, and order management.",
      emoji: "🛒",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      features: ["User Authentication", "Shopping Cart", "Payment Gateway", "Order Tracking"]
    },
    {
      title: "Food Delivery App",
      description: "Online food ordering platform with restaurant listings, menu browsing, cart functionality, and order tracking.",
      emoji: "🍕",
      tech: ["React", "JavaScript", "CSS", "API"],
      features: ["Restaurant Search", "Real-time Menu", "Cart System", "Order Management"]
    },
    {
      title: "Expense Tracker App",
      description: "Personal finance management tool to track income and expenses with categorization and visual charts.",
      emoji: "💰",
      tech: ["React", "JavaScript", "Chart.js", "Storage"],
      features: ["Income Tracking", "Expense Categories", "Visual Charts", "Monthly Reports"]
    },
    {
      title: "Weather App",
      description: "Interactive weather application displaying current conditions, hourly forecasts, and 7-day outlook.",
      emoji: "🌤️",
      tech: ["JavaScript", "HTML", "CSS", "Weather API"],
      features: ["Live Weather", "7-Day Forecast", "Location Search", "Weather Icons"]
    },
    {
      title: "Books List App",
      description: "Digital library application for managing personal book collections with search and reading status tracking.",
      emoji: "📚",
      tech: ["React", "JavaScript", "CSS", "Local Storage"],
      features: ["Book Management", "Search System", "Reading Status", "Categories"]
    }
  ];

  const skills = {
    "Frontend Development": {
      items: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"]
    },
    "Backend Development": {
      items: ["Node.js", "Express.js", "MongoDB", "REST APIs"]
    },
    "Programming & DSA": {
      items: ["Java", "Data Structures", "Algorithms", "Problem Solving"]
    },
    "Tools & Others": {
      items: ["Git & GitHub", "VS Code", "Postman", "Figma"]
    }
  };

  const education = [
    {
      school: "KIET Deemed to be University",
      degree: "B.Tech in Computer Science",
      period: "2023 - 2027",
      cgpa: "8.4",
      highlight: "Pre-Final Year",
      level: "Undergraduate"
    },
    {
      school: "The Doon Valley Public School",
      degree: "Senior Secondary (XII)",
      period: "2023",
      cgpa: "86",
      highlight: "CBSE",
      level: "12th",
      coursework: "Physics, Chemistry, Mathematics, Computer Science"
    },
    {
      school: "The Doon Valley Public School",
      degree: "Secondary (X)",
      period: "2021",
      cgpa: "97.8",
      highlight: "CBSE",
      level: "10th",
      coursework: "CBSE Curriculum"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden cursor-none">
      {/* Custom Cursor Glow */}
      <div
        className="fixed w-64 h-64 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none mix-blend-screen"
        style={{
          left: `${mousePosition.x - 128}px`,
          top: `${mousePosition.y - 128}px`,
          transition: 'all 0.1s ease-out',
          zIndex: 1
        }}
      />

      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}></div>
      </div>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'backdrop-blur-2xl bg-black/70 border-b border-white/10 shadow-2xl' : 'backdrop-blur-xl bg-black/30'}`}>
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur-md"></div>
                <div className="relative w-10 h-10 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center font-bold text-lg">
                  AS
                </div>
              </div>
              <span className="font-bold text-xl">Aditi Sharma</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['About', 'Skills', 'Projects', 'Education', 'Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-gray-400 hover:text-white transition-colors relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-violet-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
            <div className="flex gap-3">
              <a href="https://github.com/Aditi1946" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all backdrop-blur-sm border border-white/10 hover:scale-110">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/aditi-sharma-643a712a6" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all backdrop-blur-sm border border-white/10 hover:scale-110">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20 relative z-10">
        <div className="max-w-7xl w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-full border border-white/10 backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse" />
                  <span className="text-sm font-medium">Open to Opportunities</span>
                </div>

                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none">
                  <span className="block">Hi, I'm</span>
                  <span className="block mt-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    Aditi
                  </span>
                </h1>

                <div className="space-y-2">
                  <p className="text-2xl md:text-3xl font-semibold text-gray-300">Aspiring Software Developer</p>
                  <p className="text-xl text-pink-400 font-medium">& Web Developer ✨</p>
                </div>
              </div>

              <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                Pre-final year B.Tech student passionate about building practical web applications. I enjoy turning ideas into clean, functional code while continuously improving my problem-solving skills through Data Structures and Algorithms.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="group px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center gap-2 hover:scale-105">
                  Explore Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
                <a href="mailto:sharmaaditi1946@gmail.com" className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center gap-2 hover:scale-105">
                  <Mail className="w-5 h-5" /> Contact Me
                </a>
              </div>
            </div>

            {/* Reduced Image Size Container */}
            <div className="relative flex justify-center lg:justify-end animate-fadeInRight">
              <div className="relative group max-w-sm"> {/* Restricted width here */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 p-2 rounded-3xl backdrop-blur-sm border border-white/20 group-hover:scale-105 transition-transform duration-500 overflow-hidden shadow-2xl">
                  <img
                    src="/pic2.jpeg"
                    alt="Aditi Sharma"
                    className="w-full h-auto rounded-2xl object-cover aspect-[4/5]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: Layers, label: `${stats.projects}+ Projects`, color: "from-pink-500 to-rose-500" },
              { icon: Code2, label: `${stats.skills}+ Skills`, color: "from-purple-500 to-violet-500" },
              { icon: Coffee, label: "Fast Learner", color: "from-emerald-500 to-green-500" }
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 blur-xl transition-opacity`}></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all hover:scale-105 cursor-pointer">
                  <item.icon className="w-8 h-8 mb-3 text-white group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
        <div className="max-w-7xl w-full">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Skills & Expertise</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, { items }], idx) => (
              <div key={category} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all">
                  <h3 className="text-2xl font-bold mb-6">{category}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {items.map((skill) => (
                      <div key={skill} className="px-4 py-3 bg-white/5 rounded-lg border border-white/10 hover:border-pink-500/50 transition-all hover:scale-110 hover:bg-white/10 cursor-pointer text-center group">
                        <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
        <div className="max-w-7xl w-full">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all group-hover:scale-105">
                  <div className="text-4xl mb-4">{project.emoji}</div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-pink-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => <span key={t} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">{t}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
        <div className="max-w-7xl w-full">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.degree} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all hover:scale-105">
                  <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-bold">{edu.degree}</h3>
                      <p className="text-gray-400 mt-2 text-lg">{edu.school}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-pink-400 font-semibold flex items-center gap-2 md:justify-end">
                        <Award size={18} /> {edu.level.includes('th') ? 'Percentage' : 'CGPA'}: {edu.cgpa}{edu.level.includes('th') ? '%' : ''}
                      </p>
                      <p className="text-gray-400 flex items-center gap-2 md:justify-end mt-1">
                        <Calendar size={18} /> {edu.period}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <span className="px-4 py-1 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm">{edu.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
        <div className="max-w-2xl w-full text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Let's Connect</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="mailto:sharmaaditi1946@gmail.com" className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:scale-105 transition-all">
              <Mail className="w-8 h-8 mx-auto mb-4 text-pink-500" />
              <span className="font-bold">Email</span>
            </a>
            <a href="https://github.com/Aditi1946" target="_blank" className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:scale-105 transition-all">
              <Github className="w-8 h-8 mx-auto mb-4 text-purple-500" />
              <span className="font-bold">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/aditi-sharma-643a712a6" target="_blank" className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:scale-105 transition-all">
              <Linkedin className="w-8 h-8 mx-auto mb-4 text-blue-500" />
              <span className="font-bold">LinkedIn</span>
            </a>
          </div>
          <p className="mt-16 text-gray-500 text-sm">© 2026 Aditi Sharma. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}
