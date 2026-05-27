import { useState, useMemo } from 'react';
import './styles/tokens.css';
import './styles/App.css';
import { projects } from './data/projects';
import Sidebar from './components/Sidebar';
import ProjectCard from './components/ProjectCard';
import DetailPanel from './components/DetailPanel';

function App() {
  const [activeIndustry, setActiveIndustry] = useState('All');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const industryMatch = activeIndustry === 'All' || project.industry === activeIndustry;
      const categoryMatch = activeCategory === 'All' || project.categories.includes(activeCategory);
      return industryMatch && categoryMatch;
    });
  }, [activeIndustry, activeCategory]);

  const selectedIndex = selectedProject
    ? filteredProjects.findIndex((p) => p.id === selectedProject.id)
    : -1;

  const handlePrev = () => {
    if (selectedIndex > 0) {
      setSelectedProject(filteredProjects[selectedIndex - 1]);
    }
  };

  const handleNext = () => {
    if (selectedIndex < filteredProjects.length - 1) {
      setSelectedProject(filteredProjects[selectedIndex + 1]);
    }
  };

  return (
    <div className="app">
      <Sidebar
        activeIndustry={activeIndustry}
        activeCategory={activeCategory}
        onIndustryChange={setActiveIndustry}
        onCategoryChange={setActiveCategory}
      />

      <main className="content">
        <header className="content__header">
          <div className="content__count">
            {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
          </div>
        </header>

        <div className="card-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
          {filteredProjects.length === 0 && (
            <p className="empty-state">
              No projects match the selected filters.
            </p>
          )}
        </div>
      </main>

      {selectedProject && (
        <DetailPanel
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={selectedIndex > 0}
          hasNext={selectedIndex < filteredProjects.length - 1}
        />
      )}
    </div>
  );
}

export default App;
