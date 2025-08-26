import { Home } from 'lucide-react';

const navItems = [
  { key: 'home', label: 'Home', icon: <Home size={16} /> },
  { key: 'myblogs', label: 'My Blogs' },
  { key: 'experience', label: 'Experience' },
  { key: 'projects', label: 'Projects' },
  { key: 'opensource', label: 'Open Source' },
  { key: 'curious', label: 'Curious Work' },
];

export default function Navbar({ activeSection, setActiveSection }: { activeSection: string, setActiveSection: (key: string) => void }) {
  return (
    <nav className="">
      <div className="w-fit mx-auto px-8 py-3">
        <div className="flex justify-center">
          <div className="flex space-x-6">
            {navItems.map(item => (
              <button
                key={item.key}
                onClick={() => setActiveSection(item.key)}
                className={`text-sm transition-colors flex items-center space-x-1 ${
                  activeSection === item.key
                    ? 'text-gray-900 font-medium'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {item.icon && item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}