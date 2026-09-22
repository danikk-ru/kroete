export type Category = "FPV" | "Automotive" | "Motorsport" | "Commercial" | "Film";

export type Project = {
  id: string;
  title: string;
  category: Category;
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
    title: "Prototype Run",
    category: "Automotive",
    year: "2024",
    role: "FPV / Direction",
    location: "Germany",
    placeholder: true,
  },
  {
    id: "proto-02",
    title: "Circuit Study",
    category: "Motorsport",
    year: "2024",
    role: "Aerial Coverage",
    location: "Germany",
    placeholder: true,
  },
  {
    id: "proto-03",
    title: "Vertical Line",
    category: "FPV",
    year: "2024",
    role: "FPV / Editing",
    location: "TBC",
    placeholder: true,
  },
  {
    id: "proto-04",
    title: "Brand Reel Concept",
    category: "Commercial",
    year: "2024",
    role: "Concept / Production",
    location: "TBC",
    placeholder: true,
  },
  {
    id: "proto-05",
    title: "Short Study No.1",
    category: "Film",
    year: "2024",
    role: "Direction / Editing",
    location: "TBC",
    placeholder: true,
  },
  {
    id: "proto-06",
    title: "Night Runs",
    category: "Automotive",
    year: "2024",
    role: "FPV / Direction",
    location: "TBC",
    placeholder: true,
  },
];
