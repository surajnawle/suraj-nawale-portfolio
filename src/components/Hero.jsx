import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Suraj Nawale</h1>
      <h2>QA & ETL Test Engineer</h2>

      <p>
        I help organizations deliver reliable data pipelines, accurate reporting,
        and stable applications through ETL testing, backend validation, and
        automation.
      </p>

      <motion.a
        href="mailto:srjnawle@gmail.com"
        whileHover={{ scale: 1.05 }}
        className="cta"
      >
        Contact Me
      </motion.a>
    </motion.section>
  );
}
