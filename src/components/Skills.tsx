import { motion } from "framer-motion";
import { Code2, Wrench, Laptop } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code2,
      skills: [
        { name: "HTML", level: 85 },
        { name: "CSS", level: 75 },
        { name: "Python", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "MySQL", level: 70 }
      ]
    },
    {
      title: "Software",
      icon: Laptop,
      skills: [
        { name: "Microsoft Office", level: 90 },
        { name: "Adobe Premiere Pro", level: 85 },
        { name: "Adobe Audition", level: 80 },
        { name: "3D Paint", level: 75 }
      ]
    },
    {
      title: "Technical",
      icon: Wrench,
      skills: [
        { name: "Electrical Installation", level: 90 },
        { name: "Electrical Safty", level: 78 },
        { name: "Hardware Maintenance", level: 85 },
        { name: "Digital Services", level: 88 },
        { name: "Systems Design", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(0,255,179,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-display font-bold gradient-text mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-tech mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="gradient-border p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-tech"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
