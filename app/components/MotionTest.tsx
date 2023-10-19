"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
  AnimatePresence,
  cubicBezier,
  circOut,
} from "framer-motion";
import { AiFillAccountBook } from "react-icons/ai";

const MotionTest = () => {
  const { scrollYProgress } = useScroll();

  const x = useMotionValue(0);
  const y = useTransform(x, [0, 1], [0, 2], { ease: circOut });
  const z = useTransform(x, [0, 1], [0, 2], {
    ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
  });
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#ff008c", "#540aa8", "rgb(103, 114, 6)"]
  );

  return (
    <>
      <motion.div
        style={{ background }}
        className="w-48 h-48 border border-red-600"
      >
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{
            x: 150,
            y: 140,
          }}
          transition={{
            // tipo de animacion
            type: "spring",
            // como de espeso es. rebota menos
            stiffness: 100,
            // como de rapido se desliza. n mas grande == lento, mas bajo == rapido.
            damping: 20,
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x }}
        >
          <AiFillAccountBook x={x} size={40} />
        </motion.div>
      </motion.div>
      {/* interesante transition!! */}
      <motion.div
        layout
        className="w-48 h-48 border"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      />
      {/* algo */}
      <motion.path
        className="w-48 h-48 border text-white"
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{ pathLength: scrollYProgress }}
      />
      {/*  */}
    </>
  );
};

export default MotionTest;
