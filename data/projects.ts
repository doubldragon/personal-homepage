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
    blurb: "Frontend Alarm dashboard ingesting large datasets and optimizing performance",
    category: "Apax Software",
    skills: ["react", "Storybook", "Redux", "Redux-Sagas"],
    year: 2019,
    link: "",
  }
];

export default projects;
