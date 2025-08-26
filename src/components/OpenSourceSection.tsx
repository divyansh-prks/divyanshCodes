import { Github } from 'lucide-react';

export default function OpenSourceSection() {
  return (
    <section className="max-w-3xl mx-auto px-8 py-12">
      <div className="flex items-center justify-center mb-6">
        <Github className="mr-2" size={20} />
        <h3 className="text-2xl font-bold text-gray-800">Open Source Contributions</h3>
      </div>
      <div className="space-y-4">
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold mb-2">React Component Library</h4>
          <p className="text-sm text-gray-600 mb-3">Contributed to a popular React component library with new components and bug fixes.</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">15 PRs merged</span>
            <a href="#" className="flex items-center text-sm text-gray-800 hover:text-gray-600">
              <Github size={14} className="mr-1" /> View
            </a>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold mb-2">Documentation Project</h4>
          <p className="text-sm text-gray-600 mb-3">Improved documentation and examples for a popular JavaScript framework.</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">8 PRs merged</span>
            <a href="#" className="flex items-center text-sm text-gray-800 hover:text-gray-600">
              <Github size={14} className="mr-1" /> View
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}