
import { ThemeToggle } from "./ThemeToggle";
import { Link } from "react-scroll";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="font-medium text-lg tracking-tight">Portfolio</div>
        <nav className="hidden md:flex gap-6">
          {["about", "projects", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              className="text-muted-foreground hover:text-foreground transition-colors capitalize cursor-pointer"
              activeClass="text-foreground font-medium"
            >
              {section}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
