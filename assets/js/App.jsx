const App = () => {
  React.useEffect(() => {
    if (typeof initFadeSections === 'function') {
      initFadeSections();
    }
  }, []);
  return (
    <>
      <NavBar />
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <ProjectsSection />
      <Contact />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
