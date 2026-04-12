export type Project = {
  filename: string | null;
  title: string;
  blurb: string;
  category: string;
  skills: string[];
  year: number;
  link: string;
};

const projects: Project[] = [
  {
    filename: null,
    title: "Alarm Dashboard",
    blurb:
      "Frontend Alarm dashboard ingesting large datasets and optimizing performance",
    category: "Apax Software",
    skills: ["react", "Storybook", "Redux", "Redux-Sagas"],
    year: 2019,
    link: "",
  },
  {
    filename: null,
    title: "Injection Molding Auto-quote",
    blurb:
      "Frontend Alarm dashboard ingesting large datasets and optimizing performance",
    category: "Xometry",
    skills: ["React", "Typescript", "Python", "AWS"],
    year: 2024,
    link: "",
  },
  {
    filename: null,
    title: "Teamspace",
    blurb:
      "Frontend Alarm dashboard ingesting large datasets and optimizing performance",
    category: "Xometry",
    skills: ["React", "Typescript", "Python", "AWS"],
    year: 2023,
    link: "",
  },
  {
    filename: null,
    title: "Wilcutt Guitars",
    blurb:
      "Frontend Alarm dashboard ingesting large datasets and optimizing performance",
    category: "Fusioncorp",
    skills: ["Symfony", "PHP", "React", "AWS", "Postgres"],
    year: 2018,
    link: "",
  },
  {
    filename: null,
    title: "Manufacturing Region Control",
    blurb:
      "Frontend Alarm dashboard ingesting large datasets and optimizing performance",
    category: "Xometry",
    skills: ["React", "Typescript", "Python", "AWS"],
    year: 2024,
    link: "",
  },
  {
    filename: null,
    title: "Kentucky Injury Prevention and Research Center",
    blurb:
      "Frontend Alarm dashboard ingesting large datasets and optimizing performance",
    category: "Apax Software",
    skills: ["Django", "Python", "React", "MySql"],
    year: 2021,
    link: "",
  },
];

export default projects;
