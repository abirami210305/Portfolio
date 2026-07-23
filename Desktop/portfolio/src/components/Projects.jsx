function Projects() {
  return (
    <section className="projects" id="projects">

      <h2>My Projects</h2>

      <div className="project-container">

        {/* Student Management System */}

        <div className="project-card">

          <h3>🎓 Student Management System</h3>

          <p>
            A Full Stack web application developed using Spring Boot,
            React and MySQL to manage student records with CRUD operations.
          </p>

          <div className="tech-stack">
            <span>Spring Boot</span>
            <span>React</span>
            <span>MySQL</span>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/abirami210305/Studentinformation-using-SpringBoot"
              target="_blank"
              rel="noreferrer"
            >
              🔗 GitHub
            </a>
          </div>

        </div>

        {/* AI CRM HCP */}

        <div className="project-card">

          <h3>🤖 AI CRM HCP</h3>

          <p>
            An AI-powered CRM application designed to manage healthcare
            professionals with a clean and responsive user interface.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>JavaScript</span>
            <span>AI</span>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/abirami210305/AI-CRM-HCP"
              target="_blank"
              rel="noreferrer"
            >
              🔗 GitHub
            </a>
          </div>

        </div>

        {/* Finance Dashboard */}

        <div className="project-card">

          <h3>📊 Finance Dashboard</h3>

          <p>
            A responsive finance dashboard for visualizing financial data
            using interactive charts and a modern UI.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/abirami210305/finance-dashboard"
              target="_blank"
              rel="noreferrer"
            >
              🔗 GitHub
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;