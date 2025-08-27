import { Heart, ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

const curiousWorks = [
  {
    title: 'AI Art Generator',
    desc: 'Experimenting with machine learning to create unique digital art pieces. Exploring the intersection of creativity and technology.',
    link: '#',
  },
  {
    title: 'Urban Garden Tracker',
    desc: 'Building an IoT system to monitor and optimize urban garden conditions using sensors and data visualization.',
    link: '#',
  },
  {
    title: 'Music Visualization',
    desc: 'Creating real-time visualizations that respond to music, combining audio analysis with creative coding.',
    link: '#',
  },
  {
    title: 'Community Workshop Series',
    desc: 'Organizing free coding workshops for underserved communities to help bridge the digital divide.',
    link: '#',
  },
  {
    title: 'Robotics Playground',
    desc: 'Prototyping small robots and experimenting with automation and sensors.',
    link: '#',
  },
  {
    title: 'Data Storytelling',
    desc: 'Visualizing complex data sets to tell compelling stories and uncover insights.',
    link: '#',
  },
  {
    title: 'Language Learning App',
    desc: 'Building a gamified app to help people learn new languages more effectively.',
    link: '#',
  },
];

export default function CuriousSection() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(curiousWorks.length / itemsPerPage);

  const handlePrev = () => setPage((p) => (p > 0 ? p - 1 : p));
  const handleNext = () => setPage((p) => (p < totalPages - 1 ? p + 1 : p));

  const currentWorks = curiousWorks.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage);

  return (
    <section className="max-w-3xl mx-auto px-8 py-12">
      <div className="flex items-center justify-center mb-6">
        <Heart className="mr-2" size={20} />
        <h3 className="text-2xl font-bold text-gray-800">Curious Work</h3>
      </div>
      <div className="bg-white h-[700px] flex flex-col  rounded-lg shadow-lg relative w-full">
        <div className="w-full px-8 py-6">
          {currentWorks.map((work, idx) => (
            <div key={idx} className="bg-white p-5 rounded-lg shadow-sm mb-4 last:mb-0">
              <h4 className="text-lg font-semibold mb-2">{work.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{work.desc}</p>
              <a href={work.link} className="flex items-center text-sm text-gray-800 hover:text-gray-600">
                Learn more <ExternalLink size={14} className="ml-1" />
              </a>
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