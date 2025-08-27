import { Github, ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

const contributions = [
  {
    title: 'React Component Library',
    desc: 'Contributed to a popular React component library with new components and bug fixes.',
    prs: 15,
    link: '#',
  },
  {
    title: 'Documentation Project',
    desc: 'Improved documentation and examples for a popular JavaScript framework.',
    prs: 8,
    link: '#',
  },
  {
    title: 'Node.js Utility',
    desc: 'Added new features and fixed bugs in a Node.js utility library.',
    prs: 12,
    link: '#',
  },
  {
    title: 'CSS Framework',
    desc: 'Enhanced theming and accessibility in a CSS framework.',
    prs: 7,
    link: '#',
  },
  {
    title: 'Open Data API',
    desc: 'Improved API documentation and added new endpoints.',
    prs: 10,
    link: '#',
  },
  {
    title: 'Testing Library',
    desc: 'Contributed new test utilities and improved coverage.',
    prs: 6,
    link: '#',
  },
  {
    title: 'DevOps Scripts',
    desc: 'Automated deployment scripts and CI/CD improvements.',
    prs: 9,
    link: '#',
  },
];

export default function OpenSourceSection() {
  const [page, setPage] = useState(0);
  const prsPerPage = 5;
  const totalPages = Math.ceil(contributions.length / prsPerPage);

  const handlePrev = () => setPage((p) => (p > 0 ? p - 1 : p));
  const handleNext = () => setPage((p) => (p < totalPages - 1 ? p + 1 : p));

  const currentContributions = contributions.slice(page * prsPerPage, page * prsPerPage + prsPerPage);

  return (
    <section className="max-w-3xl mx-auto px-8 py-12">
      <div className="flex items-center justify-center mb-6">
        <Github className="mr-2" size={20} />
        <h3 className="text-2xl font-bold text-gray-800">Open Source Contributions</h3>
      </div>
      <div className="bg-white h-[700px] flex flex-col  rounded-lg shadow-lg relative w-full">
        <div className="w-full px-8 py-6   ">
          {currentContributions.map((contrib, idx) => (
            <div key={idx} className=" p-2 rounded-lg shadow-sm mb-4 last:mb-0">
              <h4 className="text-lg font-semibold mb-2">{contrib.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{contrib.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{contrib.prs} PRs merged</span>
                <a href={contrib.link} className="flex items-center text-sm text-gray-800 hover:text-gray-600">
                  <Github size={14} className="mr-1" /> View
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute  bottom-4 left-0 right-0 flex justify-center space-x-8">
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