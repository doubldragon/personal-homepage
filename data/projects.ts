export type Project = {
  filename: string | null;
  title: string;
  blurb: string;
  category: string;
  skills: string[];
  year: number;
  link: string;
  description?: string;
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
    {
    filename: null,
    title: "The Spence Stack",
    blurb:
      "Kentucky high school soccer rankings: a margin- and tier-based rating model that publishes weekly rankings, team pages, tournament brackets and matchup predictions, with an admin backend for data scraping and corrections",
    description:
      "Rankings in Kentucky high school soccer are mostly opinion: coaches' polls and media lists that lean on reputation and are hard to check. The Spence Stack replaces them with a transparent, data-driven alternative. It collects every KHSAA boys and girls result each week, rates teams by goal margin adjusted for schedule strength, and publishes rankings that anyone can trace back to the games. Started as a 2026 prototype and now being rebuilt as a full application, it will give players, coaches and fans one place to see where every team stands, how each one got there, and what to expect from upcoming matchups and postseason brackets.",
    category: "Personal",
    skills: ["Python", "FastAPI", "React", "Typescript", "Postgres"],
    year: 2026,
    link: "",
  },

];

export default projects;
