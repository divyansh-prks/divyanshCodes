import React, { useState } from 'react';
import { Code, Github, ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';

const projects = {
  frontend: [
    {
      title: 'E-Commerce Platform',
      desc: 'A full-stack e-commerce solution built with React and Node.js',
      tags: ['React', 'Node.js'],
      code: '#',
      demo: '#',
    },
    {
      title: 'Weather Dashboard',
      desc: 'Real-time weather monitoring with interactive charts',
      tags: ['JavaScript', 'API'],
      code: '#',
      demo: '#',
    },
  ],
  backend: [
    {
      title: 'API Service',
      desc: 'RESTful API for a mobile app, built with Express and MongoDB',
      tags: ['Express', 'MongoDB'],
      code: '#',
      demo: '#',
    },
    {
      title: 'Authentication Server',
      desc: 'OAuth2 authentication server for secure login',
      tags: ['Node.js', 'OAuth2'],
      code: '#',
      demo: '#',
    },
  ],
  devops: [
    {
      title: 'UI Component Library',
      desc: 'Reusable UI components for React projects',
      tags: ['React', 'Storybook'],
      code: '#',
      demo: '#',
    },
    {
      title: 'Landing Page Design',
      desc: 'Modern landing page with animations',
      tags: ['HTML', 'CSS', 'Framer Motion'],
      code: '#',
      demo: '#',
    },
  ],
  other: [
    {
      title: 'Task Management App',
      desc: 'A productivity app for managing tasks and projects efficiently',
      tags: ['Vue.js', 'Firebase'],
      code: '#',
      demo: '#',
    },
    {
      title: 'CLI Tool',
      desc: 'A command-line tool for automating workflows',
      tags: ['Node.js', 'CLI'],
      code: '#',
      demo: '#',
    },
  ],
};

const categories = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'devops', label: 'Devops' },
  { key: 'other', label: 'Other' },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [page, setPage] = useState(0);
  const projectsPerPage = 5;
  const currentProjects = projects[activeCategory];
  const totalPages = Math.ceil(currentProjects.length / projectsPerPage);

  const handlePrev = () => setPage((p) => (p > 0 ? p - 1 : p));
  const handleNext = () => setPage((p) => (p < totalPages - 1 ? p + 1 : p));

  const paginatedProjects = currentProjects.slice(
    page * projectsPerPage,
    page * projectsPerPage + projectsPerPage
  );

  // Reset page to 0 when category changes
  React.useEffect(() => {
    setPage(0);
  }, [activeCategory]);

  return (
    <section className="max-w-3xl mx-auto px-8 py-12">
      <div className="flex items-center justify-center mb-6">
        <Code className="mr-2" size={20} />
        <h3 className="text-2xl font-bold text-gray-800">Projects</h3>
      </div>
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat.key
                ? 'bg-yellow-100 text-black'
                : 'bg-gray-700 text-white hover:bg-yellow-50 hover:text-black'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="bg-white h-[650px] flex flex-col  rounded-lg shadow-lg relative w-full mb-8">
        <div className="w-full px-8 py-6">
          {paginatedProjects.map((project, idx) => (
            <div key={idx} className="bg-white p-5 rounded-lg shadow-sm mb-4 last:mb-0">
              <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{project.desc}</p>
              <div className="flex space-x-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-100 text-xs rounded-full">{tag}</span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href={project.code} className="flex items-center text-sm text-gray-800 hover:text-gray-600">
                  <Github size={14} className="mr-1" /> Code
                </a>
                <a href={project.demo} className="flex items-center text-sm text-gray-800 hover:text-gray-600">
                  <ExternalLink size={14} className="mr-1" /> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-8">
          <button
            onClick={handlePrev}
            disabled={page === 0}
            className={`p-2 rounded-full transition-colors ${page === 0 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-yellow-400 text-black hover:bg-yellow-500'}`}
            aria-label="Previous page"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            disabled={page === totalPages - 1}
            className={`p-2 rounded-full transition-colors ${page === totalPages - 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-yellow-400 text-black hover:bg-yellow-500'}`}
            aria-label="Next page"
          >
            <ArrowRight size={24} />
          </button>
        </div>
        <span className="absolute bottom-4 right-6 text-xs text-gray-400">{page + 1} / {totalPages}</span>
      </div>
    </section>
  );
}