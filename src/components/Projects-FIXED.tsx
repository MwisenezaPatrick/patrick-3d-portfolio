import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Construction React",
      description:
        "A React-based application for construction project management, featuring modern UI components and responsive design for managing construction sites, materials, and timelines.",
      tags: ["React", "TypeScript", "Construction", "Project Management"],
      gradient: "from-blue-500/20 to-green-500/20",
      demoUrl: "https://mwisenezapatrick.github.io/construction-react/",
      githubUrl: "https://github.com/mwisenezapatrick/construction-react",
    },
    {
      title: "Coming Soon",
      description:
        "Exciting projects in development. Stay tuned for innovative solutions in Business IT and technology.",
      tags: ["React", "TypeScript", "Innovation"],
      gradient: "from-primary/20 to-secondary/20",
      demoUrl: "https://your-demo-link.com",
      githubUrl: "https://github.com/your-repo",
    },
    {
      title: "Future Work",
      description:
        "Planning to showcase upcoming projects that demonstrate skills in software development and digital solutions.",
      tags: ["Python", "AI", "Data Science"],
      gradient: "from-secondary/20 to-primary/20",
      demoUrl: "https://future-demo.com",
      githubUrl: "https://github.com/future-repo",
    },
    {
      title: "Portfolio Expansion",
      description:
        "This space will feature completed projects, contributions, and technical achievements.",
      tags: ["Full Stack", "Cloud", "Innovation"],
      gradient: "from-primary/20 to-purple-500/20",
      demoUrl: "https://portfolio-demo.com",
      githubUrl: "https://github.com/portfolio-repo",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-card/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(0,194,255,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-display font-bold gradient-text mb-4">
            Projects & Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-tech mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Come into my creative and technical journey. More projects coming
            soon!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group gradient-border overflow-hidden rounded-lg border bg-card shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ pointerEvents: 'auto' }}
            >
              {/* Image Placeholder - Simplified to avoid overlays blocking clicks */}
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}
              >
                <div className="text-5xl font-display font-bold text-foreground/20 pointer-events-none">
                  {index + 1}
                </div>
                {/* Hover overlay - pointer-events-none */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Info */}
              <div className="p-6 space-y-4 relative z-20">
                <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons - z-10, explicit pointer-events */}
                <div className="flex gap-3 pt-4 z-10" style={{ pointerEvents: 'auto' }}>
                  
                  {/* Demo Button */}
                  <Button 
                    variant="outline" 
                    asChild 
                    className="flex-1 h-10 border-primary hover:bg-primary/10 text-primary font-medium shadow-sm hover:shadow-md transition-all duration-300 z-20"
                  >
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>

                  {/* GitHub Button */}
                  <Button 
                    variant="outline" 
                    asChild 
                    className="flex-1 h-10 border-muted-foreground/50 hover:bg-muted/50 text-foreground font-medium shadow-sm hover:shadow-md transition-all duration-300 z-20"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4 text-lg">
            More exciting projects are in development. Check back soon!
          </p>
        </motion.div>
      </div>
    </section>
  );
};
