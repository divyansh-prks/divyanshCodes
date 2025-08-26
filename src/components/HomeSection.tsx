import { Mail, Github } from 'lucide-react';

export default function HomeSection() {
  return (
    <section className="max-w-3xl mx-auto px-8 py-12">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Hello, I'm a Developer</h2>
        <p className="text-sm text-gray-600 mb-6 max-w-xl mx-auto">
          Passionate about creating meaningful solutions through code and exploring the intersection of technology and creativity.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="mailto:your@email.com" className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm">
            <Mail size={16} />
            <span>Contact</span>
          </a>
          <a href="https://github.com" className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm">
            <Github size={16} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}