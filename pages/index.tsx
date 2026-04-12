import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Bio from "@/components/Bio";
import ExperienceCard from "@/components/ExperienceCard";
import experience from "@/data/experience";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Brandon Spencer</title>
        <meta
          name="description"
          content="Brandon Spencer | Software Engineer"
        />
      </Head>
      <Script
        src="https://kit.fontawesome.com/800ba3c0e3.js"
        strategy="lazyOnload"
      />

      <Navbar />
      <main className="w-full flex justify-center items-center flex-col text-theme-text">
        <section id="hero" className="w-full">
          <div className="hero-wrapper flex justify-center">
            <div className="hero-layout w-full max-w-[90vw] h-screen -mt-8">
              <div className="hero-title-section">
                <h1 className="hero-title">Hi, I'm Brandon</h1>
              </div>
              <div className="hero-content">
                <div className="hero-subtitle mb-8 text-right">
                  A{" "}
                  <strong className="font-semibold text-accent2 dark:text-accent2-dark">
                    {" "}
                    <span style={{ color: "#ff9d00" }}>
                      full stack developer
                    </span>
                  </strong>{" "}
                  located in
                  <i className="whitespace-nowrap font-light text-accent1 dark:text-accent1-dark">
                    {" "}
                    Lexington, KY
                  </i>{" "}
                  with a primary focus on frontend experiences with a growing
                  skillset in backend engineering.
                </div>
                <div className="hero-actions">
                  <a href="#projects" className="hero-button">
                    <span>Explore My Projects</span>
                    <i
                      className="fas fa-arrow-down ml-2"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About */}
        <section
          id="about"
          className="w-full px-4 md:max-w-[90vw] md:px-0 mb-16"
        >
          <Bio />
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="w-full px-4 md:max-w-[90vw] md:px-0 mb-16"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-theme-subtle mb-6">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section
          id="experience"
          className="w-full px-4 md:max-w-[90vw] md:px-0 mb-16"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-theme-subtle mb-6">
            Work Experience
          </h2>
          <div className="space-y-10">
            {experience.map((entry) => (
              <ExperienceCard
                key={`${entry.company}-${entry.start}`}
                entry={entry}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
