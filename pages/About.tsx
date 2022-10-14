import profilePic from "../public/me_lg.png";
import { motion } from "framer-motion";
import Image from "next/future/image";

type Props = {};
const About = (props: Props) => {
  return (
    <motion.div
      className="relative  flex  flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl indent-[20px]">
        About
      </h3>
      <motion.div
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
        className="-mb-20 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover sm:w-32  md:rounded-lg md:w-64 md:h-72 xl:w-[500px] xl:h-[600px] "
      >
        <Image
          src={profilePic}
          alt=""
          className="-mb-20 md:mb-0 flex-shrink-0 w-full h-full rounded-full object-cover   md:rounded-lg "
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          perspiciatis, officia, unde iusto alias, maiores natus eveniet ipsum
          asperiores quidem error? Rem, eius nesciunt. Quasi veniam fugiat
          provident rem praesentium ratione, tempore officiis sapiente ducimus
          esse ipsum molestiae quae velit laudantium mollitia incidunt quaerat
          ad voluptate. Libero possimus mollitia doloremque?
        </p>
      </div>
    </motion.div>
  );
};
export default About;
