import { motion } from "framer-motion";
import Image from "next/image";
import project_snapchat from "../public/projects_snapchat.png";
import { urlFor } from "../sanity";
import { Project } from "../typings";

type Props = {
  projects: Project[];
};
const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl indent-[20px]">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10  md:p-20 h-screen "
          >
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="w-[350px]  h-[350px] sm:max-h-[400px] md:max-h-[450px]    
              "
            >
              <Image
                className="object-contain w-full"
                src={urlFor(project?.image).url()}
                alt=""
                width={144}
                height={144}
                layout="responsive"
              />
            </motion.div>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-base sm:text-xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#f7aboa]/50">
                  Case Study {i + 1} of {projects.length}
                </span>
                : {project?.title}
              </h4>

              <div className="flex flex-col justify-evenly items-center space-y-5">
                <h3 className="uppercase tracking-[10px] text-gray-500 text-2xl indent-[20px]">
                  Stack{" "}
                </h3>
                <div className="flex flex-row items-center space-x-5 justify-center ">
                  {project?.technologies.map((tech) => (
                    <Image
                      key={tech?._id}
                      src={urlFor(tech?.image).url()}
                      width={40}
                      height={40}
                      alt=""
                    />
                  ))}
                </div>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};
export default Projects;
