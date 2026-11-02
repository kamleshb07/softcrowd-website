import { CASE_STUDY_FILTERS } from "../../data/caseStudies";

const CaseStudyFilters = ({ activeFilter, onFilterChange }) => {
  return (
    <div
      aria-label="Filter case studies by technology"
      className="flex w-full gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible"
      role="group"
    >
      {CASE_STUDY_FILTERS.map((filter) => {
        const isActive = activeFilter === filter;

        return (
          <button
            key={filter}
            type="button"
            aria-pressed={isActive}
            onClick={() => onFilterChange(filter)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 ${
              isActive
                ? "border-sky-500 bg-sky-500 text-white shadow-sm"
                : "border-slate-200 bg-white text-slate-600 hover:border-sky-400 hover:text-sky-600"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
};

export default CaseStudyFilters;
