import { ExternalLink, FileText } from 'lucide-react';

export default function BlogsSection() {
  return (
    <section className="max-w-3xl mx-auto px-8 py-12">
      <div className="flex items-center justify-center mb-6">
        <FileText className="mr-2" size={20} />
        <h3 className="text-2xl font-bold text-gray-800">My Blogs</h3>
      </div>
      <div className="">
        <article className="bg-white p-5 shadow-sm">
          <h4 className="text-lg font-semibold ">Understanding Modern Web Development</h4>
          <p className="text-sm text-gray-600 ">Exploring the latest trends and best practices in web development...</p>
          <a href="#" className="flex items-center text-sm text-gray-800 hover:text-gray-600">
            Read more <ExternalLink size={14} className="ml-1" />
          </a>
        </article>
        <article className="bg-white p-5 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold ">Building Scalable Applications</h4>
          <p className="text-sm text-gray-600 ">Key principles for creating applications that grow with your business...</p>
          <a href="#" className="flex items-center text-sm text-gray-800 hover:text-gray-600">
            Read more <ExternalLink size={14} className="ml-1" />
          </a>
        </article>
        <article className="bg-white p-5 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold ">The Future of Technology</h4>
          <p className="text-sm text-gray-600 ">Thoughts on emerging technologies and their impact on society...</p>
          <a href="#" className="flex items-center text-sm text-gray-800 hover:text-gray-600">
            Read more <ExternalLink size={14} className="ml-1" />
          </a>
        </article>
      </div>
    </section>
  );
}