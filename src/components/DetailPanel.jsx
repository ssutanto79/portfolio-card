import { useEffect, useState } from 'react';

export default function DetailPanel({ project, onClose, onPrev, onNext, hasPrev, hasNext }) {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    setSlideIndex(0);
  }, [project.id]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowUp' && slideIndex > 0) setSlideIndex(slideIndex - 1);
      if (e.key === 'ArrowDown' && slideIndex < project.images.length - 1) setSlideIndex(slideIndex + 1);
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext, slideIndex, project.images.length]);

  return (
    <div className="overlay" onClick={onClose}>
      <div className="detail-panel" onClick={(e) => e.stopPropagation()}>
        <button className="detail-panel__close" onClick={onClose}>
          &times;
        </button>

        <div className="detail-panel__body">
          <div className="detail-panel__text">
            <p className="detail-panel__industry">{project.industry}</p>
            <h1 className="detail-panel__title">{project.title}</h1>

            <div className="detail-panel__role-box">
              <span className="detail-panel__role-label">Role</span>
              <span className="detail-panel__role-value">{project.role}</span>
            </div>

            <p className="detail-panel__summary">{project.summary}</p>

            <h3>The Approach</h3>
            <p>{project.approach}</p>

            <h3>The Details</h3>
            <ul>
              {project.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>

            {project.metrics.length > 0 && (
              <div className="detail-panel__metrics">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="metric">
                    <div className="metric__value">{metric.value}</div>
                    <div className="metric__label">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="detail-panel__visuals">
            <img
              className="detail-panel__slide-img"
              src={project.images[slideIndex]}
              alt={`${project.title} — slide ${slideIndex + 1}`}
            />
            <div className="slide-dots">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  className={`slide-dot ${i === slideIndex ? 'slide-dot--active' : ''}`}
                  onClick={() => setSlideIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="detail-panel__nav">
          <button className="nav-btn" onClick={onPrev} disabled={!hasPrev}>
            &larr; Previous
          </button>
          <button className="nav-btn" onClick={onNext} disabled={!hasNext}>
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
