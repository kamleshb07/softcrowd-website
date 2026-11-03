import { createElement } from "react";
import { Code2, FileCheck2, GitBranch } from "lucide-react";

const trustBadgeItems = [
  {
    id: "code-ownership",
    title: "100% Code Ownership",
    description:
      "Source code, Git repository, and deployment keys delivered upon milestone completion.",
    Icon: Code2,
  },
  {
    id: "nda-protection",
    title: "Mutual NDA Guaranteed",
    description:
      "Strict non-disclosure agreements executed prior to project technical discovery.",
    Icon: FileCheck2,
  },
  {
    id: "engineering-standards",
    title: "Modern Engineering Standards",
    description:
      "Git branching, CI/CD pipelines, automated testing, and sprint tracking via Jira/ClickUp.",
    Icon: GitBranch,
  },
];

const badgesByPlacement = {
  hero: ["code-ownership"],
  booking: ["nda-protection"],
  developers: ["engineering-standards"],
  footer: ["code-ownership", "nda-protection"],
};

const TrustBadges = ({ placement = "all", className = "" }) => {
  const selectedIds = badgesByPlacement[placement];

  const visibleBadges = selectedIds
    ? trustBadgeItems.filter((badge) => selectedIds.includes(badge.id))
    : trustBadgeItems;

  const isHero = placement === "hero";
  const isCompact = isHero || placement === "footer";
  const isFooter = placement === "footer";

  return (
    <div
      role="list"
      aria-label="SoftCrowd engineering commitments"
      data-placement={placement}
      className={`${
        isCompact
          ? "flex flex-col gap-3 sm:flex-row sm:items-stretch"
          : "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      } ${className}`.trim()}
    >
      {visibleBadges.map(({ id, title, description, Icon }) => (
        <article
          key={id}
          role="listitem"
          className={`flex min-w-0 gap-3 rounded-xl border transition-all duration-300 ${
            isHero
              ? "w-fit max-w-full items-center border-white/30 bg-white/10 p-3 backdrop-blur-md hover:bg-white/15 sm:max-w-[560px]"
              : isFooter
                ? "items-start border-white/10 bg-white/5 p-4 hover:border-sky-400/40 hover:bg-white/10 sm:flex-1 sm:p-5"
                : "h-full items-start border-slate-200 bg-white p-4 hover:border-sky-200 hover:shadow-sm sm:p-5"
          }`}
        >
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
              isHero
                ? "bg-white/10 text-sky-400"
                : isFooter
                  ? "bg-sky-400/10 text-sky-300"
                  : "bg-sky-50 text-sky-600"
            }`}
            aria-hidden="true"
          >
            {createElement(Icon, {
              size: 20,
              strokeWidth: 1.8,
            })}
          </span>

          <div
            className={`min-w-0 ${
              isHero ? "border-l border-white/30 pl-3 sm:pl-4" : ""
            }`}
          >
            <h3
              className={`text-sm font-semibold leading-5 ${
                isHero || isFooter ? "text-white" : "text-slate-900"
              }`}
            >
              {title}
            </h3>

            <p
              className={`mt-1 text-xs leading-5 ${
                isHero
                  ? "text-white/75"
                  : isFooter
                    ? "text-white/65 sm:text-sm sm:leading-6"
                    : "text-slate-600 sm:text-sm sm:leading-6"
              }`}
            >
              {description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default TrustBadges;
