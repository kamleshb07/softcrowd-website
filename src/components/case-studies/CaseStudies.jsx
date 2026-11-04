import { useCallback, useState } from "react";
import { ArrowRight, Braces, FolderOpen } from "lucide-react";
import CaseStudyCard from "./CaseStudyCard";
import CaseStudyFilters from "./CaseStudyFilters";
import CaseStudyModal from "./CaseStudyModal";
import {
  caseStudies,
  developmentSampleCaseStudies,
} from "../../data/caseStudies";

const matchesFilter = (project, filter) => {
  if (filter === "All") return true;

  const searchableValues = [project.category, ...(project.technologies || [])]
    .join(" ")
    .toLowerCase();

  const filterTerms = {
    React: ["react", "react.js"],
    "Node.js": ["node.js", "node"],
    Flutter: ["flutter"],
    "PHP/Laravel": ["php", "laravel"],
    Native: ["native", "swift", "kotlin", "java", "ios", "android"],
  };

  return (filterTerms[filter] || [filter.toLowerCase()]).some((term) =>
    searchableValues.includes(term.toLowerCase())
  );
};

const projectsForBuild = import.meta.env.DEV && caseStudies.length === 0
  ? developmentSampleCaseStudies
  : caseStudies;

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const closeSelectedProject = useCallback(() => setSelectedProject(null), []);

  const filteredProjects = projectsForBuild.filter((project) =>
    matchesFilter(project, activeFilter)
  );

  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="bg-[#fbfbfa] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="brkt text-sm font-semibold uppercase tracking-[0.22em]">
            <span aria-hidden="true">&lt;/&gt;</span> Selected engineering work
          </p>
          <h2
            id="case-studies-heading"
            className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Technical case studies
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            Explore the challenges, technologies and engineering approaches behind our work.
          </p>
        </div>

        {import.meta.env.DEV && developmentSampleCaseStudies.length > 0 && (
          <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-center text-sm leading-6 text-amber-900">
            <strong>Development preview only:</strong> the cards below are temporary UI samples, not real SoftCrowd projects. They are excluded from production builds. Replace them with company-approved project details before release.
          </div>
        )}

        <div className="mt-9">
          <CaseStudyFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        {filteredProjects.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {filteredProjects.map((project) => (
              <CaseStudyCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
              />
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
              {import.meta.env.DEV ? <FolderOpen size={25} /> : <Braces size={25} />}
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">
              {import.meta.env.DEV
                ? "No development samples for this filter"
                : "Approved case studies will appear here"}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {import.meta.env.DEV
                ? "Try another technology filter to preview the cards."
                : "Project details are being prepared for publication. Please check back soon."}
            </p>
            {activeFilter !== "All" && (
              <button
                type="button"
                onClick={() => setActiveFilter("All")}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700"
              >
                View all case studies <ArrowRight size={15} />
              </button>
            )}
          </div>
        )}
      </div>

      <CaseStudyModal
        project={selectedProject}
        onClose={closeSelectedProject}
      />
    </section>
  );
};

export default CaseStudies;
