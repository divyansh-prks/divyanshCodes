import { Briefcase, ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

const experiences = [
  {
    title: 'Open Source Contributer',
    company: 'Microcks (CNCF Project)',
     companyUrl: 'https://microcks.io/',
    duration: 'Feb 2025 – Apr 2025',
    desc: [
      "Improved website performance for loading videos",
      " Proposed SEO optimization solutions",
      "Implemented URL shortening and fixed typos in docs"
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'Vulpinix Production',
     companyUrl: 'https://www.vulpinixproductions.com/',

    duration: 'Nov 2024 – Jan 2025',
    desc: [
      "Developed a story-based portfolio and MVP for digital ads",
      " Wrote PRD documents",
      "Designed attractive landing pages",
      " Fixed positions of icons",
      "Implemented Authentication"
    ],
  },
  {
    title: 'Open Source Contributer',
    company: 'SWOC- Social Winter Of Code',
       companyUrl: 'https://www.linkedin.com/company/socialwinterofcode/?originalSubdomain=in',
    duration: 'Jan 2024 – Feb 2024',
    desc: [
      "Added stylish scroll bar", " Added cup loader to the project"
    ],
  },
  {
    title: 'Open Source Contributor ',
    company: 'Real Dev Squad',
     companyUrl: 'https://realdevsquad.com/',
    duration: 'Jun 2023 – Sep 2023',
    desc: [
      "Built lift simulation and Discord bot",
"Practiced TDD and collaborated on business logic"
    ],
  },
  // Add more experiences if you want more than one page
];

export default function ExperienceSection() {
  const [page, setPage] = useState(0);
  const expsPerPage = 3;
  const totalPages = Math.ceil(experiences.length / expsPerPage);

  const handlePrev = () => setPage((p) => (p > 0 ? p - 1 : p));
  const handleNext = () => setPage((p) => (p < totalPages - 1 ? p + 1 : p));

  const currentExps = experiences.slice(page * expsPerPage, page * expsPerPage + expsPerPage);

  return (
    <section className="max-w-3xl mx-auto px-8 py-12">
      <div className="flex items-center justify-center mb-6">
        <Briefcase className="mr-2" size={20} />
        <h3 className="text-2xl font-bold text-gray-800">Experience</h3>
      </div>
      <div className="bg-yellow-400  h-[700px] flex flex-col  rounded-lg shadow-lg relative w-full">
        <div className="w-full px-8 py-7">
          {currentExps.map((exp, idx) => (
            <div key={idx} className="bg-white p-5 rounded-lg shadow-sm mb-4 last:mb-0">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-lg font-semibold">{exp.title}</h4>
                       <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {exp.company}
                  </a>
                </div>
                <span className="text-sm text-gray-500">{exp.duration}</span>
              </div>
              {Array.isArray(exp.desc) ? (
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {exp.desc.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-700">{exp.desc}</p>
                )}
              
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