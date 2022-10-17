import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};
const Skill = ({ directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer w-16 h-16 md:w-24 md:h-24 xl:w-32 xl:h-32">
      <motion.img
        className="rounded-full border border-gray-500 object-cover w-full   filter group-hover:grayscale transition duration-300 ease-in-out"
        initial={{ x: directionLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16  md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};
export default Skill;
