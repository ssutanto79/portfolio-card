export default function ProjectCard({ project, onClick }) {
  const thumbnail = project.images[0];

  return (
    <article className="project-card" onClick={onClick}>
      {thumbnail && (
        <div className="project-card__image">
          <img src={thumbnail} alt={project.title} />
        </div>
      )}
      <div className="project-card__content">
        <p className="project-card__industry">{project.industry}</p>
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
