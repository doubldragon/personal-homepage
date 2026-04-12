export type Experience = {
  start: number | null;
  end: number | null;
  title: string;
  company: string;
  highlights: string[];
  skills: string[];
};

const experience: Experience[] = [
  {
    start: 2022,
    end: null,
    title: "Software Engineer II",
    company: "Xometry",
    highlights: [
      "Built team collaboration tool, allowing individuals and organizations to share and manage quotes",
      "Transformative changes allowing injection molding parts to be quoted automatically, removing the need for staff support",
      "Improved checkout flow resulting in 15% increased quote conversion rates",
    ],
    skills: ["React", "Typescipt", "Graphql", "MongoDB", "Docker", "AWS"],
  },
  {
    start: 2019,
    end: 2022,
    title: "Mid-Level Full Stack Web Developer",
    company: "Apax Software",
    highlights: [
      "Built and shipped an alarm management front-end, managing large data sets, optimizing load time and performance",
      "Worked with Project Manager throughout sprint planning process, sizing and assigning tickets to balance workloads",
      "Assisted Junior Developers through code review and pair programming",
      "Took ownership of completed Phase 1 project, assisting client scoping its Phase 2 development",
      "Worked with developers and other support staff to improve processes and increase sprint velocity",
    ],
    skills: ["React", "Redux", "Python", "Django", "Docker", "AWS", "Agile"],
  },
  {
    start: 2017,
    end: 2019,
    title: "Junior Full Stack Web Developer",
    company: "FusionCorp",
    highlights: [
      "Scripted migrations for large volume of images from FTP server to AWS S3, associating said images programmatically to products in inventory",
      "Built a custom point of sale terminal and inventory management system, integrated with numerous external APIs (Amazon S3/MWS, ShipStation, Paypal, among others) synchronizing inventory levels across multiple sales platforms",
      "Created online ordering portal, including menu management tools, Stripe integration, and custom video boards",
      "Maintained frequent communication with clients as projects developed to achieve the desired results for their projects",
    ],
    skills: ["PHP", "Symfony", "MySQL", "AWS", "Stripe", "ColdFusion"],
  },
  {
    start: null,
    title: "Other Professional Experience",
    company: "",
    end: null,
    highlights: [
      "12 years in restaurant management",
      "Led teams as small as 5 and large as 60",
      "day to day operations for a multi-million dollar business",
      "pioneered process improvements that adopted by a nationwide brand",
    ],
    skills: [],
  },
];

export default experience;
