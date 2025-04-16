
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  store?: {
    playStore?: string;
    appStore?: string;
  };
  company: string;
};

const projects: Project[] = [
  {
    title: "Payment Hub",
    description: "Core banking system with services like Payment Processing, Payroll, and more.",
    tags: ["Banking", "Payment Processing", "Core System"],
    company: "EJADA Systems"
  },
  {
    title: "Banking Back-office",
    description: "Dashboard & Admin Panel for Rize MY mobile banking app.",
    tags: ["Admin Panel", "Dashboard", "Banking"],
    company: "EJADA Systems"
  },
  {
    title: "Rize MY",
    description: "Mobile banking application with comprehensive financial services.",
    tags: ["Mobile App", "Banking", "Financial Services"],
    store: {
      playStore: "https://play.google.com/store/apps/details?id=my.com.alrajhibank.wick",
      appStore: "https://apps.apple.com/my/app/rize-my/id1587293861"
    },
    company: "EJADA Systems"
  },
  {
    title: "POS Back-office",
    description: "Management system for point-of-sale operations.",
    tags: ["POS", "Management System", "Back-office"],
    company: "Geidea"
  },
  {
    title: "Merchants Back-office",
    description: "Administrative platform for merchant management.",
    tags: ["Merchant Management", "Back-office", "Admin Platform"],
    company: "Geidea"
  },
  {
    title: "Zerodrytime Portal & Dashboard",
    description: "Customer portal and administrative dashboard for dry cleaning services.",
    tags: ["Portal", "Dashboard", "Service Management"],
    link: "https://www.zerodrytime.com/",
    company: "Syntrum Solutions"
  },
  {
    title: "Syntrum Solutions Portal",
    description: "Corporate portal for Syntrum Solutions.",
    tags: ["Corporate Portal", "Business Platform"],
    company: "Syntrum Solutions"
  },
  {
    title: "Ticketing System",
    description: "Customer support and service ticket management system.",
    tags: ["Support", "Ticketing", "Service Management"],
    company: "Telecom Egypt"
  },
  {
    title: "WIKI",
    description: "Knowledge base and documentation system.",
    tags: ["Knowledge Base", "Documentation", "Information Management"],
    company: "Telecom Egypt"
  },
  {
    title: "HR System",
    description: "Human resources management platform.",
    tags: ["HR", "Management", "Employee Portal"],
    company: "Telecom Egypt"
  },
  {
    title: "Portfolio",
    description: "My personal website showcasing projects and skills.",
    tags: ["Personal Website", "Portfolio", "React"],
    link: "https://ahmedsamirbusiness.com/",
    company: "Personal Project"
  }
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
            <AnimatedSection key={project.title} delay={index % 3 + 2}>
              <Card className="border border-border group hover:border-primary/20 transition-all duration-300 h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle>{project.title}</CardTitle>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        <ArrowUpRight className="h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    )}
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-medium">Company:</span> {project.company}
                  </p>
                  
                  {project.store && (
                    <div className="space-y-2 mb-4">
                      {project.store.playStore && (
                        <a 
                          href={project.store.playStore} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-sm text-primary hover:underline block"
                        >
                          Google Play Store
                        </a>
                      )}
                      {project.store.appStore && (
                        <a 
                          href={project.store.appStore} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-sm text-primary hover:underline block"
                        >
                          Apple App Store
                        </a>
                      )}
                    </div>
                  )}
                </CardContent>
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
