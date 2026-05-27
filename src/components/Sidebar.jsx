import { industries, categories } from '../data/projects';

export default function Sidebar({ activeIndustry, activeCategory, onIndustryChange, onCategoryChange }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <h1 className="sidebar__name">Steve Sutanto</h1>
        <p className="sidebar__title">Product Designer & Strategist</p>
      </div>

      <nav className="sidebar__nav">
        <div className="sidebar__section">
          <h2 className="sidebar__heading">Industry</h2>
          <ul className="sidebar__list">
            {industries.map((industry) => (
              <li key={industry}>
                <button
                  className={`sidebar__item ${activeIndustry === industry ? 'sidebar__item--active' : ''}`}
                  onClick={() => onIndustryChange(industry)}
                >
                  {industry}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar__section">
          <h2 className="sidebar__heading">Discipline</h2>
          <ul className="sidebar__list">
            {categories.map((category) => (
              <li key={category}>
                <button
                  className={`sidebar__item ${activeCategory === category ? 'sidebar__item--active' : ''}`}
                  onClick={() => onCategoryChange(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="sidebar__footer">
        <a href="mailto:steve@example.com" className="sidebar__link">Contact</a>
      </div>
    </aside>
  );
}
