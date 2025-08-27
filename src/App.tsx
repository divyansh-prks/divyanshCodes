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
    <div className="min-h-screen bg-grey-200 text-black"
     style={{
      backgroundImage:
        "repeating-linear-gradient(0deg, transparent, transparent 22px, #e5e7eb 24px, transparent 26px), repeating-linear-gradient(90deg, transparent, transparent 22px, #e5e7eb 24px, transparent 26px)",
      backgroundSize: "24px 24px"
    }}
    >
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