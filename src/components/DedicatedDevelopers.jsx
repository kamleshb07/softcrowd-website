import {
  Code2,
  Server,
  Layers3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const developerRoles = [
  {
    title: "Frontend Developers",
    description:
      "Build responsive, modern user interfaces and engaging web experiences.",
    icon: Code2,
    skills: ["React.js", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend Developers",
    description:
      "Develop secure APIs, backend services, and reliable database systems.",
    icon: Server,
    skills: ["Node.js", "PHP / Laravel", "MySQL"],
  },
  {
    title: "Full-Stack Developers",
    description:
      "Work across frontend and backend to build complete application solutions.",
    icon: Layers3,
    skills: ["React.js", "Node.js", "MongoDB"],
  },
];

const DedicatedDevelopers = () => {
  return (
    <section
      id="dedicated-developers"
      className="scroll-mt-28 bg-slate-950 px-5 py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-sky-400">
            Extend Your Team
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Hire Dedicated Developers
            <span className="text-sky-400"> For Your Projects</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            Add skilled development resources to your team and move your
            software projects forward with dedicated engineering support.
          </p>
        </div>

        {/* Developer Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {developerRoles.map((role) => {
            const Icon = role.icon;

            return (
              <div
                key={role.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/50 hover:bg-white/[0.07] hover:shadow-xl sm:p-8"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 transition-colors duration-300 group-hover:bg-sky-400 group-hover:text-slate-950">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                <h3 className="text-xl font-bold text-white">
                  {role.title}
                </h3>

                <p className="mt-4 min-h-[72px] text-sm leading-7 text-slate-300">
                  {role.description}
                </p>

                <div className="my-6 border-t border-white/10" />

                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                  Core Technologies
                </p>

                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-sky-400">
                  <CheckCircle2 size={17} />
                  Dedicated Engineering Support
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-7 sm:flex-row sm:p-9">
          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Looking for the right developers?
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Let's discuss your project requirements and team needs.
            </p>
          </div>

          <a
            href="#schedule-call"
            className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-lg bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-600"
          >
            Schedule a Technical Call
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DedicatedDevelopers;