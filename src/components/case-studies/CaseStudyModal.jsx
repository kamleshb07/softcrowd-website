import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  Image as ImageIcon,
  X,
} from "lucide-react";

const CaseStudyModal = ({ project, onClose }) => {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;

    const previouslyFocusedElement = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableElements = dialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) {
        event.preventDefault();
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocusedElement?.focus?.();
    };
  }, [project, onClose]);

  if (!project) return null;

  const hasLinks = Boolean(project.links?.staging || project.links?.repository);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-950/75 p-0 backdrop-blur-sm sm:items-center sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-modal-title"
        aria-describedby="case-study-modal-summary"
        className="relative flex max-h-[94dvh] w-full max-w-4xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:max-h-[90vh] sm:rounded-3xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-5 py-4 sm:px-8 sm:py-5">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
              Technical case study · {project.category}
            </p>
            <h2
              id="case-study-modal-title"
              className="mt-2 text-xl font-semibold leading-tight text-slate-900 sm:text-2xl"
            >
              {project.title}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            <X size={19} />
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">

          <p
            id="case-study-modal-summary"
            className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-base"
          >
            {project.summary}
          </p>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <DetailBlock title="Challenge" value={project.challenge} />
            <DetailBlock title="Solution" value={project.solution} />
            <DetailBlock title="Architecture" value={project.architecture} />
            <DetailBlock title="Technical outcome" value={project.technicalOutcome} />
          </div>

          {project.architectureDiagram && (
            <section className="mt-8">
              <SectionHeading icon={<ImageIcon size={17} />}>
                System architecture
              </SectionHeading>
              <img
                src={project.architectureDiagram.src}
                alt={project.architectureDiagram.alt || `${project.title} system architecture diagram`}
                loading="lazy"
                className="mt-4 max-h-[480px] w-full rounded-xl border border-slate-200 bg-slate-50 object-contain p-3"
              />
            </section>
          )}

          <section className="mt-8">
            <SectionHeading icon={<Code2 size={17} />}>Technology stack</SectionHeading>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
                >
                  {technology}
                </span>
              ))}
            </div>
          </section>

          {project.apiSpecs?.length > 0 && (
            <section className="mt-8">
              <SectionHeading icon={<Code2 size={17} />}>API specifications</SectionHeading>
              <div className="mt-4 space-y-3">
                {project.apiSpecs.map((api, index) => (
                  <div
                    key={`${api.method}-${api.path}-${index}`}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-md bg-slate-900 px-2 py-1 font-mono text-xs font-semibold text-white">
                        {api.method}
                      </span>
                      <code className="break-all text-sm text-slate-800">{api.path}</code>
                    </div>
                    {api.description && (
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {api.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.screenshots?.length > 0 && (
            <section className="mt-8">
              <SectionHeading icon={<ImageIcon size={17} />}>Project screenshots</SectionHeading>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {project.screenshots.map((screenshot, index) => (
                  <figure key={`${screenshot.src}-${index}`}>
                    <img
                      src={screenshot.src}
                      alt={screenshot.alt || `${project.title} screenshot ${index + 1}`}
                      loading="lazy"
                      className="w-full rounded-xl border border-slate-200 object-cover"
                    />
                    {screenshot.caption && (
                      <figcaption className="mt-2 text-xs text-slate-500">
                        {screenshot.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </section>
          )}

          {project.codePreview?.code && (
            <section className="mt-8">
              <SectionHeading icon={<Code2 size={17} />}>Code preview</SectionHeading>
              <div className="mt-4 overflow-hidden rounded-xl bg-slate-950">
                <div className="border-b border-white/10 px-4 py-3 text-xs text-slate-400">
                  {project.codePreview.language || "Code"}
                  {project.codePreview.description && ` · ${project.codePreview.description}`}
                </div>
                <pre className="max-h-80 overflow-auto p-4 text-xs leading-6 text-slate-200 sm:text-sm">
                  <code>{project.codePreview.code}</code>
                </pre>
              </div>
            </section>
          )}

          {hasLinks && (
            <section className="mt-8 flex flex-wrap gap-3 border-t border-slate-100 pt-6">
              {project.links.staging && (
                <a
                  href={project.links.staging}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-600"
                >
                  Live staging demo <ExternalLink size={15} />
                </a>
              )}
              {project.links.repository && (
                <a
                  href={project.links.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700"
                >
                  <Code2 size={16} /> Repository <ArrowUpRight size={15} />
                </a>
              )}
            </section>
          )}
        </div>
      </section>
    </div>,
    document.body
  );
};

const DetailBlock = ({ title, value }) => (
  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
    <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
    <p className="mt-2 text-sm leading-6 text-slate-600">{value}</p>
  </div>
);

const SectionHeading = ({ icon, children }) => (
  <h3 className="flex items-center gap-2 text-base font-semibold text-slate-900">
    <span className="text-sky-600">{icon}</span>
    {children}
  </h3>
);

export default CaseStudyModal;
