import { motion } from "framer-motion";
import { Mail, Phone, Globe } from "lucide-react";
import { Card } from "./ui/card";

export const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-tech mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Card */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <Card className="gradient-border p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold text-primary">Mwiseneza Patrick</h3>
                  <p className="text-muted-foreground">I'm a graduate in Diploma in Business Information 
                    Technology from Strathmore University. I have hands-on experience in customer support, 
                    digital services, and basic IT infrastructure, with a strong foundation in both business 
                    and technology. Previously, I worked at Solektra Rwanda as a Public Service Agent, helping 
                    citizens access government digital services.<br></br> I also gained technical skills through 
                    electrical installation projects and have expanded my knowledge through professional training 
                    in Life Skills and Film-Making,Digital Forensics, IoT, Data Entry, and Data Science.<br></br>
                    My technical toolkit includes Microsoft Office, MySQL, Adobe Premiere Pro, and basic 
                    programming in HTML, CSS, PHP,  Python, and JavaScript. I am passionate about IT support and 
                    digital transformation.</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-foreground">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <span>+254 740 788 529</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <span className="break-all">patrick.mwiseneza@strathmore.edu</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <span>Rwandan</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Career Objective */}
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-display font-bold mb-4">
                  <span className="gradient-text">Career Objective</span>
                </h3>
                <p className="text-lg text-foreground leading-relaxed">
                  To gain industry experience in Business Information Technology through an 
                  entry-level opportunity while leveraging my knowledge and experience to create 
                  value for the organization.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Experience", value: "4+ Years" },
                  { label: "Projects", value: "4+" },
                  { label: "Certifications", value: "36+" },
                  { label: "Focus", value: "Innovation" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="p-4 rounded-lg bg-card border border-border text-center"
                  >
                    <div className="text-2xl font-display font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
