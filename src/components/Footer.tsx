import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Mwiseneza Patrick. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-secondary animate-pulse" />
            <span>and</span>
            <span className="gradient-text font-semibold">Innovation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
