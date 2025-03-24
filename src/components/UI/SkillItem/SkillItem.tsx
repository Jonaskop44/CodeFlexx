import { motion, useInView } from "framer-motion";
import { FC, useRef } from "react";
import { getSkillItemAnimations } from "./animations";
import { Icon } from "@iconify/react";

interface SkillItemProps {
  description: string;
  icon: string;
  index: number;
  isLast: boolean;
  title: string;
}

const SkillItem: FC<SkillItemProps> = ({
  description,
  icon,
  index,
  isLast,
  title,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { iconVariants, textVariants, lineVariants } =
    getSkillItemAnimations(index);

  return (
    <div className="flex gap-6" ref={ref}>
      <div className="flex flex-col items-center">
        <motion.div
          className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white"
          variants={iconVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Icon icon={icon} className="w-6 h-6" />
        </motion.div>
        {!isLast && (
          <motion.div
            className="w-1 flex-grow bg-gradient-to-b from-purple-500 to-blue-500 my-2"
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          ></motion.div>
        )}
      </div>
      <motion.div
        className={`pb-12 ${isLast ? "" : ""}`}
        variants={textVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </motion.div>
    </div>
  );
};

export default SkillItem;
