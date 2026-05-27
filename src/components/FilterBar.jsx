import { industries, categories } from '../data/projects';

export default function FilterBar({ activeIndustry, activeCategory, onIndustryChange, onCategoryChange }) {
  return (
    <div className="filters">
      <div className="filters" style={{ paddingLeft: 0, marginBottom: 0 }}>
        {industries.map((industry) => (
          <button
            key={industry}
            className={`filter-chip ${activeIndustry === industry ? 'filter-chip--active' : ''}`}
            onClick={() => onIndustryChange(industry)}
          >
            {industry}
          </button>
        ))}
      </div>
      <div className="filters" style={{ paddingLeft: 0, marginBottom: 0 }}>
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-chip ${activeCategory === category ? 'filter-chip--active' : ''}`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
