import { Briefcase, ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Company Name',
    duration: '2022 - Present',
    desc: 'Led development of key features and mentored junior developers. Focused on building scalable web applications using modern technologies.',
  },
  {
    title: 'Software Engineer',
    company: 'Previous Company',
    duration: '2020 - 2022',
    desc: 'Developed and maintained web applications, collaborated with cross-functional teams, and contributed to architectural decisions.',
  },
  {
    title: 'Intern',
    company: 'Startup Inc.',
    duration: '2019 - 2020',
    desc: 'Assisted in building MVPs and learned agile development practices.',
  },
  {
    title: 'Freelancer',
    company: 'Self-employed',
    duration: '2018 - 2019',
    desc: 'Worked on various web projects for small businesses and startups.',
  },
  // Add more experiences if you want more than one page
];

export default function ExperienceSection() {
  const [page, setPage] = useState(0);
  const expsPerPage = 5;
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
      <div className="bg-white h-[700px] flex flex-col justify-center items-center rounded-lg shadow-lg relative w-full">
        <div className="w-full px-8 py-2">
          {currentExps.map((exp, idx) => (
            <div key={idx} className="bg-white p-5 rounded-lg shadow-sm mb-4 last:mb-0">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-lg font-semibold">{exp.title}</h4>
                  <p className="text-sm text-gray-600">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500">{exp.duration}</span>
              </div>
              <p className="text-sm text-gray-700">{exp.desc}</p>
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