export const getSkillItemAnimations = (index = 0) => {
  return {
    iconVariants: {
      hidden: { scale: 0, rotate: -180 },
      visible: {
        scale: 1,
        rotate: 0,
        transition: {
          type: "spring" as const,
          stiffness: 260,
          damping: 20,
          delay: 0.1 + index * 0.1,
        },
      },
    },

    textVariants: {
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          delay: 0.2 + index * 0.1,
        },
      },
    },

    lineVariants: {
      hidden: { height: 0 },
      visible: {
        height: "100%",
        transition: {
          duration: 0.8,
          delay: 0.3 + index * 0.1,
        },
      },
    },
  };
};
