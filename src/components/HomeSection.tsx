import { Mail, Github } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

export default function HomeSection() {
  return (
    <section className="max-w-3xl mx-auto px-8 py-12">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Hello, I'm Divyansh</h2>
        <div className="mb-6 text-lg font-semibold text-green-800 h-8">
          <Typewriter
            words={[
            "I build and code with pure intent,",
  "Backend magic, hours well spent.",
  "DevOps flows in pipelines tight,",
  "Reverse engineering late at night.",
  "Robotics dreams that take their flight."
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </div>
     
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