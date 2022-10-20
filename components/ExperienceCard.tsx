import { motion } from "framer-motion";
import { url } from "inspector";
import Image from "next/image";
import google_logo from "../public/google_logo.png";
import { urlFor } from "../sanity";

import { Experience } from "../typings";
type Props = {
  experience: Experience;
};
const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="relative flex flex-col rounded-lg items-center space-y-7 flex-shrink-0  w-[300px] sm:w-[500px] md:w-[600px] xl:w-[700px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        className="relative rounded-full overflow-hidden w-16 h-16 xl:w-[100px] xl:h-[100px] object-cover object-center"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <Image
          className="rounded-full overflow-hidden w-full h-full  object-cover object-center"
          src={urlFor(experience?.companyImage).url()}
          alt=""
          width={128}
          height={128}
        />
        {/* {NextSanityImage(
          experience?.companyImage,
          "rounded-full overflow-hidden w-full h-full  object-cover object-center",
          128,
          128,
          "intrinsic"
        )} */}
      </motion.div>

      <div className="px-0 md:px-10 ">
        <h4 className="text-xl md:text-4xl font-light">
          {experience?.jobTitle}
        </h4>
        <p className=" font-bold text-base md:text-2xl mt-1">
          {experience?.company}
        </p>
        <div className="flex spacex2 my-2">
          {experience?.technologies?.map((tech) => (
            <Image
              key={tech._id}
              src={urlFor(tech?.image).url()}
              className="rounded-full"
              width={40}
              height={40}
              alt=""
            />
            // <span key={tech._id}>
            //   {NextSanityImage(
            //     tech?.image,
            //     "rounded-full",
            //     40,
            //     40,
            //     "intrinsic"
            //   )}
            // </span>
          ))}
        </div>
        <p className="text-sm md:text-base uppercase py-5 text-gray-300">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
        <div className="h-72 overflow-y-scroll scrollbar  scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
          <ul className="list-disc space-y-4 text-sm md:text-lg ml-5 ">
            {experience?.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};
export default ExperienceCard;
