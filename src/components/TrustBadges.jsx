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

/**
 * Reusable trust/engineering commitments from the SoftCrowd redesign spec.
 *
 * placement options:
 * - "hero": 100% Code Ownership (below the primary Hero CTA)
 * - "booking": Mutual NDA Guaranteed (Contact / Booking section)
 * - "developers": Modern Engineering Standards (Dedicated Developers section)
 * - "footer": 100% Code Ownership + Mutual NDA Guaranteed (Footer)
 * - "all": all three badges in a responsive grid (default)
 */
const TrustBadges = ({ placement = "all", className = "" }) => {
  const selectedIds = badgesByPlacement[placement];
  const visibleBadges = selectedIds
    ? trustBadgeItems.filter((badge) => selectedIds.includes(badge.id))
    : trustBadgeItems;

  const isCompact = placement === "hero" || placement === "footer";
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
          className={`flex min-w-0 items-start gap-3 rounded-xl border p-4 transition-colors sm:p-5 ${
            isFooter
              ? "border-white/10 bg-white/5 hover:border-sky-400/40 hover:bg-white/10"
              : "border-slate-200 bg-white hover:border-sky-200 hover:shadow-sm"
          } ${isCompact ? "sm:flex-1" : "h-full"}`}
        >
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
              isFooter
                ? "bg-sky-400/10 text-sky-300"
                : "bg-sky-50 text-sky-600"
            }`}
            aria-hidden="true"
          >
            {createElement(Icon, { size: 20, strokeWidth: 1.8 })}
          </span>

          <div className="min-w-0">
            <h3
              className={`text-sm font-semibold leading-5 ${
                isFooter ? "text-white" : "text-slate-900"
              }`}
            >
              {title}
            </h3>
            <p
              className={`mt-1.5 text-xs leading-5 sm:text-sm sm:leading-6 ${
                isFooter ? "text-white/65" : "text-slate-600"
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
