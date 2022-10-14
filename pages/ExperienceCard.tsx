import { motion } from "framer-motion";
import Image from "next/future/image";
import google_logo from "../public/google_logo.png";
type Props = {};
const ExperienceCard = (props: Props) => {
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
          src={google_logo}
          alt=""
          width={128}
          height={128}
        />
      </motion.div>

      <div className="px-0 md:px-10 ">
        <h4 className="text-xl md:text-4xl font-light">CEO OF GOOGLE</h4>
        <p className=" font-bold text-base md:text-2xl mt-1">GOOGLE FAM</p>
        <div className="flex spacex2 my-2">{/* Tech Stack */}</div>
        <p className="text-sm md:text-base uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>
        <div className="h-72 overflow-y-scroll">
          <ul className="list-disc space-y-4 text-sm md:text-lg ml-5">
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, ipsum.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, ipsum.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, ipsum.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, ipsum.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, ipsum.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, ipsum.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, ipsum.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, ipsum.
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};
export default ExperienceCard;
