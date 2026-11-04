import { ArrowUpRight, Code2, Layers3 } from "lucide-react";

const CaseStudyCard = ({ project, onSelect }) => {
  return (
    <article className="group h-full">
      <button
        type="button"
        onClick={() => onSelect(project)}
        aria-label={`View details for ${project.title}`}
        className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500"
      >
        <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-slate-950 p-6">
          {project.coverImage ? (
            <img
              src={project.coverImage}
              alt={project.coverImageAlt || `${project.title} project screenshot`}
              loading="lazy"
              className="h-full w-full rounded-lg object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 text-center">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/30 bg-sky-400/10 text-sky-300">
                <Layers3 size={27} strokeWidth={1.6} />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Project preview
              </span>
              <span className="mt-2 text-sm text-white/70">
                Screenshot pending approval
              </span>
            </div>
          )}

        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">
            <Code2 size={14} />
            <span>{project.category}</span>
          </div>

          <h3 className="text-lg font-semibold leading-snug text-slate-900 transition-colors group-hover:text-sky-600 sm:text-xl">
            {project.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
            {project.summary}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
              >
                {technology}
              </span>
            ))}
          </div>

          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-600">
            View technical case study
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </button>
    </article>
  );
};

export default CaseStudyCard;
