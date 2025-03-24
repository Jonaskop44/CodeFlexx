import { motion } from "framer-motion";
import { FC } from "react";

interface AnimatedLinesProps {
  count: number;
}

const AnimatedLines: FC<AnimatedLinesProps> = ({ count }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, index) => {
        const isVertical = Math.random() > 0.5;
        const position = Math.random() * 100;
        const thickness = Math.random() * 3 + 2;
        const length = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        const duration = Math.random() * 15 + 15;
        const opacity = Math.random() * 0.15 + 0.15;

        return (
          <motion.div
            key={index}
            className="absolute bg-gradient-to-r from-purple-500/50 to-blue-500/50"
            style={{
              opacity,
              ...(isVertical
                ? {
                    width: `${thickness}px`,
                    height: `${length}%`,
                    left: `${position}%`,
                    top: 0,
                  }
                : {
                    height: `${thickness}px`,
                    width: `${length}%`,
                    top: `${position}%`,
                    left: 0,
                  }),
            }}
            animate={{
              ...(isVertical
                ? {
                    y: ["0%", "100%", "0%"],
                  }
                : {
                    x: ["0%", "100%", "0%"],
                  }),
            }}
            transition={{
              duration,
              delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
};

export default AnimatedLines;
