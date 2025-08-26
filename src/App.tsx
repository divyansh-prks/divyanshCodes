import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import BlogsSection from './components/BlogsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import OpenSourceSection from './components/OpenSourceSection';
import CuriousSection from './components/CuriousSection';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />;
      case 'myblogs':
        return <BlogsSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'opensource':
        return <OpenSourceSection />;
      case 'curious':
        return <CuriousSection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 text-black">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      {renderContent()}
    </div>

    // <div>
    //   <Navbar />
    //   <HomeSection />
    //   <ExperienceSection />
    //   <ProjectsSection />
    //   <BlogsSection />  
    // </div>
  );
}

export default App;