
import { AnimatedSection } from "./AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  LayoutGrid,
  Database,
  GitBranch,
  Smartphone,
  FileCode,
  Lightbulb,
  Activity,
  TestTube,
} from "lucide-react";

type SkillCategory = {
  title: string;
  icon: React.ElementType;
  skills: string[];
};

export function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages & Frameworks",
      icon: Code,
      skills: ["React", "React Native", "Next.js", "Angular", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Sass"],
    },
    {
      title: "State Management",
      icon: FileCode,
      skills: ["Redux"],
    },
    {
      title: "Styling & UI Libraries",
      icon: LayoutGrid,
      skills: ["Bootstrap", "TailwindCSS", "MUI"],
    },
    {
      title: "Core Concepts",
      icon: Lightbulb,
      skills: ["Data Structures", "Algorithms", "Design Patterns", "OOP", "Problem Solving"],
    },
    {
      title: "Tools & Practices",
      icon: GitBranch,
      skills: ["Agile Development", "Version Control (Git)", "Unit Testing", "UML"],
    },
    {
      title: "Database & Backend",
      icon: Database,
      skills: ["SQL Fundamentals", "Database Design Principles"],
    },
  ];

  return (
    <div className="mt-12">
      <AnimatedSection delay={4}>
        <h3 className="text-2xl font-bold mb-6">🧠 Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <AnimatedSection key={category.title} delay={index + 5} className="h-full">
                <Card className="h-full bg-secondary/50 hover:bg-secondary/70 transition-colors">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="h-5 w-5 text-primary" />
                      <h4 className="font-medium">{category.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-background/80">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </AnimatedSection>
    </div>
  );
}
