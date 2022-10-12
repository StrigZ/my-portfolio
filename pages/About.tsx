import profilePic from "../public/me_lg.png";
import { motion } from "framer-motion";
import Image from "next/future/image";

type Props = {};
const About = (props: Props) => {
  return (
    <motion.div
      className=" h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
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
        className="flex-shrink-0 "
      >
        <Image
          src={profilePic}
          alt=""
          className=" w-56 h-56 -mb-20 md:mb-0  md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] md:rounded-lg  rounded-full object-cover "
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dicta odit
          eligendi illum nam! Laboriosam, maiores! Labore earum quidem optio
          quibusdam exercitationem facere omnis iste eaque, nam accusantium
          delectus expedita eius. Debitis fugiat doloremque libero nesciunt unde
          nulla, earum dolorem fuga aliquid, voluptatum vel tenetur dignissimos
          magnam architecto voluptatibus reiciendis quod. Eveniet nobis dolorem
          a ea eum voluptatum porro omnis sed quisquam ad totam veritatis,
          expedita nisi accusamus quasi, suscipit aperiam. Natus repellendus
          voluptatem distinctio deleniti asperiores ullam est omnis at, mollitia
          iusto facere cum perferendis dicta aliquam sit nostrum, officia
          voluptatibus in consequatur assumenda? Incidunt repudiandae sint
          voluptatem eaque!
        </p>
      </div>
    </motion.div>
  );
};
export default About;
