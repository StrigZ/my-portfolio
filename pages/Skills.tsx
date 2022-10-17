import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};
const Skills = (props: Props) => {
  return (
    <motion.div
      className="flex relative flex-col text-center md:text-left xl:flex-row  xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h4 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl indent-[20px]">
        Skills
      </h4>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm ">
        Hover over a skill for current profieciency
      </h3>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-5 ">
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
};
export default Skills;
