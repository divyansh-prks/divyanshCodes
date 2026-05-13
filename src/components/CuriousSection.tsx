import { Heart, ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const curiousWorks = [
   {
    title: 'How Your Machine UnderStand Human Language ?',
    desc: 'Do you know How our computers who only can understand 0/1s are able to understand human language ? ',
    link: 'https://x.com/coder_divyansh/status/1953371647773168002',
  },
 
  {
    title: 'How Your system Track time ?',
    desc: 'Do you know how your System or Laptop counts accurate Timing even if you are offline or your system is shut down',
    link: 'https://x.com/coder_divyansh/status/1952263684837065037',
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
      <div className="bg-yellow-400 min-h-[700px] flex flex-col rounded-lg shadow-lg relative w-full overflow-hidden">
        <div className="w-full px-4 sm:px-8 py-6 overflow-y-auto pb-20">
          {currentWorks.map((work, idx) => (
            <div key={idx} className="border-black border-b-2 border-dotted p-5 rounded-lg shadow-sm mb-4 last:mb-0">
              <h4 className="text-lg font-semibold mb-2 break-words">{work.title}</h4>
              <p className="text-sm text-gray-600 mb-3 break-words">{work.desc}</p>
              <a href={work.link} className="flex items-center text-sm text-gray-800 hover:text-gray-600 break-words">
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