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
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl indent-[20px]">
        Projects test
      </h3>

      <div className="relative w-screen flex overflow-x-scroll  overflow-y-hidden  z-20 scrollbar-none mt-auto mb-5 md:mb-10 px-5 sm:pl-[30vw] ">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen  flex flex-col f items-center justify-center mx-2  min-w-[300px] md:min-w-[500px]  xl:min-w-[800px]  rounded-lg "
          >
            <div className="bg-[#191919]/50   p-3  xl:p-10  h-[75vh] rounded-lg flex flex-col justify-between  space-y-5 overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
              <a
                href={project?.linkToBuild}
                rel="noreferrer noopener"
                target="_blank"
              >
                <motion.div
                  className="-mt-5"
                  initial={{ y: "-20vh", opacity: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                >
                  <Image
                    className="object-contain block "
                    src={urlFor(project?.image).url()}
                    alt=""
                    width={144}
                    height={144}
                    layout="responsive"
                  />
                </motion.div>
              </a>
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-xl md:text-2xl xl:text-4xl font-semibold text-center">
                  <span className="underline decoration-[#f7aboa]/50">
                    Case Study {i + 1} of {projects.length}
                  </span>
                  : <span className="block mt-2">{project?.title}</span>
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
                <p className="text-sm sm:text-base md:text-lg text-center md:text-left min-h-[100px]">
                  {project?.summary}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};
export default Projects;
