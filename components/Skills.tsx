import { motion } from "framer-motion";
import { useRef } from "react";
import { Skill as SkillType } from "../typings";
import Skill from "./Skill";

type Props = {
  skills: SkillType[];
};
const Skills = ({ skills }: Props) => {
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

      <div className="grid grid-cols-4 gap-5 ">
        {skills?.slice(0, skills?.length / 2).map((skill) => (
          <Skill key={skill?._id} skill={skill} />
        ))}
        {skills?.slice(skills?.length / 2, skills.length).map((skill) => (
          <Skill key={skill?._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
};
export default Skills;
