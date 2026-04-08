import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import { Flex } from "@/styles/components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Brandon Spencer</title>
        <meta name="description" content="Brandon Spencer | Software Engineer" />
      </Head>
      <Script>
        <script src="https://kit.fontawesome.com/800ba3c0e3.js" crossorigin="anonymous"></script>

      </Script>

      <main className="mx-auto max-w-2xl px-6 py-16 font-sans text-zinc-900">
        <section>
          <div className="w-full h-screen flex justify-center items-center -mt-8 relative">
            Hi Im Brandon
          </div>
        </section>
        {/* Hero */}
        <section className="mb-16 justify-center">
          <Flex className="flex-col gap-3 items-center">
              <h1 className="text-3xl font-semibold tracking-tight mb-2">Brandon Spencer</h1>
              <Flex className="text-lg text-zinc-500">Software Engineer</Flex>
              <p className="text-zinc-600 leading-relaxed mb-5">
                Needs a good tag line
              </p>
              <ul className="flex flex-wrap gap-4 text-sm text-zinc-500">
                <li>
                  <i className="fa-solid fa-envelope"></i>
                  <a href="mailto:brandon.spencer@gmail.com" className="hover:text-zinc-900 transition-colors">
                    brandon.spencer@gmail.com
                  </a>
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i>
                  <a href="tel:+18597976417" className="hover:text-zinc-900 transition-colors">
                    859.797.6417
                  </a>
                </li>
                <li>
                  <i className="fa-brands fa-github"></i>
                  <a href="https://github.com/doubldragon" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <i className="fa-brands fa-linkedin"></i>
                  <a href="https://linkedin.com/in/brandonrspencer" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>

          </Flex>

        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-6">Projects</h2>
          <p className="text-zinc-400 text-sm italic">Project components will be imported here.</p>
        </section>

        {/* Work Experience */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-6">Experience</h2>
          <div className="space-y-8">
            <div>
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="font-medium">Job Title</h3>
                <span className="text-sm text-zinc-400">2023 — Present</span>
              </div>
              <p className="text-sm text-zinc-500 mb-2">Company Name</p>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Brief description of your role and impact.
              </p>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default Home;
