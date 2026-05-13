import { ExternalLink, FileText, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const blogs = [
  {
    title: 'How Computer Internally works?',
    desc: 'Have you ever thought after pressing your Keyboard key what is happening in the Keyboard and behind the scenes?',
    link: 'https://techwithdivyansh.hashnode.dev/how-computer-internally-works',
  },
     {
    title: 'where to find hackathons?',
    desc: 'Do you like attending hackthons and dont know where to go?',
    link: 'https://dev.to/divyansh2375/where-to-find-hackathons-4178',
  },
   {
    title: 'How to increase Interest towards Coding?',
    desc: 'Do you want to increase your interest towards coding ?',
    link: 'https://techwithdivyansh.hashnode.dev/how-to-increase-more-interest-towards-coding',
  },

];

export default function BlogsSection() {
  const [page, setPage] = useState(0);
  const blogsPerPage = 5;
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePrev = () => setPage((p) => (p > 0 ? p - 1 : p));
  const handleNext = () => setPage((p) => (p < totalPages - 1 ? p + 1 : p));

  const currentBlogs = blogs.slice(page * blogsPerPage, page * blogsPerPage + blogsPerPage);

  return (
    <section className="max-w-3xl mx-auto px-8 py-12">
      <div className="flex items-center justify-center mb-6">
        <FileText className="mr-2" size={20} />
        <h3 className="text-2xl font-bold text-gray-800">My Blogs</h3>
      </div>
      <div className="bg-yellow-400 min-h-[700px] flex flex-col rounded-lg shadow-lg relative w-full overflow-hidden">
        <div className="w-full px-4 sm:px-8 py-5 overflow-y-auto pb-20">
          {currentBlogs.map((blog, idx) => (
            <article key={idx} className="border-black border-b-2 border-dotted p-3 rounded-lg mb-6 last:mb-0">
              <h4 className="text-lg font-semibold mb-2 break-words">{blog.title}</h4>
              <p className="text-sm text-gray-600 mb-2 break-words">{blog.desc}</p>
              <a href={blog.link} className="flex items-center text-sm text-gray-800 hover:text-gray-600 break-words">
                Read more <ExternalLink size={14} className="ml-1" />
              </a>
            </article>
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