/**
 * Case-study content for the SoftCrowd website.
 *
 * IMPORTANT:
 * - Keep `caseStudies` limited to real projects and company-approved content.
 * - Do not publish client names, screenshots, architecture, API details, code,
 *   links, or results until SoftCrowd has approved them for public display.
 * - `developmentSampleCaseStudies` is used only by Vite's development server.
 *   It is excluded from production rendering by CaseStudies.jsx.
 */

export const CASE_STUDY_FILTERS = [
  "All",
  "React",
  "Node.js",
  "Flutter",
  "PHP/Laravel",
  "Native",
];

/**
 * Add approved project objects here when Kamlesh shares the verified details.
 * Keep the fields aligned with the development examples below.
 */
export const caseStudies = [];

const pending = (section) =>
  `${section} will be added after the company provides verified, approved project information.`;

/**
 * Temporary UI-only records. These are deliberately generic and contain no
 * client names, claimed outcomes, real architecture, API routes, or links.
 * They appear only when running `npm run dev` and must never be published.
 */
export const developmentSampleCaseStudies = [
  {
    id: "development-preview-react",
    title: "Development Preview 01",
    category: "React",
    summary:
      "Temporary development content used only to preview the case-study card layout.",
    technologies: ["React.js", "Tailwind CSS"],
    challenge: pending("Challenge details"),
    solution: pending("Solution details"),
    architecture: pending("Architecture details"),
    architectureDiagram: null,
    technicalOutcome: "No verified technical outcome has been supplied.",
    apiSpecs: [],
    screenshots: [],
    codePreview: null,
    links: { staging: null, repository: null },
    isDevelopmentSample: true,
  },
  {
    id: "development-preview-node",
    title: "Development Preview 02",
    category: "Node.js",
    summary:
      "Temporary development content used only to test the Node.js filter state.",
    technologies: ["Node.js", "Express"],
    challenge: pending("Challenge details"),
    solution: pending("Solution details"),
    architecture: pending("Architecture details"),
    architectureDiagram: null,
    technicalOutcome: "No verified technical outcome has been supplied.",
    apiSpecs: [],
    screenshots: [],
    codePreview: null,
    links: { staging: null, repository: null },
    isDevelopmentSample: true,
  },
  {
    id: "development-preview-flutter",
    title: "Development Preview 03",
    category: "Flutter",
    summary:
      "Temporary development content used only to test the Flutter filter state.",
    technologies: ["Flutter", "Dart"],
    challenge: pending("Challenge details"),
    solution: pending("Solution details"),
    architecture: pending("Architecture details"),
    architectureDiagram: null,
    technicalOutcome: "No verified technical outcome has been supplied.",
    apiSpecs: [],
    screenshots: [],
    codePreview: null,
    links: { staging: null, repository: null },
    isDevelopmentSample: true,
  },
  {
    id: "development-preview-php-laravel",
    title: "Development Preview 04",
    category: "PHP/Laravel",
    summary:
      "Temporary development content used only to test the PHP/Laravel filter state.",
    technologies: ["PHP", "Laravel"],
    challenge: pending("Challenge details"),
    solution: pending("Solution details"),
    architecture: pending("Architecture details"),
    architectureDiagram: null,
    technicalOutcome: "No verified technical outcome has been supplied.",
    apiSpecs: [],
    screenshots: [],
    codePreview: null,
    links: { staging: null, repository: null },
    isDevelopmentSample: true,
  },
  {
    id: "development-preview-native",
    title: "Development Preview 05",
    category: "Native",
    summary:
      "Temporary development content used only to test the Native filter state.",
    technologies: ["Swift", "Kotlin"],
    challenge: pending("Challenge details"),
    solution: pending("Solution details"),
    architecture: pending("Architecture details"),
    architectureDiagram: null,
    technicalOutcome: "No verified technical outcome has been supplied.",
    apiSpecs: [],
    screenshots: [],
    codePreview: null,
    links: { staging: null, repository: null },
    isDevelopmentSample: true,
  },
];
