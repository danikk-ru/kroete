export type Category = "FPV" | "Automotive" | "Motorsport" | "Commercial" | "Film";

export type Project = {
  id: string;
  /** 1–2 lines, rendered as a stacked poetic title (e.g. ["After", "hours."]). */
  title: string[];
  category: Category;
  /** Short 2–3 word slash-separated mood line, e.g. "MOTION / DETAIL / SPEED". */
  descriptor: string;
  year: string;
  role: string;
  location: string;
  /**
   * Optional path to a real still/poster frame, e.g. "/work/project-01.jpg".
   * Leave undefined to use the generated placeholder visual — replace with
   * real media as it becomes available. See README.md for image specs.
   */
  image?: string;
  video?: string;
  placeholder: boolean;
};

export const categories: Array<Category | "All"> = [
  "All",
  "FPV",
  "Automotive",
  "Motorsport",
  "Commercial",
  "Film",
];

/**
 * PLACEHOLDER PROJECTS — no real clients, footage, or outcomes implied.
 * Replace each entry with confirmed project data + media as it is produced.
 */
export const projects: Project[] = [
  {
    id: "proto-01",
    title: ["After", "hours."],
    category: "Automotive",
    descriptor: "MOTION / DETAIL / SPEED",
    year: "2024",
    role: "FPV / Direction",
    location: "Germany",
    placeholder: true,
  },
  {
    id: "proto-02",
    title: ["Above", "it all."],
    category: "Motorsport",
    descriptor: "SPACE / FLOW / PERSPECTIVE",
    year: "2024",
    role: "Aerial Coverage",
    location: "Germany",
    placeholder: true,
  },
  {
    id: "proto-03",
    title: ["No fixed", "perspective."],
    category: "FPV",
    descriptor: "IMAGE / STORY / FEELING",
    year: "2024",
    role: "FPV / Editing",
    location: "TBC",
    placeholder: true,
  },
  {
    id: "proto-04",
    title: ["Brand", "in motion."],
    category: "Commercial",
    descriptor: "IDEA / CRAFT / CLARITY",
    year: "2024",
    role: "Concept / Production",
    location: "TBC",
    placeholder: true,
  },
  {
    id: "proto-05",
    title: ["A quieter", "frame."],
    category: "Film",
    descriptor: "LIGHT / PACE / STILLNESS",
    year: "2024",
    role: "Direction / Editing",
    location: "TBC",
    placeholder: true,
  },
  {
    id: "proto-06",
    title: ["Night", "runs."],
    category: "Automotive",
    descriptor: "SPEED / SHADOW / SOUND",
    year: "2024",
    role: "FPV / Direction",
    location: "TBC",
    placeholder: true,
  },
];
