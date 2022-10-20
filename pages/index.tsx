import type { GetStaticProps } from "next";
import Head from "next/head";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchExperiences } from "../utils/fetchExperience";
// import { fetchPageInfo } from "../utils/fetchPageInfo";
// import { fetchProjects } from "../utils/fetchProjects";
// import { fetchSkills } from "../utils/fetchSkills";
// import { fetchSocials } from "../utils/fetchSocials";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import { sanityClient } from "../sanity";
import { groq } from "next-sanity";

export const getStaticProps: GetStaticProps<Props> = async () => {
  // const pageInfo: PageInfo = await fetchPageInfo();
  // const experiences: Experience[] = await fetchExperiences();
  // const skills: Skill[] = await fetchSkills();
  // const projects: Project[] = await fetchProjects();
  // const socials: Social[] = await fetchSocials();
  const pageInfo: PageInfo = await sanityClient.fetch(groq`
*[_type == "pageInfo"][0] 
`);
  const experiences: Experience[] = await sanityClient.fetch(groq`
*[_type == "experience"] {
  ...,
  technologies[]->
}
`);
  const skills: Skill[] = await sanityClient.fetch(groq`
*[_type == "skill"]
`);
  const projects: Project[] = await sanityClient.fetch(groq`
*[_type == "project"] {
  ...,
  technologies[]->
}
`);
  const socials: Social[] = await sanityClient.fetch(groq`
*[_type == "social"]
`);

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    //BGColor
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory  z-0 scroll-smooth overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
      <Head>
        <title>My Portfolio</title>
      </Head>

      <main>
        {/* Header */}
        <Header socials={socials} />
        {/* Hero */}
        <section id="hero" className="snap-start">
          <Hero pageInfo={pageInfo} />
        </section>
        {/* About */}
        <section id="about" className="snap-center">
          <About pageInfo={pageInfo} />
        </section>
        {/* Experience */}
        {/* <section id="experience" className="snap-center">
          <WorkExperience experiences={experiences} />
        </section> */}
        {/* Skills */}
        <section id="skills" className="snap-start">
          <Skills skills={skills} />
        </section>
        {/* Projects */}
        <section id="projects" className="snap-start">
          <Projects projects={projects} />
        </section>
        {/* Contact Me */}
        <section id="contactme" className="snap-start">
          <ContactMe />
        </section>
      </main>
    </div>
  );
};

export default Home;
