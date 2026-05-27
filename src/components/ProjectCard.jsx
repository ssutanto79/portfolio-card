import ProjectIcon from './ProjectIcon';

export default function ProjectCard({ project, onClick }) {
  return (
    <article className="project-card" onClick={onClick}>
      <div className="project-card__icon-area">
        <ProjectIcon projectId={project.id} />
      </div>
      <div className="project-card__content">
        <div className="project-card__meta">
          <span className="project-card__industry">{project.industry}</span>
        </div>
        <h2 className="project-card__title">{project.title}</h2>
        <p className="project-card__summary">{project.summary}</p>
        <div className="project-card__tags">
          {project.categories.map((cat) => (
            <span key={cat} className="tag">{cat}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
