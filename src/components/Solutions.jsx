import {
  Globe,
  Smartphone,
  Server,
  Users,
  ArrowUpRight,
} from "lucide-react";

const solutions = [
  {
    number: "01",
    title: "Custom Web Applications",
    description:
      "Build scalable, secure, and user-friendly web applications tailored to your business requirements.",
    icon: Globe,
    technologies: ["React.js", "Node.js", "PHP / Laravel"],
  },
  {
    number: "02",
    title: "Mobile App Development",
    description:
      "Create seamless mobile experiences with high-performance Android, iOS, and cross-platform applications.",
    icon: Smartphone,
    technologies: ["Flutter", "React Native", "Native iOS / Android"],
  },
  {
    number: "03",
    title: "Backend & API Engineering",
    description:
      "Develop reliable backend systems, REST APIs, and database architectures designed for scalability.",
    icon: Server,
    technologies: ["Node.js", "MongoDB", "MySQL / PostgreSQL"],
  },
  {
    number: "04",
    title: "Dedicated Developer Hiring",
    description:
      "Extend your development team with dedicated engineers who work alongside your team and project goals.",
    icon: Users,
    technologies: ["Frontend", "Backend", "Full Stack"],
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="relative scroll-mt-28 overflow-hidden bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            What We Build
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Engineering Solutions
            <span className="text-blue-600"> That Move You Forward</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            From web and mobile applications to powerful backend systems,
            we help businesses turn ideas into reliable digital products.
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <div
                key={solution.number}
                className="group relative rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="mb-7 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-semibold text-gray-300">
                    {solution.number}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {solution.title}
                </h3>

                <p className="mb-7 min-h-[100px] text-sm leading-7 text-gray-600">
                  {solution.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {solution.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-gray-100 px-2.5 py-1.5 text-xs font-medium text-gray-600"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center justify-end border-t border-gray-100 pt-5">
                  <ArrowUpRight
                    size={20}
                    className="text-gray-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}