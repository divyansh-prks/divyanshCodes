import { ExternalLink, FileText, ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

const blogs = [
  {
    title: 'Understanding Modern Web Development',
    desc: 'Exploring the latest trends and best practices in web development...',
    link: '#',
  },
  {
    title: 'Building Scalable Applications',
    desc: 'Key principles for creating applications that grow with your business...',
    link: '#',
  },
  {
    title: 'The Future of Technology',
    desc: 'Thoughts on emerging technologies and their impact on society...',
    link: '#',
  },
  {
    title: 'UI/UX Best Practices',
    desc: 'How to design user interfaces that delight and engage users...',
    link: '#',
  },
  {
    title: 'Effective Remote Work',
    desc: 'Tips and tools for staying productive while working remotely...',
    link: '#',
  },
  {
    title: 'State Management in React',
    desc: 'A deep dive into state management solutions for React apps...',
    link: '#',
  },
  {
    title: 'Progressive Web Apps',
    desc: 'How to build fast, reliable, and engaging PWAs...',
    link: '#',
  },
  {
    title: 'Accessibility Matters',
    desc: 'Making the web accessible for everyone...',
    link: '#',
  },
  {
    title: 'Testing JavaScript Applications',
    desc: 'Best practices for testing your JS code...',
    link: '#',
  },
  {
    title: 'Deploying with Docker',
    desc: 'A beginner’s guide to deploying apps using Docker...',
    link: '#',
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
      <div className="bg-white h-[700px] flex flex-col justify-center items-center rounded-lg shadow-lg relative w-full">
        <div className="w-full px-8 py-2">
          {currentBlogs.map((blog, idx) => (
            <article key={idx} className="mb-6 last:mb-0">
              <h4 className="text-lg font-semibold mb-2">{blog.title}</h4>
              <p className="text-sm text-gray-600 mb-2">{blog.desc}</p>
              <a href={blog.link} className="flex items-center text-sm text-gray-800 hover:text-gray-600">
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