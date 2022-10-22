import { motion } from "framer-motion";
import Image from "next/image";
import { Ref, RefObject } from "react";
import { urlFor } from "../sanity";
import { Skill } from "../typings";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};
const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className="group relative flex w-16 h-16 sm:w-20 sm:h-20  md:w-28 md:h-28  items-center justify-center">
      <motion.div
        className="rounded-sm object-fit w-full h-full"
        initial={{ opacity: 0, y: directionLeft ? -200 : 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Image
          className="rounded-sm object-fit w-full"
          src={urlFor(skill?.image).url()}
          width={48}
          height={48}
          layout="responsive"
          alt=""
        />
      </motion.div>
    </div>
  );
};
export default Skill;
