const ProjectsSection = () => {
  React.useEffect(() => {
    if (typeof initProjects === 'function') {
      initProjects();
    }
  }, []);
  return (
    <section className="projects-section fade-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <div className="projects-header-row">
            <h2>My Projects</h2>
            <button type="button" className="see-more">See more →</button>
          </div>
          <p>Explore some of the projects I've built</p>
        </div>
        <div id="projects-root" data-limit="2"></div>
      </div>
    </section>
  );
};
