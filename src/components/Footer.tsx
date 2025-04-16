
import { ThemeToggle } from "./ThemeToggle";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-lg font-medium">A.Samir</span>
            <p className="text-sm text-muted-foreground">© {year} All rights reserved</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="https://github.com/ahmedsamir96m" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ahmedsamir96m/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="https://ahmedsamirbusiness.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              Website
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
