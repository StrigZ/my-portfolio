import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";
import { Skill } from "../typings";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};
const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer w-28 h-28 ">
      <motion.div
        className="rounded-sm object-fill w-full"
        initial={{ x: directionLeft ? -200 : 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          className="rounded-sm object-fill w-full"
          src={urlFor(skill?.image).url()}
          width={112}
          height={112}
          alt=""
        />
        {/* {NextSanityImage(
          skill?.image,
          "rounded-sm object-fill w-full",
          112,
          112,
          "intrinsic"
        )} */}
      </motion.div>
      {/* <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16  md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill?.progress}%
          </p>
        </div>
      </div> */}
    </div>
  );
};
export default Skill;
