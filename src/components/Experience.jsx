import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section>
      <h3>Professional Experience</h3>

      <motion.div
        className="experience-card"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h4>Software Test Engineer — Wipro</h4>
        <span>ETL / DWH | Banking & Compliance</span>
        <ul>
          <li>Validated complex ETL pipelines for FATCA & CRS reporting</li>
          <li>Performed SQL-based reconciliation across Oracle & BigQuery</li>
          <li>Supported cloud migration testing on GCP</li>
          <li>Automated regression testing using Python Playwright</li>
        </ul>
      </motion.div>

      <motion.div
        className="experience-card"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h4>Freelance Automation Specialist</h4>
        <span>Make.com · n8n · API Integrations</span>
        <ul>
          <li>Designed workflow automations for business processes</li>
          <li>Integrated Gmail, Sheets, CRMs, and REST APIs</li>
          <li>Reduced manual workload by 40–70%</li>
        </ul>
      </motion.div>
    </section>
  );
}
