import { motion } from "framer-motion";
import { Briefcase, Zap } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      role: "Public Services Agent",
      company: "Solektra Rwanda",
      period: "2021 - 2023",
      description: "Managed public service operations and client relations, ensuring efficient service delivery and customer satisfaction.",
      icon: Briefcase,
      highlights: [
        "Handled daily customer inquiries and service requests",
        "Maintained service records and documentation",
        "Collaborated with team members to improve service processes"
      ]
    },
    {
      role: "Electrician",
      company: "Self-Employed",
      period: "2020 - 2023",
      description: "Specialized in residential and commercial electrical installations, maintenance, and repair work.",
      icon: Zap,
      highlights: [
        "House wiring and electrical system installation",
        "Electrical troubleshooting and repairs",
        "Safety inspections and compliance verification"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(0,194,255,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-display font-bold gradient-text mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-tech mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group gradient-border p-8 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <exp.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-2xl font-display font-bold">{exp.role}</h3>
                    <span className="text-primary font-semibold">{exp.period}</span>
                  </div>
                  
                  <p className="text-secondary font-semibold mb-3">{exp.company}</p>
                  
                  <p className="text-foreground/80 mb-4">{exp.description}</p>
                  
                  <div className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + idx * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
