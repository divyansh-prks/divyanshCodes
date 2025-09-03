import React, { useState } from 'react';
import { Code, Github, ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';

const projects = {
  frontend: [
    {
      title: 'NetFlix Watch',
      desc: 'A video Streaming website Like a Netflix',
      tags: ['React js', 'Redux ToolKit' , "Router" , "Firebase" , "TailwindCSS"],
      code: 'https://github.com/divyansh-prks/Netflix-watch',
      demo: 'https://netflix-watch-one.vercel.app/',
    },
    {
      title: '2d Portfolio',
      desc: 'A gamified Version of Portfolio where it describes about the person in a story format',
      tags: ['Phaser', 'Javascript' , "MongoDb"],
      code: 'https://github.com/divyansh-prks/portfolio-',
      demo: 'https://portfolio-vulp.vercel.app/',
    },
        {
      title: 'Naruto Anime',
      desc: 'Naruto thme ',
      tags: ["NextJs" , "Skipper UI"],
      code: 'https://github.com/divyansh-prks/naruto',
      demo: 'https://www.youtube.com/watch?v=aJMXAsfQji4',
    },
  ],
  backend: [
       {
      title: 'BuildwithAi',
      desc: 'A website Can make your website using Ai ',
      tags: [ 'ingress ' ,'e2b',  'nextjs', 'prisma' , 'postgresql'],
      code: 'https://github.com/divyansh-prks/nocodeVibe',
      // demo: 'https://x.com/coder_divyansh/status/1874487132984901647',
    },
    {
      title: 'URL Shortener',
      desc: 'A website which shorten your url link',
      tags: [ 'React ' ,'NodeJs',  'Express', 'MongoDB'],
      code: 'https://github.com/divyansh-prks/urlShortener',
      demo: 'https://x.com/coder_divyansh/status/1874487132984901647',
    },
  
  ],
  devops: [
    {
      title: 'CI/CD Pipeline with GitHub Actions - (InProgress)',
      desc: 'Create a pipeline that builds, tests, and deploys a sample app (Node.js, Python, or Java)',
      tags: ["CI/CD"," automation", "Docker", "testing integration"],
      code: '#',
      demo: '#',
    },
   
  ],
  other: [
    {
      title: 'Student Api',
      desc: 'A full backend Api for student In Golang',
      tags: ['GoLang'],
      code: 'https://github.com/divyansh-prks/studentApi',
      demo: 'Inprogress',
    },
    {
      title: 'CLI ToDo',
      desc: 'A application where you can write your todolist on your terminal',
      tags: ["Golang"],
      code: 'https://github.com/divyansh-prks/CLI-Todo-',
      demo: 'https://www.youtube.com/watch?v=3sv-jieY-uc',
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
  const projectsPerPage = 4;
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
      <div className="bg-yellow-400  h-[650px] flex flex-col  rounded-lg shadow-lg relative w-full mb-8">
        <div className="w-full px-8 py-6">
          {paginatedProjects.map((project, idx) => (
            <div key={idx} className="border-black border-b-2 border-dotted  p-3 rounded-lg shadow-sm mb-4 last:mb-0">
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