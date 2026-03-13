import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDown, Download } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,194,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,194,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,194,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-display font-bold mb-4 glow-text-blue"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">MWISENEZA</span>
            <br />
            <span className="text-foreground">PATRICK</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Business IT | Electrician | Innovator | Problem Solver  
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-blue font-semibold text-lg px-8"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold text-lg px-8"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8"
              asChild
            >
              <a href="/Mwiseneza_Patrick_CV.pdf" download="Mwiseneza_Patrick_CV.pdf">
                Download CV
              </a>
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
