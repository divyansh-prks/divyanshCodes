import { Code, Github, ExternalLink } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section className="max-w-3xl mx-auto px-8 py-12">
      <div className="flex items-center justify-center mb-6">
        <Code className="mr-2" size={20} />
        <h3 className="text-2xl font-bold text-gray-800">Projects</h3>
      </div>
      <div className="space-y-4">
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold mb-2">E-Commerce Platform</h4>
          <p className="text-sm text-gray-600 mb-3">A full-stack e-commerce solution built with React and Node.js</p>
          <div className="flex space-x-2 mb-4">
            <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">React</span>
            <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">Node.js</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="flex items-center text-sm text-gray-800 hover:text-gray-600">
              <Github size={14} className="mr-1" /> Code
            </a>
            <a href="#" className="flex items-center text-sm text-gray-800 hover:text-gray-600">
              <ExternalLink size={14} className="mr-1" /> Demo
            </a>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold mb-2">Task Management App</h4>
          <p className="text-sm text-gray-600 mb-3">A productivity app for managing tasks and projects efficiently</p>
          <div className="flex space-x-2 mb-4">
            <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">Vue.js</span>
            <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">Firebase</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="flex items-center text-sm text-gray-800 hover:text-gray-600">
              <Github size={14} className="mr-1" /> Code
            </a>
            <a href="#" className="flex items-center text-sm text-gray-800 hover:text-gray-600">
              <ExternalLink size={14} className="mr-1" /> Demo
            </a>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold mb-2">Weather Dashboard</h4>
          <p className="text-sm text-gray-600 mb-3">Real-time weather monitoring with interactive charts</p>
          <div className="flex space-x-2 mb-4">
            <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">JavaScript</span>
            <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">API</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="flex items-center text-sm text-gray-800 hover:text-gray-600">
              <Github size={14} className="mr-1" /> Code
            </a>
            <a href="#" className="flex items-center text-sm text-gray-800 hover:text-gray-600">
              <ExternalLink size={14} className="mr-1" /> Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}