import { motion } from "framer-motion";
import { FC } from "react";

const ShootingStars: FC = () => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <span className="shooting-star" />
      <span className="shooting-star" />
      <span className="shooting-star" />
      <span className="shooting-star" />
      <span className="shooting-star" />
      <span className="shooting-star" />
      <span className="shooting-star" />
      <span className="shooting-star" />
      <span className="shooting-star" />
      <span className="shooting-star" />
    </motion.div>
  );
};

export default ShootingStars;
