import { motion } from "framer-motion";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";

type Props = {
  experiences: Experience[];
};
const WorkExperience = ({ experiences }: Props) => {
  return (
    <motion.div
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center space-y-14"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1.1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl indent-[20px]">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {/* ExperienceCard */}
        {experiences?.map((data) => (
          <ExperienceCard key={data._id} experience={data} />
        ))}
      </div>
    </motion.div>
  );
};
export default WorkExperience;
