import { useState } from 'react';
import { Home, Menu, X } from 'lucide-react';

const navItems = [
  { key: 'home', label: 'Home', icon: <Home size={16} /> },
  { key: 'myblogs', label: 'My Blogs' },
  { key: 'experience', label: 'Experience' },
  { key: 'projects', label: 'Projects' },
  { key: 'opensource', label: 'Open Source' },
  { key: 'curious', label: 'Curious Work' },
];

export default function Navbar({ activeSection, setActiveSection }: { activeSection: string, setActiveSection: (key: string) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getItemClasses = (isActive: boolean, isMobile = false) => {
    const base = isMobile
      ? 'w-full text-left px-2 py-2 transition-colors flex items-center space-x-2 rounded-md'
      : 'text-1xl mt-3 transition-colors flex items-center space-x-1';

    return `${base} ${
      isActive
        ? 'text-yellow-400 font-medium'
        : 'text-white hover:text-yellow-200'
    }`;
  };

  const handleSectionClick = (key: string) => {
    setActiveSection(key);
    setIsMenuOpen(false);
  };

  return (
    <nav className="px-1 sm:px-2">
      <div className="w-full max-w-[750px] bg-black rounded-bl-2xl rounded-br-2xl text-white mx-auto px-4 sm:px-8 py-3">
        <div className="md:hidden flex items-center justify-between">
          <button
            onClick={() => handleSectionClick('home')}
            className={getItemClasses(activeSection === 'home')}
          >
            <Home size={16} />
            <span>Home</span>
          </button>

          <button
            onClick={() => setIsMenuOpen(prev => !prev)}
            className="p-2 text-white hover:text-yellow-200 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div className="hidden md:flex justify-center">
          <div className="flex items-center flex-wrap justify-center gap-x-6">
            {navItems.map(item => (
              <button
                key={item.key}
                onClick={() => handleSectionClick(item.key)}
                className={getItemClasses(activeSection === item.key)}
              >
                {item.icon && item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-2 pt-2 border-t border-white/20">
            <div className="flex flex-col gap-1">
              {navItems
                .filter(item => item.key !== 'home')
                .map(item => (
                  <button
                    key={item.key}
                    onClick={() => handleSectionClick(item.key)}
                    className={getItemClasses(activeSection === item.key, true)}
                  >
                    {item.icon && item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}