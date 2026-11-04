# Case Studies integration notes

## What is included

- `src/components/case-studies/CaseStudies.jsx` — section, filter state, and modal state.
- `src/components/case-studies/CaseStudyCard.jsx` — reusable responsive card.
- `src/components/case-studies/CaseStudyFilters.jsx` — required technology filters.
- `src/components/case-studies/CaseStudyModal.jsx` — accessible detail modal.
- `src/data/caseStudies.js` — approved content array and development-only UI samples.

## Homepage integration

The section is intentionally not inserted into `src/pages/Home.jsx` because that is a shared homepage file being handled by the other developer.

After coordinating the insertion point, add:

```jsx
import CaseStudies from "../components/case-studies/CaseStudies";
```

Then render `<CaseStudies />` at the agreed location. The section has `id="case-studies"` for the Case Studies navigation anchor.

## Development samples and production safety

- `developmentSampleCaseStudies` contains generic UI-only records. It contains no client identity, claimed results, real architecture, API paths, screenshots, code or links.
- Vite development mode shows the temporary records only while `caseStudies` is empty.
- A production build renders only `caseStudies`. Since that array currently has no approved records, production displays the empty state rather than any development sample.
- Do not move development samples into `caseStudies`.

## Adding approved projects

When the company supplies approved information, add objects to `caseStudies` in `src/data/caseStudies.js`. Each object supports:

```js
{
  id: "unique-project-id",
  title: "Approved project title",
  category: "React", // React, Node.js, Flutter, PHP/Laravel, or Native
  summary: "Approved short summary",
  coverImage: "/images/case-studies/project-cover.webp", // optional
  coverImageAlt: "Description of the screenshot", // optional
  technologies: ["React.js", "Node.js"],
  challenge: "Approved challenge description",
  solution: "Approved solution description",
  architecture: "Approved architecture summary",
  architectureDiagram: {
    src: "/images/case-studies/architecture.webp",
    alt: "System architecture diagram description",
  }, // optional
  technicalOutcome: "Verified and approved outcome, or a factual qualitative result",
  apiSpecs: [
    { method: "GET", path: "/public-safe-example", description: "Approved public description" },
  ], // optional; include only sanitized, approved API information
  screenshots: [
    { src: "/images/case-studies/screen.webp", alt: "Screenshot description", caption: "Optional caption" },
  ], // optional
  codePreview: {
    language: "Python",
    description: "Sanitized example",
    code: "# Sanitized, approved code only",
  }, // optional
  links: {
    staging: null, // approved public staging URL only
    repository: null, // public repository URL only
  },
}
```

Only include the optional sections when real, sanitized information has been approved for publication. Never publish secrets, tokens, private API endpoints, customer data, internal hostnames, credentials, or proprietary source code without explicit authorization.

## Validation

From the project root, run:

```powershell
npm run lint
npm run build
```

Also test each filter, modal close button, Escape key, backdrop click, keyboard focus, mobile scrolling, screenshot loading, and links. Insert the section into the homepage only after coordinating with the homepage owner.
