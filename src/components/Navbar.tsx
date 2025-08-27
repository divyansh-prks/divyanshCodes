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
      <div className="w-[750px] bg-black rounded-bl-2xl rounded-br-2xl text-white mx-auto px-8 py-3">
        <div className="flex justify-center">
          <div className="flex space-x-6">
            {navItems.map(item => (
              <button
                key={item.key}
                onClick={() => setActiveSection(item.key)}
                className={`text-1xl mt-3 transition-colors flex items-center space-x-1 ${
                  activeSection === item.key
                    ? 'text-yellow-400 font-medium'
                    : 'text-white hover:text-yellow-200'
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