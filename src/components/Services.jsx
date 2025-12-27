import { motion } from "framer-motion";

const services = [
  {
    title: "ETL & Data Warehouse Testing",
    desc: "Validation of complex ETL pipelines, transformations, and reconciliations."
  },
  {
    title: "SQL Data Validation",
    desc: "Data profiling, reconciliation, and backend accuracy checks."
  },
  {
    title: "Automation Testing",
    desc: "Python Playwright automation for UI and regression testing."
  },
  {
    title: "API & Backend Testing",
    desc: "REST API validation and backend quality assurance."
  }
];

export default function Services() {
  return (
    <section>
      <h3>Services</h3>

      <div className="grid">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="card"
            whileHover={{ y: -6 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
