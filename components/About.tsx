import { motion } from "framer-motion";
import Image from "next/image";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};
const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      className="relative  flex  flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center mb-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl indent-[20px] font-bold">
        About
      </h3>

      <motion.div
        className="mb-5 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover sm:w-32  md:rounded-lg md:w-64 md:h-72 xl:w-[500px] xl:h-[600px] mt-32"
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
        }}
      >
        <Image
          src={urlFor(pageInfo?.heroImage).url()}
          className="mb-5 md:mb-0 flex-shrink-0 w-full rounded-full object-cover   md:rounded-lg "
          width={144}
          height={144}
          layout="responsive"
          alt=""
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10 mb-5   md:mt-32 ">
        <h4 className="text-2xl md:text-4xl font-semibold ">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          story about me
        </h4>
        <div className="overflow-y-scroll max-h-60 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
          <p className="text-base">{pageInfo?.backgroundInformation}</p>
        </div>{" "}
      </div>
    </motion.div>
  );
};
export default About;
