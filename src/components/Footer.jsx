import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {/* Copyright Text */}
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Amber Shukla. All rights reserved.
      </p>

      {/* Social Links */}
      <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/shuklamber/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors text-muted-foreground"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/sshuklaamberr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors text-muted-foreground"
        >
          GitHub
        </a>
        <a
          href="https://www.instagram.com/shukla_amber_"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors text-muted-foreground"
        >
          Instagram
        </a>
      </div>

      {/* Scroll to Top */}
      <a
        href="#home"
        aria-label="Scroll to top"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};