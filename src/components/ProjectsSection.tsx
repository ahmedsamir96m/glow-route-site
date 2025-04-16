
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A minimal, dark mode enabled portfolio template built with React and Tailwind CSS.",
    tags: ["React", "Tailwind CSS", "Typescript"],
    link: "#",
  },
  {
    title: "E-commerce Dashboard",
    description: "An admin dashboard interface for managing products, orders and customers.",
    tags: ["React", "Chart.js", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Weather Application",
    description: "A beautiful weather application with animated transitions and detailed forecasts.",
    tags: ["React", "API Integration", "Animations"],
    link: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/20">
      <div className="container">
        <AnimatedSection delay={1}>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index + 2}>
              <Card className="border border-border group hover:border-primary/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-start justify-between">
                  {project.title}
                  <a href={project.link} className="text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowUpRight className="h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
