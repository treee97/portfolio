"use client";
import { animate, motion } from "framer-motion";

interface Props {
  text: string;
}

const TextCard = ({ text }: Props) => {
  return (
    <motion.div
      initial={{ rotate: "0deg" }}
      animate={{}}
      className="border border-red-500 max-w-xs"
    >
      {text}
    </motion.div>
  );
};

export default TextCard;
