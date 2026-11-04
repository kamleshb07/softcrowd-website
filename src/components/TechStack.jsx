
import React from "react";

const frontendTechnologies = [
  {
    name: "React.js",
    description:
      "Single-page applications (SPAs), Next.js server-side rendering (SSR), Redux state management, and reusable component libraries.",
  },
  {
    name: "Flutter",
    description:
      "Cross-platform application development for iOS and Android.",
  },
  {
    name: "Native iOS (Swift)",
    description:
      "Native iOS application development using Swift.",
  },
  {
    name: "Android (Kotlin / Java)",
    description:
      "Native Android application development using Kotlin and Java.",
  },
  {
    name: "Tailwind CSS",
    description:
      "Responsive UI development using utility classes, Flexbox, and CSS Grid.",
  },
  {
    name: "Bootstrap 5",
    description:
      "Responsive layouts, reusable UI components, and mobile-first design.",
  },
];

const backendTechnologies = [
  {
    name: "Node.js",
    description:
      "Express.js, NestJS, asynchronous microservices, and REST / GraphQL API development.",
  },
  {
    name: "PHP / Laravel",
    description:
      "MVC architecture, Eloquent ORM, and scalable SaaS backend development.",
  },
  {
    name: "MongoDB",
    description:
      "NoSQL database solutions, aggregation pipelines, and indexing.",
  },
  {
    name: "MySQL",
    description:
      "Relational database schema design and query optimization.",
  },
  {
    name: "PostgreSQL",
    description:
      "Relational database schema design and query optimization.",
  },
];

const TechnologyCard = ({ name, description }) => (
  <div className="group rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500 hover:shadow-lg">
    <h3 className="text-base font-bold text-slate-900 transition-colors group-hover:text-sky-600">
      {name}
    </h3>

    <p className="mt-2 text-sm leading-relaxed text-slate-600">
      {description}
    </p>
  </div>
);

const TechStack = () => {
  return (
    <section
      id="tech-stack"
      className="scroll-mt-24 bg-slate-50 px-5 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
            Our Technology Expertise
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-blue-600 sm:text-4xl lg:text-5xl">
            Built With Modern Technologies
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
            We use modern frontend, mobile, backend and database
            technologies to engineer scalable digital solutions.
          </p>
        </div>

        {/* Technology groups */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Frontend and mobile */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 border-b border-slate-200 pb-5">
              <span className="inline-block rounded-md bg-emerald-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-emerald-700">
                Front-end & Mobile Stack
              </span>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                Frontend & Mobile Technologies
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {frontendTechnologies.map((technology) => (
                <TechnologyCard
                  key={technology.name}
                  {...technology}
                />
              ))}
            </div>
          </div>

          {/* Backend and database */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 border-b border-slate-200 pb-5">
              <span className="inline-block rounded-md bg-sky-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-sky-700">
                Back-end & Database Stack
              </span>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                Backend & Database Technologies
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {backendTechnologies.map((technology) => (
                <TechnologyCard
                  key={technology.name}
                  {...technology}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
