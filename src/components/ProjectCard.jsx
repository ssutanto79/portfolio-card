export default function ProjectCard({ project, onClick }) {
  const thumbnail = project.images[0];

  return (
    <article className="project-card" onClick={onClick}>
      {thumbnail && (
        <div className="project-card__image">
          <img src={thumbnail} alt={project.title} loading="lazy" />
        </div>
      )}
      <div className="project-card__content">
        <div className="project-card__meta">
          <span className="project-card__industry">{project.industry}</span>
          <span className="project-card__role">{project.role}</span>
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
