export type Service = {
  index: string;
  title: string;
  description: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    index: "01",
    title: "FPV & Aerial Production",
    description:
      "High-speed FPV cinematography and precision aerial coverage for productions that need motion no traditional rig can capture.",
    capabilities: ["FPV cinewhoop & long-range", "Drone photography", "Flight choreography", "Location scouting"],
  },
  {
    index: "02",
    title: "Automotive & Motorsport",
    description:
      "Dynamic vehicle films and track-day coverage built around speed, precision, and the details enthusiasts actually notice.",
    capabilities: ["Dynamic vehicle films", "Track & circuit coverage", "Chase & tracking shots", "Reveal films"],
  },
  {
    index: "03",
    title: "Commercial & Branded Content",
    description:
      "Branded films and social content for companies who want production value without a traditional agency overhead.",
    capabilities: ["Brand & product films", "Social-first content", "Event coverage", "Campaign concepting"],
  },
  {
    index: "04",
    title: "Creative Film Production",
    description:
      "Independent and collaborative creative projects — where the brief is open and the only goal is a striking result.",
    capabilities: ["Short-form narrative", "Music & art collaborations", "Concept development", "Full post-production"],
  },
];
