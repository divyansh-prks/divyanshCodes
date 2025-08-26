import { Briefcase } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section className="max-w-3xl mx-auto px-8 py-12">
      <div className="flex items-center justify-center mb-6">
        <Briefcase className="mr-2" size={20} />
        <h3 className="text-2xl font-bold text-gray-800">Experience</h3>
      </div>
      <div className="space-y-4">
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h4 className="text-lg font-semibold">Senior Software Engineer</h4>
              <p className="text-sm text-gray-600">Company Name</p>
            </div>
            <span className="text-sm text-gray-500">2022 - Present</span>
          </div>
          <p className="text-sm text-gray-700">Led development of key features and mentored junior developers. Focused on building scalable web applications using modern technologies.</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h4 className="text-lg font-semibold">Software Engineer</h4>
              <p className="text-sm text-gray-600">Previous Company</p>
            </div>
            <span className="text-sm text-gray-500">2020 - 2022</span>
          </div>
          <p className="text-sm text-gray-700">Developed and maintained web applications, collaborated with cross-functional teams, and contributed to architectural decisions.</p>
        </div>
      </div>
    </section>
  );
}