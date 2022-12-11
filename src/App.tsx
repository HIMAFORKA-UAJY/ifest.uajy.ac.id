import { motion } from "framer-motion";

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-4xl">Hello World!</h1>
      /</motion.div>
  );
}
