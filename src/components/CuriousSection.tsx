import { Heart, ExternalLink } from 'lucide-react';

export default function CuriousSection() {
  return (
    <section className="max-w-3xl mx-auto px-8 py-12">
      <div className="flex items-center justify-center mb-6">
        <Heart className="mr-2" size={20} />
        <h3 className="text-2xl font-bold text-gray-800">Curious Work</h3>
      </div>
      <div className="space-y-4">
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold mb-2">AI Art Generator</h4>
          <p className="text-sm text-gray-600 mb-3">Experimenting with machine learning to create unique digital art pieces. Exploring the intersection of creativity and technology.</p>
          <a href="#" className="flex items-center text-sm text-gray-800 hover:text-gray-600">
            Learn more <ExternalLink size={14} className="ml-1" />
          </a>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold mb-2">Urban Garden Tracker</h4>
          <p className="text-sm text-gray-600 mb-3">Building an IoT system to monitor and optimize urban garden conditions using sensors and data visualization.</p>
          <a href="#" className="flex items-center text-sm text-gray-800 hover:text-gray-600">
            Learn more <ExternalLink size={14} className="ml-1" />
          </a>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold mb-2">Music Visualization</h4>
          <p className="text-sm text-gray-600 mb-3">Creating real-time visualizations that respond to music, combining audio analysis with creative coding.</p>
          <a href="#" className="flex items-center text-sm text-gray-800 hover:text-gray-600">
            Learn more <ExternalLink size={14} className="ml-1" />
          </a>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold mb-2">Community Workshop Series</h4>
          <p className="text-sm text-gray-600 mb-3">Organizing free coding workshops for underserved communities to help bridge the digital divide.</p>
          <a href="#" className="flex items-center text-sm text-gray-800 hover:text-gray-600">
            Learn more <ExternalLink size={14} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}